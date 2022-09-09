<?php

namespace Botble\Wards\Providers;

use Botble\Wards\Models\Wards;
use Illuminate\Support\ServiceProvider;
use Botble\Wards\Repositories\Caches\WardsCacheDecorator;
use Botble\Wards\Repositories\Eloquent\WardsRepository;
use Botble\Wards\Repositories\Interfaces\WardsInterface;
use Illuminate\Support\Facades\Event;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Routing\Events\RouteMatched;

class WardsServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(WardsInterface::class, function () {
            return new WardsCacheDecorator(new WardsRepository(new Wards));
        });

        $this->setNamespace('plugins/wards')->loadHelpers();
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
                \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(Wards::class, [
                    'name',
                ]);
            } else {
                // Use language v1
                $this->app->booted(function () {
                    \Language::registerModule([Wards::class]);
                });
            }
        }

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-wards',
                'priority'    => 5,
                'parent_id'   => null,
                'name'        => 'plugins/wards::wards.name',
                'icon'        => 'fa fa-list',
                'url'         => route('wards.index'),
                'permissions' => ['wards.index'],
            ]);
        });
    }
}
