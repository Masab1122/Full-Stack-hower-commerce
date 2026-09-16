import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Award, CheckCircle2, ChevronDown, MessageSquare, Laptop, UserCheck, ShieldCheck } from "lucide-react";
import { COURSES } from "../data/courses";
import ContactForm from "../components/forms/ContactForm";
import { getCourseWhatsAppUrl } from "../utils/whatsapp";
import { updateSeo } from "../utils/seo";

export default function CourseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openModule, setOpenModule] = useState(0);

  const course = COURSES.find((c) => c.slug === slug);

  useEffect(() => {
    if (course) {
      updateSeo({
        title: `${course.title} Course in Rahim Yar Khan`,
        description: course.shortDescription,
        canonicalUrl: `https://howercommerce.com/courses/${course.slug}`,
        schema: {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": course.title,
          "description": course.shortDescription,
          "provider": {
            "@type": "Organization",
            "name": "Hower Commerce",
            "sameAs": "https://howercommerce.com"
          },
          "educationalLevel": course.level
        }
      });
      window.scrollTo(0, 0);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="container section" style={{ textAlign: "center", minHeight: "50vh" }}>
        <h2>Course Not Found</h2>
        <p style={{ margin: "16px 0 24px" }}>The requested course does not exist or has been moved.</p>
        <Link to="/courses" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to All Courses</span>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Course Hero Banner */}
      <section
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid var(--color-border)",
          padding: "50px 0 60px",
          background: "radial-gradient(circle at 90% 10%, #eff6ff 0%, transparent 40%), #ffffff"
        }}
      >
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
            <Link to="/courses" style={{ color: "var(--color-text-muted)" }}>Courses</Link>
            <span>/</span>
            <span style={{ color: "var(--color-dark)", fontWeight: "600" }}>{course.title}</span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "48px",
              alignItems: "center"
            }}
            className="course-hero-grid"
          >
            <div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "16px" }}>
                <span className={`badge badge-${course.badgeColor || "blue"}`}>{course.category}</span>
                {course.tag && (
                  <span style={{ fontSize: "0.75rem", fontWeight: "700", color: "var(--color-primary)" }}>
                    {course.tag}
                  </span>
                )}
              </div>

              <h1 style={{ fontSize: "2.75rem", lineHeight: 1.15, marginBottom: "20px" }} className="course-hero-title">
                {course.title}
              </h1>

              <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "28px" }}>
                {course.overview}
              </p>

              {/* Meta Chips */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "32px", fontSize: "0.875rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Clock size={16} style={{ color: "var(--color-primary)" }} />
                  <span><strong>Duration:</strong> {course.duration}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Award size={16} style={{ color: "var(--color-primary)" }} />
                  <span><strong>Level:</strong> {course.level}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Laptop size={16} style={{ color: "var(--color-primary)" }} />
                  <span><strong>Format:</strong> {course.format}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#enroll" className="btn btn-primary btn-lg">
                  <span>Enroll in this Course</span>
                </a>
                <a
                  href={getCourseWhatsAppUrl(course.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={18} />
                  <span>Ask Details on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Key Facts Summary Card */}
            <div
              className="card"
              style={{
                padding: "32px",
                backgroundColor: "#f8fafc",
                border: "1px solid var(--color-border)"
              }}
            >
              <h3 style={{ fontSize: "1.125rem", marginBottom: "16px", color: "var(--color-dark)" }}>
                Tools &amp; Platforms Covered
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                {course.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#ffffff",
                      border: "1px solid var(--color-border)",
                      borderRadius: "6px",
                      fontSize: "0.8125rem",
                      fontWeight: "600",
                      color: "var(--color-dark)"
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: "1.125rem", marginBottom: "12px", color: "var(--color-dark)" }}>
                Prerequisites
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "24px", lineHeight: 1.6 }}>
                {course.prerequisites}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.8125rem", color: "var(--color-emerald-dark)", fontWeight: "600" }}>
                <ShieldCheck size={18} />
                <span>Includes Physical Lab Access &amp; Alumni Community</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content Breakdown */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "48px",
              alignItems: "flex-start"
            }}
            className="course-content-grid"
          >
            {/* Left: Outcomes, Curriculum, FAQs */}
            <div>
              {/* Learning Outcomes */}
              <div style={{ marginBottom: "48px" }}>
                <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
                  What You Will <span style={{ color: "var(--color-primary)" }}>Learn &amp; Master</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {course.outcomes.map((item, idx) => (
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
                      <CheckCircle2 size={20} style={{ color: "var(--color-emerald)", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "0.9375rem", color: "var(--color-dark)", fontWeight: "500" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Module Curriculum */}
              <div style={{ marginBottom: "48px" }}>
                <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
                  Detailed Course <span style={{ color: "var(--color-primary)" }}>Curriculum</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {course.curriculum.map((mod, idx) => {
                    const isOpen = openModule === idx;
                    return (
                      <div
                        key={idx}
                        className="card"
                        style={{
                          padding: 0,
                          overflow: "hidden",
                          border: isOpen ? "1px solid var(--color-primary)" : "1px solid var(--color-border)"
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenModule(isOpen ? null : idx)}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "18px 20px",
                            background: "#ffffff",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontSize: "1rem",
                            fontWeight: "700",
                            color: "var(--color-dark)"
                          }}
                        >
                          <span>{mod.module}</span>
                          <ChevronDown
                            size={18}
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform var(--transition-normal)",
                              color: isOpen ? "var(--color-primary)" : "var(--color-text-light)"
                            }}
                          />
                        </button>
                        {isOpen && (
                          <div style={{ padding: "0 20px 20px", borderTop: "1px solid #f1f5f9" }}>
                            <ul style={{ margin: "14px 0 0 16px", color: "var(--color-text-muted)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                              {mod.topics.map((t, tIdx) => (
                                <li key={tIdx} style={{ marginBottom: "6px" }}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Who This Course Is For */}
              <div style={{ marginBottom: "48px" }}>
                <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
                  Who Should <span style={{ color: "var(--color-primary)" }}>Enroll</span>
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {course.whoIsItFor.map((target, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.9375rem" }}>
                      <UserCheck size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                      <span>{target}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Specific FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <div>
                  <h2 style={{ fontSize: "1.75rem", marginBottom: "20px" }}>
                    Course Questions &amp; Answers
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {course.faqs.map((faq, idx) => (
                      <div key={idx} className="card" style={{ padding: "20px" }}>
                        <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-dark)", marginBottom: "8px" }}>
                          {faq.question}
                        </strong>
                        <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Enrollment Form */}
            <div id="enroll" style={{ position: "sticky", top: "100px" }}>
              <div
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  padding: "16px 20px",
                  borderRadius: "var(--radius-md) var(--radius-md) 0 0",
                  border: "1px solid var(--color-primary-subtle)",
                  borderBottom: "none"
                }}
              >
                <strong style={{ display: "block", fontSize: "0.9375rem", color: "var(--color-primary-dark)" }}>
                  Admissions Open for {course.title}
                </strong>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                  Submit details below to reserve your batch seat.
                </span>
              </div>
              <ContactForm
                preselectedInterest={course.title}
                sourcePage={`Course Detail: ${course.title}`}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .course-hero-grid,
          .course-content-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .course-hero-title {
            font-size: 2.125rem !important;
          }
        }
      `}</style>
    </div>
  );
}
