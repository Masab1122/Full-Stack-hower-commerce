import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateSeo } from "../utils/seo";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    updateSeo({
      title: "Privacy Policy | Hower Commerce",
      description: "Privacy policy and data protection commitments for Hower Commerce visitors, students, and clients.",
      canonicalUrl: "https://howercommerce.com/privacy-policy"
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container section" style={{ maxWidth: "860px", paddingBottom: "80px" }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "24px" }}>
        <Link to="/">Home</Link> &gt; <span>Privacy Policy</span>
      </nav>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Privacy Policy</h1>
      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "32px" }}>
        Last updated: January 2025
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", lineHeight: 1.7, color: "var(--color-text)" }}>
        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>1. Information We Collect</h2>
          <p>
            When you submit an inquiry form or message us regarding course admissions or e-commerce services, we collect information you voluntarily provide. This includes your name, phone number, email address, selected course or service of interest, and any message content.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>2. How We Use Your Information</h2>
          <p>
            The collected information is used solely to respond to your inquiries, provide course schedules and fee structures, schedule consultations, and maintain internal academy records. We do not sell, rent, or distribute your personal details to third-party marketing entities.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>3. WhatsApp &amp; Communications</h2>
          <p>
            If you choose to communicate via WhatsApp, communication is handled through WhatsApp's end-to-end encrypted messaging infrastructure according to Meta's privacy terms.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>4. Data Security</h2>
          <p>
            We implement administrative and technical safeguards to secure lead inquiries against unauthorized access, loss, or alteration.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>5. Contact Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to have your submitted contact record removed, please email us at <a href="mailto:howercommerce@gmail.com" style={{ color: "var(--color-primary)", fontWeight: "600" }}>howercommerce@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
