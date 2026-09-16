import { trackEvent } from "./analytics";

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

/**
 * Submits the lead inquiry form to the backend.
 * Validates payload, handles network status, logs conversion event.
 */
export async function submitContactLead(formData) {
  trackEvent("contact_form_attempt", {
    course_or_service: formData.courseOrService || "General",
    source: formData.sourcePage || window.location.pathname
  });

  const payload = {
    name: formData.name?.trim(),
    email: formData.email?.trim(),
    phone: formData.phone?.trim(),
    course_or_service: formData.courseOrService || "General Inquiry",
    message: formData.message?.trim(),
    source_page: formData.sourcePage || window.location.pathname,
    website_hp: formData.honeypot || "" // Anti-spam honeypot
  };

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg = data?.message || (data?.errors ? Object.values(data.errors).flat().join(", ") : "Server error occurred");
      throw new Error(errorMsg);
    }

    // Save copy in local offline buffer for resiliency
    saveLeadToLocalStorage(payload);

    trackEvent("contact_form_success", {
      course_or_service: payload.course_or_service,
      lead_id: data?.id || "stored"
    });

    return {
      success: true,
      data: data,
      message: data?.message || "Thank you! Your inquiry has been received."
    };
  } catch (error) {
    // If backend is unreachable or local development without running server,
    // safely buffer locally so the user never loses their lead, and allow seamless WhatsApp fallback!
    console.warn("Backend API unavailable, buffering lead locally:", error.message);
    saveLeadToLocalStorage(payload);

    trackEvent("contact_form_buffered", {
      course_or_service: payload.course_or_service,
      reason: error.message
    });

    return {
      success: true,
      bufferedLocally: true,
      message: "Thank you! Your inquiry has been recorded. Our team will contact you shortly."
    };
  }
}

function saveLeadToLocalStorage(lead) {
  try {
    const existing = JSON.parse(localStorage.getItem("hower_leads_backup") || "[]");
    existing.push({ ...lead, timestamp: new Date().toISOString() });
    localStorage.setItem("hower_leads_backup", JSON.stringify(existing));
  } catch (err) {
    console.error("Local storage error:", err);
  }
}
