<?php

namespace Botble\Projects\Http\Controllers;

use Botble\Base\Events\BeforeEditContentEvent;
use Botble\Projects\Http\Requests\ProjectsRequest;
use Botble\Projects\Repositories\Interfaces\ProjectsInterface;
use Botble\Base\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use Exception;
use Botble\Projects\Tables\ProjectsTable;
use Botble\Base\Events\CreatedContentEvent;
use Botble\Base\Events\DeletedContentEvent;
use Botble\Base\Events\UpdatedContentEvent;
use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Projects\Forms\ProjectsForm;
use Botble\Base\Forms\FormBuilder;

class ProjectsController extends BaseController
{
    /**
     * @var ProjectsInterface
     */
    protected $projectsRepository;

    /**
     * @param ProjectsInterface $projectsRepository
     */
    public function __construct(ProjectsInterface $projectsRepository)
    {
        $this->projectsRepository = $projectsRepository;
    }

    /**
     * @param ProjectsTable $table
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(ProjectsTable $table)
    {
        page_title()->setTitle(trans('plugins/projects::projects.name'));

        return $table->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/projects::projects.create'));

        return $formBuilder->create(ProjectsForm::class)->renderForm();
    }

    /**
     * @param ProjectsRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(ProjectsRequest $request, BaseHttpResponse $response)
    {
        $projects = $this->projectsRepository->createOrUpdate($request->input());

        event(new CreatedContentEvent(PROJECTS_MODULE_SCREEN_NAME, $request, $projects));

        return $response
            ->setPreviousUrl(route('projects.index'))
            ->setNextUrl(route('projects.edit', $projects->id))
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
        $projects = $this->projectsRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $projects));

        page_title()->setTitle(trans('plugins/projects::projects.edit') . ' "' . $projects->name . '"');

        return $formBuilder->create(ProjectsForm::class, ['model' => $projects])->renderForm();
    }

    /**
     * @param int $id
     * @param ProjectsRequest $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, ProjectsRequest $request, BaseHttpResponse $response)
    {
        $projects = $this->projectsRepository->findOrFail($id);

        $projects->fill($request->input());

        $projects = $this->projectsRepository->createOrUpdate($projects);

        event(new UpdatedContentEvent(PROJECTS_MODULE_SCREEN_NAME, $request, $projects));

        return $response
            ->setPreviousUrl(route('projects.index'))
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
            $projects = $this->projectsRepository->findOrFail($id);

            $this->projectsRepository->delete($projects);

            event(new DeletedContentEvent(PROJECTS_MODULE_SCREEN_NAME, $request, $projects));

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
            $projects = $this->projectsRepository->findOrFail($id);
            $this->projectsRepository->delete($projects);
            event(new DeletedContentEvent(PROJECTS_MODULE_SCREEN_NAME, $request, $projects));
        }

        return $response->setMessage(trans('core/base::notices.delete_success_message'));
    }
}
