<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'short_description',
        'problem',
        'solution',
        'what_we_handle',
        'process',
        'deliverables',
        'icon',
        'badge_color',
        'seo_title',
        'seo_description',
    ];

    protected $casts = [
        'what_we_handle' => 'array',
        'process' => 'array',
        'deliverables' => 'array',
    ];
}
