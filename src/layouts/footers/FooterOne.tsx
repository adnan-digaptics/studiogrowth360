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

const socialPlatforms = [
  {
    name: "YouTube",
    handle: "YouTube Shows",
    href: "https://youtube.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    handle: "Spotify Podcasts",
    href: "https://spotify.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.495 17.304c-.216.353-.674.464-1.027.248-2.812-1.718-6.353-2.107-10.523-1.155-.404.093-.807-.16-.899-.562-.093-.404.16-.807.562-.899 4.568-1.044 8.49-.607 11.64 1.341.353.216.464.674.247 1.027zm1.466-3.26c-.272.441-.849.58-1.29.308-3.218-1.978-8.125-2.55-11.93-1.394-.497.151-1.03-.136-1.181-.634-.15-.498.137-1.031.634-1.182 4.354-1.321 9.774-.683 13.458 1.58.441.272.58.849.309 1.29zm.126-3.398c-3.858-2.29-10.222-2.502-13.886-1.389-.59.18-1.22-.162-1.4-.753-.18-.59.163-1.22.753-1.4 4.218-1.28 11.25-1.037 15.688 1.597.531.315.704 1.004.389 1.535-.315.531-1.004.704-1.544.41z"/>
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    handle: "Apple Podcasts",
    href: "https://apple.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.15c.67-.82 1.13-1.96.99-3.11-1 .04-2.16.67-2.84 1.47-.6.69-1.12 1.83-.98 2.95 1.11.09 2.19-.55 2.83-1.31"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@studio360pods",
    href: "https://instagram.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "StudioGrowth360",
    href: "https://linkedin.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@studio360growth",
    href: "https://x.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
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

        {/* 3. SOCIAL MEDIA CHANNELS ROW */}
        <div className="sg_footer_social_bar py-4 border-top border-secondary border-opacity-25 mb-4">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3">
            <div className="text-secondary font-size-13 text-center text-lg-start">
              <strong className="text-white">Syndication &amp; Content Channels:</strong> Stream signature shows &amp; viral reels across our networks
            </div>

            <div className="cs_footer_social d-flex flex-wrap justify-content-center gap-2">
              {socialPlatforms.map((plat, idx) => (
                <a
                  key={idx}
                  href={plat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sg_social_pill"
                  title={plat.handle}
                >
                  <span className="icon">{plat.icon}</span>
                  <span className="name">{plat.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 4. BOTTOM COPYRIGHT & LEGAL BAR */}
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
