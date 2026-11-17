'use client'

import React from 'react';
import Link from 'next/link';

const pillars = [
  {
    tag: "MODULE 01 · OPERATIONS",
    title: "Studio Management OS",
    highlight: "Automate room bookings, intake forms, and equipment checklists.",
    description:
      "A specialized multi-room scheduling engine engineered specifically for recording facilities. Handle automated buffer intervals, engineer assignments, digital client liability releases, and instant Stripe room deposits.",
    benefits: [
      "Multi-suite calendar with automated sound isolation conflict alerts",
      "Digital NDA, guest release, and studio liability auto-signatures",
      "Stripe Connect direct payouts with zero hold times",
      "Client Session Vault with auto-expiring private download links",
    ],
    ctaText: "Explore Management OS",
    ctaLink: "/solutions",
    color: "#FF6B00",
    badge: "Operations",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    tag: "MODULE 02 · FULFILLMENT",
    title: "Wholesale 24h Post-Production",
    highlight: "Offer premium 4K editing & viral shorts without hiring in-house staff.",
    description:
      "Tap into Growth Domains' wholesale creative network. Upload your client's raw ISO stems right after recording. We deliver multi-cam cut episodes and 10 viral shorts in under 24 hours at $160 wholesale, which you resell at $450+.",
    benefits: [
      "Guaranteed under 24-hour turnaround SLA with strict quality control",
      "Broadcast vocal mastering (-14 LUFS Spotify, -16 LUFS Apple)",
      "10x kinetic-subtitled vertical shorts formatted for TikTok & Reels",
      "65%+ pure profit margin retained by your studio on every session",
    ],
    ctaText: "View Wholesale Rates",
    ctaLink: "/services",
    color: "#38bdf8",
    badge: "Wholesale Fulfillment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    tag: "MODULE 03 · REVENUE & SEO",
    title: "Business Growth & Acquisition",
    highlight: "Fill weekday room vacancies with high-ticket corporate contracts.",
    description:
      "Most studios suffer from dead hours between Monday and Thursday. Growth Domains deploys localized high-intent landing pages, Google Local Pack dominance, and automated B2B executive show outreach to fill your schedule.",
    benefits: [
      "Top-3 local Google Maps placement for 'podcast studio near me'",
      "Turnkey corporate show retainer proposals ($2,500/mo - $6,000/mo)",
      "Automated client re-engagement sequences to maximize LTV",
      "Syndication setup for corporate thought leadership podcasts",
    ],
    ctaText: "Discover Growth Solutions",
    ctaLink: "/solutions",
    color: "#22c55e",
    badge: "Client Acquisition",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    tag: "MODULE 04 · TOOLS & RESOURCES",
    title: "Interactive Studio Modeler",
    highlight: "Field-tested calculators, acoustic STC estimators & legal vaults.",
    description:
      "Access our proprietary suite of studio optimization tools. Calculate your exact hourly yield, simulate acoustic wall buildout STC isolation ratings, and generate rock-solid client release agreements in seconds.",
    benefits: [
      "Dynamic Rate Card & Studio Yield Modeler with slider projections",
      "Acoustic STC & decibel bleed calculator for studio construction",
      "Production liability agreement and mutual NDA document generator",
      "Weekly studio operator benchmark reports and rate card indexes",
    ],
    ctaText: "Access Free Tools",
    ctaLink: "/tools",
    color: "#f59e0b",
    badge: "Operator Resources",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
];

const PlatformPillars = () => {
  return (
    <section className="py-5 position-relative" style={{ background: '#09090B' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              FOUR PILLARS OF STUDIO GROWTH
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Everything Your Studio Needs to Operate, Produce &amp; Scale
          </h2>
          <p className="text-secondary font-size-15 font-size-md-16 cs_m0">
            We don’t compete with studios; we empower them. Growth Domains provides the specialized technology, wholesale post-production horsepower, and business playbooks that transform independent facilities into high-margin media enterprises.
          </p>
        </div>

        {/* 4 Bento Grid Cards */}
        <div className="row g-4 align-items-stretch">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="col-12 col-lg-6">
              <div
                className="p-4 p-xl-5 rounded-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Glow Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '180px',
                    height: '180px',
                    background: `radial-gradient(circle, ${pillar.color}22 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                ></div>

                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span
                      className="font-monospace text-uppercase font-size-11 font-weight-bold"
                      style={{ color: pillar.color, letterSpacing: '1px' }}
                    >
                      {pillar.tag}
                    </span>
                    <span
                      className="p-2 rounded-3 text-white"
                      style={{ background: 'rgba(255, 255, 255, 0.05)', color: pillar.color }}
                    >
                      {pillar.icon}
                    </span>
                  </div>

                  <h3 className="text-white font-size-22 font-size-xl-26 font-weight-bold mb-2">
                    {pillar.title}
                  </h3>
                  <div className="font-size-14 font-weight-bold mb-3" style={{ color: '#E4E4E7' }}>
                    {pillar.highlight}
                  </div>
                  <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.6' }}>
                    {pillar.description}
                  </p>

                  <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                    {pillar.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="d-flex align-items-start gap-2 font-size-13 text-secondary">
                        <span style={{ color: pillar.color, flexShrink: 0, marginTop: '2px' }}>✓</span>
                        <span className="text-white-50">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between">
                  <Link
                    href={pillar.ctaLink}
                    className="text-white text-decoration-none font-size-13 font-weight-bold hover-orange d-inline-flex align-items-center gap-2"
                  >
                    <span>{pillar.ctaText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>

                  <span className="badge rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#A1A1AA', fontSize: '11px' }}>
                    {pillar.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformPillars;

