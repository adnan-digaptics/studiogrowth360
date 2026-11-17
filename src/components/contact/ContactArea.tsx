"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

const ContactArea = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studioName: "",
    city: "",
    suites: "2 Suites",
    interest: "Studio Management OS Walkthrough",
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
    const subject = `[Platform Demo Request] ${formData.interest} - ${formData.studioName || formData.name}`;
    const body = [
      `Studio Operator: ${formData.name}`,
      `Work Email: ${formData.email}`,
      `Phone/WhatsApp: ${formData.phone || "Not provided"}`,
      `Studio Facility: ${formData.studioName || "Not provided"}`,
      `Facility Location: ${formData.city || "Not provided"}`,
      `Suites Count: ${formData.suites}`,
      `Platform Interest: ${formData.interest}`,
      "",
      "Studio Background & Inquiries:",
      formData.message,
    ].join("\n");

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>
      <section className="cs_contact_section py-4">
        <div className="container">
          <div className="cs_section_heading cs_style_1 mb-5">
            <div className="cs_section_heading_text">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
                <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                  PLATFORM CONCIERGE &amp; ENTERPRISE DEMOS
                </span>
              </div>
              <h1 className="cs_contact_title anim_text_writting text-white font-weight-bold" style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}>
                Scale Your Facility with Growth Domains
              </h1>
              <p className="text-secondary font-size-17 mt-3" style={{ maxWidth: '720px', lineHeight: '1.7' }}>
                Schedule a 1-on-1 platform walkthrough with a former studio operator. Explore how our multi-suite scheduling, 24-hour wholesale post-production, and rate card yield algorithms can be tailored to your space.
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
                      Your demo inquiry has been dispatched to our Studio Success team. We will review your facility profile and reach out within 24 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="sg_primary_cta mt-3"
                    >
                      <span>Submit Another Inquiry</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
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
                          placeholder="e.g. Elena Rostova"
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
                          placeholder="e.g. operator@studiovault.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-studio" className="text-white font-size-14 mb-1 font-weight-bold">
                          Studio Facility Name <span style={{ color: '#FF6B00' }}>*</span>
                        </label>
                        <input
                          className="form-control bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          type="text"
                          id="contact-studio"
                          name="studioName"
                          value={formData.studioName}
                          onChange={handleChange}
                          placeholder="e.g. Soho Audio Laboratories"
                          required
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-city" className="text-white font-size-14 mb-1 font-weight-bold">
                          City &amp; State / Country
                        </label>
                        <input
                          className="form-control bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          type="text"
                          id="contact-city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Chicago, IL"
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-suites" className="text-white font-size-14 mb-1 font-weight-bold">
                          Number of Recording Suites
                        </label>
                        <select
                          className="form-select bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          id="contact-suites"
                          name="suites"
                          value={formData.suites}
                          onChange={handleChange}
                        >
                          <option>1 Suite (Boutique Pod Studio)</option>
                          <option>2 Suites (Dual Video &amp; Vocal)</option>
                          <option>3 – 5 Suites (Multi-Room Production)</option>
                          <option>6+ Suites / Multi-Location Franchise</option>
                          <option>Planning New Studio Buildout</option>
                        </select>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="contact-interest" className="text-white font-size-14 mb-1 font-weight-bold">
                          Primary Area of Interest
                        </label>
                        <select
                          className="form-select bg-dark text-white border-secondary p-3"
                          style={{ borderRadius: '8px' }}
                          id="contact-interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                        >
                          <option>Studio Management OS Walkthrough</option>
                          <option>Wholesale 24h Post-Production Partnership</option>
                          <option>Multi-Location Enterprise Tier</option>
                          <option>Local Google Pack &amp; Client Acquisition</option>
                          <option>Acoustic STC Audit &amp; Certification</option>
                          <option>Hardware / Software Partner Integration</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contact-message" className="text-white font-size-14 mb-1 font-weight-bold">
                        Facility Background &amp; Current Bottlenecks
                      </label>
                      <textarea
                        className="form-control bg-dark text-white border-secondary p-3"
                        style={{ borderRadius: '8px', minHeight: '120px' }}
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your current studio setup, booking software, weekday utilization rate, or wholesale post-production needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="sg_primary_cta w-100 justify-content-center py-3"
                      style={{ border: 'none' }}
                    >
                      <span>Request Platform Walkthrough</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Direct Information Column */}
            <div className="col-12 col-lg-5">
              <div className="p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <h3 className="text-white font-size-22 font-weight-bold mb-3">
                    Studio Platform Support &amp; Concierge
                  </h3>
                  <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.6' }}>
                    Need immediate onboarding assistance, wholesale SLA dispatch status, or custom API integration support? Our team is available 24/7.
                  </p>

                  <div className="d-flex flex-column gap-3 mb-4">
                    <div className="d-flex align-items-start gap-3">
                      <span className="p-2 rounded-3 text-white" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00' }}>
                        ✉
                      </span>
                      <div>
                        <div className="text-secondary font-size-11 text-uppercase">Direct Operator Concierge</div>
                        <a href="mailto:grow@360growthlab.com" className="text-white font-weight-bold font-size-14 text-decoration-none hover-orange">
                          grow@360growthlab.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <span className="p-2 rounded-3 text-white" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00' }}>
                        📞
                      </span>
                      <div>
                        <div className="text-secondary font-size-11 text-uppercase">Platform Hotline</div>
                        <a href="tel:7737579417" className="text-white font-weight-bold font-size-14 text-decoration-none hover-orange">
                          773-757-9417
                        </a>
                      </div>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <span className="p-2 rounded-3 text-white" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00' }}>
                        📍
                      </span>
                      <div>
                        <div className="text-secondary font-size-11 text-uppercase">Platform Headquarters</div>
                        <div className="text-white font-size-13">
                          1S280 Summit Ave Unit E2 Suite 1B, Oakbrook Terrace, IL 60181
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-top border-secondary border-opacity-10">
                  <div className="text-white font-size-13 font-weight-bold mb-2">Instant Self-Serve Shortcuts:</div>
                  <div className="d-flex flex-column gap-2">
                    <Link href="/onboard" className="text-secondary font-size-13 hover-white text-decoration-none d-flex align-items-center justify-content-between">
                      <span>4-Step Studio Onboarding Wizard</span>
                      <span style={{ color: '#FF6B00' }}>→</span>
                    </Link>
                    <Link href="/dashboard" className="text-secondary font-size-13 hover-white text-decoration-none d-flex align-items-center justify-content-between">
                      <span>Interactive Studio OS Portal</span>
                      <span style={{ color: '#FF6B00' }}>→</span>
                    </Link>
                    <Link href="/tools" className="text-secondary font-size-13 hover-white text-decoration-none d-flex align-items-center justify-content-between">
                      <span>Rate Card &amp; Yield Modeler</span>
                      <span style={{ color: '#FF6B00' }}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
