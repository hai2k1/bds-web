<?php

namespace Botble\District\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\District\Http\Requests\DistrictRequest;
use Botble\District\Repositories\Interfaces\DistrictInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\District\Tables\DistrictTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\District\Forms\DistrictForm;
use Botble\Base\Forms\FormBuilder;

class DistrictController extends BaseController
{
    /**
     * @var DistrictInterface
     */
    protected $districtRepository;

    /**
     * @param DistrictInterface $districtRepository
     */
    public function __construct(DistrictInterface $districtRepository)
    {
        $this->districtRepository = $districtRepository;
    }

    /**
     * @param DistrictTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(DistrictTable $table)
    {
        page_title()->setTitle(trans('plugins/district::district.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/district::district.create'));

        return $formBuilder->create(DistrictForm::class)->renderForm();
    }

    /**
     * @param DistrictRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(DistrictRequest $request, BaseHttpResponse $response)
    {
        $district = $this->districtRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(DISTRICT_MODULE_SCREEN_NAME, $request, $district));

        return $response
            ->setPreviousUrl(route('district.index'))
            ->setNextUrl(route('district.edit', $district->id))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param int $id
     * @param Request $request
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder, Request $request)
    {
        $district = $this->districtRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $district));

        page_title()->setTitle(trans('plugins/district::district.edit') . ' "' . $district->name . '"');

        return $formBuilder->create(DistrictForm::class, ['model' => $district])->renderForm();
    }

    /**
     * @param int $id
     * @param DistrictRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, DistrictRequest $request, BaseHttpResponse $response)
    {
        $district = $this->districtRepository->findOrFail($id);

        $district->fill($request->input());

        $district = $this->districtRepository->createOrUpdate($district);

        event(new UpdatedContentEvent(DISTRICT_MODULE_SCREEN_NAME, $request, $district));

        return $response
            ->setPreviousUrl(route('district.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }

    /**
     * @param int $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function destroy(Request $request, $id, BaseHttpResponse $response)
    {
        try {
            $district = $this->districtRepository->findOrFail($id);

            $this->districtRepository->delete($district);

            event(new DeletedContentEvent(DISTRICT_MODULE_SCREEN_NAME, $request, $district));

            return $response->setMessage(trans('core/base::notices.delete_success_message'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Exception
     */
    public function deletes(Request $request, BaseHttpResponse $response)
    {
        $ids = $request->input('ids');
        if (empty($ids)) {
            return $response
                ->setError()
                ->setMessage(trans('core/base::notices.no_select'));
        }

        foreach ($ids as $id) {
            $district = $this->districtRepository->findOrFail($id);
            $this->districtRepository->delete($district);
            event(new DeletedContentEvent(DISTRICT_MODULE_SCREEN_NAME, $request, $district));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}
