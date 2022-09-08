<?php

namespace Botble\Calendar;

use Illuminate\Support\Facades\Schema;
use Botble\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('calendars');
        Schema::dropIfExists('calendars_translations');
    }
}
