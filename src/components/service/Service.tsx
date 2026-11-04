'use client'

import React from 'react';

interface DataType {
  id: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

const process_data: DataType[] = [
  {
    id: '01',
    phase: "Phase 01",
    title: "Concept, Sonic Identity & Set Styling",
    description: "We craft your show format, sonic branding, animated intro/outros, and custom set lighting design before your first session.",
    deliverables: ["Show Format & Host Blueprint", "Bespoke Sonic Intro / Outro", "Custom Set & Lighting Design"],
  },
  {
    id: '02',
    phase: "Phase 02",
    title: "4K Studio Recording & Live Direction",
    description: "Step into our acoustically tuned suites. Our engineers manage microphone gain in real time while live switching 4K cinema angles.",
    deliverables: ["Multi-Cam 4K Sony FX6 RAW", "Uncompressed 48kHz WAV Audio", "Live ATEM ISO Video Switching"],
  },
  {
    id: '03',
    phase: "Phase 03",
    title: "Precision Post-Production & Shorts",
    description: "Vocal restoration with iZotope RX, Spotify loudness calibration, and extraction of 10 retention-optimized vertical shorts.",
    deliverables: ["Master Multi-Cam 4K Episode", "Spotify/Apple Loudness Master", "10 Kinetic-Subtitled Shorts"],
  },
  {
    id: '04',
    phase: "Phase 04",
    title: "Omnichannel Syndication & Growth",
    description: "Instant RSS distribution to Apple, Spotify & YouTube, custom YouTube thumbnails, timestamped show notes, and SEO indexing.",
    deliverables: ["Global RSS Distribution Feed", "YouTube Chapters & SEO Notes", "Guest Social Assets Package"],
  },
];

const Service = () => {
  return (
    <section className="sg_process_framework_section py-5 position-relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-780 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ SYSTEMATIC STUDIO PRODUCTION</span>
          </div>
          <h2 className="text-white mb-3" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800 }}>
            Our 4-Stage Podcast Production Machine
          </h2>
          <p className="text-secondary font-size-17 mb-0">
            A turnkey end-to-end production workflow designed so you can focus 100% on high-value conversations while we handle every technical detail.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="row g-4">
          {process_data.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div
                className="sg_process_card p-4 rounded-4 h-100 d-flex flex-column justify-content-between position-relative transition-all"
                style={{
                  background: 'rgba(18, 18, 24, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div>
                  {/* Card Header: Number & Phase Pill */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="cs_primary_font font-weight-bold" style={{ fontSize: '32px', color: '#FF6B00', lineHeight: 1 }}>
                      {item.id}
                    </span>
                    <span className="badge px-3 py-1 rounded-pill font-size-11 text-uppercase font-weight-bold" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}>
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-white font-size-18 font-weight-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-3 border-top border-secondary border-opacity-25">
                  <span className="text-white font-size-12 font-weight-bold text-uppercase d-block mb-2" style={{ letterSpacing: '0.5px' }}>
                    Deliverables:
                  </span>
                  <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="font-size-12 text-secondary d-flex align-items-center gap-2">
                        <span style={{ color: '#FF6B00' }}>✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
