<?php

namespace Botble\Calendar\Models;

use Botble\Base\Models\BaseModel;

class CalendarTranslation extends BaseModel
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'calendars_translations';

    /**
     * @var array
     */
    protected $fillable = [
        'lang_code',
        'calendars_id',
        'name',
    ];

    /**
     * @var bool
     */
    public $timestamps = false;
}
