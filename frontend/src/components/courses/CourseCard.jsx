import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Award, Check, MessageSquare } from "lucide-react";
import { getCourseWhatsAppUrl } from "../../utils/whatsapp";

export default function CourseCard({ course }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "28px"
      }}
    >
      {/* Top Header: Tag & Category */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <span className={`badge badge-${course.badgeColor || "blue"}`}>
          {course.category}
        </span>
        {course.tag && (
          <span style={{ fontSize: "0.6875rem", fontWeight: "700", color: "var(--color-primary)", letterSpacing: "0.05em" }}>
            {course.tag}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 style={{ fontSize: "1.375rem", marginBottom: "12px", lineHeight: 1.3 }}>
        <Link
          to={`/courses/${course.slug}`}
          style={{ color: "var(--color-dark)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-dark)")}
        >
          {course.title}
        </Link>
      </h3>

      {/* Description */}
      <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginBottom: "20px", flex: 1, lineHeight: 1.6 }}>
        {course.shortDescription}
      </p>

      {/* Key Outcomes List */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, marginBottom: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {course.outcomes.slice(0, 3).map((outcome, idx) => (
          <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8125rem", color: "var(--color-dark)" }}>
            <Check size={15} style={{ color: "var(--color-emerald)", flexShrink: 0, marginTop: "3px" }} />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      {/* Duration & Format Meta */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          paddingTop: "16px",
          borderTop: "1px solid var(--color-border)",
          fontSize: "0.8125rem",
          color: "var(--color-text-muted)",
          marginBottom: "20px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Clock size={14} style={{ color: "var(--color-primary)" }} />
          <span>{course.duration.split(" ")[0]} {course.duration.split(" ")[1]}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Award size={14} style={{ color: "var(--color-primary)" }} />
          <span>{course.format}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "10px" }}>
        <Link
          to={`/courses/${course.slug}`}
          className="btn btn-secondary btn-sm"
          style={{ width: "100%" }}
        >
          <span>Curriculum</span>
          <ArrowRight size={14} />
        </Link>

        <a
          href={getCourseWhatsAppUrl(course.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp btn-sm"
          style={{ width: "100%", padding: "8px" }}
        >
          <MessageSquare size={14} />
          <span>Inquire</span>
        </a>
      </div>
    </div>
  );
}
