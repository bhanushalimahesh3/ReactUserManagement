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

/*Route::get('/', function () {
    
    return view('signin');
})->middleware(['guest']);*/

Route::middleware('guest')->group(function(){
    Route::view('/', 'signin');
    Route::view('/signin', 'signin')->name('login');
    Route::view('signup', 'signup');
    Route::post('/signup', 'SignupController@store');
    Route::post('/signin', 'SignupController@authenticate');
});




Route::middleware('auth')->group(function(){
    Route::view('dashboard', 'dashboard');  
    Route::get('/logout', function () {
        \Auth::logout();
        return response()->json(['status' => 'success', 'message' => 'Logged out successfully', 'data' => '']);  
    });
    Route::get('/users', 'UserController@index');
});



/* Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth']); */

/* Route::get('/logout', function () {
    \Auth::logout();
    return response()->json(['status' => 'success', 'message' => 'Logged out successfully', 'data' => '']);  
})->middleware(['auth']); */

//Route::get('/users', 'UserController@index')->middleware(['auth']);
