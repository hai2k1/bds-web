<?php

namespace Botble\Calendar\Providers;

use Botble\Calendar\Models\Calendar;
use Illuminate\Support\ServiceProvider;
use Botble\Calendar\Repositories\Caches\CalendarCacheDecorator;
use Botble\Calendar\Repositories\Eloquent\CalendarRepository;
use Botble\Calendar\Repositories\Interfaces\CalendarInterface;
use Illuminate\Support\Facades\Event;
use Botble\Base\Traits\LoadAndPublishDataTrait;
use Illuminate\Routing\Events\RouteMatched;

class CalendarServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(CalendarInterface::class, function () {
            return new CalendarCacheDecorator(new CalendarRepository(new Calendar));
        });

        $this->setNamespace('plugins/calendar')->loadHelpers();
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
                \Botble\LanguageAdvanced\Supports\LanguageAdvancedManager::registerModule(Calendar::class, [
                    'name',
                ]);
            } else {
                // Use language v1
                $this->app->booted(function () {
                    \Language::registerModule([Calendar::class]);
                });
            }
        }

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-calendar',
                'priority'    => 5,
                'parent_id'   => null,
                'name'        => 'plugins/calendar::calendar.name',
                'icon'        => 'fa fa-list',
                'url'         => route('calendar.index'),
                'permissions' => ['calendar.index'],
            ]);
        });
    }
}
