<?php

namespace Botble\Location\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Location\Http\Requests\LocationRequest;
use Botble\Location\Repositories\Interfaces\LocationInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Location\Tables\LocationTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Location\Forms\LocationForm;
use Botble\Base\Forms\FormBuilder;

class LocationController extends BaseController
{
    /**
     * @var LocationInterface
     */
    protected $locationRepository;

    /**
     * @param LocationInterface $locationRepository
     */
    public function __construct(LocationInterface $locationRepository)
    {
        $this->locationRepository = $locationRepository;
    }

    /**
     * @param LocationTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(LocationTable $table)
    {
        page_title()->setTitle(trans('plugins/location::location.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/location::location.create'));

        return $formBuilder->create(LocationForm::class)->renderForm();
    }

    /**
     * @param LocationRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(LocationRequest $request, BaseHttpResponse $response)
    {
        $location = $this->locationRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(LOCATION_MODULE_SCREEN_NAME, $request, $location));

        return $response
            ->setPreviousUrl(route('location.index'))
            ->setNextUrl(route('location.edit', $location->id))
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
        $location = $this->locationRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $location));

        page_title()->setTitle(trans('plugins/location::location.edit') . ' "' . $location->name . '"');

        return $formBuilder->create(LocationForm::class, ['model' => $location])->renderForm();
    }

    /**
     * @param int $id
     * @param LocationRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, LocationRequest $request, BaseHttpResponse $response)
    {
        $location = $this->locationRepository->findOrFail($id);

        $location->fill($request->input());

        $location = $this->locationRepository->createOrUpdate($location);

        event(new UpdatedContentEvent(LOCATION_MODULE_SCREEN_NAME, $request, $location));

        return $response
            ->setPreviousUrl(route('location.index'))
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
            $location = $this->locationRepository->findOrFail($id);

            $this->locationRepository->delete($location);

            event(new DeletedContentEvent(LOCATION_MODULE_SCREEN_NAME, $request, $location));

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
            $location = $this->locationRepository->findOrFail($id);
            $this->locationRepository->delete($location);
            event(new DeletedContentEvent(LOCATION_MODULE_SCREEN_NAME, $request, $location));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}
