'use client'

import React from 'react';

// Industry Production & Infrastructure Standards that Growth Domains connects with
const hardwareStandards = [
  { name: "Sony Cinema Line", sub: "FX6 & FX3 4K Capture", icon: "🎥" },
  { name: "Shure Broadcast", sub: "SM7B Vocal Standards", icon: "🎙️" },
  { name: "Blackmagic Design", sub: "ATEM Switcher Pipelines", icon: "🎛️" },
  { name: "Riverside.fm", sub: "High-Bitrate Remote Studio", icon: "🌐" },
  { name: "Stripe Connect", sub: "Automated Studio Escrow & Payouts", icon: "💳" },
  { name: "Focusrite Pro", sub: "RedNet Dante Audio Networks", icon: "⚡" },
  { name: "Sennheiser Pro", sub: "Broadcast Monitoring", icon: "🎧" },
  { name: "Megaphone by Spotify", sub: "Dynamic Ad Insertion & Hosting", icon: "📡" },
  { name: "Dolby Atmos", sub: "Immersive Audio Mastering", icon: "🔊" },
  { name: "Apple Podcasts Connect", sub: "Enterprise Analytics Sync", icon: "🍎" },
];

// Partner Studios Powered by Growth Domains
const partnerStudios = [
  { name: "Apex Soundstage & Visuals", city: "Chicago, IL", metric: "3 Suites · 94% Booked" },
  { name: "Soho Audio Laboratories", city: "New York, NY", metric: "4 Suites · $18.4k/mo Wholesale" },
  { name: "The Broadcast Loft", city: "Austin, TX", metric: "2 Suites · 0 Empty Hours" },
  { name: "Mayfair Media Lounge", city: "London, UK", metric: "4K Multi-Cam · Enterprise Tier" },
  { name: "Vanguard Creator Hub", city: "Los Angeles, CA", metric: "5 Suites · 24h SLA Partner" },
  { name: "Wynwood Wave Studios", city: "Miami, FL", metric: "Soundproof STC 65 · 92% Yield" },
  { name: "Queen West Media Space", city: "Toronto, ON", metric: "3 Suites · Automated Booking OS" },
  { name: "Mitte Sound Collective", city: "Berlin, DE", metric: "Bilingual Hub · Enterprise Member" },
];

interface BrandHomeOneProps {
  style_2?: boolean;
}

const BrandHomeOne = ({ style_2 }: BrandHomeOneProps) => {
  return (
    <section className="cs_brand_partners_section py-5 position-relative overflow-hidden" style={{ background: '#09090B' }}>
      <div className="container text-center mb-4">
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
          <span style={{ color: '#FF6B00', fontSize: '10px' }}>●</span>
          <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
            STUDIO PLATFORM ECOSYSTEM &amp; NETWORK
          </span>
        </div>
        <h2 className="text-white font-weight-bold font-size-22 font-size-md-28 mb-2">
          Integrated with Industry Standards. Trusted by Leading Facilities.
        </h2>
        <p className="text-secondary font-size-14 max-w-700 mx-auto cs_m0">
          Growth Domains bridges multi-room studio hardware, automated reservation workflows, and wholesale post-production pipelines.
        </p>
      </div>

      {/* Row 1: Hardware & Infrastructure Integrations */}
      <div className="sg_studio_marquee mb-3">
        <div className="sg_marquee_track">
          <div className="sg_marquee_group">
            {hardwareStandards.map((item, idx) => (
              <div
                key={`hw-1-${idx}`}
                className="d-inline-flex align-items-center gap-3 px-4 py-2 mx-2 rounded-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div className="text-start">
                  <div className="text-white font-weight-bold font-size-14" style={{ letterSpacing: '0.3px' }}>
                    {item.name}
                  </div>
                  <div className="text-secondary font-size-11">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sg_marquee_group" aria-hidden="true">
            {hardwareStandards.map((item, idx) => (
              <div
                key={`hw-2-${idx}`}
                className="d-inline-flex align-items-center gap-3 px-4 py-2 mx-2 rounded-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ fontSize: '20px' }}>{item.icon}</span>
                <div className="text-start">
                  <div className="text-white font-weight-bold font-size-14" style={{ letterSpacing: '0.3px' }}>
                    {item.name}
                  </div>
                  <div className="text-secondary font-size-11">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Partner Studios Across Global Cities */}
      <div className="sg_studio_marquee">
        <div className="sg_marquee_track">
          <div className="sg_marquee_group" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {partnerStudios.map((studio, idx) => (
              <div
                key={`st-1-${idx}`}
                className="d-inline-flex align-items-center gap-3 px-4 py-2 mx-2 rounded-3"
                style={{
                  background: 'rgba(255, 107, 0, 0.04)',
                  border: '1px solid rgba(255, 107, 0, 0.2)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span className="badge rounded-pill" style={{ background: '#FF6B00', color: '#000', fontSize: '10px', fontWeight: 800 }}>
                  VERIFIED
                </span>
                <div className="text-start">
                  <div className="text-white font-weight-bold font-size-14">
                    {studio.name} <span className="text-secondary font-size-12">({studio.city})</span>
                  </div>
                  <div className="font-size-11" style={{ color: '#FF6B00' }}>
                    ✦ {studio.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sg_marquee_group" aria-hidden="true" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {partnerStudios.map((studio, idx) => (
              <div
                key={`st-2-${idx}`}
                className="d-inline-flex align-items-center gap-3 px-4 py-2 mx-2 rounded-3"
                style={{
                  background: 'rgba(255, 107, 0, 0.04)',
                  border: '1px solid rgba(255, 107, 0, 0.2)',
                  whiteSpace: 'nowrap'
                }}
              >
                <span className="badge rounded-pill" style={{ background: '#FF6B00', color: '#000', fontSize: '10px', fontWeight: 800 }}>
                  VERIFIED
                </span>
                <div className="text-start">
                  <div className="text-white font-weight-bold font-size-14">
                    {studio.name} <span className="text-secondary font-size-12">({studio.city})</span>
                  </div>
                  <div className="font-size-11" style={{ color: '#FF6B00' }}>
                    ✦ {studio.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHomeOne;
