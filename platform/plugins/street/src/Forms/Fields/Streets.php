<?php

namespace Botble\Street\Forms\Fields;

use Kris\LaravelFormBuilder\Fields\FormField;

class Streets extends FormField
{
    /**
     * {@inheritDoc}
     */
    protected function getTemplate()
    {
        
        return 'plugins/street::street';
    }
}
