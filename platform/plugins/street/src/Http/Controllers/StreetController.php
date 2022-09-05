<?php

namespace Botble\Street\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Street\Http\Requests\StreetRequest;
use Botble\Street\Repositories\Interfaces\StreetInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Street\Tables\StreetTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Street\Forms\StreetForm;
use Botble\Base\Forms\FormBuilder;

class StreetController extends BaseController
{
    /**
     * @var StreetInterface
     */
    protected $streetRepository;

    /**
     * @param StreetInterface $streetRepository
     */
    public function __construct(StreetInterface $streetRepository)
    {
        $this->streetRepository = $streetRepository;
    }

    /**
     * @param StreetTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(StreetTable $table)
    {
        page_title()->setTitle(trans('plugins/street::street.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/street::street.create'));

        return $formBuilder->create(StreetForm::class)->renderForm();
    }

    /**
     * @param StreetRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(StreetRequest $request, BaseHttpResponse $response)
    {
        $street = $this->streetRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(STREET_MODULE_SCREEN_NAME, $request, $street));

        return $response
            ->setPreviousUrl(route('street.index'))
            ->setNextUrl(route('street.edit', $street->id))
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
        $street = $this->streetRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $street));

        page_title()->setTitle(trans('plugins/street::street.edit') . ' "' . $street->name . '"');

        return $formBuilder->create(StreetForm::class, ['model' => $street])->renderForm();
    }

    /**
     * @param int $id
     * @param StreetRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, StreetRequest $request, BaseHttpResponse $response)
    {
        $street = $this->streetRepository->findOrFail($id);

        $street->fill($request->input());

        $street = $this->streetRepository->createOrUpdate($street);

        event(new UpdatedContentEvent(STREET_MODULE_SCREEN_NAME, $request, $street));

        return $response
            ->setPreviousUrl(route('street.index'))
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
            $street = $this->streetRepository->findOrFail($id);

            $this->streetRepository->delete($street);

            event(new DeletedContentEvent(STREET_MODULE_SCREEN_NAME, $request, $street));

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
            $street = $this->streetRepository->findOrFail($id);
            $this->streetRepository->delete($street);
            event(new DeletedContentEvent(STREET_MODULE_SCREEN_NAME, $request, $street));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
    public function getstreet( Request $request)
    {
        foreach ($request->all() as $key => $value) {
            $district = [];
            $district = \DB::table('districts')->where('city',$key)->pluck('name','code')->toArray();

            // return view('plugins/street::street',compact('district'))->render();
            return response()->json($district);
        }
    }
    public function getstreet2( Request $request)
    {
        foreach ($request->all() as $key => $value) {
            $district = [];
            $district = \DB::table('streets')->where('district',$key)->pluck('name','code')->toArray();

            // return view('plugins/street::street',compact('district'))->render();
            return response()->json($district);
        }
    }
}
