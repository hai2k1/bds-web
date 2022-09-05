<?php

namespace App\Restify;

use Binaryk\LaravelRestify\Fields\Field;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;
use Botble\Blog\Models\Post;

class PostRepository extends Repository
{
    public static $model = Post::class;
    public static $public = true;
    public function fields(RestifyRequest $request): array
    {
        return [
        ];
    }
}
