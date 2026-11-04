'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { publicAsset } from '@/utils/publicAsset';

const pillars = [
  {
    num: "01",
    title: "Acoustically Tuned Broadcast Suites",
    desc: "Triple-pane STC 65 soundproofing, custom walnut slat diffusers, and silent HVAC engineered for pure vocal presence with zero echo.",
  },
  {
    num: "02",
    title: "Sony Cinema Line 4K Multi-Cam Rig",
    desc: "Sony FX6 and FX3 cinema cameras with prime G-Master glass, live Blackmagic ATEM switching, and professional teleprompters.",
  },
  {
    num: "03",
    title: "24-Hour Master Edit & Viral Shorts Engine",
    desc: "Instant cloud ingest at wrap. Full multi-cam edit, loudness mastering for Spotify/Apple, and 10 kinetic-subtitled viral shorts delivered in 24 hours.",
  },
];

const AboutHomeOne = () => {
  return (
    <section className="sg_about_philosophy_section position-relative overflow-hidden py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column: Narrative & Pillars */}
          <div className="col-lg-6">
            <div className="sg_about_content">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ THE STUDIO360 EXPERIENCE</span>
              </div>

              <h2 className="text-white mb-3" style={{ fontSize: 'clamp(28px, 3.8vw, 48px)', fontWeight: 800, lineHeight: 1.15 }}>
                Acoustic Perfection Meets <br />
                <span className="sg_gradient_text">Cinema-Grade Video Engineering.</span>
              </h2>

              <p className="text-secondary font-size-17 mb-4" style={{ lineHeight: 1.7 }}>
                Recording an iconic show requires more than pressing record. At Studio360, every square foot is architected for pristine sound isolation, flattering multi-angle cinema lighting, and frictionless execution. Walk in with your guest, record at the highest industry fidelity, and let our post-production team handle the rest.
              </p>

              {/* 3 Pillars Bento Stack */}
              <div className="d-flex flex-column gap-3 mb-4">
                {pillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="p-3 rounded-3 d-flex align-items-start gap-3 transition-all"
                    style={{
                      background: 'rgba(18, 18, 24, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <span className="cs_primary_font font-weight-bold" style={{ color: '#FF6B00', fontSize: '20px', minWidth: '32px' }}>
                      {pillar.num}
                    </span>
                    <div>
                      <h4 className="text-white font-size-16 font-weight-bold mb-1">{pillar.title}</h4>
                      <p className="text-secondary font-size-14 mb-0" style={{ lineHeight: 1.6 }}>{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3 align-items-center">
                <Link href="/about" className="sg_primary_cta">
                  <span>Explore Our Suites</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <Link href="/service" className="sg_secondary_cta">
                  <span>View Production Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Main Photo Frame */}
              <div className="rounded-4 overflow-hidden position-relative shadow-2xl" style={{ border: '1px solid rgba(255, 255, 255, 0.12)', aspectRatio: '4/3' }}>
                <Image
                  src={publicAsset("/assets/img/podcast/podcast_recording_session.jpg")}
                  alt="Studio360 Live Podcast Recording Session"
                  fill
                  sizes="(max-width: 991px) 100vw, 550px"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(9,9,11,0.05) 0%, rgba(9,9,11,0.65) 100%)' }}></div>
              </div>

              {/* Floating Badge Top-Right */}
              <div
                className="position-absolute top-0 end-0 m-2 m-md-3 px-2 px-md-3 py-1 py-md-2 rounded-pill d-none d-sm-flex align-items-center gap-2 shadow"
                style={{
                  background: 'rgba(9, 9, 11, 0.88)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 107, 0, 0.4)',
                  fontSize: '12px',
                }}
              >
                <span style={{ color: '#FF6B00' }}>🎙️</span>
                <span className="text-white font-size-12 font-size-xl-13 font-weight-bold">Shure SM7B &amp; Neumann Rigs</span>
              </div>

              {/* Floating Glassmorphic Card Bottom-Left */}
              <div
                className="position-absolute bottom-0 start-0 m-2 m-md-3 p-2 p-md-3 rounded-3 d-none d-sm-flex align-items-center gap-2 gap-md-3 shadow"
                style={{
                  background: 'rgba(18, 18, 24, 0.92)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  maxWidth: 'min(310px, calc(100% - 24px))',
                }}
              >
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '38px', height: '38px', background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00', fontSize: '16px' }}>
                  ⚡
                </div>
                <div>
                  <div className="text-white font-weight-bold font-size-13 font-size-xl-14">Dedicated Audio Engineer</div>
                  <div className="text-secondary font-size-11 font-size-xl-12" style={{ lineHeight: 1.4 }}>Live sound mastering and switching included on every session</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeOne;
