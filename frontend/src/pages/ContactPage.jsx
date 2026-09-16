import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import ContactForm from "../components/forms/ContactForm";
import { updateSeo } from "../utils/seo";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function ContactPage() {
  useEffect(() => {
    updateSeo({
      title: "Contact Us | Hower Commerce Campus",
      description: "Get in touch with Hower Commerce for course admissions, e-commerce consultations, or office directions in Rahim Yar Khan, Pakistan.",
      canonicalUrl: "https://howercommerce.com/contact"
    });
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Commercial+Market+Rahim+Yar+Khan+Punjab+Pakistan";

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Header */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div className="section-badge">
              <span>Campus &amp; Admissions</span>
            </div>
            <h1 style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              Get in Touch with <span>Hower Commerce</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              Whether you are an aspiring student inquiring about upcoming course batches or a business owner seeking dedicated store management, we are here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.85fr 1.15fr",
              gap: "48px",
              alignItems: "flex-start"
            }}
            className="contact-page-grid"
          >
            {/* Left: Contact Info, Office Hours, Interactive Map */}
            <div>
              {/* Contact Information Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
                {/* Phone Card */}
                <div className="card" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "700", color: "var(--color-text-light)" }}>Call Direct</span>
                    <a href="tel:+923017514281" style={{ fontSize: "1.0625rem", fontWeight: "700", color: "var(--color-dark)" }}>+92 301 7514281</a>
                  </div>
                  <a href="tel:+923017514281" className="btn btn-secondary btn-sm">Call</a>
                </div>

                {/* WhatsApp Card */}
                <div className="card" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px", borderColor: "#bbf7d0" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "var(--color-emerald-light)", color: "var(--color-emerald)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MessageSquare size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "700", color: "var(--color-emerald-dark)" }}>Instant Chat</span>
                    <span style={{ fontSize: "1.0625rem", fontWeight: "700", color: "var(--color-dark)" }}>+92 301 7514281</span>
                  </div>
                  <a href={getWhatsAppUrl("Hello Hower Commerce, I would like to inquire about admissions.")} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">Chat</a>
                </div>

                {/* Email Card */}
                <div className="card" style={{ padding: "20px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ display: "block", fontSize: "0.75rem", textTransform: "uppercase", fontWeight: "700", color: "var(--color-text-light)" }}>Official Email</span>
                    <a href="mailto:howercommerce@gmail.com" style={{ fontSize: "0.9375rem", fontWeight: "700", color: "var(--color-dark)", wordBreak: "break-all" }}>howercommerce@gmail.com</a>
                  </div>
                </div>

                {/* Office & Timing Card */}
                <div className="card" style={{ padding: "24px" }}>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "14px" }}>
                    <MapPin size={20} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)", marginBottom: "4px" }}>
                        Physical Office Address
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                        Main Commercial Market, Rahim Yar Khan, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", paddingTop: "14px", borderTop: "1px solid var(--color-border)" }}>
                    <Clock size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)", marginBottom: "2px" }}>
                        Office &amp; Lab Timings
                      </strong>
                      <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                        Monday to Saturday: 9:00 AM – 11:00 PM <br />
                        (Sunday: By Prior Appointment)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--color-border)", boxShadow: "var(--shadow-md)" }}>
                <iframe
                  title="Hower Commerce Rahim Yar Khan Office Location"
                  width="100%"
                  height="260"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Commercial%20Market%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                />
                <div style={{ padding: "12px 16px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--color-border)" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                    Main Commercial Market, Rahim Yar Khan
                  </span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.8125rem", fontWeight: "600", color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: "4px" }}
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Functional Lead Capture Form */}
            <div>
              <ContactForm sourcePage="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .contact-page-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
