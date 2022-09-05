<?php

Route::group(['namespace' => 'Botble\District\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'districts', 'as' => 'district.'], function () {
            Route::resource('', 'DistrictController')->parameters(['' => 'district']);
            Route::delete('items/destroy', [
                'as'         => 'deletes',
                'uses'       => 'DistrictController@deletes',
                'permission' => 'district.destroy',
            ]);
        });
    });

});
