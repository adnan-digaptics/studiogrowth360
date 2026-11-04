import Link from "next/link";
import React from "react";

const AboutHomeFour = () => {
  return (
    <section className="sg_cta_section position-relative py-5">
      <div className="container">
        <div className="sg_grand_cta position-relative overflow-hidden">
          {/* Ambient Lighting & Technical Grid Overlay */}
          <div className="sg_cta_glow_top"></div>
          <div className="sg_cta_glow_bottom"></div>
          <div className="sg_cta_grid_bg"></div>

          <div className="sg_cta_inner position-relative text-center">
            {/* Top Indicator Badge */}
            <div className="d-inline-flex align-items-center gap-2 sg_cta_pill mb-4">
              <span className="sg_cta_pulse_dot"></span>
              <span className="sg_cta_pill_text">BOOK YOUR 4K PODCAST SESSION</span>
            </div>

            {/* Monumental Headline */}
            <h2 className="sg_cta_title text-white mb-4">
              Ready to Record Your{" "}
              <span className="sg_text_gradient">Signature Podcast?</span>
            </h2>

            {/* Clear Value Proposition */}
            <p className="sg_cta_desc mx-auto mb-4">
              Step into our broadcast-grade 4K suites with your guest. Our on-site audio engineers,
              camera operators, and viral clipping editors ensure your show sounds and looks like a
              network television production.
            </p>

            {/* Focus Capabilities Chips */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
              <span className="sg_cta_chip">
                <span className="sg_chip_icon">⚡</span> 4K Cinema Multi-Cam Rig
              </span>
              <span className="sg_cta_chip">
                <span className="sg_chip_icon">🎙️</span> Shure SM7B Broadcast Mics
              </span>
              <span className="sg_cta_chip">
                <span className="sg_chip_icon">🎬</span> 24h Master Edit &amp; 10 Viral Shorts
              </span>
              <span className="sg_cta_chip">
                <span className="sg_chip_icon">📈</span> Spotify, Apple &amp; YouTube Syndication
              </span>
            </div>

            {/* Action Buttons Hub */}
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
              <Link href="/contact" className="sg_primary_cta">
                <span>Book Studio Time</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/portfolio" className="sg_secondary_cta">
                <span>Explore Featured Shows</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>

            {/* Direct Contact Alternative */}
            <div className="mb-5">
              <span className="text-secondary font-size-14">
                Need a custom corporate or multi-episode package? Email us at{" "}
                <a
                  href="mailto:grow@360growthlab.com"
                  className="text-white text-decoration-underline fw-semibold"
                  style={{ transition: 'color 0.2s ease' }}
                >
                  grow@360growthlab.com
                </a>
              </span>
            </div>

            {/* Enterprise Trust & Proof Bar */}
            <div className="sg_cta_trust_bar pt-4">
              <div className="row g-3 align-items-center justify-content-center">
                <div className="col-6 col-md-3">
                  <div className="sg_cta_trust_item">
                    <span className="sg_cta_trust_icon">⚡</span>
                    <span className="sg_cta_trust_text">24h Master &amp; Shorts</span>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="sg_cta_trust_item">
                    <span className="sg_cta_trust_icon">🔒</span>
                    <span className="sg_cta_trust_text">VIP Green Room &amp; NDA</span>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="sg_cta_trust_item">
                    <span className="sg_cta_trust_icon">⭐</span>
                    <span className="sg_cta_trust_text">500M+ Views Generated</span>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="sg_cta_trust_item">
                    <span className="sg_cta_trust_icon">🤝</span>
                    <span className="sg_cta_trust_text">Live Audio Engineer Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_40 cs_height_lg_20"></div>
    </section>
  );
};

export default AboutHomeFour;
