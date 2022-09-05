<?php

namespace Botble\District;

use Illuminate\Support\Facades\Schema;
use Botble\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('districts');
        Schema::dropIfExists('districts_translations');
    }
}
