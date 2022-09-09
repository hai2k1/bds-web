<?php

namespace Botble\Wards\Models;

use Botble\Base\Models\BaseModel;

class WardsTranslation extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'wards_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'wards_id',
        'name',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
