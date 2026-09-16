import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { updateSeo } from "../utils/seo";

export default function TermsPage() {
  useEffect(() => {
    updateSeo({
      title: "Terms & Conditions | Hower Commerce",
      description: "Terms and conditions governing course registration, student conduct, and e-commerce services at Hower Commerce.",
      canonicalUrl: "https://howercommerce.com/terms-and-conditions"
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container section" style={{ maxWidth: "860px", paddingBottom: "80px" }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", marginBottom: "24px" }}>
        <Link to="/">Home</Link> &gt; <span>Terms &amp; Conditions</span>
      </nav>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>Terms &amp; Conditions</h1>
      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "32px" }}>
        Last updated: January 2025
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px", lineHeight: 1.7, color: "var(--color-text)" }}>
        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>1. Course Enrollment &amp; Admissions</h2>
          <p>
            Course seats in our Rahim Yar Khan computer lab and online batches are allocated upon receipt of verified registration. Batch schedules, class timings, and seat availability are confirmed upon admission.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>2. Academic Code of Conduct</h2>
          <p>
            Students must respect instructors, peers, and campus equipment. Sharing proprietary course curriculum materials, tools credentials, or proprietary resources outside the academy without written authorization is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>3. E-Commerce Services Engagement</h2>
          <p>
            Store management and monitoring engagements (Amazon, Shopify, PPC) are governed by specific written Service Level Agreements (SLAs) agreed upon with each client before onboarding.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.375rem", marginBottom: "8px" }}>4. Results &amp; Performance Disclaimer</h2>
          <p>
            E-commerce results, ad performance, and freelance earnings depend on market demand, product viability, student execution, and external platform algorithms. Hower Commerce provides practical methodologies, technical training, and account management, but does not guarantee arbitrary financial returns.
          </p>
        </section>
      </div>
    </div>
  );
}
