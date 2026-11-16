import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PlatformStatsBar from '@/components/platform/PlatformStatsBar';

export const metadata: Metadata = {
  title: "10x Kinetic Viral Shorts Engine for Studios | Growth Domains",
  description:
    "Wholesale 24-hour turnaround viral vertical shorts for recording studios. 10 kinetic-subtitled clips per session for TikTok, Instagram Reels, and YouTube Shorts. Retain 70%+ studio profit margins.",
};

const shortPillars = [
  {
    icon: "🎯",
    title: "Algorithmic Hook Identification",
    desc: "Our editors comb through the session waveform to extract the 10 highest-voltage moments: contrarian claims, dramatic epiphanies, emotional vulnerability, and tactical takeaways.",
  },
  {
    icon: "🔤",
    title: "Kinetic Highlight Typography",
    desc: "Custom font styling with color-coded key phrases, animated pop-ins, and syllable-by-syllable karaoke highlights optimized for sound-off mobile browsing.",
  },
  {
    icon: "📱",
    title: "Intelligent 9:16 Split & Reframe",
    desc: "Horizontal 4K multi-cam footage dynamically reframed into vertical 9:16 layout with automatic speaker tracking, split-screen host/guest dialogue, and motion stabilization.",
  },
  {
    icon: "🔊",
    title: "Micro-Sound FX & Dynamic Pacing",
    desc: "Subtle whooshes, braams, camera shutter clicks, and trending background audio beds integrated without drowning out the speaker's vocal clarity.",
  },
];

const ViralShortsPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="position-relative overflow-hidden" style={{ background: '#09090B' }}>
            <div className="sg_glow_orb sg_glow_orb_1"></div>
            <div className="sg_glow_orb sg_glow_orb_2"></div>

            <section className="py-5 position-relative" style={{ zIndex: 2 }}>
              <div className="container py-4">
                <div className="text-center max-w-950 mx-auto">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                    <span style={{ color: '#38bdf8', fontSize: '10px' }}>⚡</span>
                    <span style={{ color: '#38bdf8', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                      VIRAL RETENTION ENGINE FOR STUDIOS
                    </span>
                  </div>

                  <h1 className="text-white font-weight-bold font-size-34 font-size-md-52 mb-3">
                    10x Kinetic-Subtitled Viral Social Shorts
                  </h1>

                  <p className="text-secondary font-size-17 max-w-780 mx-auto mb-4" style={{ lineHeight: '1.65' }}>
                    Every studio client wants viral reach on TikTok, Instagram Reels, and YouTube Shorts. Deliver a pack of 10 studio-grade vertical shorts within 24 hours at <strong className="text-white">$75 wholesale</strong>. Resell at <strong className="text-white">$250 – $350</strong> to generate immediate 70%+ margins.
                  </p>

                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                    <Link href="/onboard" className="sg_primary_cta">
                      <span>Get Wholesale Shorts Pricing</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                      </svg>
                    </Link>

                    <Link href="/dashboard" className="sg_secondary_cta">
                      <span>Order Shorts in Studio OS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Economics & Profit Breakdown */}
            <section className="py-4 position-relative">
              <div className="container">
                <div className="p-4 p-xl-5 rounded-4" style={{ background: 'linear-gradient(135deg, #12141A 0%, #0B0E14 100%)', border: '1px solid rgba(56, 189, 248, 0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}>
                  <div className="row g-4 align-items-center">
                    <div className="col-12 col-lg-7">
                      <span className="badge rounded-pill mb-2" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontSize: '11px', fontWeight: 700 }}>
                        HIGH-MARGIN ADD-ON
                      </span>
                      <h2 className="text-white font-size-24 font-size-md-32 font-weight-bold mb-3">
                        Why Shorts Are the Highest Converting Studio Upsell
                      </h2>
                      <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.6' }}>
                        Clients rarely know how to edit vertical clips themselves. Offering a 10-pack of shorts directly at checkout doubles your average transaction value with zero extra filming time.
                      </p>

                      <div className="d-flex flex-column gap-2 font-size-14 text-secondary">
                        <div className="d-flex align-items-center justify-content-between p-2 rounded-2" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                          <span>Studio Client Billed:</span>
                          <span className="text-white font-weight-bold font-monospace">$250 per 10-pack</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded-2" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                          <span>Growth Domains Wholesale Rate:</span>
                          <span className="text-secondary font-weight-bold font-monospace">$75 flat</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded-2" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                          <span className="text-success font-weight-bold">Your Studio Net Profit:</span>
                          <span className="text-success font-weight-bold font-monospace font-size-16">+$175 pure profit / session (70%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-5 text-center">
                      <div className="p-4 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="text-secondary font-size-12 text-uppercase mb-1">Monthly Resale on 20 Sessions</div>
                        <div className="font-monospace font-weight-bold" style={{ fontSize: 'clamp(36px, 4vw, 54px)', color: '#38bdf8' }}>
                          +$3,500
                        </div>
                        <div className="text-secondary font-size-13 mb-3">Annualized Profit: <strong className="text-white">+$42,000/year</strong></div>
                        <div className="p-2 rounded-2 font-size-11 text-secondary" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                          ✓ Delivered ready-to-post with captions &amp; trending audio
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4 Feature Pillars */}
            <section className="py-5 position-relative">
              <div className="container py-4">
                <div className="row g-4 align-items-stretch">
                  {shortPillars.map((p, idx) => (
                    <div key={idx} className="col-12 col-md-6">
                      <div className="p-4 p-xl-5 rounded-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                        <span className="font-size-32 mb-3 d-inline-block">{p.icon}</span>
                        <h3 className="text-white font-size-20 font-weight-bold mb-2">{p.title}</h3>
                        <p className="text-secondary font-size-14 cs_m0" style={{ lineHeight: '1.6' }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <PlatformStatsBar />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default ViralShortsPage;
