import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, CheckCircle2, Award, MapPin } from "lucide-react";
import { FOUNDER } from "../../data/team";
import { getWhatsAppUrl } from "../../utils/whatsapp";

export default function FounderSection() {
  return (
    <section className="section" id="founder">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="founder-grid"
        >
          {/* Founder Photo Container */}
          <div style={{ position: "relative", textAlign: "center" }}>
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                boxShadow: "var(--shadow-xl)",
                border: "1px solid var(--color-border)",
                backgroundColor: "#ffffff",
                display: "inline-block",
                maxWidth: "380px",
                width: "100%"
              }}
            >
              <img
                src="/founder-profile.jpg"
                alt="Raffy Haider - Founder & CEO Hower Commerce"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover"
                }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div style={{ padding: "16px 20px", backgroundColor: "#ffffff", borderTop: "1px solid var(--color-border)" }}>
                <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--color-dark)" }}>
                  {FOUNDER.name}
                </strong>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-primary)", fontWeight: "600" }}>
                  {FOUNDER.role} &bull; Hower Commerce
                </span>
              </div>
            </div>
          </div>

          {/* Founder Content */}
          <div>
            <div className="section-badge">
              <span>Leadership &amp; Vision</span>
            </div>

            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              Meet Our Founder &amp; CEO, <br />
              <span>{FOUNDER.name}</span>
            </h2>

            <p style={{ fontSize: "1rem", color: "var(--color-primary)", fontWeight: "600", marginBottom: "20px" }}>
              {FOUNDER.title}
            </p>

            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--color-text-muted)", marginBottom: "20px" }}>
              {FOUNDER.bio}
            </p>

            <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-text-muted)", marginBottom: "32px" }}>
              "Our goal is not simply to hand out certificates. We exist to equip individuals with practical, accountable digital skills that enable them to generate verified freelance income, build e-commerce brands, or manage international client accounts with confidence."
            </p>

            {/* Core Values */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "36px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: "600", color: "var(--color-dark)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Transparent Teaching</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: "600", color: "var(--color-dark)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Live Account Demonstrations</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: "600", color: "var(--color-dark)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Local Campus Accessibility</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: "600", color: "var(--color-dark)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Ongoing Career Guidance</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link to="/about" className="btn btn-primary">
                <span>About Hower Commerce</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href={getWhatsAppUrl("Hello Raffy Haider, I would like to schedule a course counseling session.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={17} />
                <span>Connect with Founder</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
