'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconContainer,
  IconInbox,
  IconTrendingUp,
  IconCalendar,
  IconCreditCard,
  IconFileText,
  IconStar,
  IconSparkles,
} from '@/components/common/AgencyIcons';

const crmCapabilities = [
  {
    id: 'inbox',
    title: 'Unified Multi-Channel Inbox',
    tag: 'Zero Missed Messages',
    desc: 'Consolidate Instagram DMs, Facebook messages, Google Business chats, SMS, and website inquiries into a single unified dashboard. Never juggle 5 different mobile apps again.',
    metric: '100% Inquiries Logged',
    icon: <IconInbox size={22} color="#0066FF" />,
  },
  {
    id: 'pipeline',
    title: 'Visual Opportunity Pipelines',
    tag: 'Automated Stage Transitions',
    desc: 'Drag-and-drop opportunity cards from "New Inquiry" to "Deposit Paid" and "Session Completed". Automated webhook triggers fire instantly at every pipeline movement.',
    metric: '142 Active Leads Tracked',
    icon: <IconTrendingUp size={22} color="#0066FF" />,
  },
  {
    id: 'calendar',
    title: 'Multi-Room & Suite Calendars',
    tag: 'Room & Engineer Sync',
    desc: 'Custom multi-calendar architecture managing room availability, equipment allocations, sound isolation buffers, and sound engineer shift scheduling automatically.',
    metric: 'Zero Double-Bookings',
    icon: <IconCalendar size={22} color="#0066FF" />,
  },
  {
    id: 'payments',
    title: 'Stripe Escrow & Overtime Capture',
    tag: 'Automated Deposits',
    desc: 'Integrated Stripe checkout collecting non-refundable deposits upfront, keeping credit cards securely on file for session overtime, and auto-dispatching itemized PDF invoices.',
    metric: '$42M+ In Bookings Processed',
    icon: <IconCreditCard size={22} color="#0066FF" />,
  },
  {
    id: 'waivers',
    title: 'Digital Waivers & Guest NDAs',
    tag: 'Mobile Auto-Sign',
    desc: 'Digital liability releases, gear insurance confirmations, and studio guest appearance waivers dispatched automatically to client phones before they enter the facility.',
    metric: '100% Signed Pre-Session',
    icon: <IconFileText size={22} color="#0066FF" />,
  },
  {
    id: 'reviews',
    title: 'Automated 5-Star Review Engine',
    tag: 'Google Maps Dominance',
    desc: 'Smart post-session SMS hooks triggered 2 hours after wrap, inviting satisfied clients to leave 5-star Google Maps reviews, propelling your facility to local rank #1.',
    metric: '4.9★ Average Studio Rating',
    icon: <IconStar size={22} color="#0066FF" />,
  },
];

const AgencyCrmSolutions = () => {
  const [activeCap, setActiveCap] = useState(0);
  const current = crmCapabilities[activeCap];

  return (
    <section id="crm-solutions" className="py-5 position-relative overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-4 py-lg-5">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>UNIFIED STUDIO OPERATING SYSTEM</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            GoHighLevel CRM Engineered for Real Studio Operations
          </h2>
          <p className="sg_agency_desc mx-auto font-size-16" style={{ maxWidth: '780px' }}>
            Say goodbye to disorganized spreadsheets, missed Instagram DMs, and manual calendar friction. We engineer custom GoHighLevel CRM architectures that manage your entire studio lifecycle from lead capture to repeat client retainers.
          </p>
        </div>

        {/* Executive Split Command Center Layout */}
        <div className="row g-4 g-lg-5 align-items-center mb-5">
          {/* Left Column: Interactive Capability Selector */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-3">
              {crmCapabilities.map((cap, idx) => {
                const isActive = activeCap === idx;
                return (
                  <div
                    key={cap.id}
                    onClick={() => setActiveCap(idx)}
                    className="p-3 p-xl-4 rounded-4 border transition-all cursor-pointer"
                    style={{
                      background: isActive ? '#F8FAFC' : '#FFFFFF',
                      borderColor: isActive ? '#0066FF' : '#E2E8F0',
                      boxShadow: isActive ? '0 8px 24px rgba(0, 102, 255, 0.12)' : 'none',
                      cursor: 'pointer',
                      transform: isActive ? 'translateX(4px)' : 'none',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
                      <div className="d-flex align-items-start gap-2 gap-sm-3 min-w-0 flex-grow-1">
                        <IconContainer size={40} bg={isActive ? 'rgba(0, 102, 255, 0.15)' : 'rgba(0, 102, 255, 0.08)'} border="1px solid rgba(0, 102, 255, 0.2)" radius="10px" className="flex-shrink-0 mt-1">
                          {cap.icon}
                        </IconContainer>
                        <div className="min-w-0 flex-grow-1">
                          <h3 className="text-dark font-size-15 font-size-sm-16 font-weight-bold mb-1">
                            {cap.title}
                          </h3>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className="font-size-11 font-weight-bold text-primary" style={{ color: '#0066FF' }}>
                              {cap.tag}
                            </span>
                            <span className="badge rounded-pill bg-light text-dark border font-size-10 font-monospace px-2 py-1 d-inline-block d-md-none">
                              {cap.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="badge rounded-pill bg-light text-dark border font-size-10 font-monospace px-2 py-1 flex-shrink-0 d-none d-md-inline-block">
                        {cap.metric}
                      </span>
                    </div>

                    {isActive && (
                      <p className="text-secondary font-size-13 mt-2 mb-0 pt-2 border-top" style={{ lineHeight: '1.65', borderColor: '#E2E8F0' }}>
                        {cap.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live High-Fidelity Studio Command Center Window */}
          <div className="col-12 col-lg-6">
            <div
              className="rounded-4 overflow-hidden border shadow-lg"
              style={{
                background: '#0A192F',
                borderColor: 'rgba(56, 189, 248, 0.35)',
              }}
            >
              {/* Terminal Window Header Bar */}
              <div
                className="px-3 px-sm-4 py-3 d-flex flex-wrap align-items-center justify-content-between gap-2 border-bottom"
                style={{
                  background: '#0F172A',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', flexShrink: 0 }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></span>
                  <span className="text-white-50 font-monospace font-size-11 font-size-sm-12 text-truncate ms-1 ms-sm-2">
                    StudioGrowth360 · GHL Command Center
                  </span>
                </div>
                <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-10 px-2 py-1 flex-shrink-0">
                  ● Live Sync Active
                </span>
              </div>

              {/* Terminal Body Content Based on Active Capability */}
              <div className="p-3 p-sm-4 text-white">
                {/* Active Capability Banner */}
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                  <div className="min-w-0">
                    <span className="font-monospace font-size-11 text-uppercase" style={{ color: '#38BDF8' }}>
                      FEATURE SPOTLIGHT:
                    </span>
                    <div className="font-size-16 font-size-sm-18 font-weight-bold text-white mt-1">
                      {current.title}
                    </div>
                  </div>
                  <span className="badge rounded-pill font-size-11 px-3 py-1 font-weight-bold flex-shrink-0" style={{ background: 'rgba(0, 102, 255, 0.25)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                    {current.tag}
                  </span>
                </div>

                {/* Visual Mockup Details */}
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-size-12 font-weight-bold text-white">Studio Session #4829</span>
                      <span className="badge bg-success bg-opacity-25 text-success font-size-10">Stripe Escrow Verified</span>
                    </div>
                    <div className="font-size-13 text-white mb-1">Commercial Photoshoot &amp; Video Suite</div>
                    <div className="font-size-11" style={{ color: '#94A3B8' }}>Deposit: $1,200.00 (Paid via Card-on-File) · Digital Waiver Signed</div>
                  </div>

                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="font-size-12 font-weight-bold text-white">Multi-Room Availability Lock</span>
                      <span className="badge bg-primary bg-opacity-25 text-primary font-size-10" style={{ color: '#38BDF8' }}>Auto-Synced</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between font-size-11" style={{ color: '#CBD5E1' }}>
                      <span>Suite A (Cyclorama): 2:00 PM – 5:00 PM</span>
                      <span className="text-success">Reserved</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between font-size-11 mt-1" style={{ color: '#CBD5E1' }}>
                      <span>Buffer Interval: 5:00 PM – 5:30 PM</span>
                      <span className="text-warning">Equipment Reset</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-3" style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    <div className="font-size-12 font-weight-bold text-success mb-1">
                      ✓ Instant 2-Minute SMS Confirmation Dispatched
                    </div>
                    <div className="font-size-11" style={{ color: '#CBD5E1' }}>
                      Client phone received calendar invite, parking directions, and door PIN automatically.
                    </div>
                  </div>
                </div>

                {/* Sub-Card SLA Proof */}
                <div className="pt-3 border-top border-secondary border-opacity-25 d-flex align-items-center justify-content-between font-size-12">
                  <span style={{ color: '#94A3B8' }}>Turnkey White-Glove Migration</span>
                  <span className="font-weight-bold text-white">7–14 Day Live Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Turnkey Setup Feature Bar */}
        <div
          className="rounded-4 overflow-hidden border bg-light p-3 p-sm-4 p-xl-5 d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-4 shadow-sm"
          style={{ borderColor: '#E2E8F0' }}
        >
          <div className="d-flex align-items-start gap-3">
            <IconContainer size={44} bg="rgba(0, 102, 255, 0.1)" border="1px solid rgba(0, 102, 255, 0.25)" radius="12px" className="flex-shrink-0 mt-1">
              <IconSparkles size={22} color="#0066FF" />
            </IconContainer>
            <div>
              <div className="text-dark font-weight-bold font-size-16 font-size-sm-17 mb-1">
                We Build, Migrate &amp; Manage Your Entire Studio CRM
              </div>
              <div className="text-secondary font-size-13 font-size-sm-14">
                From migrating client history from Mindbody, HoneyBook, or spreadsheets to configuring multi-suite calendars and automated SMS—our US engineers handle everything.
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-3 flex-shrink-0">
            <Link href="/crm-solutions" className="sg_btn_primary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center">
              <span>Explore CRM Blueprint →</span>
            </Link>
            <Link href="/book-consultation" className="sg_btn_secondary font-size-14 py-3 px-4 w-100 w-sm-auto justify-content-center text-center">
              <span>Free CRM Audit</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyCrmSolutions;
