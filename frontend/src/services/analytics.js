/**
 * Clean analytics abstraction for logging conversion milestones.
 * Ready for Google Tag Manager, GA4, Meta Pixel, or custom logging.
 */
export function trackEvent(eventName, eventParams = {}) {
  const payload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
    ...eventParams
  };

  // Push to dataLayer if present (Google Tag Manager)
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }

  // Push to gtag if present
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  // Log to console in development mode
  if (import.meta.env.DEV) {
    console.info(`[Analytics Event] ${eventName}:`, payload);
  }
}
