/**
 * Hower Commerce Development API Server (Node.js bridge)
 * Implements the identical API interface as Laravel ContactController for instant local preview.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const STORAGE_DIR = path.join(__dirname, 'storage');
const SUBMISSIONS_FILE = path.join(STORAGE_DIR, 'contact_submissions.json');
const EMAIL_LOG_FILE = path.join(STORAGE_DIR, 'mail_notifications.log');

if (!fs.existsSync(STORAGE_DIR)) {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });
}

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Healthcheck
  if (req.url === '/api/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'Hower Commerce Dev API', time: new Date().toISOString() }));
    return;
  }

  // Contact Form Submission (Laravel POST /api/contact interface)
  if (req.url === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');

        // Honeypot spam check
        if (data.website_hp) {
          res.writeHead(422, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Automated spam submission detected.' }));
          return;
        }

        // Field validation
        if (!data.name || !data.phone || !data.message) {
          res.writeHead(422, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            message: 'Validation failed',
            errors: {
              name: !data.name ? ['Full name is required.'] : [],
              phone: !data.phone ? ['Phone / WhatsApp number is required.'] : [],
              message: !data.message ? ['Message is required.'] : []
            }
          }));
          return;
        }

        const submission = {
          id: Date.now(),
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          course_or_service: data.course_or_service || 'General Inquiry',
          message: data.message,
          source_page: data.source_page || 'Website',
          status: 'new',
          created_at: new Date().toISOString()
        };

        // Persist to JSON storage (simulates DB contact_submissions table)
        let submissions = [];
        if (fs.existsSync(SUBMISSIONS_FILE)) {
          try { submissions = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8') || '[]'); } catch (e) {}
        }
        submissions.push(submission);
        fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));

        // Simulate Mail Notification dispatch
        const mailLog = `[${submission.created_at}] MAIL SENT TO: howercommerce@gmail.com | SUBJECT: [New Lead] ${submission.course_or_service} - ${submission.name} | PHONE: ${submission.phone}\n`;
        fs.appendFileSync(EMAIL_LOG_FILE, mailLog);
        console.log('\x1b[32m%s\x1b[0m', `[Hower API] Lead saved & Mail dispatched: ${submission.name} (${submission.course_or_service})`);

        // Build WhatsApp continuation URL
        const cleanPhone = '923017514281';
        const msg = `Hello Hower Commerce!\n\nName: ${submission.name}\nPhone: ${submission.phone}\nInterest: ${submission.course_or_service}\n\nMessage: ${submission.message}`;
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          id: submission.id,
          message: 'Thank you! Your inquiry has been received. Our counselor will contact you shortly.',
          whatsapp_url: whatsappUrl
        }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Internal server error', error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`[Hower API] Development API running on http://localhost:${PORT}`);
});
