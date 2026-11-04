'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { publicAsset } from '@/utils/publicAsset';

const heroStats = [
  { value: "1,200+", label: "Episodes Recorded", detail: "Across 180+ signature shows" },
  { value: "500M+", label: "Total Stream Views", detail: "YouTube, Spotify & Apple" },
  { value: "14+", label: "Top 100 Charted Shows", detail: "In Business, Tech & Culture" },
  { value: "24h", label: "Edit & Shorts Turnaround", detail: "Same-day 4K multi-cam ingest" },
];

const HeroHomeOne = () => {
  return (
    <section className="sg_hero_master position-relative overflow-hidden">
      {/* Ambient Radial Gradient Glows */}
      <div className="sg_glow_orb sg_glow_orb_1"></div>
      <div className="sg_glow_orb sg_glow_orb_2"></div>
      <div className="sg_hero_grid_pattern"></div>

      <div className="container position-relative py-3 py-md-4" style={{ zIndex: 3 }}>
        {/* Hero Top Pill */}
        <div className="text-center mb-4">
          <div className="sg_hero_badge d-inline-flex align-items-center gap-2">
            <span className="sg_pulse_dot"></span>
            <span className="sg_badge_text">
              PREMIER 4K PODCAST RECORDING SUITE &amp; PRODUCTION NETWORK
            </span>
          </div>
        </div>

        {/* Hero Main Heading */}
        <div className="text-center max-w-1000 mx-auto mb-4">
          <h1 className="sg_hero_main_title anim_heading_title">
            Where Top Creators &amp; Brands Record{" "}
            <span className="sg_gradient_text">Iconic Podcasts.</span>
          </h1>
        </div>

        {/* Hero Subtitle */}
        <div className="text-center max-w-780 mx-auto mb-5">
          <p className="sg_hero_main_desc text-secondary">
            Broadcast-grade studio production for founders, creators, and enterprise media. Acoustically calibrated suites, Sony Cinema 4K multi-cam switching, Shure SM7B broadcast audio, and a turnkey viral shorts engine.
          </p>
        </div>

        {/* Hero CTA Cluster */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
          <Link href="/contact" className="sg_primary_cta">
            <span>Book Studio Session</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link href="/about" className="sg_secondary_cta">
            <span>Explore Studio Sets</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Social Proof Sub-Pill */}
        <div className="text-center mb-5">
          <div className="sg_hero_social_pill d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.035)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span className="text-warning font-size-13">★★★★★</span>
            <span className="text-white font-size-13 font-weight-bold">4.9 / 5.0 Studio Rating</span>
            <span className="text-secondary font-size-12 d-none d-sm-inline">· Trusted by 120+ Top Creators, CEOs &amp; Media Networks</span>
          </div>
        </div>

        {/* Hero Showcase Deck (Visual Centerpiece) */}
        <div className="sg_showcase_deck position-relative max-w-1100 mx-auto mb-5">
          {/* Mockup Studio Monitor Window */}
          <div className="sg_browser_frame rounded-4 overflow-hidden position-relative">
            {/* Monitor Header Bar */}
            <div className="sg_browser_bar d-flex align-items-center justify-content-between px-2 px-sm-3 py-2">
              <div className="d-flex align-items-center gap-2 flex-shrink-0">
                <span className="sg_dot sg_dot_red"></span>
                <span className="sg_dot sg_dot_yellow"></span>
                <span className="sg_dot sg_dot_green"></span>
              </div>
              <div className="sg_browser_url d-flex align-items-center gap-2 px-2 px-sm-3 py-1 rounded-pill overflow-hidden">
                <span className="text-danger font-size-11 flex-shrink-0">● REC</span>
                <span className="font-size-12 text-secondary font-monospace text-truncate" style={{ maxWidth: '200px' }}>studio360.live/session-4k-cam-a</span>
              </div>
              <div className="font-size-12 text-secondary font-monospace d-none d-md-block flex-shrink-0">4K 60FPS · 12-Bit RAW · Shure SM7B</div>
            </div>

            {/* Studio Image Content */}
            <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/8.5' }}>
              <Image
                src={publicAsset("/assets/img/podcast/wj/podcast_banner.webp")}
                alt="Studio Growth 360 Premier 4K Podcast Recording Suite"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                style={{ objectFit: 'cover' }}
              />
              <div className="sg_image_overlay"></div>
            </div>
          </div>

          {/* Floating Glassmorphism Badge 1 (Left) */}
          <div className="sg_floating_card sg_floating_card_left d-none d-lg-flex align-items-center gap-3 p-3 rounded-3 shadow">
            <div className="sg_badge_icon_wrap bg-success bg-opacity-25 text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
              🎙️
            </div>
            <div>
              <div className="text-white font-weight-bold font-size-15">500M+ Global Streams</div>
              <div className="text-secondary font-size-12">Produced in Studio360 Suites</div>
            </div>
          </div>

          {/* Floating Glassmorphism Badge 2 (Right) */}
          <div className="sg_floating_card sg_floating_card_right d-none d-lg-flex align-items-center gap-3 p-3 rounded-3 shadow">
            <div className="sg_badge_icon_wrap rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px', backgroundColor: 'rgba(255, 107, 0, 0.2)' }}>
              ⚡
            </div>
            <div>
              <div className="text-white font-weight-bold font-size-15">24h Turnaround</div>
              <div className="text-secondary font-size-12">Full 4K Cut + 10 Viral Shorts</div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Integrated KPI Bar */}
        <div className="sg_kpi_bar p-4 rounded-4 max-w-1100 mx-auto">
          <div className="row g-4 align-items-center text-center text-md-start">
            {heroStats.map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className={`sg_kpi_col ${i !== 0 ? 'ps-md-3' : ''}`}>
                  <div className="sg_kpi_value font-weight-bold cs_primary_font">{stat.value}</div>
                  <div className="sg_kpi_label text-white font-size-14 font-weight-bold">{stat.label}</div>
                  <div className="sg_kpi_detail text-secondary font-size-12 d-none d-sm-block">{stat.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeOne;
