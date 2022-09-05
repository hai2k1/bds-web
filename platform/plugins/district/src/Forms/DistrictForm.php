<?php

namespace Botble\District\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\District\Http\Requests\DistrictRequest;
use Botble\District\Models\District;
use Botble\City\Repositories\Interfaces\CityInterface;
use Botble\City\Forms\CityForm;
class DistrictForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {
        $selectedCities = [];
            $selectedCities = app(CityInterface::class)
                ->getModel()
                ->pluck('name','id')
                ->all();
        $this
            ->setupModel(new District)
            ->setValidatorClass(DistrictRequest::class)
            ->withCustomFields()
            ->add('name', 'text', [
                'label'      => trans('core/base::forms.name'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => trans('core/base::forms.name_placeholder'),
                    'data-counter' => 120,
                ],
            ])
            ->add('code', 'text', [
                'label'      => 'code',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'code',
                    'data-counter' => 120,
                ],
            ])
            ->add('city', 'select', [
                'label'      => 'Tỉnh / Thành phố',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Tỉnh / Thành phố',
                    'data-counter' => 120,
                ],
                'choices'    => $selectedCities,
            ])
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => BaseStatusEnum::labels(),
            ])
            ->setBreakFieldPoint('status');
    }
}
