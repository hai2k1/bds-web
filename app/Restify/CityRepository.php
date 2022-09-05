<?php

namespace App\Restify;

use App\Models\User;
use Binaryk\LaravelRestify\Fields\Field;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;
use Botble\City\Models\City;

class CityRepository extends Repository
{
    public static $model = City::class;

    public function fields(RestifyRequest $request): array
    {
        return [
            Field::make('name')->required(),
            Field::make('code')->required(),
        ];
    }
    public function show(RestifyRequest $request, $repositoryId)
    {
        return response($this->model());
    }
}
