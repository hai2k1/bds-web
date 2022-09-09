<?php

Route::group(['namespace' => 'Botble\Wards\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'wards', 'as' => 'wards.'], function () {
            Route::resource('', 'WardsController')->parameters(['' => 'wards']);
            Route::delete('items/destroy', [
                'as'         => 'deletes',
                'uses'       => 'WardsController@deletes',
                'permission' => 'wards.destroy',
            ]);
        });
    });

});
