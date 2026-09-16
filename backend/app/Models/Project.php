<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'client_type',
        'challenge',
        'solution',
        'work_completed',
        'technologies',
        'results',
        'screenshot_path',
        'order',
    ];

    protected $casts = [
        'work_completed' => 'array',
        'technologies' => 'array',
    ];
}
