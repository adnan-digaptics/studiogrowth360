'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const tiers = [
  {
    name: "Starter Studio",
    subtitle: "Ideal for single-room boutique podcast & vocal studios",
    monthlyPrice: 79,
    annualPrice: 63,
    popular: false,
    badge: "Boutique",
    features: [
      "1 Recording Suite Calendar & Scheduling Engine",
      "Automated Stripe Deposit & Reservation Checkout",
      "Digital Client NDA & Release Agreement Auto-Sign",
      "Wholesale Post-Production Access ($160/ep flat rate)",
      "Client Session Asset Vault (50GB active storage)",
      "Standard Email & Chat Support (24h SLA)",
    ],
    ctaText: "Start Starter Plan",
    planId: "starter",
  },
  {
    name: "Growth Studio OS",
    subtitle: "Built for scaling multi-suite facilities & media hubs",
    monthlyPrice: 199,
    annualPrice: 159,
    popular: true,
    badge: "Most Popular",
    features: [
      "Up to 4 Multi-Suite Concurrent Room Calendars",
      "Dynamic Rate Card & Peak-Hour Yield Optimizer",
      "Priority 24h Wholesale Post-Production Queue",
      "10x Kinetic Social Shorts Turnaround Included",
      "White-Label Client Booking Portal on Custom Domain",
      "Local Google Pack Dominance & SEO Playbook",
      "Dedicated Studio Success Concierge",
      "Client Session Asset Vault (500GB active storage)",
    ],
    ctaText: "Start Growth Plan",
    planId: "growth",
  },
  {
    name: "Enterprise Network",
    subtitle: "For multi-location studios & enterprise media franchises",
    monthlyPrice: 499,
    annualPrice: 399,
    popular: false,
    badge: "Franchise & Multi-Location",
    features: [
      "Unlimited Suites & Multi-City Location Routing",
      "Dedicated Wholesale Video Editing Pod & Colorist",
      "Guaranteed < 12h Rapid Post-Production SLA",
      "Custom Stripe Escrow & Custom Merchant Payouts",
      "Enterprise Corporate Client Retainer Funnel Setup",
      "SOC-2 Type II Compliance & Mutual Enterprise NDA",
      "Unlimited Client Session Vault with S3 Integration",
      "1-on-1 Quarterly Studio Yield & Revenue Audits",
    ],
    ctaText: "Start Enterprise Plan",
    planId: "enterprise",
  },
];

const PlatformPricingPreview = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-5 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container py-4">
        {/* Header */}
        <div className="text-center max-w-750 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              MEMBERSHIP PLANS &amp; PRICING
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Transparent Pricing Designed for Studio ROI
          </h2>
          <p className="text-secondary font-size-15 mb-4 cs_m0">
            One extra client booking or single wholesale edit resale pays for your entire monthly subscription.
          </p>

          {/* Billing Toggle */}
          <div className="d-inline-flex align-items-center gap-3 p-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`btn btn-sm rounded-pill px-3 py-1 font-size-13 ${!isAnnual ? 'text-white font-weight-bold' : 'text-secondary'}`}
              style={{ background: !isAnnual ? '#FF6B00' : 'transparent', border: 'none', transition: 'all 0.2s ease' }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`btn btn-sm rounded-pill px-3 py-1 font-size-13 d-flex align-items-center gap-2 ${isAnnual ? 'text-white font-weight-bold' : 'text-secondary'}`}
              style={{ background: isAnnual ? '#FF6B00' : 'transparent', border: 'none', transition: 'all 0.2s ease' }}
            >
              <span>Annual Billing</span>
              <span className="badge rounded-pill" style={{ background: isAnnual ? '#000' : '#22c55e', color: isAnnual ? '#FF6B00' : '#000', fontSize: '10px', fontWeight: 800 }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="row g-4 align-items-stretch mb-4">
          {tiers.map((tier, idx) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div key={idx} className="col-12 col-lg-4">
                <div
                  className="p-4 p-xl-5 rounded-4 h-100 d-flex flex-column justify-content-between position-relative"
                  style={{
                    background: tier.popular ? 'linear-gradient(180deg, #14141B 0%, #0D0D12 100%)' : 'rgba(255, 255, 255, 0.02)',
                    border: tier.popular ? '2px solid #FF6B00' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: tier.popular ? '0 15px 40px rgba(255, 107, 0, 0.15)' : 'none',
                    transform: tier.popular ? 'scale(1.02)' : 'none',
                    zIndex: tier.popular ? 2 : 1,
                  }}
                >
                  {tier.popular && (
                    <div className="position-absolute top-0 start-50 translate-middle">
                      <span className="badge rounded-pill px-3 py-1" style={{ background: '#FF6B00', color: '#000', fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px' }}>
                        ★ MOST POPULAR FOR STUDIOS
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h3 className="text-white font-size-22 font-weight-bold mb-0">
                        {tier.name}
                      </h3>
                      <span className="badge rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#A1A1AA', fontSize: '11px' }}>
                        {tier.badge}
                      </span>
                    </div>

                    <p className="text-secondary font-size-13 mb-4" style={{ minHeight: '38px' }}>
                      {tier.subtitle}
                    </p>

                    <div className="mb-4">
                      <span className="font-monospace text-white font-weight-bold" style={{ fontSize: 'clamp(34px, 3.5vw, 44px)' }}>
                        ${price}
                      </span>
                      <span className="text-secondary font-size-14 ms-2">/ month</span>
                      {isAnnual && (
                        <div className="font-size-11 text-success mt-1">Billed annually (${price * 12}/yr)</div>
                      )}
                    </div>

                    <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2 mb-4">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="d-flex align-items-start gap-2 font-size-13 text-secondary">
                          <span style={{ color: tier.popular ? '#FF6B00' : '#22c55e', flexShrink: 0, marginTop: '2px' }}>✓</span>
                          <span className="text-white-50">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link
                      href={`/onboard?plan=${tier.planId}`}
                      className={`btn w-100 py-3 font-size-14 font-weight-bold rounded-3 ${tier.popular ? 'btn-primary' : 'btn-outline-light'}`}
                      style={{
                        background: tier.popular ? '#FF6B00' : 'transparent',
                        borderColor: tier.popular ? '#FF6B00' : 'rgba(255, 255, 255, 0.2)',
                        color: '#FFF',
                      }}
                    >
                      {tier.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Comparison Link */}
        <div className="text-center pt-3">
          <Link href="/pricing" className="text-secondary text-decoration-none hover-white font-size-14 d-inline-flex align-items-center gap-2">
            <span>View detailed feature matrix &amp; wholesale service pricing FAQ →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformPricingPreview;

