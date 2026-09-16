import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Headphones } from "lucide-react";
import { SERVICES } from "../data/services";
import ServiceCard from "../components/services/ServiceCard";
import { updateSeo } from "../utils/seo";
import { getWhatsAppUrl } from "../utils/whatsapp";

export default function ServicesPage() {
  useEffect(() => {
    updateSeo({
      title: "E-Commerce Management & Store Monitoring Services",
      description: "Professional Amazon Seller Central management, Shopify store operations, PPC advertising, and 24/7 store monitoring by Hower Commerce.",
      canonicalUrl: "https://howercommerce.com/services"
    });
  }, []);

  return (
    <div style={{ paddingBottom: "80px" }}>
      {/* Header */}
      <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-border)", padding: "56px 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div className="section-badge emerald">
              <span>B2B Client Services</span>
            </div>
            <h1 style={{ fontSize: "2.75rem", marginBottom: "16px" }}>
              E-Commerce <span>Management &amp; Monitoring</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
              We handle day-to-day Amazon and Shopify operational complexity, inventory alerts, and advertising spend so you can focus on brand vision and product expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "32px", marginBottom: "56px" }}>
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Consultation Banner */}
          <div
            className="card"
            style={{
              padding: "40px",
              backgroundColor: "var(--color-dark)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px"
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", color: "#ffffff", marginBottom: "8px" }}>
                Need a Custom Retainer or Dedicated Store Audit?
              </h3>
              <p style={{ color: "#94a3b8", margin: 0, maxWidth: "560px", fontSize: "0.9375rem" }}>
                Schedule an initial confidential consultation with our operations team to review your store metrics, Buy-Box status, or PPC spend.
              </p>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-primary">
                <span>Book Store Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppUrl("Hello Hower Commerce, I would like to schedule a B2B store management consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
