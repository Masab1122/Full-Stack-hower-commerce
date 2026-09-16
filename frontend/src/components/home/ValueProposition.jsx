import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

export default function ValueProposition() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Our Dual Expertise</span>
          </div>
          <h2 className="section-title">
            Two Strategic Paths to <span>Digital Growth</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to learn high-income digital skills or hire seasoned professionals to manage your e-commerce store, Hower Commerce provides structured, outcome-driven solutions.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "36px" }}>
          {/* Path 1: Academy Training */}
          <div
            className="card"
            style={{
              padding: "40px",
              borderTop: "4px solid var(--color-primary)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px"
              }}
            >
              <GraduationCap size={28} />
            </div>

            <div style={{ fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.05em", marginBottom: "8px" }}>
              For Students &amp; Professionals
            </div>

            <h3 style={{ fontSize: "1.625rem", marginBottom: "14px" }}>
              Digital Skills Training Academy
            </h3>

            <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.65 }}>
              Hands-on physical and online courses in Amazon FBA, Shopify, Paid Advertising, Web Development, and AI. Built specifically for freelancers, beginners, and entrepreneurs seeking practical income skills.
            </p>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", flex: 1 }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
                <CheckCircle size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Learn by doing with live Seller Central &amp; Ad accounts</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
                <CheckCircle size={16} style={{ color: "var(--color-emerald)" }} />
                <span>In-person computer lab in Rahim Yar Khan &amp; live online</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
                <CheckCircle size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Freelancing profiles, client outreach &amp; portfolio support</span>
              </li>
            </ul>

            <Link to="/courses" className="btn btn-primary" style={{ width: "100%" }}>
              <span>View All Training Programs</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Path 2: B2B E-Commerce Services */}
          <div
            className="card"
            style={{
              padding: "40px",
              borderTop: "4px solid var(--color-emerald)",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                backgroundColor: "var(--color-emerald-light)",
                color: "var(--color-emerald)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px"
              }}
            >
              <BarChart3 size={28} />
            </div>

            <div style={{ fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-emerald-dark)", letterSpacing: "0.05em", marginBottom: "8px" }}>
              For Brand &amp; Store Owners
            </div>

            <h3 style={{ fontSize: "1.625rem", marginBottom: "14px" }}>
              E-Commerce Store &amp; Ad Management
            </h3>

            <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.65 }}>
              Dedicated operational support for active Amazon and Shopify businesses. From 24/7 inventory and Buy-Box monitoring to high-ROI paid media buying and account management.
            </p>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px", flex: 1 }}>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
                <CheckCircle size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Full Amazon Seller Central &amp; Shopify operations</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
                <CheckCircle size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Performance marketing across Meta, TikTok &amp; Google Ads</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem" }}>
                <CheckCircle size={16} style={{ color: "var(--color-emerald)" }} />
                <span>Transparent weekly KPI reporting and ACOS optimization</span>
              </li>
            </ul>

            <Link to="/services" className="btn btn-secondary" style={{ width: "100%", borderColor: "var(--color-emerald)", color: "var(--color-emerald-dark)" }}>
              <span>Explore E-Commerce Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
