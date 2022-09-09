<?php

namespace Botble\Wards\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Wards\Http\Requests\WardsRequest;
use Botble\Wards\Repositories\Interfaces\WardsInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Wards\Tables\WardsTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Wards\Forms\WardsForm;
use Botble\Base\Forms\FormBuilder;

class WardsController extends BaseController
{
    /**
     * @var WardsInterface
     */
    protected $wardsRepository;

    /**
     * @param WardsInterface $wardsRepository
     */
    public function __construct(WardsInterface $wardsRepository)
    {
        $this->wardsRepository = $wardsRepository;
    }

    /**
     * @param WardsTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(WardsTable $table)
    {
        page_title()->setTitle(trans('plugins/wards::wards.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/wards::wards.create'));

        return $formBuilder->create(WardsForm::class)->renderForm();
    }

    /**
     * @param WardsRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(WardsRequest $request, BaseHttpResponse $response)
    {
        $wards = $this->wardsRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(WARDS_MODULE_SCREEN_NAME, $request, $wards));

        return $response
            ->setPreviousUrl(route('wards.index'))
            ->setNextUrl(route('wards.edit', $wards->id))
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
        $wards = $this->wardsRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $wards));

        page_title()->setTitle(trans('plugins/wards::wards.edit') . ' "' . $wards->name . '"');

        return $formBuilder->create(WardsForm::class, ['model' => $wards])->renderForm();
    }

    /**
     * @param int $id
     * @param WardsRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, WardsRequest $request, BaseHttpResponse $response)
    {
        $wards = $this->wardsRepository->findOrFail($id);

        $wards->fill($request->input());

        $wards = $this->wardsRepository->createOrUpdate($wards);

        event(new UpdatedContentEvent(WARDS_MODULE_SCREEN_NAME, $request, $wards));

        return $response
            ->setPreviousUrl(route('wards.index'))
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
            $wards = $this->wardsRepository->findOrFail($id);

            $this->wardsRepository->delete($wards);

            event(new DeletedContentEvent(WARDS_MODULE_SCREEN_NAME, $request, $wards));

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
            $wards = $this->wardsRepository->findOrFail($id);
            $this->wardsRepository->delete($wards);
            event(new DeletedContentEvent(WARDS_MODULE_SCREEN_NAME, $request, $wards));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}
