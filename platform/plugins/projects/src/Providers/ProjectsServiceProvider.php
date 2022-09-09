<?php

namespace Botble\Projects\Providers;

use Botble\Projects\Models\Projects;
use Illuminate\Support\ServiceProvider;
use Botble\Projects\Repositories\Caches\ProjectsCacheDecorator;
use Botble\Projects\Repositories\Eloquent\ProjectsRepository;
use Botble\Projects\Repositories\Interfaces\ProjectsInterface;
use Illuminate\Support\Facades\Event;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Routing\Events\RouteMatched;

class ProjectsServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(ProjectsInterface::class, function () {
            return new ProjectsCacheDecorator(new ProjectsRepository(new Projects));
        });

        $this->setNamespace('plugins/projects')->loadHelpers();
    }

    public function boot()
    {
        $this
            ->loadAndPublishConfigurations(['permissions'])
            ->loadMigrations()
            ->loadAndPublishTranslations()
            ->loadAndPublishViews()
            ->loadRoutes(['web']);

        if (defined('LANGUAGE_MODULE_SCREEN_NAME')) {
            if (defined('LANGUAGE_ADVANCED_MODULE_SCREEN_NAME')) {
                // Use language v2
                \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(Projects::class, [
                    'name',
                ]);
            } else {
                // Use language v1
                $this->app->booted(function () {
                    \Language::registerModule([Projects::class]);
                });
            }
        }

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-projects',
                'priority'    => 5,
                'parent_id'   => null,
                'name'        => 'plugins/projects::projects.name',
                'icon'        => 'fa fa-list',
                'url'         => route('projects.index'),
                'permissions' => ['projects.index'],
            ]);
        });
    }
}
