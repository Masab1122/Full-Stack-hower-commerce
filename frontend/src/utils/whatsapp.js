const OFFICIAL_WHATSAPP_NUMBER = "923017514281";

/**
 * Builds a direct WhatsApp conversation URL with an encoded message.
 * NEVER claims message has been sent automatically; opens user's WhatsApp client directly.
 */
export function getWhatsAppUrl(customMessage) {
  const defaultText = "Hello Hower Commerce, I would like to inquire about your professional training courses and e-commerce services.";
  const message = customMessage || defaultText;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates a pre-filled WhatsApp message for a specific course.
 */
export function getCourseWhatsAppUrl(courseTitle) {
  const message = `Hello Hower Commerce!\n\nI am interested in enrolling in the "${courseTitle}" course.\n\nPlease share the upcoming batch schedule, admission criteria, and fee details.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates a pre-filled WhatsApp message for a specific B2B service.
 */
export function getServiceWhatsAppUrl(serviceTitle) {
  const message = `Hello Hower Commerce!\n\nI am interested in your "${serviceTitle}" service for my e-commerce business.\n\nI would like to discuss our requirements and schedule an initial consultation.`;
  return getWhatsAppUrl(message);
}

/**
 * Generates a pre-filled WhatsApp message from the filled contact form.
 */
export function getFormWhatsAppUrl({ name, phone, email, courseOrService, message }) {
  const text = `Hello Hower Commerce!\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || "Not specified"}\n*Interest:* ${courseOrService || "General Inquiry"}\n\n*Message:*\n${message}`;
  return getWhatsAppUrl(text);
}
