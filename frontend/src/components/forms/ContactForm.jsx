import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, MessageSquare, CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from "lucide-react";
import { submitContactLead } from "../../services/api";
import { getFormWhatsAppUrl } from "../../utils/whatsapp";
import { COURSES } from "../../data/courses";
import { SERVICES } from "../../data/services";

export default function ContactForm({ preselectedInterest = "", sourcePage = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courseOrService: preselectedInterest,
    preferredMethod: "whatsapp",
    message: "",
    honeypot: "" // Hidden anti-spam field
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required for enrollment / inquiries.";
    } else if (!/^[0-9+-\s()]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a short message or question.";
    } else if (formData.message.trim().length < 5) {
      errs.message = "Message must be at least 5 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const result = await submitContactLead({
        ...formData,
        sourcePage: sourcePage || window.location.pathname
      });
      setSubmitResult(result);
      setSubmitted(true);
    } catch (err) {
      setErrors({ form: err.message || "Failed to submit form. Please contact us directly via WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      courseOrService: "",
      preferredMethod: "whatsapp",
      message: "",
      honeypot: ""
    });
    setSubmitted(false);
    setSubmitResult(null);
    setErrors({});
  };

  // SUCCESS STATE EXPERIENCE (Section 18)
  if (submitted) {
    return (
      <div
        className="card"
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#ffffff",
          border: "2px solid #86efac",
          boxShadow: "var(--shadow-xl)"
        }}
      >
        <div
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "50%",
            backgroundColor: "var(--color-emerald-light)",
            color: "var(--color-emerald)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
          }}
        >
          <CheckCircle2 size={36} />
        </div>

        <h3 style={{ fontSize: "1.75rem", marginBottom: "12px", color: "var(--color-dark)" }}>
          Thank You, {formData.name.split(" ")[0]}!
        </h3>

        <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", maxWidth: "520px", margin: "0 auto 24px" }}>
          Your inquiry regarding <strong>{formData.courseOrService || "Hower Commerce programs"}</strong> has been securely received.
          Our admissions and counseling team will review your message and contact you via {formData.preferredMethod === "call" ? "direct phone call" : "WhatsApp"} shortly.
        </p>

        {/* WhatsApp Immediate Continuation Flow */}
        <div
          style={{
            backgroundColor: "#f0fdf4",
            border: "1px solid #bbf7d0",
            borderRadius: "var(--radius-md)",
            padding: "20px",
            marginBottom: "28px",
            maxWidth: "520px",
            margin: "0 auto 28px"
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "#166534", fontWeight: "600", marginBottom: "12px" }}>
            Want an immediate response? Connect directly with our counselor right now:
          </p>
          <a
            href={getFormWhatsAppUrl(formData)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ width: "100%", padding: "14px 20px" }}
          >
            <MessageSquare size={18} />
            <span>Continue on WhatsApp with Pre-filled Inquiry</span>
          </a>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-secondary btn-sm"
          >
            <RotateCcw size={15} />
            <span>Submit Another Inquiry</span>
          </button>

          <Link to="/courses" className="btn btn-primary btn-sm">
            <span>Explore Other Courses</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  // ACTIVE FORM
  return (
    <form onSubmit={handleSubmit} noValidate className="card" style={{ padding: "36px" }}>
      <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
        Start Your <span style={{ color: "var(--color-primary)" }}>Digital Journey</span>
      </h3>
      <p style={{ fontSize: "0.9375rem", color: "var(--color-text-muted)", marginBottom: "28px" }}>
        Fill out the inquiry form below. Our academy counselor will get in touch with curriculum outlines, fee structures, and batch timings.
      </p>

      {errors.form && (
        <div
          style={{
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#991b1b",
            padding: "14px",
            borderRadius: "var(--radius-md)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.875rem"
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Honeypot anti-spam field (hidden from screen, trapped if filled by bots) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />

      <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
        {/* Name */}
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="form-name" className="form-label">
            Full Name <span className="req">*</span>
          </label>
          <input
            id="form-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Muhammad Ali"
            className={`form-input ${errors.name ? "error" : ""}`}
            required
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        {/* Phone */}
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="form-phone" className="form-label">
            Phone / WhatsApp Number <span className="req">*</span>
          </label>
          <input
            id="form-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +92 301 7514281"
            className={`form-input ${errors.phone ? "error" : ""}`}
            required
          />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
      </div>

      <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
        {/* Email */}
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="form-email" className="form-label">
            Email Address <span style={{ color: "var(--color-text-light)", fontWeight: "normal" }}>(Optional)</span>
          </label>
          <input
            id="form-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. student@gmail.com"
            className={`form-input ${errors.email ? "error" : ""}`}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        {/* Program / Service Interest */}
        <div className="form-group" style={{ margin: 0 }}>
          <label htmlFor="form-course" className="form-label">
            Select Course or Service
          </label>
          <select
            id="form-course"
            name="courseOrService"
            value={formData.courseOrService}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">-- Choose Course or Service --</option>
            <optgroup label="Training Programs">
              {COURSES.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="E-Commerce Services">
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <option value="General Counseling / Consultation">General Counseling / Consultation</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="form-message" className="form-label">
          Your Message or Question <span className="req">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Ask about batch timings, fee installments, physical vs online classes, or service requirements..."
          className={`form-textarea ${errors.message ? "error" : ""}`}
          required
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{ flex: 1, minWidth: "220px" }}
        >
          {loading ? (
            <span>Submitting...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Send Inquiry</span>
            </>
          )}
        </button>

        <a
          href={getFormWhatsAppUrl(formData)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ flex: 1, minWidth: "220px" }}
        >
          <MessageSquare size={17} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </form>
  );
}
