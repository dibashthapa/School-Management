<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\User\Assignment;
use App\Http\Controllers\User\Routines;
use App\Http\Controllers\User\Student;
use App\Http\Controllers\User\Teacher;
use Illuminate\Support\Facades\Route;

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


Route::get('/user/teachers', ([Teacher::class, 'show']));
Route::get('/user/students', ([Student::class, 'show']));
Route::get('/user/assignments', ([Assignment::class, 'get']));
Route::get('/user/routine', ([Routines::class, 'get']));
Route::put('/user/students', ([Student::class, 'create']));
Route::group([
    'prefix' => 'auth',
], function ($router) {

    Route::post('/login', ([AuthController::class, 'login']));
    Route::post('/me', ([AuthController::class, 'me']));

});
