'use client'

import React from 'react';
import Link from 'next/link';

const AgencyCtaSection = () => {
  return (
    <section className="position-relative overflow-hidden py-5" style={{ background: '#0A192F' }}>
      {/* Background Accent Gradients */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="max-w-950 mx-auto text-center">
          {/* Eyebrow Badge */}
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4" style={{ background: 'rgba(0, 102, 255, 0.2)', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00E676' }}></span>
            <span className="font-monospace font-size-11 font-weight-bold text-uppercase" style={{ color: '#38BDF8', letterSpacing: '1px' }}>
              NOW ONBOARDING FOR Q1 STUDIO GROWTH
            </span>
          </div>

          {/* Master Call to Action Title */}
          <h2
            className="text-white font-weight-bold mb-3"
            style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
          >
            Ready to Automate Operations &amp; Double Your Studio Bookings?
          </h2>

          {/* Subtitle */}
          <p
            className="text-secondary mx-auto mb-4"
            style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: '1.65', color: '#CBD5E1', maxWidth: '780px' }}
          >
            Join 350+ American photography, podcast, yoga, and craft studios that have eliminated 25+ hours of manual admin each week, boosted client retention, and scaled revenue with StudioGrowth360.
          </p>

          {/* Dual CTAs */}
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5">
            <Link
              href="/book-consultation"
              className="sg_btn_primary font-size-16 py-3 px-4 shadow-lg w-100 w-sm-auto justify-content-center text-center"
              style={{ background: '#0066FF', borderColor: '#0066FF', color: '#FFFFFF' }}
            >
              <span>Book a Free Strategy Call →</span>
            </Link>

            <Link
              href="/pricing"
              className="px-4 py-3 rounded-pill font-size-16 font-weight-bold text-white text-decoration-none border transition-all w-100 w-sm-auto justify-content-center text-center"
              style={{ background: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <span>View Packages &amp; Pricing</span>
            </Link>
          </div>

          {/* Assurance Guarantees */}
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-5 pt-3 border-top" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            <div className="d-flex align-items-center gap-2 text-white font-size-13 font-weight-medium">
              <span style={{ color: '#00E676' }}>✓</span>
              <span>100% Free 30-Min Strategy Audit</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white font-size-13 font-weight-medium">
              <span style={{ color: '#00E676' }}>✓</span>
              <span>Zero Operational Downtime</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white font-size-13 font-weight-medium">
              <span style={{ color: '#00E676' }}>✓</span>
              <span>Month-to-Month Flexibility</span>
            </div>
            <div className="d-flex align-items-center gap-2 text-white font-size-13 font-weight-medium">
              <span style={{ color: '#00E676' }}>✓</span>
              <span>US Studio Specialists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCtaSection;
