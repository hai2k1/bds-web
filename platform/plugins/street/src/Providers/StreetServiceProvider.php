<?php

namespace Botble\Street\Providers;

use Botble\Street\Models\Street;
use Illuminate\Support\ServiceProvider;
use Botble\Street\Repositories\Caches\StreetCacheDecorator;
use Botble\Street\Repositories\Eloquent\StreetRepository;
use Botble\Street\Repositories\Interfaces\StreetInterface;
use Illuminate\Support\Facades\Event;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Routing\Events\RouteMatched;

class StreetServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(StreetInterface::class, function () {
            return new StreetCacheDecorator(new StreetRepository(new Street));
        });

        $this->setNamespace('plugins/street')->loadHelpers();
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
                \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(Street::class, [
                    'name',
                ]);
            } else {
                // Use language v1
                $this->app->booted(function () {
                    \Language::registerModule([Street::class]);
                });
            }
        }

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-street',
                'priority'    => 5,
                'parent_id'   => 'cms-plugins-location',
                'name'        => 'plugins/street::street.name',
                'icon'        => 'fa fa-list',
                'url'         => route('street.index'),
                'permissions' => ['street.index'],
            ]);
        });
    }
}
