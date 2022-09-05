<?php

namespace Botble\Street\Forms;

use Botble\Base\Forms\FormAbstract;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Street\Http\Requests\StreetRequest;
use Botble\Street\Models\Street;
use Botble\District\Repositories\Interfaces\DistrictInterface;
use Botble\City\Repositories\Interfaces\CityInterface;
use Botble\Street\Forms\Fields\Maps;
use Botble\Street\Forms\Fields\Streets;
class StreetForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm( )
    {
        $selectedCities = [];
            $selectedCities = app(CityInterface::class)
                ->getModel()
                ->pluck('name','code')
                ->all();
        if (!$this->formHelper->hasCustomField('search')) {
            $this->formHelper->addCustomField('search', Maps::class);
        }
        if (!$this->formHelper->hasCustomField('street')) {
            $this->formHelper->addCustomField('street', Streets::class);
        }
        $this
            ->setupModel(new Street)
            ->setValidatorClass(StreetRequest::class)
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
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'class' => 'form-control select-full',
                ],
                'choices'    => BaseStatusEnum::labels(),
            ])
            ->add('city', 'search', [
                'label'      => 'Tỉnh / Thành Phố',
                'label_attr' => ['class' => 'control-label required'],
                'attr'       => [
                    'placeholder'  => 'Tỉnh / Thành Phố',
                    'data-counter' => 120,
                ],
                'choices'    => $selectedCities,
                'value' => old('selectedCities', $selectedCities),
            ])
            ->setBreakFieldPoint('status');
    }
}
