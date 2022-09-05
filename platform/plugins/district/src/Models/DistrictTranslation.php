<?php

namespace Botble\District\Models;

use Botble\Base\Models\BaseModel;

class DistrictTranslation extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'districts_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'districts_id',
        'name',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
