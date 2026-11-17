'use client'

import React from 'react';

const platformHighlights = [
  { text: "Multi-Suite Calendar & Booking OS", accent: true },
  { text: "24-Hour Wholesale Post-Production SLA", accent: false },
  { text: "Automated Escrow & Deposit Billing", accent: true },
  { text: "Dynamic Rate Card & Yield Optimization", accent: false },
  { text: "STC 65 Acoustic Soundproofing Audits", accent: true },
  { text: "Client NDA & Digital Release Generator", accent: false },
  { text: "65%+ Resale Margin on White-Label Edits", accent: true },
  { text: "SOC-2 Ready Session Cloud Vault", accent: false },
  { text: "Enterprise Client Acquisition Pipeline", accent: true },
  { text: "350+ Independent Studios Powered", accent: false },
];

const MarqueeAreaHomeOne = () => {
  return (
    <section className="sg_studio_marquee" aria-label="Growth Domains Platform Capabilities Ticker">
      <div className="sg_marquee_track">
        {/* Track Loop 1 */}
        <div className="sg_marquee_group" aria-hidden="false">
          {platformHighlights.map((item, idx) => (
            <span key={`a-${idx}`} className="sg_marquee_item">
              <span className="sg_marquee_bullet">✦</span>
              <span className={item.accent ? "sg_marquee_text_accent" : "sg_marquee_text_white"}>
                {item.text}
              </span>
            </span>
          ))}
        </div>

        {/* Track Loop 2 (Exact duplicate for seamless infinite loop) */}
        <div className="sg_marquee_group" aria-hidden="true">
          {platformHighlights.map((item, idx) => (
            <span key={`b-${idx}`} className="sg_marquee_item">
              <span className="sg_marquee_bullet">✦</span>
              <span className={item.accent ? "sg_marquee_text_accent" : "sg_marquee_text_white"}>
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeAreaHomeOne;
