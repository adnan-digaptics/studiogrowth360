'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { pricingPackages } from '@/data/agency';
import { IconStar } from '@/components/common/AgencyIcons';

const AgencyPricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-5 sg_section_light">
      <div className="container py-4 py-lg-5">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>TRANSPARENT STUDIO PACKAGES</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Invest in Systems That Pay for Themselves
          </h2>
          <p className="sg_agency_desc mx-auto mb-4">
            Just one additional commercial studio booking or two saved client no-shows completely covers your monthly investment. Flexible month-to-month terms with zero long-term lock-in.
          </p>

          {/* Billing Switch */}
          <div className="d-inline-flex align-items-center gap-2 p-1 rounded-pill bg-white border shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className="btn btn-sm rounded-pill px-3 py-1 font-size-13 border-0"
              style={{
                background: !isAnnual ? "#0066FF" : "transparent",
                color: !isAnnual ? "#FFFFFF" : "#64748B",
                fontWeight: !isAnnual ? 700 : 500,
              }}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className="btn btn-sm rounded-pill px-3 py-1 font-size-13 border-0 d-flex align-items-center gap-2"
              style={{
                background: isAnnual ? "#0066FF" : "transparent",
                color: isAnnual ? "#FFFFFF" : "#64748B",
                fontWeight: isAnnual ? 700 : 500,
              }}
            >
              <span>Annual Billing</span>
              <span className="badge rounded-pill bg-success text-white font-size-10 px-2 py-1">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="row g-4 align-items-stretch mb-5">
          {pricingPackages.map((pkg, idx) => {
            const price = isAnnual ? pkg.priceAnnual : pkg.priceMonthly;

            return (
              <div key={idx} className="col-12 col-lg-4">
                <div
                  className="p-4 p-xl-5 rounded-4 h-100 d-flex flex-column justify-content-between position-relative bg-white border"
                  style={{
                    borderColor: pkg.popular ? "#0066FF" : "#E2E8F0",
                    borderWidth: pkg.popular ? "2px" : "1px",
                    boxShadow: pkg.popular ? "0 20px 50px rgba(0, 102, 255, 0.12)" : "0 4px 20px rgba(0,0,0,0.03)",
                    transform: pkg.popular ? "scale(1.02)" : "none",
                    zIndex: pkg.popular ? 2 : 1,
                  }}
                >
                  {pkg.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge rounded-pill px-3 py-1 text-white font-size-11 font-weight-bold d-inline-flex align-items-center gap-1" style={{ background: "#0066FF", letterSpacing: "0.5px" }}>
                        <IconStar size={11} color="#FFFFFF" />
                        <span>MOST POPULAR FOR STUDIOS</span>
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h3 className="text-dark font-size-20 font-weight-bold mb-0">
                        {pkg.name}
                      </h3>
                      <span className="badge rounded-pill bg-light text-secondary border font-size-10">
                        {pkg.badge}
                      </span>
                    </div>

                    <p className="text-secondary font-size-13 mb-4" style={{ minHeight: "38px" }}>
                      {pkg.subtitle}
                    </p>

                    <div className="mb-4">
                      <span className="font-monospace text-dark font-weight-bold" style={{ fontSize: "clamp(34px, 3.5vw, 44px)" }}>
                        ${price}
                      </span>
                      <span className="text-secondary font-size-14 ms-2">/ month</span>
                      {isAnnual && (
                        <div className="font-size-11 text-success mt-1">Billed annually (${price * 12}/yr)</div>
                      )}
                    </div>

                    <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="d-flex align-items-start gap-2 font-size-13 text-secondary">
                          <span className="text-primary font-weight-bold" style={{ color: "#0066FF", flexShrink: 0 }}>✓</span>
                          <span className="text-dark font-weight-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link
                      href="/book-consultation"
                      className={`btn w-100 py-3 font-size-14 font-weight-bold rounded-pill ${
                        pkg.popular ? "sg_btn_primary justify-content-center" : "btn-outline-dark"
                      }`}
                    >
                      {pkg.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/pricing" className="text-primary font-weight-bold font-size-14 text-decoration-none" style={{ color: "#0066FF" }}>
            View Full Package Comparison Matrix &amp; Add-On Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyPricingSection;
