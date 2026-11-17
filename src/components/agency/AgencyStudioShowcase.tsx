'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { industrySolutions } from '@/data/agency';
import { IconContainer, getIndustryVectorIcon } from '@/components/common/AgencyIcons';
import { publicAsset } from '@/utils/publicAsset';

const studioFeatures = [
  {
    slug: 'photography-studios',
    tag: 'Commercial & Portrait',
    stat: '+3.8x Bookings',
    statLabel: 'Lead Velocity',
    badgeColor: '#0066FF',
    highlights: ['Cyclorama booking engine', 'Instant SMS inquiry reply', 'Gallery upsell funnels'],
  },
  {
    slug: 'podcast-studios',
    tag: 'Broadcast & Multi-Cam',
    stat: '91% Occupancy',
    statLabel: 'Suite Utilization',
    badgeColor: '#8B5CF6',
    highlights: ['Automated guest waivers', 'Multi-room engineer buffer', '24h edit upsells'],
  },
  {
    slug: 'yoga-studios',
    tag: 'Wellness & Movement',
    stat: '140+ Members',
    statLabel: 'Monthly Retainers',
    badgeColor: '#10B981',
    highlights: ['Class pack automations', 'Intro trial drop-in funnel', 'No-show reduction SMS'],
  },
  {
    slug: 'craft-studios',
    tag: 'Workshops & Ceramic',
    stat: '94% Attendance',
    statLabel: 'Event Capacity',
    badgeColor: '#F59E0B',
    highlights: ['Group seat reservation', 'Supply deposit checkout', 'Repeat workshop retention'],
  },
];

const AgencyStudioShowcase = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-5 bg-white position-relative overflow-hidden" style={{ borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-4 py-lg-5">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>REAL STUDIOS · REAL GROWTH</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Built for Real American Studios
          </h2>
          <p className="sg_agency_desc mx-auto">
            From high-end photography cycloramas and 4K podcast recording booths to sunlit yoga sanctuaries and pottery craft workshops—our automation engines are purpose-built for how your facility operates.
          </p>
        </div>

        {/* 4 Studio Visual Showcase Grid */}
        <div className="row g-4 align-items-stretch mb-5">
          {industrySolutions.map((ind, idx) => {
            const feat = studioFeatures.find((f) => f.slug === ind.slug) || studioFeatures[idx];
            const isHovered = hoveredIdx === idx;

            return (
              <div key={ind.id} className="col-12 col-md-6 col-lg-3">
                <div
                  className="rounded-4 h-100 overflow-hidden bg-white border d-flex flex-column justify-content-between shadow-sm transition-all"
                  style={{
                    borderColor: isHovered ? '#0066FF' : '#E2E8F0',
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    boxShadow: isHovered ? '0 16px 32px rgba(0, 102, 255, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Studio Photorealistic Image Card Header */}
                  <div className="sg_img_16_10" style={{ borderRadius: '16px 16px 0 0' }}>
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="sg_img_cover"
                      style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <div
                      className="position-absolute"
                      style={{
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.15) 60%, transparent 100%)',
                      }}
                    ></div>

                    {/* Single Clean Bottom Overlay (Zero Top-Bottom Collision) */}
                    <div className="position-absolute bottom-0 start-0 p-3 w-100 text-white">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <span className="badge rounded-pill bg-white text-dark font-size-10 px-2 py-1 font-weight-bold shadow-sm">
                          {feat.tag}
                        </span>
                        <span className="badge rounded-pill font-size-11 px-2 py-1 font-weight-bold text-white" style={{ background: feat.badgeColor }}>
                          {feat.stat}
                        </span>
                      </div>
                      <div className="font-size-11" style={{ color: '#CBD5E1' }}>{feat.statLabel}</div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h3 className="font-size-18 font-weight-bold text-dark mb-2">
                        <Link href={`/${ind.slug}`} className="text-decoration-none text-dark hover-primary">
                          {ind.name}
                        </Link>
                      </h3>

                      <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                        {ind.tagline}
                      </p>

                      {/* Studio Feature Bullet Points */}
                      <div className="d-flex flex-column gap-2 mb-4">
                        {feat.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="d-flex align-items-center gap-2 font-size-12 text-secondary">
                            <span className="text-primary font-weight-bold" style={{ color: '#0066FF' }}>✓</span>
                            <span className="text-dark font-weight-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <Link
                        href={`/${ind.slug}`}
                        className="text-decoration-none font-size-13 font-weight-bold text-primary d-inline-flex align-items-center gap-1"
                        style={{ color: '#0066FF' }}
                      >
                        <span>Explore System</span>
                        <span>→</span>
                      </Link>
                      <span className="badge rounded-pill bg-light text-secondary font-size-11 px-2 py-1">
                        USA Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wide Studio Operations Command Center Banner */}
        <div className="rounded-4 overflow-hidden border shadow-sm position-relative" style={{ background: '#0A192F', borderColor: 'rgba(0, 102, 255, 0.25)' }}>
          <div className="row g-0 align-items-center">
            <div className="col-12 col-lg-6 p-4 p-xl-5 text-white position-relative" style={{ zIndex: 2 }}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="badge rounded-pill bg-primary text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: '#0066FF' }}>
                  CENTRALIZED OPERATIONS
                </span>
                <span className="font-size-12 font-monospace" style={{ color: '#38BDF8' }}>
                  GHL CRM + n8n + AI Voice
                </span>
              </div>

              <h3 className="text-white font-size-26 font-size-md-36 font-weight-bold mb-3">
                One Unified Command Center for Your Entire Facility
              </h3>

              <p className="font-size-15 mb-4" style={{ color: '#CBD5E1', lineHeight: '1.7' }}>
                Whether you manage a single photography cyclorama or a multi-room podcast studio complex, our platform unifies incoming leads, calendar bookings, deposit payments, waiver signing, and 5-star Google review requests into a self-driving system.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-6 col-sm-4">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="font-size-22 font-weight-bold text-white mb-1">&lt; 2 min</div>
                    <div className="font-size-11" style={{ color: '#94A3B8' }}>Automated Reply</div>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="font-size-22 font-weight-bold text-white mb-1">0%</div>
                    <div className="font-size-11" style={{ color: '#94A3B8' }}>No-Show Rate</div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div className="font-size-22 font-weight-bold text-white mb-1">24/7</div>
                    <div className="font-size-11" style={{ color: '#94A3B8' }}>AI Voice Reception</div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4">
                  <span>Book Free Studio Strategy Call →</span>
                </Link>
                <Link
                  href="/services"
                  className="sg_btn_secondary font-size-14 py-3 px-4"
                  style={{ background: '#FFFFFF', color: '#0F172A', borderColor: '#FFFFFF', fontWeight: 700 }}
                >
                  <span style={{ color: '#0F172A', fontWeight: 700 }}>View All 7 Services</span>
                </Link>
              </div>
            </div>

            {/* Right: High-Res Platform Command Center Photo */}
            <div className="col-12 col-lg-6 position-relative sg_showcase_hero_img" style={{ minHeight: '260px' }}>
              <div className="w-100 h-100 position-relative overflow-hidden" style={{ minHeight: '260px', borderRadius: '0 0 16px 16px' }}>
                <img
                  src={publicAsset("/assets/img/studios/studio-platform-hero.jpg")}
                  alt="Studio Operations Command Center"
                  className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                />
                <div
                  className="position-absolute"
                  style={{
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.3) 50%, transparent 100%)',
                  }}
                ></div>
                <div className="position-absolute bottom-0 end-0 p-4 text-end">
                  <span className="badge rounded-pill bg-dark bg-opacity-75 text-white font-size-11 px-3 py-1 font-monospace border border-secondary border-opacity-50">
                    Live Studio Infrastructure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyStudioShowcase;
