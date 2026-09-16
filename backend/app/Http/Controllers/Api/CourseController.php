<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\JsonResponse;

class CourseController extends Controller
{
    public function index(): JsonResponse
    {
        $courses = Course::orderBy('order')->get();
        return response()->json([
            'success' => true,
            'data' => $courses,
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $course = Course::with('faqs')->where('slug', $slug)->firstOrFail();
        return response()->json([
            'success' => true,
            'data' => $course,
        ]);
    }
}
