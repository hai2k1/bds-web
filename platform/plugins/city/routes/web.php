<?php

Route::group(['namespace' => 'Botble\City\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'cities', 'as' => 'city.'], function () {
            Route::resource('', 'CityController')->parameters(['' => 'city']);
            Route::delete('items/destroy', [
                'as'         => 'deletes',
                'uses'       => 'CityController@deletes',
                'permission' => 'city.destroy',
            ]);
            Route::get('getCity', [
                'as'         => 'getCity',
                'uses'       => 'CityController@getCity',
            ]);
        });
    });

});
