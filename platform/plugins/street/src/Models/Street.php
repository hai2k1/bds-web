<?php

namespace Botble\Street\Models;

use Botble\Base\Traits\EnumCastable;
use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Models\BaseModel;
use Botble\District\Models\District;

class Street extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'streets';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'code',
        'district',
        // 'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];
    public function district(){
        return $this->belongsTo(District::class, 'district','id');
    }
}
