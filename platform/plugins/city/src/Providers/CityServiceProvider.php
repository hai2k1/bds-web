<?php

namespace Botble\City\Providers;

use Botble\City\Models\City;
use Illuminate\Support\ServiceProvider;
use Botble\City\Repositories\Caches\CityCacheDecorator;
use Botble\City\Repositories\Eloquent\CityRepository;
use Botble\City\Repositories\Interfaces\CityInterface;
use Illuminate\Support\Facades\Event;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Routing\Events\RouteMatched;

class CityServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(CityInterface::class, function () {
            return new CityCacheDecorator(new CityRepository(new City));
        });

        $this->setNamespace('plugins/city')->loadHelpers();
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
                \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(City::class, [
                    'name',
                ]);
            } else {
                // Use language v1
                $this->app->booted(function () {
                    \Language::registerModule([City::class]);
                });
            }
        }

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-city',
                'priority'    => 5,
                'parent_id'   => 'cms-plugins-location',
                'name'        => 'plugins/city::city.name',
                'icon'        => 'fa fa-list',
                'url'         => route('city.index'),
                'permissions' => ['city.index'],
            ]);
        });
    }
}
