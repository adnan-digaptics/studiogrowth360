'use client'

import React from 'react';
import Link from 'next/link';

const HeroPlatform = () => {

  return (
    <section className="sg_hero_master position-relative overflow-hidden py-4 py-lg-5">
      {/* Ambient Radial Gradient Glows */}
      <div className="sg_glow_orb sg_glow_orb_1"></div>
      <div className="sg_glow_orb sg_glow_orb_2"></div>
      <div className="sg_hero_grid_pattern"></div>

      <div className="container position-relative py-3 py-md-4" style={{ zIndex: 3 }}>
        {/* Platform Badge */}
        <div className="text-center mb-3">
          <div className="sg_hero_badge d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill">
            <span className="sg_pulse_dot"></span>
            <span className="sg_badge_text">
              THE ALL-IN-ONE OPERATING SYSTEM &amp; GROWTH PLATFORM FOR STUDIOS
            </span>
          </div>
        </div>

        {/* Master Heading */}
        <div className="text-center max-w-1050 mx-auto mb-3">
          <h1 className="sg_hero_main_title anim_heading_title">
            Manage Operations. Fill Empty Hours.{" "}
            <span className="sg_gradient_text">Scale Your Studio Business.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-850 mx-auto mb-4">
          <p className="sg_hero_main_desc text-secondary" style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: '1.6' }}>
            Growth Domains empowers podcast, video, and creative studios with modern multi-suite booking software, 24-hour wholesale post-production fulfillment, and high-ticket client acquisition pipelines.
          </p>
        </div>

        {/* Hero CTA Cluster */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
          <Link href="/onboard" className="sg_primary_cta">
            <span>Onboard Your Studio</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
            </svg>
          </Link>

          <Link href="/dashboard" className="sg_secondary_cta">
            <span>Live Studio OS Demo</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </Link>

          <Link href="/tools" className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 text-secondary text-decoration-none hover-white" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '13.5px' }}>
            <span>🧮 Rate Card Modeler</span>
          </Link>
        </div>

        {/* Trust Strip */}
        <div className="text-center mb-5">
          <div className="sg_hero_social_pill d-inline-flex flex-wrap align-items-center justify-content-center gap-2 gap-sm-3 px-3 py-2 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.035)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="text-warning font-size-13">★★★★★</span>
            <span className="text-white font-size-13 font-weight-bold">350+ Independent Studios</span>
            <span className="text-secondary opacity-50">·</span>
            <span className="text-secondary font-size-13">$4.2M+ Booking GMV Processed</span>
            <span className="text-secondary opacity-50 d-none d-md-inline">·</span>
            <span className="text-white font-size-13 d-none d-md-inline" style={{ color: '#FF6B00' }}>✦ 65%+ White-Label Margins</span>
          </div>
        </div>

        {/* High-Fidelity SaaS UI Showcase Deck */}
        <div className="sg_showcase_deck position-relative max-w-1150 mx-auto mb-5">
          <div className="sg_browser_frame rounded-4 overflow-hidden position-relative" style={{ border: '1px solid rgba(255, 107, 0, 0.25)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 107, 0, 0.15)' }}>
            {/* Top Window Bar */}
            <div className="sg_browser_bar d-flex align-items-center justify-content-between px-3 py-2" style={{ background: '#121216', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="d-flex align-items-center gap-2">
                <span className="sg_dot sg_dot_red"></span>
                <span className="sg_dot sg_dot_yellow"></span>
                <span className="sg_dot sg_dot_green"></span>
                <span className="text-secondary font-size-12 ms-2 d-none d-sm-inline">Growth Domains · Studio OS v2.4</span>
              </div>
              <div className="d-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '11px', color: '#A1A1AA' }}>
                <span style={{ color: '#22c55e' }}>●</span>
                <span className="font-monospace">app.growthdomains.com/dashboard/suites</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="badge rounded-pill" style={{ background: 'rgba(255, 107, 0, 0.2)', color: '#FF6B00', fontSize: '11px' }}>
                  Live Facility Feed
                </span>
              </div>
            </div>

            {/* Dashboard Inner SaaS Layout Preview */}
            <div className="p-3 p-md-4" style={{ background: '#0D0D11' }}>
              {/* SaaS Header Bar */}
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pb-3 mb-4 border-bottom border-secondary border-opacity-10">
                <div>
                  <div className="text-white font-weight-bold font-size-18 d-flex align-items-center gap-2">
                    <span>Apex Soundstage &amp; Visuals</span>
                    <span className="badge bg-success bg-opacity-25 text-success font-size-11">Active Partner</span>
                  </div>
                  <div className="text-secondary font-size-12">Chicago Facility · 3 Multi-Cam Suites · Growth Plan</div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="px-3 py-1 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="font-size-10 text-secondary text-uppercase">Monthly Run-Rate</div>
                    <div className="text-white font-weight-bold font-size-14" style={{ color: '#FF6B00' }}>$24,850 <span className="font-size-11 text-success">(+34%)</span></div>
                  </div>
                  <Link href="/dashboard" className="btn btn-sm px-3 py-2 text-white font-size-12 font-weight-bold" style={{ background: '#FF6B00', borderRadius: '6px' }}>
                    Open Portal →
                  </Link>
                </div>
              </div>

              {/* 4 Dashboard Metric Tiles */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-secondary font-size-11 mb-1">Room Utilization</div>
                    <div className="text-white font-weight-bold font-size-20">91.4%</div>
                    <div className="font-size-11 text-success mt-1">↑ +18.2% vs last month</div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-secondary font-size-11 mb-1">Wholesale Resale Profit</div>
                    <div className="text-white font-weight-bold font-size-20">$6,960</div>
                    <div className="font-size-11 text-secondary mt-1">24 episodes resold @ 65%</div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-secondary font-size-11 mb-1">Avg Hourly Yield</div>
                    <div className="text-white font-weight-bold font-size-20">$185/hr</div>
                    <div className="font-size-11 text-success mt-1">Dynamic rate card active</div>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="text-secondary font-size-11 mb-1">Wholesale SLA Delivery</div>
                    <div className="text-white font-weight-bold font-size-20">&lt; 21.4h</div>
                    <div className="font-size-11" style={{ color: '#FF6B00' }}>100% on-time turnaround</div>
                  </div>
                </div>
              </div>

              {/* Two Column Split: Calendar Schedule vs 24h Wholesale Queue */}
              <div className="row g-3">
                {/* Left: Suite Schedule Mock */}
                <div className="col-12 col-lg-7">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="text-white font-size-13 font-weight-bold">Today&apos;s Suite Reservations</div>
                      <span className="font-size-11 text-secondary">3 Rooms Booked Solid</span>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      <div className="p-2 rounded-2 d-flex align-items-center justify-content-between" style={{ background: 'rgba(255, 107, 0, 0.08)', borderLeft: '3px solid #FF6B00' }}>
                        <div>
                          <div className="text-white font-weight-bold font-size-13">09:00 - 11:30 · Suite A (Sony FX6 4K)</div>
                          <div className="text-secondary font-size-11">Enterprise Client: Horizon AI Podcast · Paid $450</div>
                        </div>
                        <span className="badge bg-success bg-opacity-25 text-success font-size-10">Checked In</span>
                      </div>

                      <div className="p-2 rounded-2 d-flex align-items-center justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.02)', borderLeft: '3px solid #6366f1' }}>
                        <div>
                          <div className="text-white font-weight-bold font-size-13">12:30 - 14:00 · Suite B (Acoustic Vocals)</div>
                          <div className="text-secondary font-size-11">Venture Insights · Shure SM7B Vocal Session · Paid $280</div>
                        </div>
                        <span className="badge bg-primary bg-opacity-25 text-primary font-size-10">Upcoming</span>
                      </div>

                      <div className="p-2 rounded-2 d-flex align-items-center justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.02)', borderLeft: '3px solid #22c55e' }}>
                        <div>
                          <div className="text-white font-weight-bold font-size-13">15:00 - 18:00 · Suite C (Video Cyclorama)</div>
                          <div className="text-secondary font-size-11">Founder Roundtable · Turnkey + 10 Shorts Package · Paid $850</div>
                        </div>
                        <span className="badge bg-secondary bg-opacity-25 text-secondary font-size-10">Confirmed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Wholesale Post-Production Orders */}
                <div className="col-12 col-lg-5">
                  <div className="p-3 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="text-white font-size-13 font-weight-bold">Wholesale 24h Post-Production</div>
                      <span className="badge bg-warning bg-opacity-25 text-warning font-size-10">2 Active Edits</span>
                    </div>

                    <div className="d-flex flex-column gap-2">
                      <div className="p-2 rounded-2" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="d-flex justify-content-between align-items-start mb-1">
                          <div className="text-white font-weight-bold font-size-12">Episode #48 Multi-Cam 4K</div>
                          <span className="font-size-10 text-success">Estimated: 4h remaining</span>
                        </div>
                        <div className="w-100 rounded-pill mb-1" style={{ height: '5px', background: 'rgba(255, 255, 255, 0.1)' }}>
                          <div className="rounded-pill" style={{ width: '75%', height: '100%', background: '#FF6B00' }}></div>
                        </div>
                        <div className="d-flex justify-content-between font-size-10 text-secondary">
                          <span>Wholesale Cost: $160</span>
                          <span className="text-white">Client Billed: $450 (Profit: +$290)</span>
                        </div>
                      </div>

                      <div className="p-2 rounded-2" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                        <div className="d-flex justify-content-between align-items-start mb-1">
                          <div className="text-white font-weight-bold font-size-12">10x Viral TikTok / Reels Shorts</div>
                          <span className="badge bg-success bg-opacity-25 text-success font-size-9">Ready in Vault</span>
                        </div>
                        <div className="d-flex justify-content-between font-size-10 text-secondary">
                          <span>Kinetic Subtitles &amp; Audio Hooks</span>
                          <span className="text-white">Profit: +$200</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPlatform;
