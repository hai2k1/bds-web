<?php

namespace App\Restify;

use App\Models\District;
use App\Models\Wards;
use Binaryk\LaravelRestify\Fields\Field;
use Binaryk\LaravelRestify\Fields\HasMany;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;


class DistrictRepository extends Repository
{
    public static $model = District::class;

    public function fields(RestifyRequest $request): array
    {
        return [
            Field::make('name')->required(),
            Field::make('code')->required(),
            Field::make('city')->required(),
        ];
    }

    public static function related(): array
    {
        return [
          'wards'=>  HasMany::make('wards', WardsRepository::class),
        ];
    }
}
