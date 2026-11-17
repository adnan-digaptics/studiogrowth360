'use client'

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/img/studiogrowth360-logo-white.svg";
import { mainServices, industrySolutions } from "@/data/agency";
import { IconMapPin, IconPhone, IconMail } from "@/components/common/AgencyIcons";

const FooterOne = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="sg_section_navy position-relative overflow-hidden pt-5 pb-4" style={{ background: "#0A192F", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      {/* Subtle Blue Glow Accent */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background: "radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container position-relative py-4" style={{ zIndex: 2 }}>
        {/* Top Growth Banner */}
        <div className="p-4 rounded-4 mb-5" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(0, 102, 255, 0.3)" }}>
          <div className="row align-items-center g-3">
            <div className="col-12 col-lg-8">
              <div className="d-flex align-items-center gap-2 mb-1">
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}></span>
                <span className="text-uppercase font-monospace font-size-11 font-weight-bold" style={{ color: "#38BDF8", letterSpacing: "1px" }}>
                  SERVING CREATIVE &amp; WELLNESS STUDIOS ACROSS THE USA
                </span>
              </div>
              <div className="text-white font-size-18 font-weight-bold">
                Ready to Automate Operations &amp; Double Your Studio Bookings?
              </div>
              <div className="text-secondary font-size-13 mt-1">
                Book a 30-minute studio growth consultation to review your current tech stack, booking funnels, and CRM pipeline.
              </div>
            </div>

            <div className="col-12 col-lg-4 text-start text-lg-end">
              <Link href="/book-consultation" className="sg_btn_primary font-size-13 py-2 px-4 d-inline-flex">
                <span>Book Free Strategy Call →</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Architecture */}
        <div className="row g-4 g-lg-5 mb-5">
          {/* Column 1: Brand & Contact Info */}
          <div className="col-12 col-lg-4">
            <Link href="/" className="d-inline-block mb-3" aria-label="StudioGrowth360 Home">
              <Image src={LogoImg} alt="StudioGrowth360" width={220} height={38} style={{ width: "auto", height: "34px" }} />
            </Link>
            <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: "1.65", color: "#94A3B8" }}>
              StudioGrowth360 is a premier digital growth and business automation agency providing GoHighLevel CRM solutions, n8n workflow integrations, AI receptionists, and lead generation to photography, podcast, yoga, and craft studios across the United States.
            </p>

            <div className="d-flex flex-column gap-2 font-size-13 text-secondary mb-3">
              <div className="d-flex align-items-start gap-2">
                <IconMapPin size={16} color="#38BDF8" className="mt-1 flex-shrink-0" />
                <span style={{ color: "#CBD5E1" }}>1S280 Summit Ave Unit E2 Suite 1B, Oakbrook Terrace, IL 60181</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <IconPhone size={15} color="#38BDF8" className="flex-shrink-0" />
                <a href="tel:7737579417" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  (773) 757-9417
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <IconMail size={15} color="#38BDF8" className="flex-shrink-0" />
                <a href="mailto:grow@360growthlab.com" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  grow@360growthlab.com
                </a>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <span className="badge rounded-pill" style={{ background: "rgba(0, 102, 255, 0.15)", color: "#38BDF8", border: "1px solid rgba(0, 102, 255, 0.3)", fontSize: "10px" }}>
                GoHighLevel Certified
              </span>
              <span className="badge rounded-pill" style={{ background: "rgba(0, 102, 255, 0.15)", color: "#38BDF8", border: "1px solid rgba(0, 102, 255, 0.3)", fontSize: "10px" }}>
                n8n Creators
              </span>
              <span className="badge rounded-pill" style={{ background: "rgba(34, 197, 94, 0.15)", color: "#22C55E", border: "1px solid rgba(34, 197, 94, 0.3)", fontSize: "10px" }}>
                Stripe Verified Partner
              </span>
            </div>
          </div>

          {/* Column 2: 7 Main Services */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h4 className="text-white font-size-14 font-weight-bold text-uppercase mb-3" style={{ letterSpacing: "1px", color: "#38BDF8" }}>
              Automation Services
            </h4>
            <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
              {mainServices.map((srv) => (
                <li key={srv.id}>
                  <Link href={`/${srv.slug}`} className="text-decoration-none font-size-13 transition-all d-inline-block py-1" style={{ color: "#94A3B8" }}>
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Who We Help (4 Industries) */}
          <div className="col-12 col-sm-6 col-lg-2">
            <h4 className="text-white font-size-14 font-weight-bold text-uppercase mb-3" style={{ letterSpacing: "1px", color: "#38BDF8" }}>
              Who We Help
            </h4>
            <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
              {industrySolutions.map((ind) => (
                <li key={ind.id}>
                  <Link href={`/${ind.slug}`} className="text-decoration-none font-size-13 transition-all d-inline-block py-1" style={{ color: "#94A3B8" }}>
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-top border-secondary border-opacity-20 mt-1">
                <Link href="/industries-we-serve" className="text-decoration-none font-size-12 font-weight-bold" style={{ color: "#38BDF8" }}>
                  All Case Studies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Links */}
          <div className="col-12 col-lg-3">
            <h4 className="text-white font-size-14 font-weight-bold text-uppercase mb-3" style={{ letterSpacing: "1px", color: "#38BDF8" }}>
              Studio Growth Playbook
            </h4>
            <p className="font-size-13 mb-3" style={{ color: "#94A3B8" }}>
              Join 1,200+ American studio owners receiving our monthly breakdown of CRM automation, AI receptionists, and booking funnels.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-3 font-size-12" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.3)", color: "#22C55E" }}>
                ✓ You&apos;re subscribed! Check your inbox for the Studio CRM Blueprint.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mb-3">
                <div className="d-flex align-items-center gap-1 p-1 rounded-3" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
                  <input
                    type="email"
                    required
                    placeholder="studio@yourbrand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control bg-transparent text-white border-0 py-2 px-3 font-size-13"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                  <button type="submit" className="btn btn-sm text-white px-3 py-2 font-size-12 font-weight-bold" style={{ background: "#0066FF", borderRadius: "6px" }}>
                    Join
                  </button>
                </div>
              </form>
            )}

            <div className="d-flex flex-column gap-1 pt-2">
              <Link href="/pricing" className="text-decoration-none font-size-13" style={{ color: "#94A3B8" }}>
                Pricing Packages
              </Link>
              <Link href="/book-consultation" className="text-decoration-none font-size-13" style={{ color: "#94A3B8" }}>
                Book Free Consultation
              </Link>
              <Link href="/contact" className="text-decoration-none font-size-13" style={{ color: "#94A3B8" }}>
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-4 border-top border-secondary border-opacity-15 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="font-size-12 text-secondary text-center text-md-start" style={{ color: "#64748B" }}>
            © {new Date().getFullYear()} StudioGrowth360 LLC. All rights reserved. Your All-in-One Studio Growth, CRM &amp; Automation Partner across the USA.
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 font-size-12">
            <Link href="/" className="text-decoration-none" style={{ color: "#94A3B8" }}>
              Home
            </Link>
            <span style={{ color: "#475569" }}>·</span>
            <Link href="/services" className="text-decoration-none" style={{ color: "#94A3B8" }}>
              Services
            </Link>
            <span style={{ color: "#475569" }}>·</span>
            <Link href="/industries-we-serve" className="text-decoration-none" style={{ color: "#94A3B8" }}>
              Who We Help
            </Link>
            <span style={{ color: "#475569" }}>·</span>
            <Link href="/pricing" className="text-decoration-none" style={{ color: "#94A3B8" }}>
              Pricing
            </Link>
            <span style={{ color: "#475569" }}>·</span>
            <Link href="/contact" className="text-decoration-none" style={{ color: "#94A3B8" }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
