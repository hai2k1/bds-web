<?php

Route::group(['namespace' => 'Botble\Calendar\Http\Controllers', 'middleware' => ['web', 'core']], function () {

    Route::group(['prefix' => BaseHelper::getAdminPrefix(), 'middleware' => 'auth'], function () {

        Route::group(['prefix' => 'calendars', 'as' => 'calendar.'], function () {
            Route::resource('', 'CalendarController')->parameters(['' => 'calendar']);
            Route::delete('items/destroy', [
                'as'         => 'deletes',
                'uses'       => 'CalendarController@deletes',
                'permission' => 'calendar.destroy',
            ]);
        });
    });

});
