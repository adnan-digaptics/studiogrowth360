import React from 'react';

const marqueeItems = [
  "✦ 4K CINEMA MULTI-CAM RECORDING",
  "✦ SHURE SM7B BROADCAST AUDIO",
  "✦ VIRAL REELS & TIKTOK CUTDOWNS",
  "✦ DOLBY ATMOS MASTERING",
  "✦ LIVE MULTI-CAM SWITCHING",
  "✦ SPOTIFY & APPLE SYNDICATION",
  "✦ PRIVATE VIP CREATOR LOUNGES",
  "✦ TURNKEY SHOW PRODUCTION",
];

const marqueeText = marqueeItems.join(" ");

const MarqueeAreaHomeOne = () => {
  return (
    <div className="cs_marquee_wrapper py-4 overflow-hidden">
      <div className="cs_moving_section_wrap cs_bold">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_stroke_text font-weight-bold" style={{ fontSize: '32px', letterSpacing: '1px' }}>
            {marqueeText}&nbsp;&nbsp;
          </div>
          <div className="cs_moving_section cs_stroke_text font-weight-bold" style={{ fontSize: '32px', letterSpacing: '1px' }}>
            {marqueeText}&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeAreaHomeOne;
