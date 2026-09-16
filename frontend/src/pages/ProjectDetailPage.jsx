import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Layers, ArrowRight, MessageSquare } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { updateSeo } from "../utils/seo";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      updateSeo({
        title: `${project.title} - Project Case Study`,
        description: project.challenge,
        canonicalUrl: `https://howercommerce.com/projects/${project.slug}`
      });
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="container section" style={{ textAlign: "center", minHeight: "50vh" }}>
        <h2>Project Not Found</h2>
        <p style={{ margin: "16px 0 24px" }}>The requested case study could not be located.</p>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "80px" }}>
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "50px 0 60px" }}>
        <div className="container">
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.8125rem",
              color: "var(--color-text-muted)",
              marginBottom: "24px"
            }}
          >
            <Link to="/" style={{ color: "var(--color-text-muted)" }}>Home</Link>
            <span>/</span>
            <Link to="/projects" style={{ color: "var(--color-text-muted)" }}>Projects</Link>
            <span>/</span>
            <span style={{ color: "var(--color-dark)", fontWeight: "600" }}>{project.title}</span>
          </nav>

          <div style={{ maxWidth: "840px" }}>
            <span className="badge badge-blue" style={{ marginBottom: "14px" }}>{project.category}</span>
            <h1 style={{ fontSize: "2.75rem", lineHeight: 1.15, marginBottom: "16px" }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
              <strong>Client Category:</strong> {project.clientType}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: "900px" }}>
          {/* Screenshot / Gallery Placeholder */}
          <div
            style={{
              backgroundColor: "#f1f5f9",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "60px 30px",
              textAlign: "center",
              marginBottom: "48px"
            }}
          >
            <Layers size={48} style={{ color: "var(--color-primary)", marginBottom: "12px" }} />
            <h3 style={{ fontSize: "1.25rem", color: "var(--color-dark)", marginBottom: "6px" }}>
              {project.title} Asset Gallery
            </h3>
            <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
              [REAL CLIENT PROJECT SCREENSHOTS &amp; INTERFACE ASSETS PLACEHOLDER]
            </span>
          </div>

          {/* Challenge & Solution Breakdown */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.625rem", marginBottom: "14px" }}>The Business Challenge</h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              {project.challenge}
            </p>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.625rem", marginBottom: "14px" }}>Implemented Solution</h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
              {project.solution}
            </p>
          </div>

          {/* Work Completed */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.625rem", marginBottom: "16px" }}>Deliverables &amp; Work Completed</h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {project.workCompleted.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9375rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-emerald)", flexShrink: 0, marginTop: "3px" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results Metric */}
          <div
            className="card"
            style={{
              padding: "24px",
              backgroundColor: "#f8fafc",
              border: "1px solid var(--color-border)",
              marginBottom: "48px"
            }}
          >
            <strong style={{ display: "block", fontSize: "0.875rem", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: "6px" }}>
              Performance Outcome:
            </strong>
            <p style={{ fontSize: "1rem", color: "var(--color-dark)", margin: 0, fontWeight: "500" }}>
              {project.results}
            </p>
          </div>

          {/* Call to action */}
          <div style={{ textAlign: "center" }}>
            <a
              href={getWhatsAppUrl(`Hello Hower Commerce, I saw your case study on "${project.title}" and would like to discuss a similar project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} />
              <span>Discuss a Similar Project on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
