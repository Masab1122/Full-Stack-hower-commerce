import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Phone, Mail, MessageSquare, ArrowRight, MapPin } from "lucide-react";

export default function MobileMenu({ isOpen, onClose, navLinks, currentPath }) {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex"
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(4px)",
          transition: "opacity var(--transition-normal)"
        }}
      />

      {/* Drawer Container */}
      <div
        style={{
          position: "relative",
          marginLeft: "auto",
          width: "100%",
          maxWidth: "340px",
          height: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "var(--shadow-xl)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          zIndex: 10000,
          padding: "24px"
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--color-border)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src="/brand-logo.jpg"
              alt="Hower Commerce"
              style={{ height: "36px", width: "auto", borderRadius: "6px" }}
            />
            <span style={{ fontWeight: "800", fontSize: "1.125rem", color: "var(--color-dark)" }}>
              Hower<span style={{ color: "var(--color-primary)" }}>Commerce</span>
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "transparent",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              padding: "6px",
              cursor: "pointer",
              color: "var(--color-text-muted)"
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: "24px 0", flex: 1 }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 14px",
                      borderRadius: "var(--radius-md)",
                      fontSize: "1rem",
                      fontWeight: isActive ? "700" : "600",
                      color: isActive ? "var(--color-primary)" : "var(--color-dark)",
                      backgroundColor: isActive ? "var(--color-primary-light)" : "transparent"
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={16} style={{ color: isActive ? "var(--color-primary)" : "#94a3b8" }} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "20px", borderTop: "1px solid var(--color-border)" }}>
          <Link
            to="/contact"
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            <span>Enroll / Inquire Now</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href="https://wa.me/923017514281"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%" }}
          >
            <MessageSquare size={18} />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Quick Contact Info */}
          <div style={{ marginTop: "16px", fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Phone size={14} style={{ color: "var(--color-primary)" }} />
              <a href="tel:+923017514281" style={{ color: "var(--color-dark)", fontWeight: "600" }}>+92 301 7514281</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <Mail size={14} style={{ color: "var(--color-primary)" }} />
              <span>howercommerce@gmail.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <MapPin size={14} style={{ color: "var(--color-primary)" }} />
              <span>Rahim Yar Khan, Punjab, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
