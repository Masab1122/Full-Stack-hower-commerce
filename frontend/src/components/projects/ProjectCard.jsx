import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, CheckCircle } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "0",
        overflow: "hidden"
      }}
    >
      {/* Screenshot / Visual Banner with Honest Placeholder */}
      <div
        style={{
          height: "180px",
          backgroundColor: "#f1f5f9",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
          position: "relative",
          background: "linear-gradient(135deg, #e2e8f0, #f8fafc)"
        }}
      >
        <Layers size={36} style={{ color: "var(--color-primary)", marginBottom: "8px" }} />
        <span style={{ fontSize: "0.8125rem", fontWeight: "700", color: "var(--color-dark)" }}>
          {project.category} Implementation
        </span>
        <span style={{ fontSize: "0.6875rem", color: "var(--color-text-muted)", marginTop: "4px" }}>
          [REAL WORK SCREENSHOT / ASSET PLACEHOLDER]
        </span>
        <div style={{ position: "absolute", top: "12px", right: "12px" }}>
          <span className="badge badge-blue">{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "6px" }}>
          {project.clientType}
        </div>

        <h3 style={{ fontSize: "1.25rem", marginBottom: "12px", lineHeight: 1.35 }}>
          <Link to={`/projects/${project.slug}`} style={{ color: "var(--color-dark)" }}>
            {project.title}
          </Link>
        </h3>

        <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "16px", flex: 1 }}>
          {project.challenge}
        </p>

        {/* Deliverables snippet */}
        <ul style={{ listStyle: "none", margin: "0 0 16px 0", padding: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          {project.workCompleted.slice(0, 2).map((item, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "0.75rem", color: "var(--color-text)" }}>
              <CheckCircle size={13} style={{ color: "var(--color-emerald)", flexShrink: 0, marginTop: "2px" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.6875rem",
                padding: "3px 8px",
                backgroundColor: "#f1f5f9",
                color: "#475569",
                borderRadius: "4px",
                fontWeight: "600"
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <Link
          to={`/projects/${project.slug}`}
          className="btn btn-secondary btn-sm"
          style={{ width: "100%", marginTop: "auto" }}
        >
          <span>View Case Study</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
