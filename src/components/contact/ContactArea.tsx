"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

const ContactArea = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Multi-Cam 4K Studio Session",
    budget: "$2,500 – $5,000 / month",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const targetEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "grow@360growthlab.com";
    const subject = `[Project Inquiry] ${formData.service} - ${formData.company || formData.name}`;
    const body = [
      `Client Name: ${formData.name}`,
      `Email Address: ${formData.email}`,
      `Phone/WhatsApp: ${formData.phone || "Not provided"}`,
      `Company / Project: ${formData.company || "Not provided"}`,
      `Service Category: ${formData.service}`,
      `Estimated Budget: ${formData.budget}`,
      "",
      "Project Details & Goals:",
      formData.message,
    ].join("\n");

    // Open mailto link seamlessly
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>
      <section className="cs_contact_section">
        <div className="container">
          <div className="cs_section_heading cs_style_1 mb-5">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                Contact Us
              </div>
              <h1 className="cs_contact_title anim_text_writting" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
                Contact Us &amp; Book Studio Time
              </h1>
              <p className="text-secondary font-size-18 mt-3" style={{ maxWidth: '720px', lineHeight: '1.7' }}>
                Whether booking a single 4K recording session, scheduling a private studio tour, or producing an entire season with viral shorts, our production team is ready.
              </p>
            </div>
          </div>

          <div className="row g-5">
            {/* Form Column */}
            <div className="col-12 col-lg-7">
              <div className="p-4 p-md-5 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {submitted ? (
                  <div className="text-center py-5">
                    <div className="mb-3" style={{ fontSize: '48px', color: '#FF6B00' }}>
                      ✓
                    </div>
                    <h3 className="text-white font-size-26 font-weight-bold mb-2">Thank You, {formData.name}!</h3>
                    <p className="text-secondary font-size-16 mb-4" style={{ maxWidth: '480px', margin: '0 auto' }}>
                      Your inquiry has been compiled and dispatched. A senior partner from StudioGrowth360 will review your project specs and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="sg_primary_cta mt-3"
                    >
                      <span>Send Another Note</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="cs_project_form">
                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-name" className="text-white font-size-14 mb-1 font-weight-bold">
                          Your Full Name <span style={{ color: '#FF6B00' }}>*</span>
                        </label>
                        <input
                          className="form-control bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alexander Vance"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-email" className="text-white font-size-14 mb-1 font-weight-bold">
                          Work Email <span style={{ color: '#FF6B00' }}>*</span>
                        </label>
                        <input
                          className="form-control bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. alex@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-company" className="text-white font-size-14 mb-1 font-weight-bold">
                          Company / Venture Name
                        </label>
                        <input
                          className="form-control bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          type="text"
                          id="contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Apex Global Inc."
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-phone" className="text-white font-size-14 mb-1 font-weight-bold">
                          Phone / WhatsApp (Optional)
                        </label>
                        <input
                          className="form-control bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          type="text"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="773-757-9417"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-service" className="text-white font-size-14 mb-1 font-weight-bold">
                          Primary Service Interest
                        </label>
                        <select
                          className="form-select bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option>Multi-Cam 4K Studio Session</option>
                          <option>Full Episode Post-Production &amp; Sound Design</option>
                          <option>Viral Shorts &amp; TikTok Retainer</option>
                          <option>Show Launch &amp; RSS Syndication</option>
                          <option>Remote Guest Recording Concierge</option>
                          <option>Corporate &amp; Executive Branded Show</option>
                          <option>Private In-Person Studio Tour</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-budget" className="text-white font-size-14 mb-1 font-weight-bold">
                          Target Investment Range
                        </label>
                        <select
                          className="form-select bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                        >
                          <option>$500 – $1,500 (Single Studio Session)</option>
                          <option>$2,500 – $5,000 / month (Weekly Show Package)</option>
                          <option>$5,000 – $10,000 / month (Production &amp; Shorts Retainer)</option>
                          <option>$10,000+ / month (Enterprise &amp; Multi-Show Network)</option>
                          <option>Custom Scope / Studio Tour</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contact-message" className="text-white font-size-14 mb-1 font-weight-bold">
                        Show Concept, Goals &amp; Preferred Studio Date <span style={{ color: '#FF6B00' }}>*</span>
                      </label>
                      <textarea
                        className="form-control bg-dark text-white border-secondary p-3"
                        style={{ borderRadius: '8px', minHeight: '140px' }}
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your goals, current bottlenecks, target launch timeline, and what success looks like..."
                        required
                      />
                    </div>

                    <button type="submit" className="sg_submit_brief_btn w-100">
                      <span>Submit Project Brief</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <p className="text-secondary font-size-12 text-center mt-3 mb-0">
                      🔒 All project inquiries are protected under mutual non-disclosure.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Info Column */}
            <div className="col-12 col-lg-5">
              <div className="p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.06) 0%, rgba(13,13,13,0.95) 100%)', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
                <div>
                  <span className="badge rounded-pill mb-3" style={{ backgroundColor: 'rgba(255,107,0,0.15)', color: '#FF6B00', padding: '6px 14px' }}>
                    Direct Access to Principals
                  </span>
                  <h2 className="text-white font-size-28 font-weight-bold mb-3">
                    Let&apos;s Build Something Unforgettable.
                  </h2>
                  <p className="text-secondary font-size-16 mb-4" style={{ lineHeight: '1.7' }}>
                    We partner with select visionary brands each quarter to maintain intense focus, flawless quality, and outsized business impact.
                  </p>

                  <div className="cs_contact_info_box mb-4">
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <span style={{ color: '#FF6B00', fontSize: '20px' }}>✉</span>
                      <div>
                        <h4 className="text-white font-size-14 font-weight-bold mb-1">Email Inquiries</h4>
                        <a href="mailto:grow@360growthlab.com" className="text-secondary text-decoration-none hover-white">
                          grow@360growthlab.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 mb-3">
                      <span style={{ color: '#FF6B00', fontSize: '20px' }}>📞</span>
                      <div>
                        <h4 className="text-white font-size-14 font-weight-bold mb-1">Direct Phone</h4>
                        <a href="tel:7737579417" className="text-secondary text-decoration-none hover-white">
                          773-757-9417
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3 mb-3">
                      <span style={{ color: '#FF6B00', fontSize: '20px' }}>📍</span>
                      <div>
                        <h4 className="text-white font-size-14 font-weight-bold mb-1">Studio Headquarters</h4>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=1S280+Summit+Ave+Unit+E2+Suite+1B,+Oakbrook+Terrace,+IL+60181"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary text-decoration-none hover-white font-size-14 d-block"
                          style={{ lineHeight: '1.6' }}
                        >
                          1S280 Summit Ave Unit E2 Suite 1B, Oakbrook Terrace, IL 60181
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3 mt-4" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="badge bg-success rounded-circle" style={{ width: '8px', height: '8px', padding: 0 }}></span>
                    <span className="text-white font-size-13 font-weight-bold">Current Availability: Q1 / Q2 2026</span>
                  </div>
                  <p className="text-secondary font-size-12 mb-0">
                    Currently accepting 2 new client partnerships for strategic branding and Next.js engineering sprints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_120 cs_height_lg_60"></div>
    </>
  );
};

export default ContactArea;
