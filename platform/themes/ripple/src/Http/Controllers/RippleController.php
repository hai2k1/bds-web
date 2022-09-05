<?php

namespace Theme\Ripple\Http\Controllers;

use Botble\Base\Http\Responses\BaseHttpResponse;
use Botble\Blog\Repositories\Interfaces\PostInterface;
use Botble\Theme\Http\Controllers\PublicController;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;
use Theme;

class RippleController extends PublicController
{
    /**
     * {@inheritDoc}
     */
    public function getIndex()
    {
        return parent::getIndex();
    }

    /**
     * {@inheritDoc}
     */
    public function getView(string $key = null)
    {
        return parent::getView($key);
    }

    /**
     * {@inheritDoc}
     */
    public function getSiteMap()
    {
        return parent::getSiteMap();
    }

    /**
     * Search post
     *
     * @bodyParam q string required The search keyword.
     *
     * @group Blog
     *
     * @param Request $request
     * @param PostInterface $postRepository
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     *
     * @throws FileNotFoundException
     */
    public function getSearch(Request $request, PostInterface $postRepository, BaseHttpResponse $response)
    {
        $query = $request->input('q');

        if (!empty($query)) {
            $posts = $postRepository->getSearch($query);

            $data = [
                'items' => Theme::partial('search', compact('posts')),
                'query' => $query,
                'count' => $posts->count(),
            ];

            if ($data['count'] > 0) {
                return $response->setData(apply_filters(BASE_FILTER_SET_DATA_SEARCH, $data, 10, 1));
            }
        }

        return $response
            ->setError()
            ->setMessage(__('No results found, please try with different keywords.'));
    }
    public function getpost(Request $request, PostInterface $postRepository, BaseHttpResponse $response)
    {
        if($request->input('is_featured')){
            $is_featured = 1;
        }
        $posts = $postRepository->createOrUpdate([
            
            'name' => $request->input('content'),
            'author_id' =>1,
            'is_featured' => $is_featured ??  0 ,
            'content' => $request->input('content'),
            'address' => $request->input('address'),
            'image' => $request->input('image'),
            'status' => $request->input('status'),
            'description' => $request->input('description'),
            'city' => $request->input('city') ?? 0,
            'street' => $request->input('street') ?? 0,
            'dictrict' => $request->input('district') ?? 0,
        ]);
        return redirect()->back();
    }
}

