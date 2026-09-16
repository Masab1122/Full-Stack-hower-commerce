import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES } from "../../data/services";
import ServiceCard from "../services/ServiceCard";

export default function FeaturedServices() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge emerald">
            <span>B2B Growth &amp; Operations</span>
          </div>
          <h2 className="section-title">
            E-Commerce <span>Management &amp; Monitoring</span>
          </h2>
          <p className="section-subtitle">
            Reliable, hands-on operational management and performance advertising for scaling stores.
          </p>
        </div>

        <div className="grid-2" style={{ gap: "32px", marginBottom: "48px" }}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <ShieldCheck size={28} style={{ color: "var(--color-emerald)", flexShrink: 0 }} />
            <div>
              <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-dark)" }}>
                Need a Custom Store Audit or Consultation?
              </strong>
              <span style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
                We review your account health, listing quality, and advertising spend at no initial obligation.
              </span>
            </div>
          </div>

          <Link to="/contact" className="btn btn-secondary btn-sm">
            <span>Request Account Audit</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
