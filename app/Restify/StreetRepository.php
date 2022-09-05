<?php

namespace App\Restify;

use Binaryk\LaravelRestify\Fields\BelongsTo;
use Binaryk\LaravelRestify\Fields\Field;
use Binaryk\LaravelRestify\Fields\HasOne;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;
use Botble\Street\Models\Street;

class StreetRepository extends Repository
{
    public static $model =  Street::class;

    public function fields(RestifyRequest $request): array
    {
        return [
            Field::make('name')->required(),
            Field::make('code')->required(),
            Field::make('district')->required(),
        ];
    }
    public static function related(): array
    {
        return [
            'DistrictRelationship' => belongsTo::make('district',DistrictRepository::class)
        ];
    }
}
