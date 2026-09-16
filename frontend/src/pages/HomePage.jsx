import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import ValueProposition from "../components/home/ValueProposition";
import FeaturedCourses from "../components/home/FeaturedCourses";
import FeaturedServices from "../components/home/FeaturedServices";
import WhyUs from "../components/home/WhyUs";
import LearningProcess from "../components/home/LearningProcess";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FounderSection from "../components/home/FounderSection";
import FaqSection from "../components/home/FaqSection";
import FinalCta from "../components/home/FinalCta";
import ContactForm from "../components/forms/ContactForm";
import { updateSeo } from "../utils/seo";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    updateSeo({
      title: "Digital Skills Training & E-Commerce Solutions",
      description: "Learn Amazon FBA, Shopify Dropshipping, Digital Marketing, Web Development, and AI from experienced practitioners at Hower Commerce in Rahim Yar Khan, Pakistan.",
      canonicalUrl: "https://howercommerce.com/"
    });
  }, []);

  return (
    <div>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Indicators */}
      <TrustBar />

      {/* 3. What We Do / Dual Path */}
      <ValueProposition />

      {/* 4. Professional Courses */}
      <FeaturedCourses />

      {/* 5. E-Commerce Services */}
      <FeaturedServices />

      {/* 6. Why Hower Commerce */}
      <WhyUs />

      {/* 7. 4-Step Learning Roadmap */}
      <LearningProcess />

      {/* 8. Featured Projects */}
      <FeaturedProjects />

      {/* 9. Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 10. Founder & CEO */}
      <FounderSection />

      {/* 11. FAQ Objection Handling */}
      <FaqSection />

      {/* 12. Final CTA Banner */}
      <FinalCta />

      {/* 13. Contact & Location Section */}
      <section className="section" id="contact" style={{ backgroundColor: "#f8fafc" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <span>Direct Admissions &amp; Inquiries</span>
            </div>
            <h2 className="section-title">
              Visit Our Campus or <span>Message Us</span>
            </h2>
            <p className="section-subtitle">
              Have questions about batch start dates, fee installments, or our store management services? Contact our team directly.
            </p>
          </div>

          <div className="grid-2" style={{ gap: "48px", alignItems: "flex-start" }}>
            {/* Left: Contact Info & Interactive Map */}
            <div>
              <div
                className="card"
                style={{
                  padding: "32px",
                  marginBottom: "28px",
                  backgroundColor: "var(--color-dark)",
                  color: "#ffffff"
                }}
              >
                <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "20px" }}>
                  Rahim Yar Khan Training Center
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9375rem" }}>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <MapPin size={20} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "#cbd5e1" }}>
                      Main Commercial Market, Rahim Yar Khan, Punjab, Pakistan
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Phone size={18} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                    <a href="tel:+923017514281" style={{ color: "#ffffff", fontWeight: "600" }}>
                      +92 301 7514281
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Mail size={18} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                    <a href="mailto:howercommerce@gmail.com" style={{ color: "#ffffff" }}>
                      howercommerce@gmail.com
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Clock size={18} style={{ color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "#cbd5e1" }}>
                      Monday – Saturday: 9:00 AM – 11:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Real Map Iframe (Replaces fake static placeholder!) */}
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--color-border)",
                  height: "280px",
                  backgroundColor: "#e2e8f0"
                }}
              >
                <iframe
                  title="Hower Commerce Rahim Yar Khan Office Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Commercial%20Market%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Functional Lead Form */}
            <div>
              <ContactForm sourcePage="Home Page" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
