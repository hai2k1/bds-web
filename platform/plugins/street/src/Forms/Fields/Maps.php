<?php

namespace Botble\Street\Forms\Fields;

use Kris\LaravelFormBuilder\Fields\FormField;

class Maps extends FormField
{
    /**
     * {@inheritDoc}
     */
    protected function getTemplate()
    {
        
        return 'plugins/street::search';
    }
}
