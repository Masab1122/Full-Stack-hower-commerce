import React from "react";
import { Quote, CheckCircle2, Award, Users } from "lucide-react";
import { TESTIMONIALS, SOCIAL_PROOF_ITEMS } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Social Proof &amp; Verification</span>
          </div>
          <h2 className="section-title">
            Genuine Experience &amp; <span>Student Standards</span>
          </h2>
          <p className="section-subtitle">
            We prioritize authentic results over exaggerated marketing. Here is how we maintain real training quality.
          </p>
        </div>

        {/* Real Proof Pillars */}
        <div className="grid-3" style={{ gap: "28px", marginBottom: "56px" }}>
          {SOCIAL_PROOF_ITEMS.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                backgroundColor: "#f8fafc",
                border: "1px solid var(--color-border)",
                padding: "28px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-emerald)" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--color-primary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {item.tag}
                </span>
              </div>
              <h3 style={{ fontSize: "1.125rem", marginBottom: "10px", color: "var(--color-dark)" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scalable Testimonial Cards (With Honest Status Indicators) */}
        <div className="grid-3" style={{ gap: "28px" }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "32px",
                border: "1px dashed #cbd5e1"
              }}
            >
              <Quote size={32} style={{ color: "var(--color-primary-subtle)", marginBottom: "16px" }} />

              <p style={{ fontSize: "0.9375rem", fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "24px", flex: 1, lineHeight: 1.6 }}>
                &ldquo;{t.testimonial}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid var(--color-border)" }}>
                <div>
                  <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)" }}>
                    {t.name}
                  </strong>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-text-light)" }}>
                    {t.role} &bull; {t.course}
                  </span>
                </div>
                <span className="badge badge-amber" style={{ fontSize: "0.6875rem" }}>
                  {t.verificationStatus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
