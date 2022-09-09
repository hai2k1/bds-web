<?php

Route::group(['namespace' => 'Botble\Projects\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'projects', 'as' => 'projects.'], function () {
            Route::resource('', 'ProjectsController')->parameters(['' => 'projects']);
            Route::delete('items/destroy', [
                'as'         => 'deletes',
                'uses'       => 'ProjectsController@deletes',
                'permission' => 'projects.destroy',
            ]);
        });
    });

});
