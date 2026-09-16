import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { SERVICES } from "../data/services";
import ContactForm from "../components/forms/ContactForm";
import { getServiceWhatsAppUrl } from "../utils/whatsapp";
import { updateSeo } from "../utils/seo";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      updateSeo({
        title: `${service.title} - Hower Commerce`,
        description: service.shortDescription,
        canonicalUrl: `https://howercommerce.com/services/${service.slug}`
      });
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return (
      <div className="container section" style={{ textAlign: "center", minHeight: "50vh" }}>
        <h2>Service Not Found</h2>
        <p style={{ margin: "16px 0 24px" }}>The requested service is unavailable.</p>
        <Link to="/services" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Service Hero */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "50px 0 60px" }}>
        <div className="container">
          {/* Breadcrumbs */}
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
            <Link to="/services" style={{ color: "var(--color-text-muted)" }}>Services</Link>
            <span>/</span>
            <span style={{ color: "var(--color-dark)", fontWeight: "600" }}>{service.title}</span>
          </nav>

          <div style={{ maxWidth: "800px" }}>
            <span className={`badge badge-${service.badgeColor || "blue"}`} style={{ marginBottom: "16px" }}>
              {service.category}
            </span>
            <h1 style={{ fontSize: "2.75rem", lineHeight: 1.15, marginBottom: "20px" }}>
              {service.title}
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "28px" }}>
              {service.shortDescription}
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="#inquire" className="btn btn-primary btn-lg">
                <span>Request Service Scope</span>
              </a>
              <a
                href={getServiceWhatsAppUrl(service.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} />
                <span>Discuss via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "48px",
              alignItems: "flex-start"
            }}
            className="service-content-grid"
          >
            {/* Left Content */}
            <div>
              {/* Problem vs Solution */}
              <div className="grid-2" style={{ gap: "24px", marginBottom: "40px" }}>
                <div className="card" style={{ backgroundColor: "#fff7ed", borderColor: "#fed7aa", padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#c2410c", fontWeight: "700", marginBottom: "12px", fontSize: "0.9375rem" }}>
                    <AlertTriangle size={18} />
                    <span>The Challenge</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#7c2d12", lineHeight: 1.6, margin: 0 }}>
                    {service.problem}
                  </p>
                </div>

                <div className="card" style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0", padding: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#15803d", fontWeight: "700", marginBottom: "12px", fontSize: "0.9375rem" }}>
                    <ShieldCheck size={18} />
                    <span>Our Solution</span>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#14532d", lineHeight: 1.6, margin: 0 }}>
                    {service.solution}
                  </p>
                </div>
              </div>

              {/* What We Handle */}
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.625rem", marginBottom: "20px" }}>
                  Operational Scope &amp; Responsibilities
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {service.whatWeHandle.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "16px",
                        backgroundColor: "#ffffff",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)"
                      }}
                    >
                      <CheckCircle2 size={20} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.9375rem", color: "var(--color-dark)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Process */}
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.625rem", marginBottom: "20px" }}>
                  Management Workflow &amp; Process
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {service.process.map((step, idx) => (
                    <div key={idx} className="card" style={{ padding: "20px" }}>
                      <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-dark)", marginBottom: "6px" }}>
                        {step.step}
                      </strong>
                      <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "1.625rem", marginBottom: "20px" }}>
                  What You Receive
                </h2>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {service.deliverables.map((deliv, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9375rem", color: "var(--color-dark)" }}>
                      <CheckCircle2 size={16} style={{ color: "var(--color-emerald)" }} />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service FAQ */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h2 style={{ fontSize: "1.625rem", marginBottom: "20px" }}>
                    Service FAQ
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {service.faqs.map((f, idx) => (
                      <div key={idx} className="card" style={{ padding: "20px" }}>
                        <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-dark)", marginBottom: "6px" }}>
                          {f.question}
                        </strong>
                        <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Lead Capture Form */}
            <div id="inquire" style={{ position: "sticky", top: "100px" }}>
              <div
                style={{
                  backgroundColor: "var(--color-emerald-light)",
                  padding: "16px 20px",
                  borderRadius: "var(--radius-md) var(--radius-md) 0 0",
                  border: "1px solid #bbf7d0",
                  borderBottom: "none"
                }}
              >
                <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-emerald-dark)" }}>
                  Consultation for {service.title}
                </strong>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                  Submit details to discuss your store requirements.
                </span>
              </div>
              <ContactForm
                preselectedInterest={service.title}
                sourcePage={`Service Detail: ${service.title}`}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .service-content-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
