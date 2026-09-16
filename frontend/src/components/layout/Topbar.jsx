import React from "react";
import { Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Topbar() {
  return (
    <div className="topbar" style={{
      backgroundColor: "var(--color-dark)",
      color: "#cbd5e1",
      fontSize: "0.8125rem",
      borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      padding: "8px 0"
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px"
      }}>
        {/* Left: Contact Details */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="tel:+923017514281"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#cbd5e1" }}
            aria-label="Call Hower Commerce"
          >
            <Phone size={14} style={{ color: "#60a5fa" }} />
            <span>+92 301 7514281</span>
          </a>

          <a
            href="mailto:howercommerce@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#cbd5e1" }}
            aria-label="Email Hower Commerce"
          >
            <Mail size={14} style={{ color: "#60a5fa" }} />
            <span>howercommerce@gmail.com</span>
          </a>
        </div>

        {/* Right: Working hours & WhatsApp quick badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#94a3b8" }}>
            <Clock size={14} style={{ color: "#60a5fa" }} />
            <span>Mon - Sat: 9:00 AM - 11:00 PM</span>
          </div>

          <a
            href="https://wa.me/923017514281"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              color: "#34d399",
              fontWeight: "600",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              padding: "3px 8px",
              borderRadius: "4px"
            }}
          >
            <MessageSquare size={13} />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
}
