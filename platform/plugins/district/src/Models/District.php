<?php

namespace Botble\District\Models;

use Botble\Base\Traits\EnumCastable;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Models\BaseModel;
use Botble\City\Models\City;
use Botble\Wards\Models\Wards;

class District extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'districts';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'code',
        'city',
         'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];

}
