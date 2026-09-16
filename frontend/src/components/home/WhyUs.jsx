import React from "react";
import { Laptop, Briefcase, Award, Headphones, MapPin, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const pillars = [
    {
      icon: Laptop,
      title: "Hands-On Practical Training",
      desc: "No pure theory. Every course module is practiced on real tool interfaces (Helium 10, Shopify, Meta Ads Manager, VS Code) with live case studies."
    },
    {
      icon: Briefcase,
      title: "Active Industry Practitioners",
      desc: "Learn directly from professionals who run their own active e-commerce stores, client ad campaigns, and development projects daily."
    },
    {
      icon: MapPin,
      title: "Physical Campus in Rahim Yar Khan",
      desc: "Benefit from dedicated computer workstations, reliable high-speed internet, and face-to-face instructor interaction right in the city."
    },
    {
      icon: Headphones,
      title: "Continuous Post-Batch Mentorship",
      desc: "We do not abandon you upon graduation. Alumni enjoy lifetime community support and instructor guidance when navigating real client projects."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Why Choose Hower Commerce</span>
          </div>
          <h2 className="section-title">
            Education Built for <span>Real-World Results</span>
          </h2>
          <p className="section-subtitle">
            We focus strictly on practical execution, transparent guidance, and continuous career mentorship.
          </p>
        </div>

        <div className="grid-4" style={{ gap: "24px" }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}
                >
                  <Icon size={24} />
                </div>

                <h3 style={{ fontSize: "1.125rem", marginBottom: "10px", color: "var(--color-dark)" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
