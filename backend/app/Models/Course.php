<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'level',
        'duration',
        'format',
        'tag',
        'badge_color',
        'icon',
        'short_description',
        'overview',
        'curriculum',
        'outcomes',
        'tools',
        'prerequisites',
        'who_is_it_for',
        'is_featured',
        'order',
        'seo_title',
        'seo_description',
    ];

    protected $casts = [
        'curriculum' => 'array',
        'outcomes' => 'array',
        'tools' => 'array',
        'who_is_it_for' => 'array',
        'is_featured' => 'boolean',
    ];

    public function faqs()
    {
        return $this->hasMany(Faq::class, 'course_id');
    }
}
