<?php

namespace Botble\Location\Models;

use Botble\Base\Models\BaseModel;

class LocationTranslation extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'locations_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'locations_id',
        'name',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
