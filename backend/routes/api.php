<?php

use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Hower Commerce API Routes
|--------------------------------------------------------------------------
*/

// Healthcheck
Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'service' => 'Hower Commerce API',
        'timestamp' => now()->toIso8601String(),
    ]);
});

// Lead Generation & Contact Submission (Rate Limited: 10 per minute)
Route::middleware('throttle:10,1')->post('/contact', [ContactController::class, 'store']);

// Public Catalog Endpoints (Rate Limited: 60 per minute)
Route::middleware('throttle:60,1')->group(function () {
    // Courses
    Route::get('/courses', [CourseController::class, 'index']);
    Route::get('/courses/{slug}', [CourseController::class, 'show']);

    // Services
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{slug}', [ServiceController::class, 'show']);

    // Projects
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{slug}', [ProjectController::class, 'show']);
});
