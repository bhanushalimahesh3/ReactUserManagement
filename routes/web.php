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

Route::get('/', function () {
    return view('signin');
})->middleware(['guest']);

Route::get('/signin', function () {
    return view('signin');
})->name('login')->middleware(['guest']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth']);

Route::get('/logout', function () {
    \Auth::logout();
    return redirect('/signin');
})->middleware(['auth']);

Route::get('/users', 'UserController@index')->middleware(['auth']);

Route::get('/signup', function () {
	return view('signup');
});

Route::post('/signup', 'SignupController@store');

Route::post('/signin', 'SignupController@authenticate');
