import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Phone, Send } from "lucide-react";
import { getWhatsAppUrl } from "../../utils/whatsapp";

export default function StickyMobileActions() {
  return (
    <aside
      className="sticky-mobile-bar"
      aria-label="Quick contact actions"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backgroundColor: "#ffffff",
        borderTop: "1px solid var(--color-border)",
        boxShadow: "0 -4px 12px rgba(15, 23, 42, 0.08)",
        padding: "10px 16px",
        display: "none"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr",
          gap: "10px",
          maxWidth: "480px",
          margin: "0 auto"
        }}
      >
        <a
          href={getWhatsAppUrl("Hello Hower Commerce, I would like to inquire about course admissions and services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ padding: "10px 8px", fontSize: "0.8125rem", gap: "6px" }}
        >
          <MessageSquare size={16} />
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:+923017514281"
          className="btn btn-secondary btn-sm"
          style={{ padding: "10px 8px", fontSize: "0.8125rem", gap: "6px" }}
        >
          <Phone size={15} style={{ color: "var(--color-primary)" }} />
          <span>Call Us</span>
        </a>

        <Link
          to="/contact"
          className="btn btn-primary btn-sm"
          style={{ padding: "10px 8px", fontSize: "0.8125rem", gap: "6px" }}
        >
          <Send size={14} />
          <span>Enquire</span>
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sticky-mobile-bar {
            display: block !important;
          }
          /* Add bottom padding to body so sticky bar does not cover footer */
          body {
            padding-bottom: 64px;
          }
        }
      `}</style>
    </aside>
  );
}
