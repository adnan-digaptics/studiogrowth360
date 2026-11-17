'use client'

import React from 'react';
import Link from 'next/link';
import {
  IconContainer,
  IconCamera,
  IconZap,
  IconDatabase,
  IconTarget,
  IconPhone,
  IconCalendar,
  IconSparkles,
  IconTrendingUp,
} from '@/components/common/AgencyIcons';

const AgencyWhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-5 position-relative overflow-hidden" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-4 py-lg-5">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>THE STUDIOGROWTH360 ADVANTAGE</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Why Studio Owners Choose Us as Their Growth Partner
          </h2>
          <p className="sg_agency_desc mx-auto font-size-16" style={{ maxWidth: '760px' }}>
            We don&apos;t just sell software or run disconnected ads. We engineer custom, end-to-end growth and automation architectures designed specifically around the daily realities of creative and wellness studios.
          </p>
        </div>

        {/* 4 Flagship Strategic Advantage Pillars (2x2 Grid with Rich UI) */}
        <div className="row g-4 align-items-stretch mb-5">
          {/* Pillar 1: 100% Studio-Specialized */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 p-xl-5 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between shadow-sm transition-all"
              style={{
                borderColor: '#E2E8F0',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <IconContainer size={48} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="14px">
                      <IconCamera size={24} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                        100% SPECIALIZED
                      </span>
                      <div className="font-size-12 text-secondary mt-1">Zero Generic Agency Templates</div>
                    </div>
                  </div>
                  <span className="font-monospace font-size-12 text-secondary">01 / 04</span>
                </div>

                <h3 className="text-dark font-size-22 font-weight-bold mb-2">
                  Purpose-Built Exclusively for Creative &amp; Wellness Studios
                </h3>

                <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.7' }}>
                  We don&apos;t work with dentists, roofers, or generic e-commerce stores. 100% of our CRM snapshots, booking funnels, automated workflows, and ad creatives are built specifically for studio equipment, suite scheduling, and client turnover dynamics.
                </p>

                {/* Studio Verticals Tag Strip */}
                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="font-size-11 font-weight-bold text-uppercase text-secondary mb-2 font-monospace">
                    SUPPORTED STUDIO VERTICALS:
                  </div>
                  <div className="d-flex flex-wrap gap-2 font-size-12">
                    <span className="badge bg-white text-dark border px-2 py-1">📸 Photography Cycloramas</span>
                    <span className="badge bg-white text-dark border px-2 py-1">🎙️ Podcast &amp; Media Suites</span>
                    <span className="badge bg-white text-dark border px-2 py-1">🧘 Yoga &amp; Movement Lofts</span>
                    <span className="badge bg-white text-dark border px-2 py-1">🏺 Arts, Crafts &amp; Pottery</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between font-size-13 text-secondary">
                <span className="text-primary font-weight-bold" style={{ color: '#0066FF' }}>✓ Built for your facility workflow</span>
                <span className="badge rounded-pill bg-light text-dark border font-size-11">USA Studios</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Unified Operating System */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 p-xl-5 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between shadow-sm transition-all"
              style={{
                borderColor: '#E2E8F0',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <IconContainer size={48} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="14px">
                      <IconDatabase size={24} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <span className="badge rounded-pill bg-success bg-opacity-10 text-success font-size-11 px-3 py-1 font-weight-bold">
                        CONSOLIDATED STACK
                      </span>
                      <div className="font-size-12 text-secondary mt-1">Replaces 6-8 Disconnected Apps</div>
                    </div>
                  </div>
                  <span className="font-monospace font-size-12 text-secondary">02 / 04</span>
                </div>

                <h3 className="text-dark font-size-22 font-weight-bold mb-2">
                  One Unified Operating System (GoHighLevel + n8n)
                </h3>

                <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.7' }}>
                  Stop paying $700+/month across HoneyBook, Acuity, Zapier, Mailchimp, and RingCentral. We consolidate your inquiry forms, booking calendars, automated deposit invoicing, client waivers, and SMS communications into one seamless command center.
                </p>

                {/* Integrated Apps Preview */}
                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="d-flex align-items-center justify-content-between font-size-11 font-weight-bold text-secondary mb-2 font-monospace">
                    <span>UNIFIED INTEGRATIONS:</span>
                    <span className="text-success font-weight-bold">Zero Per-Task Fees</span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 font-size-12">
                    <span className="badge bg-white text-dark border px-2 py-1">Stripe Escrow Deposits</span>
                    <span className="badge bg-white text-dark border px-2 py-1">Google &amp; Apple Calendars</span>
                    <span className="badge bg-white text-dark border px-2 py-1">Twilio A2P SMS &amp; Calls</span>
                    <span className="badge bg-white text-dark border px-2 py-1">Slack Staff Notifications</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between font-size-13 text-secondary">
                <span className="text-success font-weight-bold">✓ Slashes 25+ Admin Hours / Week</span>
                <span className="badge rounded-pill bg-light text-dark border font-size-11">Self-Hosted n8n</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Sub-2-Minute Lead Velocity & 24/7 AI */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 p-xl-5 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between shadow-sm transition-all"
              style={{
                borderColor: '#E2E8F0',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <IconContainer size={48} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="14px">
                      <IconPhone size={24} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <span className="badge rounded-pill bg-danger bg-opacity-10 text-danger font-size-11 px-3 py-1 font-weight-bold">
                        ZERO MISSED LEADS
                      </span>
                      <div className="font-size-12 text-secondary mt-1">&lt; 120-Second Response Time</div>
                    </div>
                  </div>
                  <span className="font-monospace font-size-12 text-secondary">03 / 04</span>
                </div>

                <h3 className="text-dark font-size-22 font-weight-bold mb-2">
                  Sub-2-Minute Lead Velocity &amp; 24/7 AI Voice Receptionists
                </h3>

                <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.7' }}>
                  Over 40% of studio calls and inquiries occur outside standard business hours. Our instant 2-minute SMS text-back and human-sounding AI Voice Receptionists engage prospects immediately, answer equipment and rate questions, and book sessions live on the spot.
                </p>

                {/* Telemetry Metric Comparison */}
                <div className="row g-2 mb-3 text-center">
                  <div className="col-6">
                    <div className="p-2 rounded-3 bg-light border">
                      <div className="font-size-18 font-weight-bold text-dark">&lt; 2 Minutes</div>
                      <div className="font-size-11 text-secondary">Average Lead Response</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-2 rounded-3 bg-light border">
                      <div className="font-size-18 font-weight-bold text-primary" style={{ color: '#0066FF' }}>3.4x ROAS</div>
                      <div className="font-size-11 text-secondary">Paid Ad Return</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between font-size-13 text-secondary">
                <span className="text-primary font-weight-bold" style={{ color: '#0066FF' }}>✓ Every inbound call answered in 1 ring</span>
                <span className="badge rounded-pill bg-light text-dark border font-size-11">24/7/365 AI</span>
              </div>
            </div>
          </div>

          {/* Pillar 4: Turnkey White-Glove Launch */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 p-xl-5 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between shadow-sm transition-all"
              style={{
                borderColor: '#E2E8F0',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <IconContainer size={48} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="14px">
                      <IconTrendingUp size={24} color="#0066FF" />
                    </IconContainer>
                    <div>
                      <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                        WHITE-GLOVE SETUP
                      </span>
                      <div className="font-size-12 text-secondary mt-1">Live in 7–14 Days</div>
                    </div>
                  </div>
                  <span className="font-monospace font-size-12 text-secondary">04 / 04</span>
                </div>

                <h3 className="text-dark font-size-22 font-weight-bold mb-2">
                  Done-For-You Implementation with Direct US Engineers
                </h3>

                <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.7' }}>
                  You don&apos;t have to learn software or configure API webhooks. Our senior automation engineers handle 100% of the build, client database migration, pipeline architecture, calendar sync, staff onboarding, and ongoing maintenance with verified SLAs.
                </p>

                {/* SLA Guarantee Checklist */}
                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="row g-2 font-size-12 text-secondary">
                    <div className="col-6 d-flex align-items-center gap-1">
                      <span className="text-success font-weight-bold">✓</span>
                      <span>Turnkey 7–14 Day Launch</span>
                    </div>
                    <div className="col-6 d-flex align-items-center gap-1">
                      <span className="text-success font-weight-bold">✓</span>
                      <span>Zero Interrupted Bookings</span>
                    </div>
                    <div className="col-6 d-flex align-items-center gap-1">
                      <span className="text-success font-weight-bold">✓</span>
                      <span>Full Data Migration</span>
                    </div>
                    <div className="col-6 d-flex align-items-center gap-1">
                      <span className="text-success font-weight-bold">✓</span>
                      <span>Dedicated Account Engineer</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between font-size-13 text-secondary">
                <span className="text-success font-weight-bold">✓ Month-to-month terms · Zero lock-in</span>
                <span className="badge rounded-pill bg-light text-dark border font-size-11">Enterprise SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Action Banner */}
        <div
          className="p-4 p-xl-5 rounded-4 bg-white border d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 shadow-sm"
          style={{ borderColor: '#E2E8F0' }}
        >
          <div className="d-flex align-items-center gap-3">
            <IconContainer size={50} bg="rgba(0, 102, 255, 0.1)" border="1px solid rgba(0, 102, 255, 0.25)" radius="12px">
              <IconSparkles size={26} color="#0066FF" />
            </IconContainer>
            <div>
              <div className="text-dark font-weight-bold font-size-17 mb-1">
                Ready to see our automation architecture tailored for your specific studio facility?
              </div>
              <div className="text-secondary font-size-14">
                Book a free 30-minute growth &amp; CRM blueprint consultation with our studio engineering team.
              </div>
            </div>
          </div>

          <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 flex-shrink-0">
            <span>Schedule Free Strategy Call →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyWhyChooseUs;
