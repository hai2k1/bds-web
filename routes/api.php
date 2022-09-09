<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::restifyAuth();
Route::get('test',function (){
    $user= \App\Models\Wards::with('ListDistrict')->get();
    return response()->json($user);
});
