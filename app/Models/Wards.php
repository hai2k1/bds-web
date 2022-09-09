<?php

namespace App\Models;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\Base\Traits\EnumCastable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wards extends Model
{
    use HasFactory;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'wards';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'code',
        'district',
        'status',
    ];

    public function  District(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->BelongsTo(District::class,'district','code');
    }
}
