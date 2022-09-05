<?php

namespace Botble\Street\Models;

use Botble\Base\Models\BaseModel;

class StreetTranslation extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'streets_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'streets_id',
        'name',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
