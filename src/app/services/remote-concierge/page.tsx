import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PlatformStatsBar from '@/components/platform/PlatformStatsBar';

export const metadata: Metadata = {
  title: "Remote Broadcast Audio & Video Concierge | Growth Domains",
  description:
    "On-demand remote sound engineer and video director for studio sessions. Real-time gain monitoring, Dante ISO stem sync, and backup stream capture so your studio staff focuses on hospitality.",
};

const RemoteConciergePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="position-relative overflow-hidden" style={{ background: '#09090B' }}>
            <div className="sg_glow_orb sg_glow_orb_1"></div>
            <div className="sg_glow_orb sg_glow_orb_2"></div>

            <section className="py-5 position-relative" style={{ zIndex: 2 }}>
              <div className="container py-4">
                <div className="text-center max-w-950 mx-auto">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                    <span style={{ color: '#22c55e', fontSize: '10px' }}>🎙️</span>
                    <span style={{ color: '#22c55e', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                      LIVE PRODUCTION SUPPORT
                    </span>
                  </div>

                  <h1 className="text-white font-weight-bold font-size-34 font-size-md-52 mb-3">
                    Remote Broadcast Audio &amp; Video Concierge
                  </h1>

                  <p className="text-secondary font-size-17 max-w-780 mx-auto mb-4" style={{ lineHeight: '1.65' }}>
                    Never worry about clipped audio, remote guest audio latency, or camera feed dropouts again. An experienced broadcast audio engineer monitors your recording session live, allowing your on-site team to focus 100% on VIP client hospitality.
                  </p>

                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                    <Link href="/onboard" className="sg_primary_cta">
                      <span>Book Remote Concierge</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                      </svg>
                    </Link>

                    <Link href="/dashboard" className="sg_secondary_cta">
                      <span>Schedule via Studio OS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-4 position-relative">
              <div className="container">
                <div className="row g-4 align-items-stretch">
                  <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                      <div className="font-monospace text-success font-weight-bold font-size-22 mb-2">LIVE GAIN CONTROL</div>
                      <h3 className="text-white font-size-18 font-weight-bold mb-2">Zero Vocal Clipping</h3>
                      <p className="text-secondary font-size-13 cs_m0" style={{ lineHeight: '1.6' }}>Continuous real-time vocal level monitoring with instantaneous limiter adjustments across all microphone channels.</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                      <div className="font-monospace text-success font-weight-bold font-size-22 mb-2">REMOTE GUEST SYNC</div>
                      <h3 className="text-white font-size-18 font-weight-bold mb-2">Riverside &amp; Zoom ISO</h3>
                      <p className="text-secondary font-size-13 cs_m0" style={{ lineHeight: '1.6' }}>Seamless integration of remote speakers with zero echo, clean mix-minus routing, and redundant cloud backup stems.</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-4">
                    <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                      <div className="font-monospace text-success font-weight-bold font-size-22 mb-2">INSTANT INGEST</div>
                      <h3 className="text-white font-size-18 font-weight-bold mb-2">Automated Session Wrap</h3>
                      <p className="text-secondary font-size-13 cs_m0" style={{ lineHeight: '1.6' }}>Session ends and files are automatically ingested into our 24h wholesale video editing queue without studio staff lifting a finger.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <PlatformStatsBar />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default RemoteConciergePage;
