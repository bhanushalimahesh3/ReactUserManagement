<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function(){
    Route::view('/', 'guest');
    Route::view('/signin', 'guest')->name('login');
    Route::view('/signup', 'guest');
    Route::post('/signup', 'SignupController@store');
    Route::post('/signin', 'SignupController@authenticate');
});

Route::middleware('auth')->group(function(){
    Route::view('/dashboard', 'auth');  
    Route::get('/logout', function () {
        \Auth::logout();
        return response()->json(['status' => 'success', 'message' => 'Logged out successfully', 'data' => '']);  
    });
    Route::view('/users/profile/{id?}', 'auth');
    Route::post('/users/profile/{id?}', 'UserController@getProfile')->where(['id' => '[0-9]+']);
    Route::put('/users/profile', 'UserController@update');
    Route::view('/users/children', 'auth');
    Route::post('/users/children', 'UserController@store');
    Route::get('/users', 'UserController@index');
    Route::delete('/users/{id}', 'UserController@delete')->where(['id' => '[0-9]*']);
});
