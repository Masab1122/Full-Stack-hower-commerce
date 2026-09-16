<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Lead Inquiry - Hower Commerce</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 30px; }
        .card { background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header { background-color: #0f172a; color: #ffffff; padding: 24px 30px; text-align: left; }
        .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
        .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 4px; display: block; letter-spacing: 0.05em; }
        .value { font-size: 15px; color: #0f172a; font-weight: 600; }
        .message-box { background-color: #f1f5f9; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #334155; }
        .btn-whatsapp { display: inline-block; background-color: #10b981; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 700; font-size: 14px; margin-top: 10px; }
        .footer { background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 30px; font-size: 12px; color: #94a3b8; text-align: center; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h1>New Lead Submission</h1>
            <p>Hower Commerce Academy &bull; Rahim Yar Khan</p>
        </div>

        <div class="content">
            <div class="field">
                <span class="label">Full Name</span>
                <span class="value">{{ $submission->name }}</span>
            </div>

            <div class="field">
                <span class="label">Phone / WhatsApp</span>
                <span class="value">{{ $submission->phone }}</span>
            </div>

            @if($submission->email)
            <div class="field">
                <span class="label">Email Address</span>
                <span class="value">{{ $submission->email }}</span>
            </div>
            @endif

            <div class="field">
                <span class="label">Selected Program / Service</span>
                <span class="value" style="color: #2563eb;">{{ $submission->course_or_service ?: 'General Inquiry' }}</span>
            </div>

            <div class="field">
                <span class="label">Inquiry Message</span>
                <div class="message-box">
                    {!! nl2br(e($submission->message)) !!}
                </div>
            </div>

            <div class="field" style="margin-top: 28px;">
                <span class="label">Quick Student Follow-up</span>
                <a href="{{ $whatsappLink }}" class="btn-whatsapp" target="_blank">
                    Reply to {{ $submission->name }} on WhatsApp &rarr;
                </a>
            </div>
        </div>

        <div class="footer">
            Submitted from {{ $submission->source_page ?: 'Website' }} on {{ $submission->created_at->format('M d, Y \a\t h:i A') }} (PKT).
        </div>
    </div>
</body>
</html>
