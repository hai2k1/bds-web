<?php

namespace App\Models;

use Botble\Base\Enums\BaseStatusEnum;
use Botble\City\Models\City;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;
    protected $table = 'districts';

    /**
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'code',
        'city',
        'status',
    ];
    public function city(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(City::class,'city','code');
    }
    public function wards(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->HasMany(Wards::class,'district','code');
    }
}
