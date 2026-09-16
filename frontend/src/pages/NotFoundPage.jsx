import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, BookOpen, MessageSquare } from "lucide-react";
import { updateSeo } from "../utils/seo";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function NotFoundPage() {
  useEffect(() => {
    updateSeo({
      title: "404 - Page Not Found",
      description: "The page you are looking for does not exist."
    });
  }, []);

  return (
    <div className="container section" style={{ textAlign: "center", padding: "80px 20px" }}>
      <div
        style={{
          fontSize: "6rem",
          fontWeight: "900",
          fontFamily: "var(--font-heading)",
          color: "var(--color-primary)",
          lineHeight: 1,
          marginBottom: "16px"
        }}
      >
        404
      </div>
      <h1 style={{ fontSize: "2rem", marginBottom: "16px", color: "var(--color-dark)" }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: "1.0625rem", color: "var(--color-text-muted)", maxWidth: "480px", margin: "0 auto 36px" }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} />
          <span>Return Home</span>
        </Link>
        <Link to="/courses" className="btn btn-secondary">
          <BookOpen size={16} />
          <span>Browse Courses</span>
        </Link>
        <a
          href={getWhatsAppUrl("Hello Hower Commerce, I encountered an issue finding a page on your website.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <MessageSquare size={16} />
          <span>Need Help? WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
