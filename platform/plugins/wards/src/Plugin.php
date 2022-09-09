<?php

namespace Botble\Wards;

use Illuminate\Support\Facades\Schema;
use Botble\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('wards');
        Schema::dropIfExists('wards_translations');
    }
}
