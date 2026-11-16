"use client";

import React, { FormEvent, useState, useEffect } from "react";
import { IconLock, IconCheckCircle, IconZap } from "@/components/common/AgencyIcons";

const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "grow@360growthlab.com";

export interface ConsultationFormProps {
  serviceSlug?: string;
  serviceName?: string;
  industrySlug?: string;
  industryName?: string;
  title?: string;
  subtitle?: string;
  badgeText?: string;
  submitButtonText?: string;
  source?: string;
  compact?: boolean;
  className?: string;
}

// All 7 Core Services as defined in business model
const allServicesList = [
  { id: "lead-generation", name: "Lead Generation Services (Meta, Google, Funnels)" },
  { id: "n8n-automation", name: "n8n Automation Services (Custom Workflows & APIs)" },
  { id: "gohighlevel-services", name: "GoHighLevel (GHL) Services & CRM Snapshots" },
  { id: "crm-solutions", name: "CRM & Client Management (Pipelines & Retention)" },
  { id: "ai-automation", name: "AI Automation Services (Voice Agents & Receptionist)" },
  { id: "website-funnel-development", name: "Website & High-Converting Booking Funnels" },
  { id: "digital-marketing", name: "Digital Marketing & Review Reputation Systems" },
  { id: "full-stack", name: "Full-Stack Studio Growth (All Systems Combined)" },
];

// All 4 Studio Verticals
const allIndustriesList = [
  { id: "photography-studios", name: "Photography Studio" },
  { id: "podcast-studios", name: "Podcast & Media Studio" },
  { id: "yoga-studios", name: "Yoga & Movement Studio" },
  { id: "craft-studios", name: "Arts & Crafts Studio" },
  { id: "other", name: "Other Creative / Wellness Facility" },
];

export default function ConsultationForm({
  serviceSlug,
  serviceName,
  industrySlug,
  industryName,
  title,
  subtitle,
  badgeText,
  submitButtonText,
  source,
  compact = false,
  className = "",
}: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Helper to determine initial service
  const getInitialService = () => {
    if (serviceSlug) {
      const match = allServicesList.find(
        (s) => s.id === serviceSlug || s.name.toLowerCase().includes(serviceSlug.toLowerCase())
      );
      if (match) return match.name;
    }
    if (serviceName) {
      const match = allServicesList.find((s) =>
        s.name.toLowerCase().includes(serviceName.toLowerCase())
      );
      if (match) return match.name;
    }
    return allServicesList[0].name;
  };

  // Helper to determine initial industry
  const getInitialIndustry = () => {
    if (industrySlug) {
      const match = allIndustriesList.find(
        (i) => i.id === industrySlug || i.name.toLowerCase().includes(industrySlug.toLowerCase())
      );
      if (match) return match.name;
    }
    if (industryName) {
      const match = allIndustriesList.find((i) =>
        i.name.toLowerCase().includes(industryName.toLowerCase())
      );
      if (match) return match.name;
    }
    return allIndustriesList[0].name;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studio: "",
    industry: getInitialIndustry(),
    service: getInitialService(),
    monthlyVolume: "$5,000 – $15,000 / mo",
    message: "",
  });

  // Keep form in sync if props change dynamically
  useEffect(() => {
    if (serviceName || serviceSlug) {
      setFormData((prev) => ({ ...prev, service: getInitialService() }));
    }
    if (industryName || industrySlug) {
      setFormData((prev) => ({ ...prev, industry: getInitialIndustry() }));
    }
  }, [serviceName, serviceSlug, industryName, industrySlug]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const submissionSource =
      source ||
      (serviceName ? `Service: ${serviceName}` : industryName ? `Industry: ${industryName}` : "Global Studio Consultation Form");

    const subject = `[Studio Inquiry] ${formData.studio || formData.name} - ${formData.service}`;
    const body = [
      `=========================================`,
      `STUDIOGROWTH360 - CONSULTATION REQUEST`,
      `=========================================`,
      `Full Name: ${formData.name}`,
      `Studio Name: ${formData.studio}`,
      `Work Email: ${formData.email}`,
      `Phone Number: ${formData.phone}`,
      `Studio Vertical: ${formData.industry}`,
      `Selected Growth Service: ${formData.service}`,
      `Estimated Monthly Volume: ${formData.monthlyVolume}`,
      `Inquiry Source: ${submissionSource}`,
      ``,
      `Current Bottlenecks & Project Scope:`,
      formData.message || "No additional comments provided.",
      `=========================================`,
    ].join("\n");

    // Open user's email client with pre-filled details
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div
        className={`p-4 p-md-5 rounded-4 text-center border bg-white shadow-sm ${className}`}
        style={{ borderColor: "#86EFAC" }}
        role="status"
      >
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
          style={{ width: "60px", height: "60px", background: "#DCFCE7", color: "#16A34A" }}
        >
          <IconCheckCircle size={36} color="#16A34A" />
        </div>
        <h3 className="font-size-22 font-weight-bold text-dark mb-2">
          Consultation Request Prepared!
        </h3>
        <p className="text-secondary font-size-14 max-w-500 mx-auto mb-4" style={{ lineHeight: "1.65" }}>
          We have formatted your studio growth inquiry for{" "}
          <strong className="text-dark">{formData.studio || formData.name}</strong>. If your email application did not launch automatically, send your notes directly to{" "}
          <a href={`mailto:${emailAddress}`} className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>
            {emailAddress}
          </a>{" "}
          or call our studio automation team at{" "}
          <a href="tel:7737579417" className="text-dark font-weight-bold text-decoration-none">
            (773) 757-9417
          </a>
          .
        </p>
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill px-4 py-2 font-size-13 font-weight-bold"
          style={{ borderColor: "#0066FF", color: "#0066FF" }}
          onClick={() => setSubmitted(false)}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  // Derived Title and Subtitle based on context
  const displayTitle =
    title ||
    (serviceName
      ? `Schedule Free Consultation for ${serviceName}`
      : industryName
      ? `Get Your Free ${industryName} Growth Audit`
      : "Request a Free 30-Minute Studio Strategy Call");

  const displaySubtitle =
    subtitle ||
    (serviceName
      ? `Connect directly with our automation engineers to review how ${serviceName.toLowerCase()} will eliminate admin overhead and scale your bookings.`
      : industryName
      ? `Let's analyze your current client acquisition, booking calendars, and retention systems with a customized blueprint for ${industryName.toLowerCase()}.`
      : "Tell us about your studio and current booking bottlenecks. We’ll review your systems and share a tailored growth roadmap.");

  return (
    <form
      className={`p-4 p-md-5 rounded-4 border shadow-sm bg-white position-relative ${className}`}
      style={{ borderColor: "#E2E8F0" }}
      onSubmit={handleSubmit}
    >
      {/* Top Header */}
      <div className="mb-4">
        {badgeText && (
          <div className="sg_badge_electric mb-2">
            <IconZap size={13} color="#0066FF" />
            <span>{badgeText}</span>
          </div>
        )}
        <h3 className="text-dark font-size-22 font-size-md-24 font-weight-bold mb-2">
          {displayTitle}
        </h3>
        <p className="text-secondary font-size-13 mb-0" style={{ lineHeight: "1.6" }}>
          {displaySubtitle}
        </p>
      </div>

      <div className="row g-3 mb-4">
        {/* Full Name */}
        <div className="col-12 col-md-6">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Your Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control rounded-3 py-2 px-3 font-size-14"
            placeholder="e.g. Marcus Vance"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Work Email */}
        <div className="col-12 col-md-6">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Studio Work Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control rounded-3 py-2 px-3 font-size-14"
            placeholder="marcus@vancestudio.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Phone */}
        <div className="col-12 col-md-6">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Direct Phone / SMS <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            className="form-control rounded-3 py-2 px-3 font-size-14"
            placeholder="(773) 000-0000"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Studio Name */}
        <div className="col-12 col-md-6">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Studio / Facility Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control rounded-3 py-2 px-3 font-size-14"
            placeholder="e.g. Lumina Creative Space"
            required
            value={formData.studio}
            onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
          />
        </div>

        {/* Studio Vertical */}
        <div className="col-12 col-md-6">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Studio Category / Vertical <span className="text-danger">*</span>
          </label>
          <select
            className="form-select rounded-3 py-2 px-3 font-size-14"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          >
            {allIndustriesList.map((ind) => (
              <option key={ind.id} value={ind.name}>
                {ind.name}
              </option>
            ))}
          </select>
        </div>

        {/* Service Needed */}
        <div className="col-12 col-md-6">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Growth System / Service Needed <span className="text-danger">*</span>
          </label>
          <select
            className="form-select rounded-3 py-2 px-3 font-size-14"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          >
            {allServicesList.map((srv) => (
              <option key={srv.id} value={srv.name}>
                {srv.name}
              </option>
            ))}
          </select>
        </div>

        {/* Monthly Volume */}
        {!compact && (
          <div className="col-12">
            <label className="form-label font-size-13 font-weight-bold text-dark">
              Estimated Monthly Studio Booking / Revenue Volume
            </label>
            <select
              className="form-select rounded-3 py-2 px-3 font-size-14"
              value={formData.monthlyVolume}
              onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
            >
              <option value="Under $5,000 / mo">&lt; $5,000 / month (&lt; 20 bookings)</option>
              <option value="$5,000 – $15,000 / mo">$5,000 – $15,000 / month (20 – 60 bookings)</option>
              <option value="$15,000 – $40,000 / mo">$15,000 – $40,000 / month (60 – 150 bookings)</option>
              <option value="$40,000+ / mo">$40,000+ / month (High-Volume Multi-Room Facility)</option>
            </select>
          </div>
        )}

        {/* Message */}
        <div className="col-12">
          <label className="form-label font-size-13 font-weight-bold text-dark">
            Current Booking Bottlenecks or Automation Goals
          </label>
          <textarea
            className="form-control rounded-3 py-2 px-3 font-size-14"
            rows={3}
            placeholder="Tell us about your current tools (HoneyBook, Acuity, Mindbody, Zapier), weekly admin headaches, or revenue goals..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="sg_btn_primary font-size-15 py-3 px-4 w-100 justify-content-center"
      >
        <span>
          {loading
            ? "Preparing Your Inquiry..."
            : submitButtonText || "Schedule My Free Consultation Call →"}
        </span>
      </button>

      <div className="text-center mt-3">
        <small className="text-secondary font-size-12 d-inline-flex align-items-center gap-1 justify-content-center">
          <IconLock size={13} color="#64748B" />
          <span>Strictly confidential. 100% free discovery audit with zero high-pressure sales tactics.</span>
        </small>
      </div>
    </form>
  );
}

// Re-export as StudioGlobalForm for explicit naming
export { ConsultationForm as StudioGlobalForm };
