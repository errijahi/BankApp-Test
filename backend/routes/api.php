<?php

declare(strict_types=1);

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

Route::get('/balance', [ApiController::class, 'balance']);
Route::get('/average-deposit', [ApiController::class, 'averageDeposit']);
Route::get('/average-withdraw', [ApiController::class, 'averageWithdraw']);
Route::get('/transactions', [ApiController::class, 'transactions']);
Route::get('/user', [ApiController::class, 'user']);
