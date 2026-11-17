'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconContainer,
  IconTarget,
  IconZap,
  IconRocket,
  IconUsers,
  IconSparkles,
  IconLayout,
  IconMegaphone,
} from '@/components/common/AgencyIcons';
import { publicAsset } from '@/utils/publicAsset';

const AgencyServicesBento = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'acquisition' | 'automation' | 'ai'>('all');

  const getCardStyle = (category: 'acquisition' | 'automation' | 'ai', isDark = false) => {
    const isDimmed = activeFilter !== 'all' && activeFilter !== category;
    const isHighlighted = activeFilter === category;

    if (isDark) {
      return {
        background: 'linear-gradient(145deg, #0A192F 0%, #0F172A 100%)',
        borderColor: isHighlighted ? '#38BDF8' : 'rgba(56, 189, 248, 0.3)',
        boxShadow: isHighlighted ? '0 16px 40px rgba(56, 189, 248, 0.25)' : 'none',
        opacity: isDimmed ? 0.35 : 1,
        transform: isHighlighted ? 'translateY(-4px)' : 'none',
        filter: isDimmed ? 'grayscale(60%)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        color: '#FFFFFF',
      };
    }

    return {
      borderColor: isHighlighted ? '#0066FF' : '#E2E8F0',
      boxShadow: isHighlighted ? '0 16px 40px rgba(0, 102, 255, 0.16)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
      opacity: isDimmed ? 0.35 : 1,
      transform: isHighlighted ? 'translateY(-4px)' : 'none',
      filter: isDimmed ? 'grayscale(60%)' : 'none',
      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    };
  };

  return (
    <section id="services" className="py-5 position-relative overflow-hidden" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-4 py-lg-5">
        {/* Section Heading */}
        <div className="text-center max-w-850 mx-auto mb-4">
          <div className="sg_badge_electric mb-3">
            <span>CORE AGENCY OFFERINGS</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Engineered Growth Systems Built Exclusively for Studios
          </h2>
          <p className="sg_agency_desc mx-auto font-size-16" style={{ maxWidth: '720px' }}>
            We replace fragmented freelancer setups and disconnected software with end-to-end, automated business systems tailored to creative &amp; wellness facilities.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className="px-4 py-2 rounded-pill font-size-13 font-weight-bold transition-all border"
            style={{
              background: activeFilter === 'all' ? '#0066FF' : '#FFFFFF',
              color: activeFilter === 'all' ? '#FFFFFF' : '#1E293B',
              borderColor: activeFilter === 'all' ? '#0066FF' : '#CBD5E1',
              boxShadow: activeFilter === 'all' ? '0 4px 14px rgba(0, 102, 255, 0.25)' : 'none',
              cursor: 'pointer',
            }}
          >
            All 7 Growth Systems
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('acquisition')}
            className="px-3 py-2 rounded-pill font-size-13 font-weight-bold transition-all border"
            style={{
              background: activeFilter === 'acquisition' ? '#0066FF' : '#FFFFFF',
              color: activeFilter === 'acquisition' ? '#FFFFFF' : '#1E293B',
              borderColor: activeFilter === 'acquisition' ? '#0066FF' : '#CBD5E1',
              boxShadow: activeFilter === 'acquisition' ? '0 4px 14px rgba(0, 102, 255, 0.25)' : 'none',
              cursor: 'pointer',
            }}
          >
            🎯 Lead Gen &amp; Ads
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('automation')}
            className="px-3 py-2 rounded-pill font-size-13 font-weight-bold transition-all border"
            style={{
              background: activeFilter === 'automation' ? '#0066FF' : '#FFFFFF',
              color: activeFilter === 'automation' ? '#FFFFFF' : '#1E293B',
              borderColor: activeFilter === 'automation' ? '#0066FF' : '#CBD5E1',
              boxShadow: activeFilter === 'automation' ? '0 4px 14px rgba(0, 102, 255, 0.25)' : 'none',
              cursor: 'pointer',
            }}
          >
            ⚡ n8n &amp; GoHighLevel
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ai')}
            className="px-3 py-2 rounded-pill font-size-13 font-weight-bold transition-all border"
            style={{
              background: activeFilter === 'ai' ? '#0066FF' : '#FFFFFF',
              color: activeFilter === 'ai' ? '#FFFFFF' : '#1E293B',
              borderColor: activeFilter === 'ai' ? '#0066FF' : '#CBD5E1',
              boxShadow: activeFilter === 'ai' ? '0 4px 14px rgba(0, 102, 255, 0.25)' : 'none',
              cursor: 'pointer',
            }}
          >
            🤖 AI Voice Receptionists
          </button>
        </div>

        {/* =========================================================================
           TIER 1: THE TWO FLAGSHIP PILLARS (7 Cols + 5 Cols = 12 Cols Balanced)
           ========================================================================= */}
        <div className="row g-4 align-items-stretch mb-4">
          {/* Card 1: Lead Generation (Wide Horizontal Split Flagship) */}
          <div className="col-12 col-xl-7">
            <div
              className="rounded-4 h-100 bg-white border p-4 p-xl-5 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={getCardStyle('acquisition')}
            >
              <div className="row g-4 align-items-center">
                {/* Info Side */}
                <div className="col-12 col-md-6">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <IconContainer size={42} bg="rgba(0, 102, 255, 0.1)" border="1px solid rgba(0, 102, 255, 0.25)">
                      <IconTarget size={22} color="#0066FF" />
                    </IconContainer>
                    <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                      CUSTOMER ACQUISITION
                    </span>
                  </div>

                  <h3 className="text-dark font-size-22 font-size-xl-26 font-weight-bold mb-2">
                    <Link href="/lead-generation" className="text-decoration-none text-dark hover-primary">
                      Lead Generation Services
                    </Link>
                  </h3>

                  <div className="font-size-13 font-weight-bold text-primary mb-3" style={{ color: '#0066FF' }}>
                    Fill Your Booking Calendar with Ready-to-Buy Clients
                  </div>

                  <p className="text-secondary font-size-14 mb-3" style={{ lineHeight: '1.65' }}>
                    Multi-channel Meta &amp; Google Ads, high-converting booking funnels, and instant 2-minute SMS qualification that turns local searches into deposits.
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="badge bg-light text-dark border font-size-11 px-2 py-1">Meta Ads</span>
                    <span className="badge bg-light text-dark border font-size-11 px-2 py-1">Google Maps</span>
                    <span className="badge bg-light text-dark border font-size-11 px-2 py-1">Landing Pages</span>
                    <span className="badge bg-light text-dark border font-size-11 px-2 py-1">2-Min SMS</span>
                  </div>
                </div>

                {/* Visual Image & Live Notification Stack */}
                <div className="col-12 col-md-6 d-flex flex-column gap-3">
                  {/* Dedicated Live Booking Inquiry Card (In Normal Flow - Never Collides) */}
                  <div
                    className="p-3 rounded-3 shadow-sm border"
                    style={{
                      background: '#FFFFFF',
                      borderColor: '#E2E8F0',
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="d-flex align-items-center gap-2">
                        <span className="sg_live_pulse" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#0066FF' }}></span>
                        <span className="font-size-11 font-weight-bold text-uppercase font-monospace" style={{ color: '#0066FF', letterSpacing: '0.5px' }}>
                          LIVE INCOMING INQUIRY
                        </span>
                      </div>
                      <span className="badge rounded-pill font-size-10 px-2 py-1 font-weight-bold" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                        48s ago
                      </span>
                    </div>
                    <div className="font-size-14 font-weight-bold text-dark mb-1">
                      Commercial Brand Shoot ($3,200)
                    </div>
                    <div className="font-size-12 text-secondary d-flex align-items-center gap-1">
                      <span className="text-success font-weight-bold">✓</span>
                      <span>Auto-qualified via 2-min SMS · Deposit checkout dispatched</span>
                    </div>
                  </div>

                  {/* Visual Studio Image with ONLY ONE Bottom Stat Bar (Zero Top-Bottom Collision) */}
                  <div className="sg_img_16_10 shadow-sm border" style={{ borderColor: '#E2E8F0' }}>
                    <img
                      src={publicAsset("/assets/img/studios/photography-studio.jpg")}
                      alt="Photography Studio Acquisition"
                      className="sg_img_cover"
                    />
                    <div
                      className="position-absolute"
                      style={{
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10, 25, 47, 0.88) 0%, rgba(10, 25, 47, 0.15) 60%, transparent 100%)',
                      }}
                    ></div>

                    {/* Single Clean Bottom Stat Bar */}
                    <div className="position-absolute bottom-0 start-0 p-3 w-100 text-white d-flex align-items-center justify-content-between">
                      <div>
                        <div className="font-size-18 font-weight-bold text-white">3.4x Average ROAS</div>
                        <div className="font-size-11" style={{ color: '#CBD5E1' }}>Meta &amp; Google Ad Funnels</div>
                      </div>
                      <span className="badge rounded-pill text-white font-size-11 px-3 py-1 font-weight-bold" style={{ backgroundColor: '#0066FF' }}>
                        Live Machine
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-4 d-flex align-items-center justify-content-between">
                <Link
                  href="/lead-generation"
                  className="text-primary font-size-13 font-weight-bold text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#0066FF' }}
                >
                  <span>Explore Lead Generation Blueprint</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12 text-secondary">01 / 07</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Voice Receptionist (Flagship Dark Cyber Theme) */}
          <div className="col-12 col-xl-5">
            <div
              className="rounded-4 h-100 border p-4 p-xl-5 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={getCardStyle('ai', true)}
            >
              <div>
                {/* Visual Header with Real Podcast Studio */}
                <div className="sg_img_16_9 mb-3 border" style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}>
                  <img
                    src={publicAsset("/assets/img/studios/podcast-studio.jpg")}
                    alt="AI Receptionist in Podcast Studio"
                    className="sg_img_cover"
                  />
                  <div
                    className="position-absolute"
                    style={{
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 25, 47, 0.88) 0%, rgba(10, 25, 47, 0.15) 60%, transparent 100%)',
                    }}
                  ></div>
                  {/* Single Clean Bottom Bar (Zero Top Overlay) */}
                  <div className="position-absolute bottom-0 start-0 p-3 d-flex align-items-center justify-content-between w-100">
                    <span className="badge rounded-pill bg-danger text-white font-size-10 font-weight-bold">
                      ● LIVE AI CALL: 10:14 PM
                    </span>
                    <span className="badge rounded-pill font-monospace font-size-10" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
                      480ms Latency
                    </span>
                  </div>
                </div>

                {/* Audio Transcript Bar in Normal Flow (Never Collides) */}
                <div className="p-2 px-3 rounded-3 mb-3 border d-flex align-items-center gap-2" style={{ background: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <span className="font-monospace font-size-10 text-uppercase flex-shrink-0" style={{ color: '#38BDF8' }}>TRANSCRIPT:</span>
                  <span className="font-size-11 text-truncate" style={{ color: '#CBD5E1' }}>&ldquo;Reserved 3h in Suite B for next Thursday at $450...&rdquo;</span>
                </div>

                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <IconContainer size={40} bg="rgba(0, 102, 255, 0.2)" border="1px solid rgba(56, 189, 248, 0.35)">
                      <IconSparkles size={20} color="#38BDF8" />
                    </IconContainer>
                    <span className="badge rounded-pill font-size-11 px-3 py-1 font-weight-bold font-monospace" style={{ background: 'rgba(0, 230, 118, 0.15)', color: '#00E676', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
                      0 MISSED CALLS
                    </span>
                  </div>
                  <span className="font-monospace font-size-11 text-secondary" style={{ color: '#94A3B8' }}>24/7/365</span>
                </div>

                <h3 className="text-white font-size-22 font-weight-bold mb-2">
                  <Link href="/ai-automation" className="text-decoration-none text-white hover-primary">
                    AI Automation Services
                  </Link>
                </h3>

                <div className="font-size-13 font-weight-bold mb-3" style={{ color: '#38BDF8' }}>
                  24/7 AI Voice Phone Receptionist &amp; Booking Agents
                </div>

                <p className="font-size-14 mb-3" style={{ color: '#CBD5E1', lineHeight: '1.65' }}>
                  Human-sounding voice callers that answer incoming phones in 1 ring, explain rates and equipment specs, and book sessions directly into your calendar.
                </p>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                <Link
                  href="/ai-automation"
                  className="font-size-13 font-weight-bold text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#38BDF8' }}
                >
                  <span>Explore AI Voice Systems</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12" style={{ color: '#94A3B8' }}>02 / 07</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
           TIER 2: THE OPERATIONAL CORE (3 Equal Columns: 4 Cols Each = 12 Cols)
           ========================================================================= */}
        <div className="row g-4 align-items-stretch mb-4">
          {/* Card 3: GoHighLevel (GHL) Services */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="rounded-4 h-100 bg-white border p-4 p-xl-4 d-flex flex-column justify-content-between"
              style={getCardStyle('automation')}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <IconContainer size={44} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)">
                    <IconRocket size={22} color="#0066FF" />
                  </IconContainer>
                  <span className="badge rounded-pill bg-light text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                    CRM &amp; INFRASTRUCTURE
                  </span>
                </div>

                <h3 className="text-dark font-size-19 font-weight-bold mb-1">
                  <Link href="/gohighlevel-services" className="text-decoration-none text-dark hover-primary">
                    GoHighLevel (GHL) Services
                  </Link>
                </h3>

                <div className="font-size-12 font-weight-bold text-primary mb-3" style={{ color: '#0066FF' }}>
                  The Operating System That Replaces 6 Disjointed Tools
                </div>

                <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.6' }}>
                  Custom GHL account setups, custom snapshots, sales pipelines, multi-room calendars, and automated 5-touch SMS sequences.
                </p>

                {/* Mini Pipeline Preview UI */}
                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="d-flex align-items-center justify-content-between font-size-11 font-weight-bold text-secondary mb-2">
                    <span>LIVE PIPELINE</span>
                    <span className="text-primary" style={{ color: '#0066FF' }}>GHL Snapshot</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-1 text-center font-size-10">
                    <div className="p-1 px-2 rounded bg-white border flex-grow-1">
                      <div className="font-weight-bold text-dark">142</div>
                      <div className="text-muted">Inquiries</div>
                    </div>
                    <span className="text-muted">→</span>
                    <div className="p-1 px-2 rounded bg-white border flex-grow-1">
                      <div className="font-weight-bold text-primary" style={{ color: '#0066FF' }}>58</div>
                      <div className="text-muted">Qualified</div>
                    </div>
                    <span className="text-muted">→</span>
                    <div className="p-1 px-2 rounded bg-white border flex-grow-1">
                      <div className="font-weight-bold text-success">34</div>
                      <div className="text-muted">Booked</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-1 mb-2 font-size-12 text-secondary">
                  <div>✓ Multi-suite room scheduling calendars</div>
                  <div>✓ Stripe escrow with non-refundable deposits</div>
                  <div>✓ White-label studio client portal setup</div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between">
                <Link
                  href="/gohighlevel-services"
                  className="font-size-13 font-weight-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#0066FF' }}
                >
                  <span>View GHL Blueprint</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12 text-secondary">03 / 07</span>
              </div>
            </div>
          </div>

          {/* Card 4: n8n Automation Services */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="rounded-4 h-100 bg-white border p-4 p-xl-4 d-flex flex-column justify-content-between"
              style={getCardStyle('automation')}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <IconContainer size={44} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)">
                    <IconZap size={22} color="#0066FF" />
                  </IconContainer>
                  <span className="badge rounded-pill bg-light text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                    WORKFLOW AUTOMATION
                  </span>
                </div>

                <h3 className="text-dark font-size-19 font-weight-bold mb-1">
                  <Link href="/n8n-automation" className="text-decoration-none text-dark hover-primary">
                    n8n Automation Services
                  </Link>
                </h3>

                <div className="font-size-12 font-weight-bold text-primary mb-3" style={{ color: '#0066FF' }}>
                  Connect Every Tool. Eliminate Repetitive Admin Busywork.
                </div>

                <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.6' }}>
                  Self-hosted n8n workflow engineering with zero per-task penalty fees, 500+ connectors, and embedded AI decision logic.
                </p>

                {/* Visual Node Flowchart UI */}
                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="d-flex align-items-center justify-content-between font-size-11 font-weight-bold text-secondary mb-2">
                    <span>n8n WORKFLOW ENGINE</span>
                    <span className="badge bg-success bg-opacity-25 text-success font-size-9">Self-Hosted</span>
                  </div>
                  <div className="d-flex flex-column gap-1 font-size-11 font-monospace">
                    <div className="p-1 px-2 rounded bg-white border d-flex align-items-center justify-content-between">
                      <span>1. Webhook: Deposit Paid</span>
                      <span className="text-success">200 OK</span>
                    </div>
                    <div className="p-1 px-2 rounded bg-white border d-flex align-items-center justify-content-between">
                      <span>2. Calendar Lock &amp; Buffer</span>
                      <span className="text-primary" style={{ color: '#0066FF' }}>15m STC</span>
                    </div>
                    <div className="p-1 px-2 rounded bg-white border d-flex align-items-center justify-content-between">
                      <span>3. Auto-Dispatch Guest NDA</span>
                      <span className="text-warning">Signed</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-1 mb-2 font-size-12 text-secondary">
                  <div>✓ Zero per-task pricing penalties</div>
                  <div>✓ 500+ app connectors (QuickBooks, Drive, Slack)</div>
                  <div>✓ AI document &amp; show notes extraction</div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between">
                <Link
                  href="/n8n-automation"
                  className="font-size-13 font-weight-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#0066FF' }}
                >
                  <span>View n8n Workflows</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12 text-secondary">04 / 07</span>
              </div>
            </div>
          </div>

          {/* Card 5: CRM & Client Management */}
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="rounded-4 h-100 bg-white border p-4 p-xl-4 d-flex flex-column justify-content-between"
              style={getCardStyle('automation')}
            >
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <IconContainer size={44} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)">
                    <IconUsers size={22} color="#0066FF" />
                  </IconContainer>
                  <span className="badge rounded-pill bg-light text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                    CLIENT RETENTION
                  </span>
                </div>

                <h3 className="text-dark font-size-19 font-weight-bold mb-1">
                  <Link href="/crm-solutions" className="text-decoration-none text-dark hover-primary">
                    CRM &amp; Client Management
                  </Link>
                </h3>

                <div className="font-size-12 font-weight-bold text-primary mb-3" style={{ color: '#0066FF' }}>
                  Track Every Inquiry. Retain Every Client.
                </div>

                <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.6' }}>
                  Custom CRM architectures, automated onboarding sequences, digital liability waivers, and automated client retention loops.
                </p>

                {/* Client Retention Loop UI */}
                <div className="p-3 rounded-3 bg-light border mb-3">
                  <div className="d-flex align-items-center justify-content-between font-size-11 font-weight-bold text-secondary mb-2">
                    <span>LIFECYCLE MANAGEMENT</span>
                    <span className="text-success font-weight-bold">+45% Re-Booking</span>
                  </div>
                  <div className="p-2 rounded bg-white border font-size-11 mb-2">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <strong className="text-dark">Digital Waiver Signed</strong>
                      <span className="text-success">Verified</span>
                    </div>
                    <div className="text-secondary font-size-10">Appearance release &amp; terms signed on client phone</div>
                  </div>
                  <div className="p-2 rounded bg-white border font-size-11">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <strong className="text-dark">Post-Session Follow-Up</strong>
                      <span className="text-primary" style={{ color: '#0066FF' }}>Day 7 SMS</span>
                    </div>
                    <div className="text-secondary font-size-10">Re-engagement trigger offering VIP returning rate</div>
                  </div>
                </div>

                <div className="d-flex flex-column gap-1 mb-2 font-size-12 text-secondary">
                  <div>✓ Unified multi-channel social inbox</div>
                  <div>✓ Digital contracts &amp; waivers on mobile</div>
                  <div>✓ Automated revenue &amp; capacity reporting</div>
                </div>
              </div>

              <div className="pt-3 border-top mt-3 d-flex align-items-center justify-content-between">
                <Link
                  href="/crm-solutions"
                  className="font-size-13 font-weight-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#0066FF' }}
                >
                  <span>Explore CRM Solutions</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12 text-secondary">05 / 07</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
           TIER 3: STOREFRONT & LOCAL DOMINANCE (2 Balanced 6-Col Cards = 12 Cols)
           ========================================================================= */}
        <div className="row g-4 align-items-stretch">
          {/* Card 6: Website & Funnel Development */}
          <div className="col-12 col-lg-6">
            <div
              className="rounded-4 h-100 bg-white border p-4 p-xl-5 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={getCardStyle('acquisition')}
            >
              <div className="row g-4 align-items-center">
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)">
                      <IconLayout size={20} color="#0066FF" />
                    </IconContainer>
                    <span className="badge rounded-pill bg-light text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                      WEB &amp; CONVERSION
                    </span>
                  </div>

                  <h3 className="text-dark font-size-20 font-weight-bold mb-2">
                    <Link href="/website-funnel-development" className="text-decoration-none text-dark hover-primary">
                      Website &amp; Funnel Development
                    </Link>
                  </h3>

                  <div className="font-size-12 font-weight-bold text-primary mb-3" style={{ color: '#0066FF' }}>
                    Websites Engineered to Turn Visitors into Clients
                  </div>

                  <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.65' }}>
                    Lightning-fast, mobile-first studio websites with 360° suite showcases, real-time room availability, and friction-free Stripe deposit checkout.
                  </p>

                  <div className="d-flex flex-column gap-1 font-size-12 text-secondary">
                    <div>✓ Sub-second mobile page load speed</div>
                    <div>✓ Integrated room scheduling engine</div>
                    <div>✓ Stripe deposit checkout widget</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="sg_img_16_10 shadow-sm border" style={{ borderColor: '#E2E8F0' }}>
                    <img
                      src={publicAsset("/assets/img/studios/yoga-studio.jpg")}
                      alt="Studio Website Booking Engine"
                      className="sg_img_cover"
                    />
                    <div
                      className="position-absolute"
                      style={{
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(10, 25, 47, 0.15) 0%, rgba(10, 25, 47, 0.85) 100%)',
                      }}
                    ></div>
                    <div className="position-absolute bottom-0 start-0 p-3 text-white">
                      <span className="badge rounded-pill bg-primary text-white font-size-10 px-2 py-1 mb-1 font-weight-bold" style={{ backgroundColor: '#0066FF' }}>
                        LIVE BOOKING WIDGET
                      </span>
                      <div className="font-size-12 font-weight-bold">Sunlit Sanctuary Studio</div>
                      <div className="font-size-10" style={{ color: '#CBD5E1' }}>Instant 50% deposit checkout</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-4 d-flex align-items-center justify-content-between">
                <Link
                  href="/website-funnel-development"
                  className="font-size-13 font-weight-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#0066FF' }}
                >
                  <span>Explore Web Systems</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12 text-secondary">06 / 07</span>
              </div>
            </div>
          </div>

          {/* Card 7: Digital Marketing & Reputation Management */}
          <div className="col-12 col-lg-6">
            <div
              className="rounded-4 h-100 bg-white border p-4 p-xl-5 d-flex flex-column justify-content-between position-relative overflow-hidden"
              style={getCardStyle('acquisition')}
            >
              <div className="row g-4 align-items-center">
                <div className="col-12 col-sm-6">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)">
                      <IconMegaphone size={20} color="#0066FF" />
                    </IconContainer>
                    <span className="badge rounded-pill bg-light text-primary border font-size-11 px-3 py-1 font-weight-bold" style={{ color: '#0066FF' }}>
                      LOCAL DOMINANCE
                    </span>
                  </div>

                  <h3 className="text-dark font-size-20 font-weight-bold mb-2">
                    <Link href="/digital-marketing" className="text-decoration-none text-dark hover-primary">
                      Digital Marketing Services
                    </Link>
                  </h3>

                  <div className="font-size-12 font-weight-bold text-primary mb-3" style={{ color: '#0066FF' }}>
                    Dominate Local Search &amp; Keep Your Studio Top of Mind
                  </div>

                  <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.65' }}>
                    Automated 5-star Google review triggers, SMS &amp; email VIP campaigns, and Google Business Profile optimization that ranks your studio #1 locally.
                  </p>

                  <div className="d-flex flex-column gap-1 font-size-12 text-secondary">
                    <div>✓ Automated post-session 5-star review hook</div>
                    <div>✓ Google Business Profile (GBP) ranking</div>
                    <div>✓ VIP SMS broadcasts for off-peak fills</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="sg_img_16_10 shadow-sm border" style={{ borderColor: '#E2E8F0' }}>
                    <img
                      src={publicAsset("/assets/img/studios/craft-studio.jpg")}
                      alt="Studio Reputation & Marketing"
                      className="sg_img_cover"
                    />
                    <div
                      className="position-absolute"
                      style={{
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(10, 25, 47, 0.15) 0%, rgba(10, 25, 47, 0.85) 100%)',
                      }}
                    ></div>
                    <div className="position-absolute bottom-0 start-0 p-3 text-white">
                      <span className="badge rounded-pill bg-warning text-dark font-size-10 px-2 py-1 mb-1 font-weight-bold">
                        ★★★★★ 4.9 GOOGLE MAPS
                      </span>
                      <div className="font-size-12 font-weight-bold">&ldquo;Best workshop studio in town!&rdquo;</div>
                      <div className="font-size-10" style={{ color: '#CBD5E1' }}>Auto-triggered review request</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top mt-4 d-flex align-items-center justify-content-between">
                <Link
                  href="/digital-marketing"
                  className="font-size-13 font-weight-bold text-primary text-decoration-none d-inline-flex align-items-center gap-1"
                  style={{ color: '#0066FF' }}
                >
                  <span>Explore Marketing Systems</span>
                  <span>→</span>
                </Link>
                <span className="font-monospace font-size-12 text-secondary">07 / 07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyServicesBento;
