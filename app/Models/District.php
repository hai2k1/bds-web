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
    protected $primaryKey ='id';
    public function city() {
        return $this->belongsTo(City::class,'city');
    }
    public function wards(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->HasMany(Wards::class,'district','id');
    }
}
