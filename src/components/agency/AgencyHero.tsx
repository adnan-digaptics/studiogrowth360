'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { industrySolutions } from '@/data/agency';
import {
  IconContainer,
  IconZap,
  IconInbox,
  IconCpu,
  IconCalendar,
  IconCreditCard,
  IconStar,
} from '@/components/common/AgencyIcons';

const AgencyHero = () => {
  const [activeTab, setActiveTab] = useState<'spaces' | 'pipeline' | 'n8n' | 'voice' | 'analytics'>('spaces');

  return (
    <section className="sg_agency_hero py-5 position-relative overflow-hidden">
      <div className="sg_agency_grid_pattern"></div>

      <div className="container position-relative py-4 py-lg-5" style={{ zIndex: 2 }}>
        {/* Top Electric Badge */}
        <div className="text-center mb-3">
          <div className="sg_badge_electric">
            <span
              className="sg_live_pulse"
              style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}
            ></span>
            <span>ALL-IN-ONE STUDIO GROWTH, CRM &amp; AUTOMATION PARTNER</span>
          </div>
        </div>

        {/* Hero Master Headline (Exact Prompt Copy) */}
        <div className="text-center max-w-1050 mx-auto mb-3">
          <h1 className="sg_agency_title anim_heading_title">
            Grow Your Studio.{" "}
            <span className="sg_agency_gradient_text">Automate Your Business.</span>{" "}
            Scale Without Limits.
          </h1>
        </div>

        {/* Hero Subheadline (Exact Prompt Copy) */}
        <div className="text-center max-w-850 mx-auto mb-4">
          <p className="sg_agency_desc mx-auto">
            We help photography, podcast, yoga, and creative studios across the USA generate more leads, automate daily operations, manage clients, and grow their businesses with powerful CRM and AI automation solutions.
          </p>
        </div>

        {/* Primary & Secondary CTAs (Award-Winning Responsive Stacking) */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2 gap-sm-3 mb-4">
          <Link href="/book-consultation" className="sg_btn_primary font-size-15 py-3 px-4 w-100 w-sm-auto justify-content-center">
            <span>Book a Free Strategy Call</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </Link>

          <Link href="/services" className="sg_btn_secondary font-size-15 py-3 px-4 w-100 w-sm-auto justify-content-center">
            <span>Explore Our Services</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>
        </div>

        {/* Quick Studio Photo Pills */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-3 mb-4">
          {industrySolutions.map((ind) => (
            <Link
              key={ind.id}
              href={`/${ind.slug}`}
              className="d-flex align-items-center gap-2 p-1 pe-3 rounded-pill bg-white border shadow-sm text-decoration-none hover-primary transition-all"
              style={{ border: "1px solid #E2E8F0" }}
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="rounded-circle object-fit-cover"
                style={{ width: "30px", height: "30px", border: "2px solid #0066FF" }}
              />
              <span className="font-size-13 font-weight-bold text-dark">{ind.name}</span>
              <span className="font-size-11 text-primary font-weight-bold" style={{ color: "#0066FF" }}>→</span>
            </Link>
          ))}
        </div>

        {/* Trust Proof Badges */}
        <div className="text-center mb-5">
          <div className="d-inline-flex flex-wrap align-items-center justify-content-center gap-2 gap-md-4 px-4 py-2 rounded-pill bg-white border shadow-sm">
            <span className="font-size-13 font-weight-bold text-dark d-flex align-items-center gap-1">
              <span className="d-inline-flex align-items-center gap-1 text-warning">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={14} color="#F59E0B" />
                ))}
              </span>
              <span>4.9 / 5.0 Rating</span>
            </span>
            <span className="text-secondary opacity-50">·</span>
            <span className="font-size-13 text-secondary">
              350+ Photography, Podcast, Yoga &amp; Craft Studios Across the USA
            </span>
            <span className="text-secondary opacity-50 d-none d-md-inline">·</span>
            <span className="font-size-13 font-weight-bold text-primary d-none d-md-inline" style={{ color: "#0066FF" }}>
              GoHighLevel &amp; n8n Certified
            </span>
          </div>
        </div>

        {/* Modern Interactive Dashboard Mockup Preview */}
        <div className="max-w-1150 mx-auto">
          <div className="sg_mockup_window">
            {/* Window Header */}
            <div className="sg_mockup_header d-flex flex-wrap align-items-center justify-content-between gap-2">
              <div className="d-flex align-items-center gap-2">
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F59E0B" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10B981" }}></span>
                <span className="font-size-12 text-secondary ms-2 d-none d-sm-inline font-monospace" style={{ color: "#94A3B8" }}>
                  StudioGrowth360 · Automated Studio OS
                </span>
              </div>

              {/* Interactive View Tabs */}
              <div className="d-flex align-items-center gap-1 p-1 rounded-3" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('spaces')}
                  className={`sg_mockup_tab ${activeTab === 'spaces' ? 'active' : ''}`}
                >
                  Live Studios
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('pipeline')}
                  className={`sg_mockup_tab ${activeTab === 'pipeline' ? 'active' : ''}`}
                >
                  Live Pipeline
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('n8n')}
                  className={`sg_mockup_tab ${activeTab === 'n8n' ? 'active' : ''}`}
                >
                  n8n Workflows
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('voice')}
                  className={`sg_mockup_tab ${activeTab === 'voice' ? 'active' : ''}`}
                >
                  AI Voice Log
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('analytics')}
                  className={`sg_mockup_tab ${activeTab === 'analytics' ? 'active' : ''}`}
                >
                  Revenue Yield
                </button>
              </div>

              <div className="d-none d-md-flex align-items-center gap-2 px-3 py-1 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", fontSize: "11px", color: "#38BDF8" }}>
                <span className="sg_live_pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00E676" }}></span>
                <span className="font-monospace">Real-Time Sync Active</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-3 p-md-4" style={{ background: "#0A192F" }}>
              {/* Top Metrics Row */}
              <div className="row g-3 mb-4">
                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div className="font-size-11 text-uppercase" style={{ color: "#94A3B8" }}>Monthly Booked Revenue</div>
                    <div className="text-white font-weight-bold font-size-22 mt-1">$28,450</div>
                    <div className="font-size-11 text-success mt-1">↑ +38% vs prev month</div>
                  </div>
                </div>

                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div className="font-size-11 text-uppercase" style={{ color: "#94A3B8" }}>Inquiries Captured</div>
                    <div className="text-white font-weight-bold font-size-22 mt-1">142 Leads</div>
                    <div className="font-size-11 text-success mt-1">&lt; 2 min auto-response</div>
                  </div>
                </div>

                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div className="font-size-11 text-uppercase" style={{ color: "#94A3B8" }}>Admin Hours Saved</div>
                    <div className="text-white font-weight-bold font-size-22 mt-1" style={{ color: "#38BDF8" }}>28.5 hrs / wk</div>
                    <div className="font-size-11 text-white-50 mt-1">n8n + GHL Workflows</div>
                  </div>
                </div>

                <div className="col-6 col-lg-3">
                  <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <div className="font-size-11 text-uppercase" style={{ color: "#94A3B8" }}>AI Calls Handled</div>
                    <div className="text-white font-weight-bold font-size-22 mt-1" style={{ color: "#00E676" }}>89 Calls</div>
                    <div className="font-size-11 text-white-50 mt-1">24/7 AI Receptionist</div>
                  </div>
                </div>
              </div>

              {/* View 0: Live Multi-Studio Facilities Monitor */}
              {activeTab === 'spaces' && (
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <span className="sg_live_pulse" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}></span>
                      <span className="text-white font-size-13 font-weight-bold font-monospace">Live Studio Facilities &amp; Suites Monitor</span>
                    </div>
                    <span className="badge rounded-pill bg-primary bg-opacity-25 text-white font-size-11 px-3 py-1 border border-primary border-opacity-50">
                      4 Active Studio Verticals
                    </span>
                  </div>

                  <div className="row g-3">
                    {industrySolutions.map((ind, idx) => {
                      const statuses = [
                        { status: 'LIVE SHOOT', color: '#10B981', next: 'Next: 2:00 PM Commercial Campaign', equip: 'Profoto Strobes & 4K Tether' },
                        { status: 'RECORDING ON AIR', color: '#EF4444', next: 'Next: 3:30 PM CEO Retainer Show', equip: '4x Shure SM7B & ISO Booth' },
                        { status: 'CLASS IN SESSION', color: '#10B981', next: 'Next: 5:00 PM Vinyasa Flow (24 Full)', equip: 'Sound Healer & Heated Bamboo' },
                        { status: 'WORKSHOP PREP', color: '#F59E0B', next: 'Next: 6:00 PM Pottery Masterclass', equip: '8 Shimpo Wheels & Kiln' },
                      ];
                      const st = statuses[idx] || statuses[0];

                      return (
                        <div key={ind.id} className="col-12 col-sm-6 col-lg-3">
                          <div className="rounded-3 overflow-hidden border h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="sg_img_16_9" style={{ borderRadius: '10px 10px 0 0' }}>
                              <img
                                src={ind.image}
                                alt={ind.name}
                                className="sg_img_cover"
                              />
                              <div className="position-absolute" style={{ inset: 0, background: 'linear-gradient(to top, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.3) 60%, transparent 100%)' }}></div>
                              {/* Single Clean Bottom Overlay (Zero Top-Bottom Collision) */}
                              <div className="position-absolute bottom-0 start-0 p-2 w-100 text-white">
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                  <div className="font-size-12 font-weight-bold text-white text-truncate me-1">{ind.name}</div>
                                  <span className="badge rounded-pill font-size-9 font-weight-bold flex-shrink-0" style={{ background: st.color, color: '#FFFFFF' }}>
                                    ● {st.status}
                                  </span>
                                </div>
                                <div className="font-size-10 text-truncate" style={{ color: '#94A3B8' }}>{st.equip}</div>
                              </div>
                            </div>
                            <div className="p-2 px-3 font-size-11 d-flex align-items-center justify-content-between border-top" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', background: 'rgba(0, 0, 0, 0.25)' }}>
                              <span className="text-truncate" style={{ color: '#CBD5E1', maxWidth: '170px' }}>{st.next}</span>
                              <span className="text-primary font-weight-bold" style={{ color: '#38BDF8' }}>Auto-Synced</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* View 1: Live Pipeline */}
              {activeTab === 'pipeline' && (
                <div className="row g-3">
                  <div className="col-12 col-lg-7">
                    <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="text-white font-size-13 font-weight-bold">Live Studio Client Pipeline</span>
                        <span className="badge rounded-pill" style={{ background: "rgba(0, 102, 255, 0.2)", color: "#38BDF8", fontSize: "10px" }}>GoHighLevel Sync</span>
                      </div>

                      <div className="d-flex flex-column gap-2 font-size-12">
                        <div className="p-2 rounded-2 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", borderLeft: "3px solid #00E676" }}>
                          <div>
                            <div className="text-white font-weight-bold">Lumina Creative · Commercial Photoshoot</div>
                            <div className="text-secondary font-size-11" style={{ color: "#94A3B8" }}>Deposit Paid ($1,200) · Digital Contract Auto-Signed</div>
                          </div>
                          <span className="badge bg-success bg-opacity-25 text-success font-size-10">Confirmed</span>
                        </div>

                        <div className="p-2 rounded-2 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", borderLeft: "3px solid #0066FF" }}>
                          <div>
                            <div className="text-white font-weight-bold">Apex Pod Collective · 4-Episode Season Retainer</div>
                            <div className="text-secondary font-size-11" style={{ color: "#94A3B8" }}>AI Receptionist Booked Call · Sent Proposal ($3,500/mo)</div>
                          </div>
                          <span className="badge bg-primary bg-opacity-25 text-primary font-size-10">Proposal Sent</span>
                        </div>

                        <div className="p-2 rounded-2 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", borderLeft: "3px solid #F59E0B" }}>
                          <div>
                            <div className="text-white font-weight-bold">Prana Yoga Space · 25 Intro Passes Sold</div>
                            <div className="text-secondary font-size-11" style={{ color: "#94A3B8" }}>Meta Ad Funnel → Day 3 Nurture Sequence Triggered</div>
                          </div>
                          <span className="badge bg-warning bg-opacity-25 text-warning font-size-10">Nurturing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="text-white font-size-13 font-weight-bold">Active n8n Studio Workflows</span>
                        <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-10">Running</span>
                      </div>

                      <div className="d-flex flex-column gap-2 font-size-11">
                        <div className="p-2 rounded-2" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                          <div className="text-white font-weight-bold d-flex align-items-center gap-1">
                            <IconZap size={13} color="#38BDF8" />
                            <span>Stripe Deposit → Auto Calendar Block → Client Folder</span>
                          </div>
                          <div className="text-secondary mt-1" style={{ color: "#94A3B8" }}>Triggered 18 mins ago · Execution Time: 0.4s</div>
                        </div>

                        <div className="p-2 rounded-2" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                          <div className="text-white font-weight-bold d-flex align-items-center gap-1">
                            <IconZap size={13} color="#38BDF8" />
                            <span>Inbound Missed Call → Instant SMS Text-Back</span>
                          </div>
                          <div className="text-secondary mt-1" style={{ color: "#94A3B8" }}>Saved 3 clients today from calling local competitors</div>
                        </div>

                        <div className="p-2 rounded-2" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                          <div className="text-white font-weight-bold d-flex align-items-center gap-1">
                            <IconZap size={13} color="#38BDF8" />
                            <span>Post-Session Wrap → Automated Google Review Request</span>
                          </div>
                          <div className="text-secondary mt-1" style={{ color: "#94A3B8" }}>+14 new 5-star Google Reviews generated this week</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: n8n Workflow Architecture */}
              {activeTab === 'n8n' && (
                <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="text-white font-size-13 font-weight-bold">Custom n8n Workflow Node Pipeline (Self-Hosted)</span>
                    <span className="badge rounded-pill" style={{ background: "rgba(0, 102, 255, 0.2)", color: "#38BDF8", fontSize: "10px" }}>Zero Per-Task Execution Fees</span>
                  </div>

                  <div className="row g-2 text-center">
                    <div className="col-12 col-md-3">
                      <div className="p-3 rounded-3" style={{ background: "rgba(0, 102, 255, 0.1)", border: "1px solid rgba(0, 102, 255, 0.3)" }}>
                        <div className="mb-2 d-flex justify-content-center">
                          <IconContainer size={36} bg="rgba(0, 102, 255, 0.2)" border="1px solid rgba(0, 102, 255, 0.4)">
                            <IconInbox size={18} color="#38BDF8" />
                          </IconContainer>
                        </div>
                        <div className="text-white font-size-12 font-weight-bold">Webhook Listener</div>
                        <div className="font-size-10 text-secondary" style={{ color: "#94A3B8" }}>Google Ads / Meta Form</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="p-3 rounded-3" style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                        <div className="mb-2 d-flex justify-content-center">
                          <IconContainer size={36} bg="rgba(16, 185, 129, 0.2)" border="1px solid rgba(16, 185, 129, 0.4)">
                            <IconCpu size={18} color="#34D399" />
                          </IconContainer>
                        </div>
                        <div className="text-white font-size-12 font-weight-bold">AI Qualification Node</div>
                        <div className="font-size-10 text-secondary" style={{ color: "#94A3B8" }}>Extract Date &amp; Studio Tier</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="p-3 rounded-3" style={{ background: "rgba(245, 158, 11, 0.1)", border: "1px solid rgba(245, 158, 11, 0.3)" }}>
                        <div className="mb-2 d-flex justify-content-center">
                          <IconContainer size={36} bg="rgba(245, 158, 11, 0.2)" border="1px solid rgba(245, 158, 11, 0.4)">
                            <IconCalendar size={18} color="#FBBF24" />
                          </IconContainer>
                        </div>
                        <div className="text-white font-size-12 font-weight-bold">Calendar Auto-Block</div>
                        <div className="font-size-10 text-secondary" style={{ color: "#94A3B8" }}>Check Room STC &amp; Gear</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="p-3 rounded-3" style={{ background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.3)" }}>
                        <div className="mb-2 d-flex justify-content-center">
                          <IconContainer size={36} bg="rgba(139, 92, 246, 0.2)" border="1px solid rgba(139, 92, 246, 0.4)">
                            <IconCreditCard size={18} color="#A78BFA" />
                          </IconContainer>
                        </div>
                        <div className="text-white font-size-12 font-weight-bold">Stripe Escrow Hook</div>
                        <div className="font-size-10 text-secondary" style={{ color: "#94A3B8" }}>Hold 50% Card-on-File</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* View 3: AI Voice Receptionist Transcript */}
              {activeTab === 'voice' && (
                <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <span className="text-white font-size-13 font-weight-bold">Live AI Receptionist Call Transcript (Incoming 10:14 PM)</span>
                      <span className="font-size-11 text-secondary ms-2" style={{ color: "#94A3B8" }}>Duration: 1m 42s · Callee: (312) 555-0198</span>
                    </div>
                    <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-10">Session Booked Direct</span>
                  </div>

                  <div className="d-flex flex-column gap-2 font-size-12">
                    <div className="p-2 px-3 rounded-2" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }}>
                      <strong className="text-primary me-2" style={{ color: "#38BDF8" }}>AI Voice Receptionist:</strong>
                      <span className="text-white" style={{ color: "#FFFFFF", lineHeight: "1.6" }}>&ldquo;Thanks for calling Apex Podcast Studio! We’re in recording right now, but I can check live room availability or answer gear questions. What date were you looking to record?&rdquo;</span>
                    </div>
                    <div className="p-2 px-3 rounded-2" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.06)", color: "#FFFFFF" }}>
                      <strong className="text-white me-2" style={{ color: "#FFFFFF" }}>Caller (Client):</strong>
                      <span className="text-white" style={{ color: "#F1F5F9", lineHeight: "1.6" }}>&ldquo;Hey! We need Studio A for 3 hours next Thursday around 2 PM with 3 Shure SM7B mics and 4K cameras.&rdquo;</span>
                    </div>
                    <div className="p-2 px-3 rounded-2" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }}>
                      <strong className="text-primary me-2" style={{ color: "#38BDF8" }}>AI Voice Receptionist:</strong>
                      <span className="text-white" style={{ color: "#FFFFFF", lineHeight: "1.6" }}>&ldquo;Studio A is open next Thursday from 2:00 PM to 5:00 PM. The package includes the 3-camera 4K switch and vocal mastering at $450. I just sent a secure booking link directly to your mobile number. Would you like me to hold that slot for 15 minutes?&rdquo;</span>
                    </div>
                    <div className="p-2 px-3 rounded-2 font-weight-bold" style={{ background: "rgba(16, 185, 129, 0.12)", border: "1px solid rgba(16, 185, 129, 0.3)", color: "#00E676" }}>
                      ✓ Deposit Received via SMS Link · Calendar Automatically Reserved · Staff Notified on Slack
                    </div>
                  </div>
                </div>
              )}

              {/* View 4: Revenue Analytics */}
              {activeTab === 'analytics' && (
                <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="text-white font-size-13 font-weight-bold">Studio Revenue &amp; Capacity Utilization (Q4)</span>
                    <span className="badge rounded-pill" style={{ background: "rgba(16, 185, 129, 0.2)", color: "#00E676", fontSize: "10px" }}>+42% Average Gross Profit</span>
                  </div>

                  <div className="row g-3 text-center">
                    <div className="col-4">
                      <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                        <div className="font-size-11 text-secondary" style={{ color: "#94A3B8" }}>Weekday Off-Peak Fill Rate</div>
                        <div className="font-size-22 font-weight-bold text-white mt-1">78.4%</div>
                        <div className="font-size-11 text-success">↑ Was 32% before automation</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-4 rounded-3" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                        <div className="font-size-11 text-secondary" style={{ color: "#94A3B8" }}>Average Customer LTV</div>
                        <div className="font-size-22 font-weight-bold text-white mt-1">$2,140</div>
                        <div className="font-size-11 text-success">↑ Via automated retention</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-4 rounded-3" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                        <div className="font-size-11 text-secondary" style={{ color: "#94A3B8" }}>No-Show Rate</div>
                        <div className="font-size-22 font-weight-bold text-white mt-1">2.1%</div>
                        <div className="font-size-11 text-success">↓ Slashed from 14.8%</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;
