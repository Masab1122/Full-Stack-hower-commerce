<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\JsonResponse;

class ServiceController extends Controller
{
    public function index(): JsonResponse
    {
        $services = Service::all();
        return response()->json([
            'success' => true,
            'data' => $services,
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $service = Service::where('slug', $slug)->firstOrFail();
        return response()->json([
            'success' => true,
            'data' => $service,
        ]);
    }
}
