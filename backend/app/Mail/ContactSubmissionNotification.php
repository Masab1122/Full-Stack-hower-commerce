<?php

namespace App\Mail;

use App\Models\ContactSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactSubmissionNotification extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public ContactSubmission $submission;

    /**
     * Create a new message instance.
     */
    public function __construct(ContactSubmission $submission)
    {
        $this->submission = $submission;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $interest = $this->submission->course_or_service ?: 'General Inquiry';
        return new Envelope(
            subject: "[New Lead] {$interest} - {$this->submission->name}",
            replyTo: $this->submission->email ? [$this->submission->email] : []
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-notification',
            with: [
                'submission' => $this->submission,
                'whatsappLink' => "https://wa.me/" . preg_replace('/[^0-9]/', '', $this->submission->phone),
            ]
        );
    }
}
