const http = require('http');

function post(url, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, data: JSON.parse(body || '{}') });
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING API TESTS ---');

  // Test 1: Valid submission
  console.log('Test 1: Valid Submission...');
  const res1 = await post('http://localhost:8000/api/contact', {
    name: 'Ahmad Raza',
    phone: '+92 301 7514281',
    email: 'ahmad@example.com',
    course_or_service: 'Shopify Store Development',
    message: 'I want to enroll in the upcoming physical batch in Rahim Yar Khan.',
    source_page: '/courses/shopify-dropshipping'
  });
  console.log('Status:', res1.status);
  console.log('Response:', res1.data);
  if (res1.status === 201 && res1.data.success && res1.data.whatsapp_url) {
    console.log('✓ Test 1 Passed: Lead stored and WhatsApp continuation URL returned.\n');
  } else {
    console.error('✗ Test 1 Failed');
  }

  // Test 2: Missing required fields
  console.log('Test 2: Validation on Missing Fields...');
  const res2 = await post('http://localhost:8000/api/contact', {
    name: '',
    phone: '',
    message: ''
  });
  console.log('Status:', res2.status);
  console.log('Response:', res2.data);
  if (res2.status === 422 && res2.data.errors) {
    console.log('✓ Test 2 Passed: 422 Unprocessable Entity returned with error messages.\n');
  } else {
    console.error('✗ Test 2 Failed');
  }

  // Test 3: Anti-spam honeypot
  console.log('Test 3: Anti-Spam Honeypot Trap...');
  const res3 = await post('http://localhost:8000/api/contact', {
    name: 'Bot Spam',
    phone: '+1234567890',
    message: 'Crypto investment offer',
    website_hp: 'http://spam-link.com'
  });
  console.log('Status:', res3.status);
  console.log('Response:', res3.data);
  if (res3.status === 422 && res3.data.message.includes('spam')) {
    console.log('✓ Test 3 Passed: Bot honeypot was rejected.\n');
  } else {
    console.error('✗ Test 3 Failed');
  }

  console.log('--- ALL API TESTS COMPLETED ---');
}

runTests().catch(console.error);
