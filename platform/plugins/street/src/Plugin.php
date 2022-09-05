<?php

namespace Botble\Street;

use Illuminate\Support\Facades\Schema;
use Botble\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('streets');
        Schema::dropIfExists('streets_translations');
    }
}
