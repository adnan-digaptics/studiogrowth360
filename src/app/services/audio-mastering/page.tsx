import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PlatformStatsBar from '@/components/platform/PlatformStatsBar';

export const metadata: Metadata = {
  title: "Broadcast Audio Mastering & Dolby Atmos | Growth Domains",
  description:
    "Professional vocal engineering, spectral noise removal, and Dolby Atmos audio mastering for recording facilities. -14 LUFS Spotify and -16 LUFS Apple compliant.",
};

const AudioMasteringPage = () => {
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
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                    <span style={{ color: '#a855f7', fontSize: '10px' }}>🔊</span>
                    <span style={{ color: '#a855f7', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                      BROADCAST VOCAL ENGINEERING
                    </span>
                  </div>

                  <h1 className="text-white font-weight-bold font-size-34 font-size-md-52 mb-3">
                    Master Audio Engineering &amp; Dolby Atmos Mixing
                  </h1>

                  <p className="text-secondary font-size-17 max-w-780 mx-auto mb-4" style={{ lineHeight: '1.65' }}>
                    Deliver radio-ready vocals with crystal clarity. iZotope RX 10 advanced spectral de-noising, dynamic resonance control, transparent multiband compression, and Dolby Atmos binaural spatial audio masters delivered in under 12 hours.
                  </p>

                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                    <Link href="/onboard" className="sg_primary_cta">
                      <span>Order Audio Master ($60 Wholesale)</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                      </svg>
                    </Link>

                    <Link href="/services" className="sg_secondary_cta">
                      <span>View All Services</span>
                    </Link>
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

export default AudioMasteringPage;
