<?php

namespace Botble\Calendar\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Calendar\Http\Requests\CalendarRequest;
use Botble\Calendar\Repositories\Interfaces\CalendarInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Calendar\Tables\CalendarTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Calendar\Forms\CalendarForm;
use Botble\Base\Forms\FormBuilder;

class CalendarController extends BaseController
{
    /**
     * @var CalendarInterface
     */
    protected $calendarRepository;

    /**
     * @param CalendarInterface $calendarRepository
     */
    public function __construct(CalendarInterface $calendarRepository)
    {
        $this->calendarRepository = $calendarRepository;
    }

    /**
     * @param CalendarTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(CalendarTable $table)
    {
        page_title()->setTitle(trans('plugins/calendar::calendar.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/calendar::calendar.create'));

        return $formBuilder->create(CalendarForm::class)->renderForm();
    }

    /**
     * @param CalendarRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(CalendarRequest $request, BaseHttpResponse $response)
    {
        $calendar = $this->calendarRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(CALENDAR_MODULE_SCREEN_NAME, $request, $calendar));

        return $response
            ->setPreviousUrl(route('calendar.index'))
            ->setNextUrl(route('calendar.edit', $calendar->id))
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
        $calendar = $this->calendarRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $calendar));

        page_title()->setTitle(trans('plugins/calendar::calendar.edit') . ' "' . $calendar->name . '"');

        return $formBuilder->create(CalendarForm::class, ['model' => $calendar])->renderForm();
    }

    /**
     * @param int $id
     * @param CalendarRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, CalendarRequest $request, BaseHttpResponse $response)
    {
        $calendar = $this->calendarRepository->findOrFail($id);

        $calendar->fill($request->input());

        $calendar = $this->calendarRepository->createOrUpdate($calendar);

        event(new UpdatedContentEvent(CALENDAR_MODULE_SCREEN_NAME, $request, $calendar));

        return $response
            ->setPreviousUrl(route('calendar.index'))
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
            $calendar = $this->calendarRepository->findOrFail($id);

            $this->calendarRepository->delete($calendar);

            event(new DeletedContentEvent(CALENDAR_MODULE_SCREEN_NAME, $request, $calendar));

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
            $calendar = $this->calendarRepository->findOrFail($id);
            $this->calendarRepository->delete($calendar);
            event(new DeletedContentEvent(CALENDAR_MODULE_SCREEN_NAME, $request, $calendar));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}
