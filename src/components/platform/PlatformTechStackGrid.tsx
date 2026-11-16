'use client'

import React, { useState } from 'react';

const categories = [
  { id: "cameras", name: "🎥 4K Cameras & Switching" },
  { id: "mics", name: "🎙️ Broadcast Microphones" },
  { id: "audio", name: "🎛️ Interfaces & Dante Network" },
  { id: "cloud", name: "☁️ Software, Payments & Feeds" },
];

const gearItems = {
  cameras: [
    { name: "Sony Cinema Line FX6", spec: "Full-Frame 4K 120p · 16-bit RAW · S-Cinetone", compatibility: "Native Ingest Auto-Sync", badge: "Studio Gold Standard" },
    { name: "Sony Cinema Line FX3", spec: "Compact 4K 10-bit 4:2:2 · Active Cooling", compatibility: "Color Match Rec.709", badge: "A-Cam & B-Cam" },
    { name: "Blackmagic ATEM Mini Extreme ISO", spec: "8-Channel Live Switching + 8x Isolated ProRes Records", compatibility: "Zero-Latency Switch Ingest", badge: "Turnkey Switch" },
    { name: "Blackmagic Studio Camera 4K Pro G2", spec: "12G-SDI & 10G Ethernet PoE · Talkback Ready", compatibility: "Multi-Angle Master", badge: "Broadcast Hub" },
    { name: "Canon Cinema EOS C70", spec: "DGO Sensor · 4K 120p · RF Mount Versatility", compatibility: "C-Log2 Auto-Normalize", badge: "Executive Suites" },
    { name: "Panasonic Lumix S5IIX", spec: "6K Open Gate · 4:2:2 All-Intra SSD Recording", compatibility: "LUT Profile Compatible", badge: "Multi-Cam Secondary" },
  ],
  mics: [
    { name: "Shure SM7B & SM7dB", spec: "Cardioid Dynamic Vocal Standard · Built-in Preamp", compatibility: "-14 LUFS Vocal Master", badge: "Industry Benchmark" },
    { name: "Electro-Voice RE20", spec: "Variable-D Acoustic Design · Heavy Proximity Effect", compatibility: "Voice-over Mastering", badge: "Radio Classic" },
    { name: "Sennheiser MD 421-II", spec: "Large-diaphragm dynamic · 5-position bass roll-off", compatibility: "High-SPL Dialogue Cleanse", badge: "Crisp Mid-Presence" },
    { name: "Neumann TLM 103", spec: "Transformerless Large Diaphragm Condenser · 7dB-A", compatibility: "Spectral Denoising Pod", badge: "Luxury Vocal Suite" },
    { name: "Rode PodMic USB", spec: "Broadcast Dynamic · Revolution Preamp DSP", compatibility: "Direct Digital Ingest", badge: "Entry Suite Rig" },
    { name: "Shure KSM8 Dualdyne", spec: "Dual-Diaphragm Dynamic · Controlled Off-Axis Bleed", compatibility: "Acoustic Isolation Clean", badge: "Roundtable Shows" },
  ],
  audio: [
    { name: "Focusrite Pro RedNet Dante", spec: "Gigabit IP Audio Distribution · 121dB Dynamic Range", compatibility: "Zero-Latency Cloud Ingest", badge: "Enterprise Facility" },
    { name: "Rode RodeCaster Pro II", spec: "Quad High-Gain Revolution Preamps · Multi-Track USB", compatibility: "Instant WAV Stem Parsing", badge: "Podcast Workhorse" },
    { name: "Universal Audio Apollo x8", spec: "Elite-Class Converters · Real-Time UAD HEXA DSP", compatibility: "Analog Emulation Master", badge: "Mastering Suite" },
    { name: "Zoom PodTrak P8", spec: "6 Mic Inputs · Dedicated Mix-Minus Smartphone Stems", compatibility: "Multi-Track Auto-Split", badge: "Mobile Production" },
    { name: "Allen & Heath SQ-5", spec: "96kHz FPGA Engine · 48 Channels of Clean Audio", compatibility: "Live Auditorium Sync", badge: "Event Hall Facility" },
    { name: "Sound Devices MixPre-10 II", spec: "32-Bit Float Recording · Kashmir Discrete Preamps", compatibility: "Unclipped Dynamic Recovery", badge: "Field & Remote" },
  ],
  cloud: [
    { name: "Stripe Connect Direct Payouts", spec: "Automated Non-Refundable Room Deposits & Split Payouts", compatibility: "Native Studio OS Checkout", badge: "Instant Payout" },
    { name: "Riverside.fm Pro Cloud Studio", spec: "Local 4K Video & 48kHz WAV Remote Guest ISOs", compatibility: "Remote Concierge Sync", badge: "Remote Ingest" },
    { name: "Megaphone by Spotify", spec: "Enterprise Hosting · Dynamic Ad Insertion · IAB v2", compatibility: "Show Syndication Hub", badge: "Ad Monetization" },
    { name: "Apple Podcasts Connect API", spec: "Automated Show Release · Chapter & Transcript Sync", compatibility: "Directory Auto-Submit", badge: "Chart Dominance" },
    { name: "Transistor.fm Enterprise", spec: "Private & Public RSS Feeds · Dynamic Show Notes", compatibility: "Direct Syndication API", badge: "Hosting Partner" },
    { name: "Amazon S3 Encrypted Storage", spec: "256-Bit AES Encryption · Multi-Region Availability", compatibility: "Session Asset Vault", badge: "SOC-2 Ready" },
  ],
};

const PlatformTechStackGrid = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof gearItems>("cameras");

  return (
    <section className="py-5 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container py-4">
        {/* Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              INDUSTRY GEAR &amp; SOFTWARE INTEROPERABILITY
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Built to Integrate with Your Existing Studio Gear
          </h2>
          <p className="text-secondary font-size-15 font-size-md-16 cs_m0">
            No expensive proprietary hardware lock-in. Growth Domains natively ingests files, syncs timecodes, and connects payouts with the equipment you already own.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id as keyof typeof gearItems)}
              className="px-3 py-2 rounded-pill font-size-13 font-weight-bold transition-all border-0"
              style={{
                background: activeTab === cat.id ? '#FF6B00' : 'rgba(255, 255, 255, 0.04)',
                color: activeTab === cat.id ? '#FFFFFF' : '#A1A1AA',
                cursor: 'pointer',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gear Grid */}
        <div className="row g-3">
          {gearItems[activeTab].map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div
                className="p-3 p-xl-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="badge rounded-pill" style={{ background: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00', fontSize: '10px' }}>
                      {item.badge}
                    </span>
                    <span className="font-size-11 text-success">
                      ✓ {item.compatibility}
                    </span>
                  </div>
                  <h3 className="text-white font-size-16 font-weight-bold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-secondary font-size-12 cs_m0" style={{ lineHeight: '1.5' }}>
                    {item.spec}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformTechStackGrid;
