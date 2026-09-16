<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class ContactFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Anti-spam Honeypot evaluation before validation.
     */
    protected function prepareForValidation(): void
    {
        // If the honeypot field is filled, silently block the bot
        if (!empty($this->input('website_hp'))) {
            throw ValidationException::withMessages([
                'website_hp' => 'Automated spam submission detected.',
            ]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'phone' => ['required', 'string', 'regex:/^[0-9+\s()-]{7,20}$/'],
            'email' => ['nullable', 'email', 'max:150'],
            'course_or_service' => ['nullable', 'string', 'max:150'],
            'message' => ['required', 'string', 'min:5', 'max:3000'],
            'source_page' => ['nullable', 'string', 'max:255'],
        ];
    }

    /**
     * Custom validation error messages.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Please provide your full name.',
            'phone.required' => 'Phone / WhatsApp number is required for follow-up.',
            'phone.regex' => 'Please provide a valid phone or WhatsApp number.',
            'email.email' => 'Please provide a valid email address.',
            'message.required' => 'Please write your message or course inquiry.',
            'message.min' => 'Message must be at least 5 characters.',
        ];
    }
}
