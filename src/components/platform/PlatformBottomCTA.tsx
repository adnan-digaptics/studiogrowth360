'use client'

import React from 'react';
import Link from 'next/link';

const PlatformBottomCTA = () => {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: '#0D0D12' }}>
      {/* Background glow orb */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div className="container py-4 position-relative" style={{ zIndex: 2 }}>
        <div
          className="p-4 p-md-5 rounded-4 text-center max-w-950 mx-auto"
          style={{
            background: 'linear-gradient(180deg, #161620 0%, #0F0F16 100%)',
            border: '1px solid rgba(255, 107, 0, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 107, 0, 0.1)',
          }}
        >
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              SCALE YOUR FACILITY TODAY
            </span>
          </div>

          <h2 className="text-white font-weight-bold font-size-30 font-size-md-42 mb-3">
            Ready to Turn Empty Studio Hours Into Predictable Monthly Profit?
          </h2>

          <p className="text-secondary font-size-16 max-w-700 mx-auto mb-4" style={{ lineHeight: '1.6' }}>
            Join 350+ podcast, video, and audio facilities scaling room utilization, automated bookings, and 24-hour wholesale post-production with Growth Domains.
          </p>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
            <Link href="/onboard" className="sg_primary_cta">
              <span>Start Free Studio Onboarding</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
              </svg>
            </Link>

            <Link href="/dashboard" className="sg_secondary_cta">
              <span>Explore Interactive Studio OS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>

            <Link href="/contact" className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-3 text-secondary text-decoration-none hover-white" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '13.5px' }}>
              <span>Book Platform Walkthrough →</span>
            </Link>
          </div>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 font-size-12 text-secondary">
            <span>✓ 14-day free studio trial</span>
            <span className="opacity-25">·</span>
            <span>✓ No credit card required to explore</span>
            <span className="opacity-25">·</span>
            <span>✓ Zero migration downtime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformBottomCTA;

