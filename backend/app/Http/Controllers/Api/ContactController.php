<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactSubmissionNotification;
use App\Models\ContactSubmission;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Store incoming lead submission, persist to database, dispatch notification email.
     */
    public function store(ContactFormRequest $request): JsonResponse
    {
        $validated = $request->validated();

        // 1. Persist lead submission to database
        $submission = ContactSubmission::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'email' => $validated['email'] ?? null,
            'course_or_service' => $validated['course_or_service'] ?? null,
            'message' => $validated['message'],
            'source_page' => $validated['source_page'] ?? null,
            'status' => ContactSubmission::STATUS_NEW,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // 2. Dispatch email notification to official business email
        $recipient = config('mail.admin_email', env('HOWER_COMMERCE_ADMIN_EMAIL', 'howercommerce@gmail.com'));

        try {
            if ($recipient) {
                Mail::to($recipient)->send(new ContactSubmissionNotification($submission));
            }
        } catch (\Exception $e) {
            // Log mail transport error, but do not fail the customer's response
            Log::error('Lead notification email dispatch failed: ' . $e->getMessage(), [
                'submission_id' => $submission->id,
            ]);
        }

        // 3. Generate pre-filled WhatsApp continuation link
        $cleanPhone = '923017514281';
        $whatsAppMessage = "Hello Hower Commerce!\n\nName: {$submission->name}\nPhone: {$submission->phone}\nInterest: " . ($submission->course_or_service ?: 'General Inquiry') . "\n\nMessage: {$submission->message}";
        $whatsAppUrl = "https://wa.me/{$cleanPhone}?text=" . urlencode($whatsAppMessage);

        return response()->json([
            'success' => true,
            'id' => $submission->id,
            'message' => 'Thank you! Your inquiry has been received. Our counselor will contact you shortly.',
            'whatsapp_url' => $whatsAppUrl,
        ], 201);
    }
}
