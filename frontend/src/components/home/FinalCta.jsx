import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, PhoneCall, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "../../utils/whatsapp";

export default function FinalCta() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-dark)",
        color: "#ffffff",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <div
            className="section-badge"
            style={{
              backgroundColor: "rgba(37, 99, 235, 0.2)",
              color: "#93c5fd",
              borderColor: "rgba(37, 99, 235, 0.4)",
              marginBottom: "20px"
            }}
          >
            <span>Take The Next Step</span>
          </div>

          <h2
            style={{
              fontSize: "2.75rem",
              lineHeight: 1.2,
              marginBottom: "20px",
              color: "#ffffff"
            }}
            className="final-cta-title"
          >
            Start Your Journey in <span style={{ color: "var(--color-primary)" }}>E-Commerce &amp; Tech</span> Today
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#94a3b8",
              marginBottom: "36px",
              lineHeight: 1.65
            }}
          >
            Join the upcoming batch at our Rahim Yar Khan campus or online from anywhere.
            Connect with our team to find the right learning path for your career goals.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "32px"
            }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              <span>Enroll / Apply Now</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={getWhatsAppUrl("Hello Hower Commerce! I am ready to enroll and would like to confirm my registration.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={19} />
              <span>Instant WhatsApp Chat</span>
            </a>

            <a
              href="tel:+923017514281"
              className="btn btn-secondary btn-lg"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#ffffff", borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <PhoneCall size={18} />
              <span>+92 301 7514281</span>
            </a>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.875rem",
              color: "#94a3b8"
            }}
          >
            <MapPin size={15} style={{ color: "#60a5fa" }} />
            <span>Main Commercial Market, Rahim Yar Khan, Punjab, Pakistan</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .final-cta-title {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
