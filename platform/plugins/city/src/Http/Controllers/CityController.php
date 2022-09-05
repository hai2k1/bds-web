<?php

namespace Botble\City\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\City\Http\Requests\CityRequest;
use Botble\City\Repositories\Interfaces\CityInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\City\Tables\CityTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\City\Forms\CityForm;
use Botble\Base\Forms\FormBuilder;

class CityController extends BaseController
{
    /**
     * @var CityInterface
     */
    protected $cityRepository;

    /**
     * @param CityInterface $cityRepository
     */
    public function __construct(CityInterface $cityRepository)
    {
        $this->cityRepository = $cityRepository;
    }

    /**
     * @param CityTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(CityTable $table)
    {
        page_title()->setTitle(trans('plugins/city::city.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/city::city.create'));

        return $formBuilder->create(CityForm::class)->renderForm();
    }

    /**
     * @param CityRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(CityRequest $request, BaseHttpResponse $response)
    {
        $city = $this->cityRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(CITY_MODULE_SCREEN_NAME, $request, $city));

        return $response
            ->setPreviousUrl(route('city.index'))
            ->setNextUrl(route('city.edit', $city->id))
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
        $city = $this->cityRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $city));

        page_title()->setTitle(trans('plugins/city::city.edit') . ' "' . $city->name . '"');

        return $formBuilder->create(CityForm::class, ['model' => $city])->renderForm();
    }

    /**
     * @param int $id
     * @param CityRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, CityRequest $request, BaseHttpResponse $response)
    {
        $city = $this->cityRepository->findOrFail($id);

        $city->fill($request->input());

        $city = $this->cityRepository->createOrUpdate($city);

        event(new UpdatedContentEvent(CITY_MODULE_SCREEN_NAME, $request, $city));

        return $response
            ->setPreviousUrl(route('city.index'))
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
            $city = $this->cityRepository->findOrFail($id);

            $this->cityRepository->delete($city);

            event(new DeletedContentEvent(CITY_MODULE_SCREEN_NAME, $request, $city));

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
            $city = $this->cityRepository->findOrFail($id);
            $this->cityRepository->delete($city);
            event(new DeletedContentEvent(CITY_MODULE_SCREEN_NAME, $request, $city));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
    public function getCity(Request $request)
    {
        $city = $this->cityRepository->getModel()->all();
        
        return $city;
    }
}
