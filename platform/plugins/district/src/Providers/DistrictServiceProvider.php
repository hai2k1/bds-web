<?php

namespace Botble\District\Providers;

use Botble\District\Models\District;
use Illuminate\Support\ServiceProvider;
use Botble\District\Repositories\Caches\DistrictCacheDecorator;
use Botble\District\Repositories\Eloquent\DistrictRepository;
use Botble\District\Repositories\Interfaces\DistrictInterface;
use Illuminate\Support\Facades\Event;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Routing\Events\RouteMatched;

class DistrictServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(DistrictInterface::class, function () {
            return new DistrictCacheDecorator(new DistrictRepository(new District));
        });

        $this->setNamespace('plugins/district')->loadHelpers();
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
                \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(District::class, [
                    'name',
                ]);
            } else {
                // Use language v1
                $this->app->booted(function () {
                    \Language::registerModule([District::class]);
                });
            }
        }

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-district',
                'priority'    => 5,
                'parent_id'   => 'cms-plugins-location',
                'name'        => 'plugins/district::district.name',
                'icon'        => 'fa fa-list',
                'url'         => route('district.index'),
                'permissions' => ['district.index'],
            ]);
        });
    }
}
