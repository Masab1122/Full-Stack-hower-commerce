<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'role',
        'company',
        'course_or_service',
        'testimonial',
        'rating',
        'is_verified',
        'verification_status',
        'is_placeholder',
        'profile_image',
    ];

    protected $casts = [
        'is_verified' => 'boolean',
        'is_placeholder' => 'boolean',
        'rating' => 'integer',
    ];
}
