'use client'

import React from 'react';

const reasons = [
  {
    num: "01",
    title: "Zero-Friction Turnkey Production",
    description:
      "Walk in with your guest, sit down, and speak. Our broadcast audio engineer dials in levels, monitors 4K cinema feeds, and switches cameras live while you focus 100% on the conversation.",
  },
  {
    num: "02",
    title: "Instant Cloud Ingest & 24h Delivery",
    description:
      "No waiting weeks for podcast edits. Full multi-cam 4K episode cuts, Spotify/Apple loudness mastering, and 10 viral-hooked vertical shorts are delivered within 24 hours of wrap.",
  },
  {
    num: "03",
    title: "Engineered for Algorithmic Growth",
    description:
      "We don't just export audio. Our editors analyze watch-time psychology, craft kinetic subtitles with dynamic sound effects, and optimize clips to dominate TikTok, Reels, and YouTube Shorts.",
  },
];

const studioSets = [
  { name: "The Obsidian Lounge Suite", stat: "Warm Walnut Slats · Caramel Leather · Amber Neon" },
  { name: "The Modern Creator Bay", stat: "Vibrant RGB Tube Rig · Multi-Cam Switching · High Energy" },
  { name: "The Executive Boardroom", stat: "Minimalist Glass & Matte Black · B2B Thought Leadership" },
  { name: "The Intimate Fireside Studio", stat: "Moody Warm Spotlights · Acoustic Velvet · Longform Focus" },
  { name: "The Frontier Tech Lab", stat: "Cyan & Indigo Lighting · Dual Prompters · Graphic Overlay" },
  { name: "The Master Voice Booth", stat: "Whisper-Quiet STC 68 · Solo Audio & Narration Mastering" },
];

const StudioGrowthApproach = () => (
  <section className="sg_advantage_section py-5 position-relative overflow-hidden">
    <div className="container">
      {/* Section Header */}
      <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
        <div>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ THE STUDIO360 ADVANTAGE</span>
          </div>
          <h2 className="text-white mb-2" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800 }}>
            Why Top Creators &amp; Media Networks Record Here
          </h2>
          <p className="text-secondary font-size-17 mb-0" style={{ maxWidth: '620px' }}>
            We eliminate production friction so you can build an iconic show with cinema-grade fidelity and viral social momentum.
          </p>
        </div>
      </div>

      {/* 3 Core Value Pillar Cards */}
      <div className="row g-4 mb-5">
        {reasons.map((reason) => (
          <div className="col-12 col-md-4" key={reason.title}>
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between transition-all"
              style={{
                background: 'rgba(18, 18, 24, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <span className="cs_primary_font font-weight-bold d-block mb-3" style={{ color: '#FF6B00', fontSize: '32px' }}>
                  {reason.num}
                </span>
                <h3 className="text-white font-size-20 font-weight-bold mb-2">
                  {reason.title}
                </h3>
                <p className="text-secondary font-size-14 mb-0" style={{ lineHeight: 1.65 }}>
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Studio Sets Showcase Bento */}
      <div className="p-4 p-lg-5 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.5)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="mb-4">
          <span className="text-uppercase font-size-12 font-weight-bold" style={{ color: '#FF6B00', letterSpacing: '1px' }}>
            Customizable Sets Available
          </span>
          <h3 className="text-white font-size-24 font-weight-bold mt-1 mb-0">
            6 Broadcast-Ready Studio Environments
          </h3>
        </div>

        <div className="row g-3">
          {studioSets.map((ind, i) => (
            <div className="col-12 col-sm-6 col-lg-4" key={i}>
              <div
                className="p-3 rounded-3 h-100 d-flex flex-column justify-content-between transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span style={{ color: '#FF6B00', fontSize: '13px' }}>🎙️</span>
                  <span className="text-white font-size-14 font-weight-bold">{ind.name}</span>
                </div>
                <div className="font-size-12" style={{ color: '#A1A1AA' }}>
                  {ind.stat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StudioGrowthApproach;
