import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { GENERAL_FAQS } from "../../data/faqs";
import { getWhatsAppUrl } from "../../utils/whatsapp";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers to Common <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our admissions, class schedules, practical training, and e-commerce services.
          </p>
        </div>

        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "14px" }}>
          {GENERAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  border: isOpen ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)"
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--color-dark)",
                    fontSize: "1.0625rem",
                    fontWeight: "600",
                    transition: "background var(--transition-fast)"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <HelpCircle size={18} style={{ color: isOpen ? "var(--color-primary)" : "var(--color-text-light)", flexShrink: 0 }} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform var(--transition-normal)",
                      color: isOpen ? "var(--color-primary)" : "var(--color-text-light)",
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 24px 52px",
                      color: "var(--color-text-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      borderTop: "1px solid #f1f5f9"
                    }}
                  >
                    <p style={{ margin: "16px 0 0 0" }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginBottom: "14px" }}>
            Have a specific inquiry not listed above?
          </p>
          <a
            href={getWhatsAppUrl("Hello Hower Commerce, I have a question regarding course admissions.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageSquare size={15} />
            <span>Ask Our Counselor on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
