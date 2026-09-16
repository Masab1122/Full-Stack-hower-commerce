import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { COURSES } from "../../data/courses";
import { SERVICES } from "../../data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-dark)",
        color: "#ffffff",
        paddingTop: "72px",
        paddingBottom: "32px",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1.3fr",
            gap: "48px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand & Purpose */}
          <div>
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
                textDecoration: "none"
              }}
            >
              <img
                src="/brand-logo.jpg"
                alt="Hower Commerce"
                style={{ height: "48px", width: "auto", borderRadius: "8px" }}
              />
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    color: "#ffffff",
                    display: "block",
                    lineHeight: 1
                  }}
                >
                  Hower<span style={{ color: "var(--color-primary)" }}>Commerce</span>
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.6875rem",
                    fontWeight: "700",
                    letterSpacing: "0.08em",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    marginTop: "3px"
                  }}
                >
                  Academy &amp; Digital Solutions
                </span>
              </div>
            </Link>

            <p style={{ color: "#94a3b8", fontSize: "0.9375rem", lineHeight: 1.65, marginBottom: "24px" }}>
              Practical digital skills institute and e-commerce services agency based in Rahim Yar Khan.
              Empowering students, freelancers, and entrepreneurs to build sustainable digital careers and online businesses.
            </p>

            {/* Social Links with Accessibility Labels */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://web.facebook.com/raffy.haider.2025"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hower Commerce Facebook"
                className="social-btn"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/raffyhaider047/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hower Commerce Instagram"
                className="social-btn"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@raffyhaider?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hower Commerce TikTok"
                className="social-btn"
              >
                TikTok
              </a>
              <a
                href="https://www.linkedin.com/in/raffy-haider-8b8378385/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hower Commerce LinkedIn"
                className="social-btn"
              >
                LinkedIn
              </a>
              <a
                href="https://wa.me/923017514281"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Hower Commerce on WhatsApp"
                className="social-btn whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Col 2: Training Courses */}
          <div>
            <h3 style={{ fontSize: "1rem", color: "#ffffff", fontWeight: "700", marginBottom: "20px" }}>
              Professional Courses
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {COURSES.slice(0, 5).map((course) => (
                <li key={course.slug}>
                  <Link
                    to={`/courses/${course.slug}`}
                    style={{ color: "#94a3b8", fontSize: "0.875rem", transition: "color var(--transition-fast)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/courses"
                  style={{ color: "var(--color-primary)", fontSize: "0.875rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  <span>View All 9 Programs</span>
                  <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: E-Commerce Services */}
          <div>
            <h3 style={{ fontSize: "1rem", color: "#ffffff", fontWeight: "700", marginBottom: "20px" }}>
              Business Services
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    style={{ color: "#94a3b8", fontSize: "0.875rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/projects"
                  style={{ color: "var(--color-primary)", fontSize: "0.875rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}
                >
                  <span>Client Portfolio</span>
                  <ArrowRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div>
            <h3 style={{ fontSize: "1rem", color: "#ffffff", fontWeight: "700", marginBottom: "20px" }}>
              Campus &amp; Inquiries
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.875rem", color: "#94a3b8" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <MapPin size={18} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                <span>Main Commercial Market, Rahim Yar Khan, Punjab, Pakistan</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Phone size={16} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                <a href="tel:+923017514281" style={{ color: "#ffffff" }}>+92 301 7514281</a>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Mail size={16} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                <a href="mailto:howercommerce@gmail.com" style={{ color: "#ffffff" }}>howercommerce@gmail.com</a>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <MessageSquare size={16} style={{ color: "#34d399", flexShrink: 0, marginTop: "2px" }} />
                <a href="https://wa.me/923017514281" target="_blank" rel="noopener noreferrer" style={{ color: "#34d399", fontWeight: "600" }}>
                  Direct WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Real Legal Pages & Copyright */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "24px",
            fontSize: "0.8125rem",
            color: "#64748b"
          }}
        >
          <p style={{ margin: 0 }}>
            &copy; {currentYear} Hower Commerce Academy. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/privacy-policy" style={{ color: "#94a3b8" }}>Privacy Policy</Link>
            <Link to="/terms-and-conditions" style={{ color: "#94a3b8" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>

      <style>{`
        .social-btn {
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          background-color: rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .social-btn:hover {
          background-color: var(--color-primary);
          color: #ffffff;
        }
        .social-btn.whatsapp:hover {
          background-color: var(--color-emerald);
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
