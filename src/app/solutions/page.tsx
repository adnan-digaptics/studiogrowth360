'use client';

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import Link from 'next/link';

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'management' | 'growth'>('all');

  const managementSolutions = [
    {
      num: '01',
      title: 'Multi-Suite Scheduling & Real-Time Booking Engine',
      category: 'Management OS',
      desc: 'Eliminate double-bookings and room scheduling chaos. Manage multiple recording suites, voice booths, and green rooms with automated 15-minute acoustic reset buffers and instant Google/Apple Calendar sync.',
      features: [
        'Real-time suite availability embeddable on your studio website',
        'Automated room buffers for mic sanitization and sound resets',
        'Conflict-free calendar synchronization across mobile and desktop',
        'Direct integration with Blackmagic ATEM and studio hardware',
      ],
    },
    {
      num: '02',
      title: 'Automated Deposits, Invoicing & Stripe Payouts',
      category: 'Management OS',
      desc: 'Never chase late client payments again. Collect mandatory 50% upfront deposits upon booking, automate session overage billing in 30-minute blocks, and receive automated 24h direct payouts into your bank account.',
      features: [
        'Automated 50% upfront deposit collection via Stripe Connect',
        'Automatic overage invoicing triggered by studio exit logs',
        'Configurable cancellation fee policy and liability holds',
        'Itemized client receipts with your studio branding',
      ],
    },
    {
      num: '03',
      title: 'Session Asset Cloud Vault & 4K Footage Delivery',
      category: 'Management OS',
      desc: 'Hand off massive 4K video files without fragile external SSDs. Growth Domains automatically offloads multi-cam ISO recordings to an uncompressed cloud storage locker where clients can download files or trigger edits.',
      features: [
        'Lossless 4K ProRes and uncompressed 48kHz WAV audio ingest',
        'Branded client download portal active for 14 to 30 days',
        '1-click handoff to Growth Domains wholesale editing network',
        'Zero file size limits and multi-threaded gigabit upload support',
      ],
    },
    {
      num: '04',
      title: 'Digital Studio Contracts, NDAs & Guest Releases',
      category: 'Management OS',
      desc: 'Protect your facility, gear, and reputation. Clients and their guests digitally sign your customized Studio Hire Agreement, Equipment Liability Waiver, and Commercial Talent Release Form upon booking confirmation.',
      features: [
        'E-signature compliance for studio hire and equipment liability',
        'Mutual NDA protection for high-profile executive and celebrity guests',
        'Automated guest intake briefs (mic preferences, drink orders, topic notes)',
        'Centralized legal document archive per client show',
      ],
    },
  ];

  const growthSolutions = [
    {
      num: '05',
      title: 'Wholesale Post-Production Resale Engine',
      category: 'Business Growth',
      desc: 'Turn your studio into a full-service production network overnight without hiring in-house editors. Growth Domains senior video editors cut, grade, and deliver full episodes and 10 viral shorts in under 24 hours at wholesale rates.',
      features: [
        'Wholesale episode cut cost: $160 · Suggested client retail: $450+',
        'Guaranteed < 24-hour delivery on full episode cuts and viral shorts',
        '100% white-labeled under your studio name and aesthetic guidelines',
        'Adds $5,000 to $15,000/month in pure margin per active recording suite',
      ],
    },
    {
      num: '06',
      title: 'Corporate Client Acquisition & Local SEO Dominance',
      category: 'Business Growth',
      desc: 'Fill low-occupancy weekday studio hours with high-margin enterprise accounts. We provide turnkey B2B client acquisition playbooks, Google Local Pack optimization, and outreach templates targeting venture funds and marketing agencies.',
      features: [
        'Rank #1 for "podcast recording studio near me" in your metropolitan market',
        'Outreach funnels targeting CEOs, VC managing partners, and CMOs',
        'Enterprise show retainer templates ($2,500 - $6,000/mo contracts)',
        'Dedicated corporate client onboarding scripts and hospitality SOPs',
      ],
    },
    {
      num: '07',
      title: 'Dynamic Rate Card & Suite Yield Optimization',
      category: 'Business Growth',
      desc: 'Stop underpricing your suites. Our algorithm analyzes regional studio supply, peak booking hours, and seasonal demand in your market to recommend dynamic rate adjustments that maximize revenue per square foot.',
      features: [
        'Dynamic off-peak pricing to fill morning and early-afternoon slots',
        'Equipment surcharge bundling (Sony FX6 4K pack, prompter add-ons)',
        'Competitive rate card benchmarking against regional peers',
        'Automated discount rules for recurring weekly/monthly show commitments',
      ],
    },
    {
      num: '08',
      title: 'Global Studio Referral & Production Co-Op Network',
      category: 'Business Growth',
      desc: 'Never lose a client whose guest is in another city. Connect with 340+ verified partner studios in London, New York, LA, Austin, and Chicago to coordinate synchronized multi-city remote recordings with zero friction.',
      features: [
        'Cross-referral network for traveling hosts and celebrity guests',
        'Standardized technical audio/video specs across all partner studios',
        'Co-op referral commissions on outbound bookings',
        'Shared production knowledge and gear procurement group discounts',
      ],
    },
  ];

  const displayed =
    activeCategory === 'management'
      ? managementSolutions
      : activeCategory === 'growth'
      ? growthSolutions
      : [...managementSolutions, ...growthSolutions];

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="py-5" style={{ minHeight: '90vh', background: 'radial-gradient(ellipse at top, rgba(255, 107, 0, 0.08) 0%, rgba(9, 9, 11, 1) 70%)' }}>
            <div className="container py-4">
              {/* Header */}
              <div className="text-center max-w-850 mx-auto mb-5 pt-3">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                  <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ PLATFORM CAPABILITIES</span>
                </div>
                <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: 'clamp(30px, 4.2vw, 48px)' }}>
                  Complete Solutions Built For <span style={{ color: '#FF6B00' }}>Studio Growth</span>
                </h1>
                <p className="text-secondary font-size-17 mb-4">
                  Growth Domains solves the two biggest challenges studio operators face: operational complexity and revenue stagnation.
                </p>

                {/* Filter Tabs */}
                <div className="d-inline-flex p-1 rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('all')}
                    className="border-0 px-4 py-2 rounded-pill font-size-13 font-weight-bold transition-all"
                    style={{
                      background: activeCategory === 'all' ? '#FF6B00' : 'transparent',
                      color: activeCategory === 'all' ? '#FFFFFF' : '#A1A1AA',
                    }}
                  >
                    All Solutions ({managementSolutions.length + growthSolutions.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('management')}
                    className="border-0 px-4 py-2 rounded-pill font-size-13 font-weight-bold transition-all"
                    style={{
                      background: activeCategory === 'management' ? '#FF6B00' : 'transparent',
                      color: activeCategory === 'management' ? '#FFFFFF' : '#A1A1AA',
                    }}
                  >
                    Studio Management OS (4)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCategory('growth')}
                    className="border-0 px-4 py-2 rounded-pill font-size-13 font-weight-bold transition-all"
                    style={{
                      background: activeCategory === 'growth' ? '#FF6B00' : 'transparent',
                      color: activeCategory === 'growth' ? '#FFFFFF' : '#A1A1AA',
                    }}
                  >
                    Business Growth &amp; Revenue (4)
                  </button>
                </div>
              </div>

              {/* Solutions Grid */}
              <div className="row g-4 mb-5">
                {displayed.map((item) => (
                  <div className="col-12 col-md-6" key={item.title}>
                    <div
                      className="p-4 p-lg-5 rounded-4 h-100 d-flex flex-column justify-content-between transition-all"
                      style={{
                        background: 'rgba(18, 18, 24, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <span className="font-monospace font-size-13 font-weight-bold" style={{ color: '#FF6B00' }}>
                            {item.num} · {item.category}
                          </span>
                          <span className="badge rounded-pill bg-secondary bg-opacity-25 text-white-50 font-size-11">
                            STUDIO TESTED
                          </span>
                        </div>

                        <h3 className="text-white font-size-22 font-weight-bold mb-3">{item.title}</h3>
                        <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: 1.65 }}>{item.desc}</p>

                        <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                          <div className="text-white font-size-12 font-weight-bold text-uppercase mb-2" style={{ letterSpacing: '0.5px' }}>
                            Included Capabilities:
                          </div>
                          <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                            {item.features.map((feat, idx) => (
                              <li key={idx} className="d-flex align-items-start gap-2 font-size-13 text-secondary">
                                <span style={{ color: '#00E676', flexShrink: 0, marginTop: '2px' }}>✓</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-15">
                        <Link href="/onboard" className="text-decoration-none font-size-13 font-weight-bold" style={{ color: '#FF8A33' }}>
                          Activate for Your Studio →
                        </Link>
                        <Link href="/pricing" className="text-secondary font-size-12 hover-white text-decoration-none">
                          View in Pricing Tiers
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Conversion Strip */}
              <div className="p-4 p-md-5 rounded-4 text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(20, 20, 26, 0.95) 100%)', border: '1px solid rgba(255, 107, 0, 0.35)' }}>
                <h3 className="text-white font-size-26 font-weight-bold mb-2">Ready to Transform Your Studio Operations?</h3>
                <p className="text-secondary font-size-15 max-w-600 mx-auto mb-4">
                  Join 340+ studio operators who have automated their scheduling and increased monthly profit by reselling wholesale post-production.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Link href="/onboard" className="cs_btn cs_style_1 cs_color_1 px-4 py-3" style={{ borderRadius: '12px' }}>
                    <span>Onboard Your Studio in 3 Minutes</span>
                    <span>→</span>
                  </Link>
                  <Link href="/tools" className="btn btn-outline-secondary text-white px-4 py-3 font-weight-bold font-size-14" style={{ borderRadius: '12px' }}>
                    <span>Explore Free Studio Calculators</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

