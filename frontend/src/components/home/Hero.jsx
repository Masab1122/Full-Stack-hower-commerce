import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, CheckCircle2, ShoppingBag, Store, Megaphone, Terminal } from "lucide-react";
import { getWhatsAppUrl } from "../../utils/whatsapp";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "64px",
        paddingBottom: "80px",
        background: "radial-gradient(circle at 85% 25%, #dbeafe 0%, transparent 40%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "56px",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left: Headline & Action CTAs */}
          <div>
            <div
              className="section-badge"
              style={{ marginBottom: "20px" }}
            >
              <span>Practical Digital Training &amp; E-Commerce</span>
            </div>

            <h1
              style={{
                fontSize: "3.25rem",
                lineHeight: 1.15,
                marginBottom: "20px",
                color: "var(--color-dark)",
                letterSpacing: "-0.03em"
              }}
              className="hero-title"
            >
              Build Your Future with <br />
              <span style={{ color: "var(--color-primary)" }}>Real-World Digital Skills</span>
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "var(--color-text-muted)",
                marginBottom: "32px",
                maxWidth: "600px"
              }}
            >
              Learn <strong>Amazon FBA</strong>, <strong>Shopify Dropshipping</strong>, <strong>Performance Marketing</strong>, <strong>Full-Stack Development</strong>, and <strong>AI</strong> from active practitioners. Physical on-campus batches in Rahim Yar Khan and interactive live online classes.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
                marginBottom: "40px"
              }}
            >
              <Link to="/courses" className="btn btn-primary btn-lg">
                <span>Explore Courses</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={getWhatsAppUrl("Hello Hower Commerce, I would like to consult about upcoming course batches and fees.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={19} />
                <span>Talk on WhatsApp</span>
              </a>

              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Contact Campus</span>
              </Link>
            </div>

            {/* Verified Highlights */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                paddingTop: "24px",
                borderTop: "1px solid var(--color-border)"
              }}
              className="hero-stats-grid"
            >
              <div>
                <strong style={{ display: "block", fontSize: "1.5rem", color: "var(--color-dark)", fontFamily: "var(--font-heading)" }}>
                  9+
                </strong>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                  Practical Programs
                </span>
              </div>

              <div>
                <strong style={{ display: "block", fontSize: "1.5rem", color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                  Physical &amp; Online
                </strong>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                  Flexible Learning Tracks
                </span>
              </div>

              <div>
                <strong style={{ display: "block", fontSize: "1.5rem", color: "var(--color-emerald)", fontFamily: "var(--font-heading)" }}>
                  1-on-1
                </strong>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                  Instructor Mentorship
                </span>
              </div>
            </div>
          </div>

          {/* Right: Modern Responsive Graphic Composition (NO overlapping absolute bugs!) */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "32px",
                boxShadow: "var(--shadow-xl)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.05em" }}>
                  Core Academy Pathways
                </span>
                <span className="badge badge-green">Enrollment Open</span>
              </div>

              {/* Pathway Pillars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0"
                  }}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", backgroundColor: "#dbeafe", color: "#1d4ed8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ShoppingBag size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)" }}>Amazon FBA &amp; Private Label</strong>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Product Hunting, Sourcing &amp; PPC Ads</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0"
                  }}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", backgroundColor: "#dcfce7", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Store size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)" }}>Shopify Store Development</strong>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Theme Design &amp; Dropshipping Fulfillment</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0"
                  }}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", backgroundColor: "#ffe4e6", color: "#be123c", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Megaphone size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)" }}>Digital Marketing &amp; Paid Ads</strong>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Meta, TikTok, Google &amp; Snapchat Media Buying</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0"
                  }}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", backgroundColor: "#ede9fe", color: "#6d28d9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Terminal size={22} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-dark)" }}>Web Development &amp; AI</strong>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>React, Full-Stack &amp; Applied Machine Learning</span>
                  </div>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.8125rem",
                  color: "var(--color-emerald-dark)",
                  fontWeight: "600"
                }}
              >
                <CheckCircle2 size={16} />
                <span>Physical lab seats available in Rahim Yar Khan</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-title {
            font-size: 2.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .hero-title {
            font-size: 1.875rem !important;
          }
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
