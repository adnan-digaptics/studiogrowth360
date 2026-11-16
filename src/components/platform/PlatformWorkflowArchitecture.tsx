'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const stages = [
  {
    step: "STAGE 01",
    time: "Day 1 · 10:00 AM",
    title: "In-Studio Session Wrap & Stems Export",
    actor: "Your Studio Staff",
    actorBadge: "In-Studio (90 Mins)",
    actorColor: "#FF6B00",
    desc: "Your client records in your acoustically calibrated suite with Sony 4K multi-cam rigs and Shure SM7B mics. Session wraps, and your engineer drags raw ISO camera files and 32-bit float WAV stems into the local session upload folder.",
    deliverables: ["Sony 4K XAVC-I Camera Cards", "Blackmagic ATEM Mini ISO Switch", "Raw Microphones WAV 32-bit Float"],
    metric: "15-minute handoff",
  },
  {
    step: "STAGE 02",
    time: "Day 1 · 10:30 AM",
    title: "Automated Cloud Vault Ingest & Auto-Sync",
    actor: "Growth Domains Engine",
    actorBadge: "Automated (S3 Vault)",
    actorColor: "#38bdf8",
    desc: "Our automated high-speed cloud pipeline ingests all files with checksum verification. Audio waveforms are cross-correlated to auto-sync multi-camera angles and timecode with zero manual drift or alignment issues.",
    deliverables: ["Checksum SHA-256 Ingest", "Waveform Alignment Matrix", "Encrypted S3 Archival Bucket"],
    metric: "Zero drift auto-sync",
  },
  {
    step: "STAGE 03",
    time: "Day 1 · 11:00 AM – Day 2 · 08:00 AM",
    title: "Dedicated 24h Production Pod Execution",
    actor: "Growth Domains Editors",
    actorBadge: "Wholesale Pod (< 24h)",
    actorColor: "#22c55e",
    desc: "A dedicated senior post-production pod cuts dynamic camera transitions matching speaker cadence, applies DaVinci Resolve filmic color grading, masters audio to -14 LUFS, and crafts 10 viral vertical shorts with kinetic typography.",
    deliverables: ["Full 4K Multi-Cam Master Cut", "-14 LUFS Loudness Audio", "10x Kinetic-Subtitled Shorts", "YouTube SEO Timestamp Chapters"],
    metric: "Guaranteed < 24h SLA",
  },
  {
    step: "STAGE 04",
    time: "Day 2 · 09:30 AM",
    title: "White-Label Delivery & Margin Collection",
    actor: "Your Studio & Client",
    actorBadge: "Your Brand Only",
    actorColor: "#f59e0b",
    desc: "Your studio receives a private download portal fully branded with your studio logo and domain. You send the link to your client. You bill your client $450 to $650, pay us $160 wholesale, and pocket $290+ pure profit on the session.",
    deliverables: ["Branded Client Portal Link", "100% Studio Brand Ownership", "+$290 Pure Studio Net Margin"],
    metric: "65%+ Profit Retained",
  },
];

const PlatformWorkflowArchitecture = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-5 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center max-w-900 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              INTERACTIVE SYSTEM ARCHITECTURE
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-40 mb-3">
            How Recording Stems Flow Through Growth Domains
          </h2>
          <p className="text-secondary font-size-15 font-size-md-16 cs_m0">
            From the minute your client steps out of the sound booth to the moment full 4K masters and viral shorts land in their inbox: see the automated pipeline behind our guaranteed 24-hour turnaround.
          </p>
        </div>

        {/* 4 Interactive Stage Tabs */}
        <div className="row g-3 mb-4">
          {stages.map((stage, idx) => {
            const isCurrent = activeStage === idx;
            return (
              <div key={idx} className="col-6 col-lg-3">
                <button
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className="w-100 p-3 rounded-4 text-start border transition-all"
                  style={{
                    background: isCurrent ? 'linear-gradient(145deg, #181822 0%, #101016 100%)' : 'rgba(255, 255, 255, 0.02)',
                    borderColor: isCurrent ? stage.actorColor : 'rgba(255, 255, 255, 0.07)',
                    boxShadow: isCurrent ? `0 10px 30px ${stage.actorColor}22` : 'none',
                    cursor: 'pointer',
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="font-monospace font-size-11 font-weight-bold" style={{ color: stage.actorColor }}>
                      {stage.step}
                    </span>
                    <span className="badge rounded-pill font-size-9" style={{ background: `${stage.actorColor}22`, color: stage.actorColor }}>
                      {stage.metric}
                    </span>
                  </div>
                  <div className="text-white font-size-13 font-weight-bold mb-1 text-truncate">
                    {stage.title}
                  </div>
                  <div className="text-secondary font-size-11">
                    {stage.time}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Active Stage Deep Display Card */}
        <div
          className="p-4 p-xl-5 rounded-4 position-relative overflow-hidden mb-5"
          style={{
            background: 'linear-gradient(135deg, #13131A 0%, #0A0A0E 100%)',
            border: `1px solid ${stages[activeStage].actorColor}44`,
            boxShadow: `0 20px 60px rgba(0,0,0,0.8), 0 0 40px ${stages[activeStage].actorColor}15`,
          }}
        >
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-7">
              <div className="d-flex align-items-center gap-2 mb-2">
                <span className="badge rounded-pill" style={{ background: `${stages[activeStage].actorColor}22`, color: stages[activeStage].actorColor, fontSize: '11px', fontWeight: 700 }}>
                  {stages[activeStage].actorBadge}
                </span>
                <span className="text-secondary font-size-12 font-monospace">
                  {stages[activeStage].time}
                </span>
              </div>

              <h3 className="text-white font-size-24 font-size-md-30 font-weight-bold mb-3">
                {stages[activeStage].title}
              </h3>

              <p className="text-secondary font-size-15 mb-4" style={{ lineHeight: '1.7' }}>
                {stages[activeStage].desc}
              </p>

              <div>
                <div className="text-white font-size-12 font-weight-bold text-uppercase mb-2" style={{ letterSpacing: '0.8px' }}>
                  Stage Deliverables &amp; Telemetry:
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {stages[activeStage].deliverables.map((del, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 rounded-pill font-size-12 d-inline-flex align-items-center gap-2"
                      style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#E4E4E7' }}
                    >
                      <span style={{ color: stages[activeStage].actorColor }}>✓</span>
                      <span>{del}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="text-secondary font-size-11 text-uppercase font-monospace mb-2">OPERATIONAL BENEFIT</div>
                <div className="font-size-22 font-weight-bold text-white mb-2">
                  {activeStage === 0 && "100% Ingest Automation"}
                  {activeStage === 1 && "No Waveform Drift Ever"}
                  {activeStage === 2 && "< 24-Hour Edit Turnaround"}
                  {activeStage === 3 && "+$290 Pure Studio Margin"}
                </div>
                <p className="text-secondary font-size-12 cs_m0 mb-3" style={{ lineHeight: '1.5' }}>
                  {activeStage === 0 && "Your sound engineers don't spend hours rendering proxies or transcoding files."}
                  {activeStage === 1 && "Cloud parallel processors transcode and align multi-track ISOs in minutes."}
                  {activeStage === 2 && "Strict SLA guarantee: if an edit takes longer than 24h, the wholesale fee is waived."}
                  {activeStage === 3 && "Your client thinks you have an army of in-house editors working downstairs."}
                </p>
                <Link href="/services" className="btn btn-sm py-2 px-3 text-white font-size-12 font-weight-bold" style={{ background: '#FF6B00', borderRadius: '6px' }}>
                  Explore Wholesale Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformWorkflowArchitecture;
