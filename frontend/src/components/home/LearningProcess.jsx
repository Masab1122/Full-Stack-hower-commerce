import React from "react";
import { Compass, MonitorPlay, FolderGit2, Rocket } from "lucide-react";

export default function LearningProcess() {
  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Foundations & Orientation",
      desc: "Understand industry mechanics, terminology, business models, and platform setup from day one."
    },
    {
      step: "02",
      icon: MonitorPlay,
      title: "Hands-on Practical Portal Work",
      desc: "Practice with actual industry software: Helium 10, Shopify dashboard, Meta Ads Manager, and modern code editors."
    },
    {
      step: "03",
      icon: FolderGit2,
      title: "Project & Portfolio Execution",
      desc: "Build tangible storefronts, ad campaigns, and development repositories you can present directly to clients or employers."
    },
    {
      step: "04",
      icon: Rocket,
      title: "Client Acquisition & Mentorship",
      desc: "Receive personalized guidance on setting up freelancing profiles, proposals, and handling real client operations."
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Our Methodology</span>
          </div>
          <h2 className="section-title">
            The 4-Step <span>Learning Roadmap</span>
          </h2>
          <p className="section-subtitle">
            A structured path engineered to take you from beginner concepts to independent operational proficiency.
          </p>
        </div>

        <div className="grid-4" style={{ gap: "24px", position: "relative" }}>
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="card"
                style={{
                  padding: "32px 24px",
                  position: "relative",
                  borderTop: "3px solid var(--color-primary)"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "20px",
                    fontSize: "2rem",
                    fontWeight: "900",
                    fontFamily: "var(--font-heading)",
                    color: "rgba(37, 99, 235, 0.12)"
                  }}
                >
                  {st.step}
                </div>

                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: "1.125rem", marginBottom: "10px", color: "var(--color-dark)" }}>
                  {st.title}
                </h3>

                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
