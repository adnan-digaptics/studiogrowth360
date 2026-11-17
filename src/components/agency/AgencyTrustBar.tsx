'use client'

import React from 'react';
import {
  IconContainer,
  IconRocket,
  IconZap,
  IconCreditCard,
  IconTarget,
  IconTrendingUp,
  IconPhone,
} from '@/components/common/AgencyIcons';

const trustPartners = [
  { name: "GoHighLevel Certified", role: "Platinum Studio Partner", icon: <IconRocket size={20} color="#0066FF" /> },
  { name: "n8n Workflow Creators", role: "Certified Node Engineers", icon: <IconZap size={20} color="#0066FF" /> },
  { name: "Stripe Connect", role: "Verified Escrow Partner", icon: <IconCreditCard size={20} color="#0066FF" /> },
  { name: "Meta Business Partner", role: "Lead Ads Infrastructure", icon: <IconTarget size={20} color="#0066FF" /> },
  { name: "Google Ads Partner", role: "Local Pack Search Dominance", icon: <IconTrendingUp size={20} color="#0066FF" /> },
  { name: "Twilio Communications", role: "Voice & SMS Deliverability", icon: <IconPhone size={20} color="#0066FF" /> },
];

const studioStats = [
  { value: "350+", label: "US Studios Powered", desc: "Photography, Podcast, Yoga & Craft Facilities Across 38 States", badge: "Verified Scale" },
  { value: "$42M+", label: "Bookings Processed", desc: "Through Automated Deposit Escrow Pipelines & Card-on-File", badge: "Stripe Escrow" },
  { value: "< 2 min", label: "Lead Response Time", desc: "Instant AI Voice & 2-Way SMS Inbound Qualification", badge: "24/7/365 AI" },
  { value: "25+ hrs", label: "Admin Saved / Week", desc: "Eliminating Manual Invoicing, Scheduling Friction & No-Shows", badge: "Autonomous Ops" },
];

const AgencyTrustBar = () => {
  return (
    <section className="py-5 bg-white position-relative overflow-hidden" style={{ borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-3">
        {/* Top Header */}
        <div className="text-center mb-4">
          <p className="font-monospace text-uppercase font-size-11 font-weight-bold text-secondary mb-2" style={{ letterSpacing: "1.5px" }}>
            CERTIFIED GROWTH &amp; AUTOMATION INFRASTRUCTURE FOR AMERICAN STUDIOS
          </p>
        </div>

        {/* Certified Badges Grid */}
        <div className="row g-2 g-sm-3 justify-content-center mb-5">
          {trustPartners.map((item, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-2">
              <div
                className="p-2 p-sm-3 rounded-4 text-center h-100 border transition-all"
                style={{
                  background: "#F8FAFC",
                  borderColor: "#E2E8F0",
                  transition: "all 0.25s ease",
                }}
              >
                <div className="d-flex justify-content-center mb-2">
                  <IconContainer size={36} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="12px">
                    {item.icon}
                  </IconContainer>
                </div>
                <div className="font-size-12 font-size-sm-13 font-weight-bold text-dark text-truncate">{item.name}</div>
                <div className="font-size-10 font-size-sm-11 text-secondary text-truncate mt-1">{item.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Quantitative Telemetry Stats */}
        <div className="row g-3 g-lg-4">
          {studioStats.map((st, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div
                className="p-4 rounded-4 h-100 border d-flex flex-column justify-content-between shadow-sm transition-all position-relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
                  borderColor: "#E2E8F0",
                  transition: "all 0.3s ease",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary font-size-10 px-2 py-1 font-weight-bold font-monospace" style={{ color: "#0066FF" }}>
                      {st.badge}
                    </span>
                    <span className="sg_live_pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00E676" }}></span>
                  </div>

                  <div
                    className="font-monospace font-weight-bold mb-2"
                    style={{ fontSize: "clamp(32px, 3.4vw, 44px)", color: "#0066FF", lineHeight: "1.05", letterSpacing: "-1px" }}
                  >
                    {st.value}
                  </div>

                  <div className="text-dark font-size-16 font-weight-bold mb-2">
                    {st.label}
                  </div>

                  <p className="text-secondary font-size-13 mb-0" style={{ lineHeight: "1.6" }}>
                    {st.desc}
                  </p>
                </div>

                <div className="pt-3 border-top mt-3 font-size-11 font-monospace text-secondary d-flex align-items-center justify-content-between" style={{ borderColor: "#E2E8F0" }}>
                  <span>Verified Benchmark</span>
                  <span className="text-success font-weight-bold">Live Synced</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyTrustBar;
