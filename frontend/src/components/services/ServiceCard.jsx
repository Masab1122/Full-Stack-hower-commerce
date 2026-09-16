import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { getServiceWhatsAppUrl } from "../../utils/whatsapp";

export default function ServiceCard({ service }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "30px"
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <span className={`badge badge-${service.badgeColor || "blue"}`}>
          {service.category}
        </span>
      </div>

      <h3 style={{ fontSize: "1.375rem", marginBottom: "12px" }}>
        <Link
          to={`/services/${service.slug}`}
          style={{ color: "var(--color-dark)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-dark)")}
        >
          {service.title}
        </Link>
      </h3>

      <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginBottom: "20px", flex: 1, lineHeight: 1.6 }}>
        {service.shortDescription}
      </p>

      {/* What we handle preview */}
      <div style={{ marginBottom: "24px" }}>
        <span style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-dark)", marginBottom: "10px", letterSpacing: "0.05em" }}>
          Key Deliverables:
        </span>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
          {service.whatWeHandle.slice(0, 3).map((item, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8125rem", color: "var(--color-text)" }}>
              <CheckCircle2 size={15} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "10px", marginTop: "auto" }}>
        <Link
          to={`/services/${service.slug}`}
          className="btn btn-secondary btn-sm"
          style={{ width: "100%" }}
        >
          <span>Scope &amp; Process</span>
          <ArrowRight size={14} />
        </Link>

        <a
          href={getServiceWhatsAppUrl(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ width: "100%", padding: "8px" }}
        >
          <MessageSquare size={14} />
          <span>Consult</span>
        </a>
      </div>
    </div>
  );
}
