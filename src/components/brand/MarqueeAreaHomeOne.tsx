'use client'

import React from 'react';

const studioHighlights = [
  { text: "4K Cinema Multi-Cam Recording", accent: true },
  { text: "Shure SM7B Broadcast Microphones", accent: false },
  { text: "STC 65 Soundproof Acoustic Suites", accent: true },
  { text: "Live Blackmagic ATEM Video Switching", accent: false },
  { text: "10 Viral Shorts Delivered in 24 Hours", accent: true },
  { text: "Spotify & Apple Podcasts Global Syndication", accent: false },
  { text: "Sony Cinema Line FX6 Prime Rigs", accent: true },
  { text: "Private VIP Creator Green Room Lounge", accent: false },
  { text: "Dolby Atmos Master Audio Engineering", accent: true },
  { text: "Turnkey Executive Show Production", accent: false },
];

const MarqueeAreaHomeOne = () => {
  return (
    <section className="sg_studio_marquee" aria-label="Studio Production Capabilities Ticker">
      <div className="sg_marquee_track">
        {/* Track Loop 1 */}
        <div className="sg_marquee_group" aria-hidden="false">
          {studioHighlights.map((item, idx) => (
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
          {studioHighlights.map((item, idx) => (
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
