<?php

namespace App\Restify;

use App\Models\User;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;

class UserRepository extends Repository
{
    public static  $model = User::class;

    public function fields(RestifyRequest $request): array
    {
        return [
            field('first_name')->rules('required'),
            field('last_name')->rules('required'),
            field('avatar_id')->rules('required'),
            field('super_user')->rules('required'),
            field('manage_supers')->rules('required'),
            field('phone')->rules('required'),

            field('email')->storingRules('required', 'unique:users')->messages([
                'required' => 'This field is required.',
            ]),
        ];
    }
}
