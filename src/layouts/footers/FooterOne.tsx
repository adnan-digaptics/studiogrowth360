'use client'

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import footerLogo from "@/assets/img/studiogrowth360-logo-white.svg";

const studioSuites = [
  { name: "The Obsidian Lounge", link: "/about" },
  { name: "The Modern Creator Bay", link: "/about" },
  { name: "The Executive Boardroom", link: "/about" },
  { name: "The Intimate Fireside Suite", link: "/about" },
  { name: "The Frontier Tech Lab", link: "/about" },
  { name: "The Master Voice Booth", link: "/about" },
  { name: "Private VIP Green Room", link: "/about" },
];

const productionServices = [
  { name: "4K Multi-Cam Cinema Capture", link: "/service" },
  { name: "Live Audio Engineering & Gain", link: "/service" },
  { name: "24h Master Edit & Loudness", link: "/service" },
  { name: "10 Retention-Optimized Shorts", link: "/service" },
  { name: "Spotify & Apple Syndication", link: "/service" },
  { name: "Remote 4K Guest Concierge", link: "/service" },
  { name: "Turnkey Show Launch Strategy", link: "/service" },
];

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="cs_footer cs_primary_bg position-relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="sg_footer_glow_bottom"></div>

      <div className="container py-5">
        {/* 1. TOP LIVE NETWORK BANNER */}
        <div className="sg_footer_top_bar p-3 p-md-4 rounded-4 mb-5 position-relative overflow-hidden">
          <div className="row align-items-center g-3">
            <div className="col-12 col-lg-7 d-flex align-items-center gap-3">
              <span className="sg_footer_live_radar">
                <span className="sg_footer_radar_ring"></span>
                <span className="sg_footer_radar_core"></span>
              </span>
              <div>
                <div className="text-white font-weight-bold font-size-15 d-flex flex-wrap align-items-center gap-2">
                  <span>BROADCAST NETWORK ONLINE</span>
                  <span className="badge rounded-pill" style={{ background: 'rgba(255, 107, 0, 0.2)', color: '#FF6B00', fontSize: '11px', fontWeight: 700, padding: '4px 10px' }}>
                    LIVE SUITES
                  </span>
                </div>
                <div className="text-secondary font-size-13 mt-1">
                  Suites 1, 2 &amp; 3 Active · 4K Cinema Switching Ready · Accepting 2026/2027 Season Bookings
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 d-flex flex-wrap align-items-center justify-content-lg-end gap-2 gap-sm-3">
              <a href="tel:7737579417" className="sg_footer_contact_pill">
                <span style={{ color: '#FF6B00' }}>📞</span> 773-757-9417
              </a>
              <Link href="/contact" className="sg_footer_book_btn">
                <span>Book Session</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. MAIN 4-COLUMN ARCHITECTURE */}
        <div className="row g-4 g-lg-5 mb-5">
          {/* Column 1: Brand Authority & Studio Specs */}
          <div className="col-12 col-lg-4 col-xl-4 col-md-6">
            <div className="sg_footer_brand_col pe-lg-3">
              <Link href="/" className="d-inline-block mb-3" aria-label="StudioGrowth360 Home">
                <Image src={footerLogo} alt="StudioGrowth360" priority width={200} height={34} style={{ width: 'auto', height: '32px' }} />
              </Link>
              <p className="cs_footer_desc text-secondary mb-3" style={{ fontSize: '13.5px', lineHeight: '1.65' }}>
                Studio360 is an award-winning luxury podcast recording studio and full-service media production network. Acoustically calibrated suites, Sony Cinema Line 4K multi-cam capture, broadcast audio engineering, and turnkey viral distribution.
              </p>

              {/* Direct Studio Contact Card */}
              <div className="sg_footer_contact_card mb-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1S280+Summit+Ave+Unit+E2+Suite+1B,+Oakbrook+Terrace,+IL+60181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-start gap-2 mb-2 text-decoration-none sg_footer_meta_row"
                >
                  <span className="sg_meta_icon">📍</span>
                  <div className="sg_meta_content">
                    <div className="sg_meta_label">Studio Headquarters</div>
                    <div className="sg_meta_value">1S280 Summit Ave Unit E2 Suite 1B, Oakbrook Terrace, IL 60181</div>
                  </div>
                </a>

                <div className="d-flex flex-wrap align-items-center gap-3 pt-2 border-top border-secondary border-opacity-10 mt-2">
                  <a
                    href="mailto:grow@360growthlab.com"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none sg_footer_meta_row"
                  >
                    <span className="sg_meta_icon">✉</span>
                    <span className="sg_meta_value font-weight-bold">grow@360growthlab.com</span>
                  </a>

                  <a
                    href="tel:7737579417"
                    className="d-inline-flex align-items-center gap-2 text-decoration-none sg_footer_meta_row"
                  >
                    <span className="sg_meta_icon">📞</span>
                    <span className="sg_meta_value font-weight-bold">773-757-9417</span>
                  </a>
                </div>
              </div>

              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '11px', color: '#A1A1AA' }}>
                <span style={{ color: '#FF6B00' }}>✦</span>
                <span>STC 65 Soundproofed · Sony FX6 · Shure SM7B</span>
              </div>
            </div>
          </div>

          {/* Column 2: Studio Suites */}
          <div className="col-6 col-lg-2 col-xl-2 col-md-3">
            <h4 className="sg_footer_col_title text-white mb-3 font-size-14 text-uppercase" style={{ letterSpacing: '1px' }}>
              Studio Suites
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {studioSuites.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.link} className="sg_footer_link">
                    <span className="arrow">→</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Production Services */}
          <div className="col-6 col-lg-2 col-xl-3 col-md-3">
            <h4 className="sg_footer_col_title text-white mb-3 font-size-14 text-uppercase" style={{ letterSpacing: '1px' }}>
              Production Services
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {productionServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.link} className="sg_footer_link">
                    <span className="arrow">→</span>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Concierge */}
          <div className="col-12 col-lg-4 col-xl-3 col-md-6">
            <h4 className="sg_footer_col_title text-white mb-3 font-size-14 text-uppercase" style={{ letterSpacing: '1px' }}>
              The Podcast Insider
            </h4>
            <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.6' }}>
              Join 4,200+ founders, creators, and media directors receiving our monthly breakdown of high-retention formats, viral hooks, and broadcast acoustic setups.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-3 font-size-13 text-white mb-3" style={{ background: 'rgba(255, 107, 0, 0.15)', border: '1px solid rgba(255, 107, 0, 0.4)' }}>
                <span className="font-weight-bold" style={{ color: '#FF6B00' }}>✓ You&apos;re Subscribed!</span>
                <p className="mb-0 text-secondary font-size-12 mt-1">Check your inbox for the latest 360° Studio Playbook.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="sg_footer_form mb-3">
                <div className="position-relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your executive email"
                    required
                    className="sg_footer_input w-100"
                  />
                  <button type="submit" className="sg_footer_submit_btn" aria-label="Subscribe to Newsletter">
                    <span>Subscribe</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
                <div className="text-secondary font-size-11 mt-2 d-flex align-items-center gap-1">
                  <span>🔒</span> No spam. Strictly curated broadcast insights.
                </div>
              </form>
            )}

            <div className="sg_footer_direct_contact pt-3 border-top border-secondary border-opacity-25 mt-3">
              <div className="font-size-12 text-secondary">
                Direct Booking Concierge:
              </div>
              <a href="mailto:grow@360growthlab.com" className="font-size-13 text-white hover-orange font-weight-bold text-decoration-none">
                grow@360growthlab.com
              </a>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="sg_footer_bottom_bar pt-3 border-top border-secondary border-opacity-10 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-secondary font-size-13 text-center text-md-start">
            © {new Date().getFullYear()} StudioGrowth360 Network LLC. All rights reserved. Acoustically tuned for high-impact conversations.
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 font-size-12">
            <Link href="/" className="text-secondary text-decoration-none hover-white">
              Home
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <Link href="/about" className="text-secondary text-decoration-none hover-white">
              About
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <Link href="/service" className="text-secondary text-decoration-none hover-white">
              Services
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <Link href="/portfolio" className="text-secondary text-decoration-none hover-white">
              Portfolio
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <Link href="/blog" className="text-secondary text-decoration-none hover-white">
              Studio Insights
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <Link href="/faq" className="text-secondary text-decoration-none hover-white">
              Studio Guide
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <Link href="/contact" className="text-secondary text-decoration-none hover-white">
              Contact
            </Link>
            <span className="text-secondary opacity-50">·</span>
            <button
              onClick={scrollToTop}
              className="text-secondary border-0 bg-transparent p-0 hover-orange d-inline-flex align-items-center gap-1 font-size-12"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
