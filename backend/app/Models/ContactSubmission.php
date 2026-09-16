<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactSubmission extends Model
{
    use HasFactory;

    protected $table = 'contact_submissions';

    const STATUS_NEW = 'new';
    const STATUS_CONTACTED = 'contacted';
    const STATUS_QUALIFIED = 'qualified';
    const STATUS_CONVERTED = 'converted';
    const STATUS_CLOSED = 'closed';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'course_or_service',
        'message',
        'source_page',
        'status',
        'ip_address',
        'user_agent',
        'contacted_at',
        'admin_notes',
    ];

    protected $casts = [
        'contacted_at' => 'datetime',
    ];

    /**
     * Scope query to only new leads awaiting review.
     */
    public function scopeNewLeads($query)
    {
        return $query->where('status', self::STATUS_NEW);
    }
}
