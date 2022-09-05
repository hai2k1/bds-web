<?php

Route::group(['namespace' => 'Botble\Street\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'streets', 'as' => 'street.'], function () {
            Route::resource('', 'StreetController')->parameters(['' => 'street']);
            Route::delete('items/destroy', [
                'as'         => 'deletes',
                'uses'       => 'StreetController@deletes',
                'permission' => 'street.destroy',
            ]);
            Route::get('getstreet', [
                'as'         => 'getstreet',
                'uses'       => 'StreetController@getstreet',
                'permission' => 'street.getstreet',
            ]);
            Route::get('getstreet2', [
                'as'         => 'getstreet2',
                'uses'       => 'StreetController@getstreet2',
                'permission' => 'street.getstreet2',
            ]);
        });
    });

});
