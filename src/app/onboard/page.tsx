'use client';

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import { useStudioPlatform } from '@/context/StudioPlatformContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const steps = [
  { id: 1, title: 'Studio Profile', desc: 'Identity & Location' },
  { id: 2, title: 'Suites & Gear', desc: 'Rooms, cameras & mics' },
  { id: 3, title: 'Growth Needs', desc: 'Services & solutions' },
  { id: 4, title: 'Select Plan', desc: 'Membership tier' },
];

export default function StudioOnboardPage() {
  const { registerStudio } = useStudioPlatform();
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    ownerName: '',
    email: '',
    phone: '',
    city: '',
    studioType: 'Podcast & Video Production',
    numSuites: '2',
    hourlyRate: '175',
    primaryGear: ['Sony FX6 / FX3', 'Shure SM7B', 'Blackmagic ATEM'],
    growthNeeds: ['Multi-Suite Scheduling', '24h White-Label Editing', 'Client Acquisition Funnels'],
    membershipPlan: 'Growth' as 'Starter' | 'Growth' | 'Enterprise',
  });

  const handleGearToggle = (gear: string) => {
    setFormData((prev) => ({
      ...prev,
      primaryGear: prev.primaryGear.includes(gear)
        ? prev.primaryGear.filter((g) => g !== gear)
        : [...prev.primaryGear, gear],
    }));
  };

  const handleNeedToggle = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      growthNeeds: prev.growthNeeds.includes(need)
        ? prev.growthNeeds.filter((n) => n !== need)
        : [...prev.growthNeeds, need],
    }));
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    registerStudio({
      name: formData.name || 'Metropolitan Sound & Cinema',
      ownerName: formData.ownerName || 'Studio Director',
      email: formData.email || 'director@metropolitansound.com',
      phone: formData.phone || '773-757-9417',
      city: formData.city || 'Chicago / Oakbrook, IL',
      studioType: formData.studioType,
      membershipPlan: formData.membershipPlan,
      monthlyRevenue: parseInt(formData.hourlyRate, 10) * parseInt(formData.numSuites, 10) * 35,
    });
    router.push('/dashboard');
  };

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="py-5" style={{ minHeight: '85vh', background: 'radial-gradient(ellipse at top, rgba(255, 107, 0, 0.08) 0%, rgba(9, 9, 11, 1) 70%)' }}>
            <div className="container py-4">
              {/* Top Wizard Header */}
              <div className="text-center max-w-700 mx-auto mb-5 pt-3">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                  <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ STUDIO ONBOARDING PORTAL</span>
                </div>
                <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>
                  Onboard Your Studio to <span style={{ color: '#FF6B00' }}>Growth Domains</span>
                </h1>
                <p className="text-secondary font-size-16 mb-0">
                  Configure your suites, unlock the booking management OS, and access wholesale 24h editing fulfillment in under 3 minutes.
                </p>
              </div>

              {/* Step Progress Bar */}
              <div className="max-w-900 mx-auto mb-5">
                <div className="row g-2">
                  {steps.map((st) => {
                    const isDone = currentStep > st.id;
                    const isCurrent = currentStep === st.id;
                    return (
                      <div className="col-3" key={st.id}>
                        <div
                          className="p-3 rounded-3 text-center transition-all h-100"
                          style={{
                            background: isCurrent ? 'rgba(255, 107, 0, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                            border: isCurrent ? '1px solid rgba(255, 107, 0, 0.5)' : isDone ? '1px solid rgba(0, 230, 118, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          <div className="font-size-12 font-weight-bold" style={{ color: isCurrent ? '#FF6B00' : isDone ? '#00E676' : '#71717A' }}>
                            {isDone ? '✓ STEP 0' + st.id : 'STEP 0' + st.id}
                          </div>
                          <div className="text-white font-size-14 font-weight-bold d-none d-sm-block mt-1">
                            {st.title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Wizard Form Card */}
              <div className="max-w-800 mx-auto p-4 p-md-5 rounded-4 shadow-2xl position-relative" style={{ background: 'rgba(18, 18, 24, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <form onSubmit={handleFinish}>
                  {/* STEP 1: STUDIO PROFILE */}
                  {currentStep === 1 && (
                    <div>
                      <h3 className="text-white font-size-22 font-weight-bold mb-1">Tell Us About Your Studio</h3>
                      <p className="text-secondary font-size-14 mb-4">We customize your booking platform and client pipeline to your studio facility.</p>

                      <div className="row g-3">
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Studio Business Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Apex Broadcast Labs"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Studio Owner / Director *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Marcus Sterling"
                            value={formData.ownerName}
                            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                            className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Business Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="marcus@apexstudios.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Direct Phone Number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="773-757-9417"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">City &amp; Region *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Chicago / Oakbrook Terrace, IL"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Primary Studio Type</label>
                          <select
                            value={formData.studioType}
                            onChange={(e) => setFormData({ ...formData, studioType: e.target.value })}
                            className="form-select bg-dark text-white border-secondary p-3 rounded-3"
                          >
                            <option value="Podcast & Video Production">Podcast &amp; Video Production</option>
                            <option value="Commercial Film & Photo Studio">Commercial Film &amp; Photo Studio</option>
                            <option value="Audio Recording & Voiceover Facility">Audio Recording &amp; Voiceover Facility</option>
                            <option value="Multi-Room Creative Coworking Studio">Multi-Room Creative Coworking Studio</option>
                          </select>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end mt-4 pt-3 border-top border-secondary border-opacity-20">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="cs_btn cs_style_1 cs_color_1 px-4 py-3"
                          style={{ borderRadius: '10px' }}
                        >
                          <span>Next: Suites &amp; Infrastructure →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: SUITES & INFRASTRUCTURE */}
                  {currentStep === 2 && (
                    <div>
                      <h3 className="text-white font-size-22 font-weight-bold mb-1">Suites, Equipment &amp; Rate Card</h3>
                      <p className="text-secondary font-size-14 mb-4">Set up your rooms so our software can automate bookings and rate optimization.</p>

                      <div className="row g-3 mb-4">
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Number of Dedicated Recording Suites</label>
                          <select
                            value={formData.numSuites}
                            onChange={(e) => setFormData({ ...formData, numSuites: e.target.value })}
                            className="form-select bg-dark text-white border-secondary p-3 rounded-3"
                          >
                            <option value="1">1 Suite (Single room facility)</option>
                            <option value="2">2 Suites (A/B rooms)</option>
                            <option value="3">3 Suites (Multi-camera setups)</option>
                            <option value="4">4+ Suites (Multi-room production network)</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label className="text-white font-size-13 mb-1 font-weight-bold">Average Hourly Rate ($/hr)</label>
                          <input
                            type="number"
                            value={formData.hourlyRate}
                            onChange={(e) => setFormData({ ...formData, hourlyRate: e.target.value })}
                            className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                            placeholder="175"
                          />
                        </div>
                      </div>

                      <label className="text-white font-size-13 mb-2 font-weight-bold d-block">Select Studio Equipment &amp; Capabilities Available:</label>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {[
                          'Sony FX6 / FX3 Cinema Rigs',
                          'Shure SM7B Broadcast Mics',
                          'Blackmagic ATEM Live Switchers',
                          'STC 65 Soundproofing',
                          'RØDECaster Pro II',
                          'Aputure Cinema Lighting',
                          'VIP Green Room Lounge',
                          'Riverside Remote Capture',
                        ].map((gear) => {
                          const active = formData.primaryGear.includes(gear);
                          return (
                            <button
                              key={gear}
                              type="button"
                              onClick={() => handleGearToggle(gear)}
                              className="px-3 py-2 rounded-pill font-size-13 font-weight-bold transition-all border-0"
                              style={{
                                background: active ? '#FF6B00' : 'rgba(255, 255, 255, 0.05)',
                                color: active ? '#FFFFFF' : '#A1A1AA',
                                border: active ? '1px solid #FF8A33' : '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              {active ? '✓ ' + gear : '+ ' + gear}
                            </button>
                          );
                        })}
                      </div>

                      <div className="d-flex justify-content-between mt-4 pt-3 border-top border-secondary border-opacity-20">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="btn btn-outline-secondary text-white px-4 py-2 rounded-3"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="cs_btn cs_style_1 cs_color_1 px-4 py-3"
                          style={{ borderRadius: '10px' }}
                        >
                          <span>Next: Growth Solutions Needed →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: GROWTH NEEDS */}
                  {currentStep === 3 && (
                    <div>
                      <h3 className="text-white font-size-22 font-weight-bold mb-1">What Does Your Studio Need Most?</h3>
                      <p className="text-secondary font-size-14 mb-4">Growth Domains customizes your suite toolset and wholesale service pipeline based on your answers.</p>

                      <div className="d-flex flex-column gap-3 mb-4">
                        {[
                          {
                            title: 'Multi-Suite Scheduling & Client Booking OS',
                            desc: 'Prevent double bookings, automate deposit collection, calendar sync, and client intake briefs.',
                          },
                          {
                            title: 'Wholesale 24h Post-Production Resale Network',
                            desc: 'Growth Domains editors handle full cuts, sound design, and 10 viral shorts within 24h so you can upsell clients with 60% gross margins.',
                          },
                          {
                            title: 'Corporate Client Acquisition & Local SEO Dominance',
                            desc: 'Fill empty daytime weekday studio hours with high-budget B2B thought-leadership enterprise shows.',
                          },
                          {
                            title: 'Automated Contracts, NDAs & Liability Waivers',
                            desc: 'Auto-generate client room rental agreements, talent release forms, and mutual NDA protection.',
                          },
                          {
                            title: 'Acoustic Soundproofing & Decibel Bleed Consulting',
                            desc: 'Professional sound isolation audits and acoustic diffuser calibration for broadcast perfection.',
                          },
                        ].map((item) => {
                          const active = formData.growthNeeds.includes(item.title);
                          return (
                            <div
                              key={item.title}
                              onClick={() => handleNeedToggle(item.title)}
                              className="p-3 rounded-3 cursor-pointer transition-all d-flex gap-3 align-items-start"
                              style={{
                                background: active ? 'rgba(255, 107, 0, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                                border: active ? '1px solid rgba(255, 107, 0, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                                cursor: 'pointer',
                              }}
                            >
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mt-1"
                                style={{
                                  width: '22px',
                                  height: '22px',
                                  background: active ? '#FF6B00' : 'rgba(255, 255, 255, 0.1)',
                                  color: '#FFFFFF',
                                  fontSize: '12px',
                                }}
                              >
                                {active ? '✓' : ''}
                              </div>
                              <div>
                                <h4 className="text-white font-size-15 font-weight-bold mb-1">{item.title}</h4>
                                <p className="text-secondary font-size-13 mb-0" style={{ lineHeight: 1.5 }}>{item.desc}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="d-flex justify-content-between mt-4 pt-3 border-top border-secondary border-opacity-20">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="btn btn-outline-secondary text-white px-4 py-2 rounded-3"
                        >
                          ← Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="cs_btn cs_style_1 cs_color_1 px-4 py-3"
                          style={{ borderRadius: '10px' }}
                        >
                          <span>Next: Select Membership Plan →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: MEMBERSHIP PLANS */}
                  {currentStep === 4 && (
                    <div>
                      <h3 className="text-white font-size-22 font-weight-bold mb-1">Select Your Studio Membership</h3>
                      <p className="text-secondary font-size-14 mb-4">Every plan includes a 14-day free trial. No setup fees, cancel anytime.</p>

                      <div className="row g-3 mb-4">
                        {[
                          {
                            plan: 'Starter' as const,
                            price: '$79',
                            period: '/mo',
                            desc: 'For independent 1-2 suite studios automating bookings & contracts.',
                            perks: ['Up to 2 Suites', 'Booking & Calendar OS', 'Client CRM & Deposits', 'Standard Wholesale Edits'],
                          },
                          {
                            plan: 'Growth' as const,
                            price: '$199',
                            period: '/mo',
                            popular: true,
                            desc: 'Most popular for scaling multi-cam studios reselling post-production.',
                            perks: ['Up to 5 Suites', 'Full Studio Management OS', 'Priority 24h White-Label Edits', 'Client Acquisition Funnels', 'Dedicated Account Manager'],
                          },
                          {
                            plan: 'Enterprise' as const,
                            price: '$499',
                            period: '/mo',
                            desc: 'For multi-location studio networks & major broadcast facilities.',
                            perks: ['Unlimited Suites & Locations', 'Custom Branded Client Portal', 'Wholesale Preferred Margins', 'API & Custom Hardware Ingest', '24/7 Priority Intercom'],
                          },
                        ].map((tier) => {
                          const active = formData.membershipPlan === tier.plan;
                          return (
                            <div className="col-12 col-md-4" key={tier.plan}>
                              <div
                                onClick={() => setFormData({ ...formData, membershipPlan: tier.plan })}
                                className="p-3 rounded-4 h-100 d-flex flex-column justify-content-between transition-all position-relative"
                                style={{
                                  background: active ? 'rgba(255, 107, 0, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                                  border: active ? '2px solid #FF6B00' : '1px solid rgba(255, 255, 255, 0.08)',
                                  cursor: 'pointer',
                                }}
                              >
                                {tier.popular && (
                                  <span className="badge position-absolute top-0 end-0 m-2 px-2 py-1" style={{ background: '#FF6B00', color: '#FFFFFF', fontSize: '10px', fontWeight: 800 }}>
                                    RECOMMENDED
                                  </span>
                                )}
                                <div>
                                  <div className="text-white font-size-16 font-weight-bold mb-1">{tier.plan}</div>
                                  <div className="d-flex align-items-baseline gap-1 mb-2">
                                    <span className="text-white font-size-24 font-weight-bold">{tier.price}</span>
                                    <span className="text-secondary font-size-12">{tier.period}</span>
                                  </div>
                                  <p className="text-secondary font-size-12 mb-3" style={{ lineHeight: 1.4 }}>{tier.desc}</p>
                                  <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-1">
                                    {tier.perks.map((p, idx) => (
                                      <li key={idx} className="font-size-12 text-secondary d-flex align-items-center gap-2">
                                        <span style={{ color: '#00E676' }}>✓</span>
                                        <span>{p}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-3 rounded-3 mb-4 d-flex align-items-center justify-content-between" style={{ background: 'rgba(0, 230, 118, 0.08)', border: '1px solid rgba(0, 230, 118, 0.25)' }}>
                        <div className="d-flex align-items-center gap-2">
                          <span style={{ color: '#00E676', fontSize: '18px' }}>🔒</span>
                          <span className="text-white font-size-13 font-weight-bold">14-Day Full Free Trial Included. Zero Risk.</span>
                        </div>
                        <span className="text-secondary font-size-12 d-none d-sm-inline">No charges today</span>
                      </div>

                      <div className="d-flex justify-content-between pt-3 border-top border-secondary border-opacity-20">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="btn btn-outline-secondary text-white px-4 py-2 rounded-3"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          className="cs_btn cs_style_1 cs_color_1 px-5 py-3 shadow"
                          style={{ borderRadius: '12px', fontSize: '15px' }}
                        >
                          <span>Complete Registration &amp; Open Dashboard →</span>
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

