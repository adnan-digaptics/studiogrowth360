import React from 'react';
import Link from 'next/link';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';

export default function NotFound() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="text-center py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '80vh', background: '#09090B' }}>
            <div className="container">
              <div className="cs_height_120 cs_height_lg_60"></div>
              <span className="cs_primary_font font-weight-bold" style={{ fontSize: 'clamp(72px, 12vw, 160px)', color: '#FF6B00', lineHeight: 1 }}>
                404
              </span>
              <h1 className="text-white mt-3 mb-3 font-weight-bold" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                Page Not Found
              </h1>
              <p className="text-secondary max-w-600 mx-auto mb-4 font-size-17">
                The digital flagship or page you are looking for has been moved, archived, or does not exist.
              </p>
              <div>
                <Link href="/" className="sg_primary_cta">
                  <span>Return to Homepage</span>
                </Link>
              </div>
              <div className="cs_height_60 cs_height_lg_30"></div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

