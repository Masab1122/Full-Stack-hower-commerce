import React from "react";
import { ShieldCheck, MapPin, Laptop, Users } from "lucide-react";

export default function TrustBar() {
  const points = [
    {
      icon: MapPin,
      title: "Rahim Yar Khan Campus",
      desc: "Physical academy & dedicated computer lab"
    },
    {
      icon: Laptop,
      title: "Real Tool Accounts",
      desc: "Practice on Helium 10, Shopify, Meta & TikTok Ads"
    },
    {
      icon: Users,
      title: "Focused Batch Sizes",
      desc: "Direct instructor attention and personal review"
    },
    {
      icon: ShieldCheck,
      title: "Post-Course Mentorship",
      desc: "Continuous Q&A and practical project guidance"
    }
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid var(--color-border)",
        padding: "36px 0"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px"
          }}
          className="trust-grid"
        >
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px"
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: "0.9375rem", fontWeight: "700", color: "var(--color-dark)", marginBottom: "4px" }}>
                    {pt.title}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.4 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
