<?php

use App\Http\Controllers\DocumentationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/', 'home')->name('home');
Route::view('/documents', 'documents')->name('documents');

// only for vue
Route::view('app/{opt?}', 'app')->where('opt', '.*');
Route::get('documentation/{opt?}', [DocumentationController::class, 'index']);
