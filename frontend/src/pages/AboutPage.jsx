import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Target, Eye, BookOpen, MapPin, Users, Award, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { FOUNDER, TEAM_MEMBERS } from "../data/team";
import { updateSeo } from "../utils/seo";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function AboutPage() {
  useEffect(() => {
    updateSeo({
      title: "About Us | Hower Commerce Academy",
      description: "Learn about Hower Commerce, our founder Raffy Haider, our practical training philosophy, and our academy campus in Rahim Yar Khan, Punjab, Pakistan.",
      canonicalUrl: "https://howercommerce.com/about"
    });
  }, []);

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Header */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div className="section-badge">
              <span>About Hower Commerce</span>
            </div>
            <h1 style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              Empowering Individuals Through <br />
              <span>Practical Digital Education</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              Founded in Rahim Yar Khan, Hower Commerce is an educational institute and digital commerce consultancy dedicated to equipping students, freelancers, and entrepreneurs with actionable, high-demand skills.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "36px", marginBottom: "56px" }}>
            <div className="card" style={{ padding: "36px", borderLeft: "4px solid var(--color-primary)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Target size={26} />
              </div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Our Mission</h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                To demystify e-commerce, digital marketing, and modern software development by replacing abstract theory with live portal demonstrations, hands-on account management, and transparent post-course mentorship.
              </p>
            </div>

            <div className="card" style={{ padding: "36px", borderLeft: "4px solid var(--color-emerald)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--color-emerald-light)", color: "var(--color-emerald)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Eye size={26} />
              </div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>Our Vision</h2>
              <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                To establish southern Punjab as a thriving regional hub for skilled digital talent, capable of launching sustainable independent e-commerce brands and providing high-value services to international clients.
              </p>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div style={{ backgroundColor: "#f8fafc", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "48px 36px", marginBottom: "64px" }}>
            <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
              <div className="section-badge">
                <span>Our Educational Philosophy</span>
              </div>
              <h2 style={{ fontSize: "2rem", marginBottom: "16px" }}>
                Practice Beats Passive Listening
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "32px" }}>
                Many students waste months watching generic video tutorials without ever touching a real ad manager or product research tool. At Hower Commerce, students sit at active workstations and follow step-by-step workflows under direct instructor supervision.
              </p>
            </div>

            <div className="grid-3" style={{ gap: "24px" }}>
              <div className="card" style={{ padding: "24px" }}>
                <BookOpen size={24} style={{ color: "var(--color-primary)", marginBottom: "12px" }} />
                <h3 style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Live Case Studies</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
                  Curriculum built around active stores, real campaign budgets, and verified supplier communications.
                </p>
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <Users size={24} style={{ color: "var(--color-primary)", marginBottom: "12px" }} />
                <h3 style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Small Batch Sizes</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
                  Enrolling limited students per batch ensures instructors review each student's progress and assignments.
                </p>
              </div>

              <div className="card" style={{ padding: "24px" }}>
                <Award size={24} style={{ color: "var(--color-primary)", marginBottom: "12px" }} />
                <h3 style={{ fontSize: "1.125rem", marginBottom: "8px" }}>Accountability</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
                  Regular assessments, milestone deadlines, and practical capstone projects required for graduation.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Feature */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
              gap: "48px",
              alignItems: "center",
              marginBottom: "64px"
            }}
            className="about-founder-grid"
          >
            <div style={{ textAlign: "center" }}>
              <img
                src="/founder-profile.jpg"
                alt={FOUNDER.name}
                style={{
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-xl)",
                  maxWidth: "360px",
                  width: "100%",
                  margin: "0 auto"
                }}
              />
            </div>

            <div>
              <div className="section-badge">
                <span>Leadership</span>
              </div>
              <h2 style={{ fontSize: "2.25rem", marginBottom: "8px" }}>
                {FOUNDER.name}
              </h2>
              <span style={{ display: "block", fontSize: "1rem", color: "var(--color-primary)", fontWeight: "600", marginBottom: "20px" }}>
                {FOUNDER.role} &bull; {FOUNDER.title}
              </span>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--color-text-muted)", marginBottom: "20px" }}>
                {FOUNDER.bio}
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a
                  href={getWhatsAppUrl("Hello Raffy Haider, I would like to schedule a consultation regarding Hower Commerce programs.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare size={15} />
                  <span>Direct WhatsApp</span>
                </a>
                <Link to="/contact" className="btn btn-primary btn-sm">
                  <span>Visit Campus</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Team / Instructors Section (CMS Ready) */}
          <div>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "24px", textAlign: "center" }}>
              Academy Instructors &amp; Staff
            </h2>
            <div className="grid-3" style={{ gap: "24px" }}>
              {TEAM_MEMBERS.map((member) => (
                <div key={member.id} className="card" style={{ padding: "28px", textAlign: "center" }}>
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      marginBottom: "16px"
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: "1.125rem", color: "var(--color-dark)", marginBottom: "4px" }}>
                    {member.name}
                  </h3>
                  <span style={{ display: "block", fontSize: "0.8125rem", color: "var(--color-primary)", fontWeight: "600", marginBottom: "12px" }}>
                    {member.role}
                  </span>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.5 }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .about-founder-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
