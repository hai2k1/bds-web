<?php

namespace App\Restify;

use Binaryk\LaravelRestify\Fields\Field;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;
use Botble\District\Models\District;

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
}
