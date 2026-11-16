'use client';

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import { useStudioPlatform } from '@/context/StudioPlatformContext';
import Link from 'next/link';

export default function StudioDashboardPage() {
  const { studio, role, switchRole, addBooking, createWholesaleOrder } = useStudioPlatform();
  const [activeTab, setActiveTab] = useState<'bookings' | 'services' | 'suites' | 'tools' | 'settings'>('bookings');
  const [suiteFilter, setSuiteFilter] = useState<string>('All');
  
  // New Booking Modal State
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [newBooking, setNewBooking] = useState({
    clientName: '',
    clientEmail: '',
    suite: studio.suites[0]?.name || 'Suite 1 - 4K Cinema Master',
    date: 'Today, 3:00 PM - 5:00 PM',
    durationHours: 2,
    ratePerHour: 175,
    whiteLabelEdit: true,
  });

  // Wholesale Service Modal State
  const [showServiceModal, setShowServiceModal] = useState<boolean>(false);
  const [newServiceOrder, setNewServiceOrder] = useState({
    serviceType: '24h White-Label Multi-Cam 4K Episode Edit',
    clientShowName: '',
    cost: 160,
    resalePrice: 450,
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBooking.clientName) return;
    const total = newBooking.durationHours * newBooking.ratePerHour;
    addBooking({
      clientName: newBooking.clientName,
      clientEmail: newBooking.clientEmail || 'client@company.com',
      suite: newBooking.suite,
      date: newBooking.date,
      durationHours: newBooking.durationHours,
      status: 'Confirmed',
      totalAmount: total,
      whiteLabelServices: newBooking.whiteLabelEdit ? ['24h Episode Cut', '10 Viral Shorts'] : [],
    });
    setShowBookingModal(false);
    setNewBooking({
      clientName: '',
      clientEmail: '',
      suite: studio.suites[0]?.name || 'Suite 1 - 4K Cinema Master',
      date: 'Tomorrow, 2:00 PM - 4:00 PM',
      durationHours: 2,
      ratePerHour: 175,
      whiteLabelEdit: true,
    });
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceOrder.clientShowName) return;
    createWholesaleOrder({
      serviceType: newServiceOrder.serviceType,
      clientShowName: newServiceOrder.clientShowName,
      cost: newServiceOrder.cost,
      resalePrice: newServiceOrder.resalePrice,
      turnaroundEstimate: 'Ready in 24 hours',
    });
    setShowServiceModal(false);
    setNewServiceOrder({
      serviceType: '24h White-Label Multi-Cam 4K Episode Edit',
      clientShowName: '',
      cost: 160,
      resalePrice: 450,
    });
  };

  const filteredBookings = suiteFilter === 'All'
    ? studio.bookings
    : studio.bookings.filter((b) => b.suite.includes(suiteFilter));

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="py-5" style={{ minHeight: '90vh', background: '#09090B' }}>
            <div className="container py-3">
              {/* Top Studio Bar */}
              <div className="p-4 rounded-4 mb-4 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(24, 24, 32, 0.9) 0%, rgba(14, 14, 18, 0.95) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="row align-items-center g-3">
                  <div className="col-12 col-lg-7">
                    <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                      <h1 className="text-white font-size-26 font-weight-bold mb-0">{studio.name}</h1>
                      <span className="badge rounded-pill" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF8A33', border: '1px solid rgba(255, 107, 0, 0.4)', padding: '5px 12px', fontSize: '11px', fontWeight: 800 }}>
                        {studio.membershipPlan.toUpperCase()} NETWORK PARTNER
                      </span>
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-11">
                        ● LIVE SUITES ACTIVE
                      </span>
                    </div>
                    <div className="text-secondary font-size-13 d-flex flex-wrap align-items-center gap-3">
                      <span>👤 {studio.ownerName}</span>
                      <span>📍 {studio.city}</span>
                      <span>🎙️ {studio.studioType}</span>
                    </div>
                  </div>

                  <div className="col-12 col-lg-5 d-flex flex-wrap align-items-center justify-content-lg-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(true)}
                      className="cs_btn cs_style_1 cs_color_1 px-3 py-2 font-size-13"
                      style={{ borderRadius: '10px' }}
                    >
                      <span>+ New Client Booking</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowServiceModal(true)}
                      className="btn btn-outline-warning text-warning px-3 py-2 font-size-13 font-weight-bold"
                      style={{ borderRadius: '10px', borderColor: 'rgba(255,107,0,0.4)', background: 'rgba(255,107,0,0.06)' }}
                    >
                      <span>Order Wholesale Edit</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 4 Core KPI Metric Cards */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-secondary font-size-13 font-weight-bold">Monthly Gross Revenue</span>
                      <span className="text-success font-size-12 font-weight-bold">+24% vs last mo</span>
                    </div>
                    <div className="text-white font-size-28 font-weight-bold mb-1">
                      ${studio.monthlyRevenue.toLocaleString()}
                    </div>
                    <div className="text-secondary font-size-12">Tracked through Growth Domains OS</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-secondary font-size-13 font-weight-bold">Suite Utilization Rate</span>
                      <span className="text-warning font-size-12 font-weight-bold">+18% capacity</span>
                    </div>
                    <div className="text-white font-size-28 font-weight-bold mb-1">
                      {studio.suiteUtilizationRate}%
                    </div>
                    <div className="text-secondary font-size-12">{studio.suites.length} Suites Configured</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-secondary font-size-13 font-weight-bold">Wholesale Resale Profit</span>
                      <span className="text-success font-size-12 font-weight-bold">64% net margin</span>
                    </div>
                    <div className="text-white font-size-28 font-weight-bold mb-1" style={{ color: '#00E676' }}>
                      $6,840
                    </div>
                    <div className="text-secondary font-size-12">Earned reselling 24h edits to clients</div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="p-4 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="text-secondary font-size-13 font-weight-bold">Active Post-Production</span>
                      <span className="badge rounded-pill bg-danger bg-opacity-25 text-danger font-size-11">24h SLA</span>
                    </div>
                    <div className="text-white font-size-28 font-weight-bold mb-1" style={{ color: '#FF8A33' }}>
                      {studio.wholesaleOrders.length} In Pipeline
                    </div>
                    <div className="text-secondary font-size-12">Fulfilled by Growth Domains editors</div>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="d-flex flex-wrap gap-2 mb-4 p-2 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                {[
                  { id: 'bookings', label: '📅 Suite Calendar & Bookings', count: studio.bookings.length },
                  { id: 'services', label: '⚡ Wholesale Post-Production', count: studio.wholesaleOrders.length },
                  { id: 'suites', label: '🎙️ Suite & Room Inventory', count: studio.suites.length },
                  { id: 'tools', label: '🛠️ Studio Contract & Tools', count: 4 },
                  { id: 'settings', label: '⚙️ Studio Settings & Plan' },
                ].map((t) => {
                  const active = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActiveTab(t.id as any)}
                      className="btn py-2 px-3 font-size-13 font-weight-bold rounded-3 transition-all border-0 d-flex align-items-center gap-2"
                      style={{
                        background: active ? '#FF6B00' : 'transparent',
                        color: active ? '#FFFFFF' : '#A1A1AA',
                      }}
                    >
                      <span>{t.label}</span>
                      {t.count !== undefined && (
                        <span
                          className="badge rounded-pill"
                          style={{
                            background: active ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                            color: '#FFFFFF',
                            fontSize: '11px',
                          }}
                        >
                          {t.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* TAB 1: SUITE CALENDAR & BOOKINGS */}
              {activeTab === 'bookings' && (
                <div className="p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-size-18 font-weight-bold mb-1">Active Client Studio Sessions</h3>
                      <p className="text-secondary font-size-13 mb-0">Scheduled sessions with automated deposit tracking and white-label upsells.</p>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <span className="text-secondary font-size-13">Filter Suite:</span>
                      <select
                        value={suiteFilter}
                        onChange={(e) => setSuiteFilter(e.target.value)}
                        className="form-select form-select-sm bg-dark text-white border-secondary"
                        style={{ width: 'auto' }}
                      >
                        <option value="All">All Suites ({studio.bookings.length})</option>
                        {studio.suites.map((s) => (
                          <option key={s.id} value={s.name.split(' - ')[0]}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                      <thead>
                        <tr className="border-secondary border-opacity-25 font-size-12 text-secondary text-uppercase">
                          <th>Booking ID</th>
                          <th>Client / Show Name</th>
                          <th>Assigned Suite</th>
                          <th>Scheduled Date &amp; Time</th>
                          <th>Total Gross</th>
                          <th>Wholesale Resale</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredBookings.map((b) => (
                          <tr key={b.id} className="border-secondary border-opacity-10 font-size-14">
                            <td className="font-monospace text-secondary font-size-12">{b.id}</td>
                            <td>
                              <div className="text-white font-weight-bold">{b.clientName}</div>
                              <div className="text-secondary font-size-12">{b.clientEmail}</div>
                            </td>
                            <td>
                              <span className="badge rounded-pill bg-secondary bg-opacity-25 text-white-50 font-size-12 font-weight-normal">
                                {b.suite}
                              </span>
                            </td>
                            <td>
                              <span className="text-white">{b.date}</span>
                              <span className="text-secondary font-size-12 d-block">({b.durationHours} hours booked)</span>
                            </td>
                            <td className="text-white font-weight-bold">
                              ${b.totalAmount}
                            </td>
                            <td>
                              {b.whiteLabelServices && b.whiteLabelServices.length > 0 ? (
                                <span className="badge rounded-pill" style={{ background: 'rgba(0, 230, 118, 0.15)', color: '#00E676', fontSize: '11px' }}>
                                  + {b.whiteLabelServices.join(' · ')}
                                </span>
                              ) : (
                                <span className="text-secondary font-size-12">Room only</span>
                              )}
                            </td>
                            <td>
                              <span
                                className="badge rounded-pill px-3 py-1 font-size-11"
                                style={{
                                  background:
                                    b.status === 'In Session'
                                      ? 'rgba(255, 107, 0, 0.2)'
                                      : b.status === 'Confirmed'
                                      ? 'rgba(0, 230, 118, 0.2)'
                                      : 'rgba(255, 255, 255, 0.1)',
                                  color:
                                    b.status === 'In Session'
                                      ? '#FF8A33'
                                      : b.status === 'Confirmed'
                                      ? '#00E676'
                                      : '#A1A1AA',
                                }}
                              >
                                {b.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 2: WHOLESALE SERVICES */}
              {activeTab === 'services' && (
                <div className="p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-size-18 font-weight-bold mb-1">Wholesale B2B Services Fulfillment Pipeline</h3>
                      <p className="text-secondary font-size-13 mb-0">Order turnkey post-production from Growth Domains editors and resell to your clients at 60%+ margins.</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowServiceModal(true)}
                      className="cs_btn cs_style_1 cs_color_1 px-3 py-2 font-size-13"
                      style={{ borderRadius: '10px' }}
                    >
                      <span>+ Submit New Episode for 24h Edit</span>
                    </button>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-dark table-hover align-middle mb-0" style={{ background: 'transparent' }}>
                      <thead>
                        <tr className="border-secondary border-opacity-25 font-size-12 text-secondary text-uppercase">
                          <th>Order ID</th>
                          <th>Service Ordered</th>
                          <th>Client Show</th>
                          <th>Submitted</th>
                          <th>Wholesale Cost</th>
                          <th>Your Resale Margin</th>
                          <th>SLA Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {studio.wholesaleOrders.map((ord) => (
                          <tr key={ord.id} className="border-secondary border-opacity-10 font-size-14">
                            <td className="font-monospace text-secondary font-size-12">{ord.id}</td>
                            <td className="text-white font-weight-bold">{ord.serviceType}</td>
                            <td className="text-secondary">{ord.clientShowName}</td>
                            <td className="text-secondary font-size-13">{ord.submittedAt}</td>
                            <td className="text-white font-weight-bold">${ord.cost}</td>
                            <td>
                              <span className="text-success font-weight-bold">
                                +${ord.resalePrice - ord.cost} profit
                              </span>
                              <span className="text-secondary font-size-11 d-block">(Billed client ${ord.resalePrice})</span>
                            </td>
                            <td>
                              <span
                                className="badge rounded-pill px-3 py-1 font-size-11"
                                style={{
                                  background: ord.status === 'Delivered' ? 'rgba(0, 230, 118, 0.2)' : 'rgba(255, 107, 0, 0.2)',
                                  color: ord.status === 'Delivered' ? '#00E676' : '#FF8A33',
                                }}
                              >
                                {ord.status === 'Delivered' ? '✓ Delivered' : `● ${ord.status} (${ord.turnaroundEstimate})`}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 3: SUITES CONFIGURATION */}
              {activeTab === 'suites' && (
                <div className="p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h3 className="text-white font-size-18 font-weight-bold mb-1">Studio Suites &amp; Production Rooms</h3>
                      <p className="text-secondary font-size-13 mb-0">Manage availability, hourly rate cards, and technical hardware specifications.</p>
                    </div>
                  </div>

                  <div className="row g-3">
                    {studio.suites.map((st) => (
                      <div className="col-12 col-md-6" key={st.id}>
                        <div className="p-4 rounded-3 h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                          <div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="text-white font-size-16 font-weight-bold">{st.name}</span>
                              <span
                                className="badge rounded-pill"
                                style={{
                                  background: st.status === 'Available' ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 107, 0, 0.15)',
                                  color: st.status === 'Available' ? '#00E676' : '#FF8A33',
                                  fontSize: '11px',
                                }}
                              >
                                ● {st.status}
                              </span>
                            </div>
                            <p className="text-secondary font-size-13 mb-3">{st.type}</p>
                          </div>

                          <div className="d-flex align-items-center justify-content-between pt-3 border-top border-secondary border-opacity-15">
                            <div>
                              <span className="text-white font-size-18 font-weight-bold">${st.rate}</span>
                              <span className="text-secondary font-size-12"> / hour</span>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary text-white font-size-12 px-3">
                              Edit Room Specs
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: TOOLS & DOWNLOADS */}
              {activeTab === 'tools' && (
                <div className="p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h3 className="text-white font-size-18 font-weight-bold mb-1">Growth Domains Studio Toolset &amp; Templates</h3>
                  <p className="text-secondary font-size-13 mb-4">Production-tested legal contracts, rate card benchmarking, and acoustic calculators.</p>

                  <div className="row g-3">
                    {[
                      {
                        title: 'Studio Hire Agreement & Liability Waiver',
                        desc: 'Protects studio equipment, defines hourly overage fees, cancellation policy, and deposit terms.',
                        badge: 'Legal Contract',
                        action: 'Generate Custom PDF',
                      },
                      {
                        title: 'Talent & Guest Video/Audio Release Form',
                        desc: 'Ensures your studio and clients hold clear commercial distribution rights for Spotify/YouTube.',
                        badge: 'IP Waiver',
                        action: 'Generate Custom PDF',
                      },
                      {
                        title: 'Acoustic Soundproofing & STC Decibel Audit Tool',
                        desc: 'Check room transmission loss and diffuser placement to guarantee pristine vocal presence.',
                        badge: 'Acoustic Tool',
                        action: 'Launch Acoustic Calculator',
                      },
                      {
                        title: 'Regional Studio Rate Card Benchmarking Engine',
                        desc: 'Compare your hourly rate cards with average occupancy in Chicago, New York, LA, and Austin.',
                        badge: 'Pricing Engine',
                        action: 'Run Rate Audit',
                      },
                    ].map((tool, idx) => (
                      <div className="col-12 col-md-6" key={idx}>
                        <div className="p-3 rounded-3 h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                          <div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <span className="badge rounded-pill bg-secondary bg-opacity-25 text-white-50 font-size-11">{tool.badge}</span>
                              <span style={{ color: '#00E676', fontSize: '12px' }}>✓ Included in Plan</span>
                            </div>
                            <h4 className="text-white font-size-15 font-weight-bold mb-1">{tool.title}</h4>
                            <p className="text-secondary font-size-12 mb-3">{tool.desc}</p>
                          </div>
                          <Link href="/tools" className="btn btn-sm btn-outline-warning text-warning w-100 py-2 font-size-12 font-weight-bold">
                            {tool.action} →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: SETTINGS */}
              {activeTab === 'settings' && (
                <div className="p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h3 className="text-white font-size-18 font-weight-bold mb-3">Studio Account &amp; Membership Settings</h3>

                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <div className="p-3 rounded-3 mb-3" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="text-secondary font-size-12 mb-1">Current Membership Plan</div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-white font-size-20 font-weight-bold">{studio.membershipPlan} Studio Network</div>
                          <Link href="/pricing" className="btn btn-sm btn-warning font-weight-bold font-size-12" style={{ background: '#FF6B00', border: 'none', color: '#fff' }}>
                            Upgrade Plan
                          </Link>
                        </div>
                        <div className="text-secondary font-size-12 mt-2">Renews automatically. 24h wholesale editing active.</div>
                      </div>

                      <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="text-secondary font-size-12 mb-1">Stripe Direct Payouts</div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-success font-size-14 font-weight-bold">● Connected (Daily 24h Auto-Payout)</div>
                          <button type="button" className="btn btn-sm btn-outline-secondary text-white font-size-12">Manage</button>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="text-white font-size-14 font-weight-bold mb-2">Role Experience Switcher (Demo Mode)</div>
                        <p className="text-secondary font-size-12 mb-3">Toggle between perspectives to verify how Growth Domains serves each audience.</p>
                        <div className="d-flex gap-2">
                          <button
                            type="button"
                            onClick={() => switchRole('visitor')}
                            className="btn btn-sm btn-outline-secondary text-white font-size-12 flex-grow-1"
                          >
                            Switch to Visitor
                          </button>
                          <button
                            type="button"
                            onClick={() => switchRole('admin')}
                            className="btn btn-sm btn-outline-secondary text-white font-size-12 flex-grow-1"
                          >
                            Switch to Admin
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* MODAL: ADD CLIENT BOOKING */}
            {showBookingModal && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
                style={{ background: 'rgba(0, 0, 0, 0.85)', zIndex: 9999, backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="p-4 p-md-5 rounded-4 shadow-2xl position-relative max-w-600 w-100"
                  style={{ background: '#121218', border: '1px solid rgba(255, 107, 0, 0.4)' }}
                >
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="position-absolute top-0 end-0 m-3 btn btn-sm text-secondary font-size-18 border-0"
                  >
                    ✕
                  </button>

                  <h3 className="text-white font-size-20 font-weight-bold mb-1">+ Book New Client Session</h3>
                  <p className="text-secondary font-size-13 mb-4">Adds session immediately to your multi-suite calendar and triggers deposit confirmation.</p>

                  <form onSubmit={handleBookingSubmit}>
                    <div className="row g-3 mb-4">
                      <div className="col-12">
                        <label className="text-white font-size-12 font-weight-bold mb-1">Client Name / Show Title *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Modern Capital Podcast"
                          value={newBooking.clientName}
                          onChange={(e) => setNewBooking({ ...newBooking, clientName: e.target.value })}
                          className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="text-white font-size-12 font-weight-bold mb-1">Client Contact Email</label>
                        <input
                          type="email"
                          placeholder="host@show.com"
                          value={newBooking.clientEmail}
                          onChange={(e) => setNewBooking({ ...newBooking, clientEmail: e.target.value })}
                          className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="text-white font-size-12 font-weight-bold mb-1">Assigned Suite</label>
                        <select
                          value={newBooking.suite}
                          onChange={(e) => setNewBooking({ ...newBooking, suite: e.target.value })}
                          className="form-select bg-dark text-white border-secondary p-3 rounded-3"
                        >
                          {studio.suites.map((s) => (
                            <option key={s.id} value={s.name}>
                              {s.name} (${s.rate}/hr)
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="text-white font-size-12 font-weight-bold mb-1">Date &amp; Scheduled Hours</label>
                        <input
                          type="text"
                          value={newBooking.date}
                          onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                          className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="text-white font-size-12 font-weight-bold mb-1">Duration (Hours)</label>
                        <input
                          type="number"
                          min="1"
                          max="12"
                          value={newBooking.durationHours}
                          onChange={(e) => setNewBooking({ ...newBooking, durationHours: parseInt(e.target.value, 10) || 1 })}
                          className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                        />
                      </div>
                    </div>

                    <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(255, 107, 0, 0.08)', border: '1px solid rgba(255, 107, 0, 0.25)' }}>
                      <div className="form-check d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="whiteLabelCheck"
                          checked={newBooking.whiteLabelEdit}
                          onChange={(e) => setNewBooking({ ...newBooking, whiteLabelEdit: e.target.checked })}
                          style={{ accentColor: '#FF6B00' }}
                        />
                        <label className="form-check-label text-white font-size-13 font-weight-bold mb-0" htmlFor="whiteLabelCheck">
                          Upsell 24h White-Label Post-Production (+ $450 client resale / $160 wholesale cost)
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center pt-2">
                      <div className="text-secondary font-size-13">
                        Total Session Bill: <strong className="text-white font-size-16">${newBooking.durationHours * newBooking.ratePerHour}</strong>
                      </div>
                      <button type="submit" className="cs_btn cs_style_1 cs_color_1 px-4 py-2" style={{ borderRadius: '10px' }}>
                        <span>Confirm &amp; Schedule →</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* MODAL: ORDER WHOLESALE SERVICE */}
            {showServiceModal && (
              <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
                style={{ background: 'rgba(0, 0, 0, 0.85)', zIndex: 9999, backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="p-4 p-md-5 rounded-4 shadow-2xl position-relative max-w-600 w-100"
                  style={{ background: '#121218', border: '1px solid rgba(0, 230, 118, 0.4)' }}
                >
                  <button
                    type="button"
                    onClick={() => setShowServiceModal(false)}
                    className="position-absolute top-0 end-0 m-3 btn btn-sm text-secondary font-size-18 border-0"
                  >
                    ✕
                  </button>

                  <h3 className="text-white font-size-20 font-weight-bold mb-1">⚡ Request Wholesale Post-Production</h3>
                  <p className="text-secondary font-size-13 mb-4">Our dedicated audio/video engineering network delivers master cuts in &lt; 24h.</p>

                  <form onSubmit={handleServiceSubmit}>
                    <div className="mb-3">
                      <label className="text-white font-size-12 font-weight-bold mb-1">Service Type</label>
                      <select
                        value={newServiceOrder.serviceType}
                        onChange={(e) => setNewServiceOrder({ ...newServiceOrder, serviceType: e.target.value })}
                        className="form-select bg-dark text-white border-secondary p-3 rounded-3"
                      >
                        <option value="24h White-Label Multi-Cam 4K Episode Edit">24h White-Label Multi-Cam 4K Episode Edit (Cost: $160 / Resale: $450)</option>
                        <option value="10x Retention-Optimized Viral Shorts Package">10x Retention-Optimized Viral Shorts Package (Cost: $95 / Resale: $320)</option>
                        <option value="Dolby Atmos & Spotify Loudness Mastering">Dolby Atmos &amp; Spotify Loudness Mastering (Cost: $75 / Resale: $200)</option>
                        <option value="Remote Guest 4K Studio Audio Concierge">Remote Guest 4K Studio Audio Concierge (Cost: $65 / Resale: $175)</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="text-white font-size-12 font-weight-bold mb-1">Client Show / Episode Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Tech Talk - Episode 12"
                        value={newServiceOrder.clientShowName}
                        onChange={(e) => setNewServiceOrder({ ...newServiceOrder, clientShowName: e.target.value })}
                        className="form-control bg-dark text-white border-secondary p-3 rounded-3"
                      />
                    </div>

                    <div className="p-3 rounded-3 mb-4 d-flex justify-content-between align-items-center" style={{ background: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.25)' }}>
                      <div>
                        <div className="text-secondary font-size-11 text-uppercase">Wholesale Studio Cost</div>
                        <div className="text-white font-size-18 font-weight-bold">${newServiceOrder.cost}</div>
                      </div>
                      <div className="text-end">
                        <div className="text-secondary font-size-11 text-uppercase">Your Net Resale Profit</div>
                        <div className="text-success font-size-18 font-weight-bold">+${newServiceOrder.resalePrice - newServiceOrder.cost}</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end gap-2">
                      <button type="submit" className="cs_btn cs_style_1 cs_color_1 px-4 py-3" style={{ borderRadius: '10px' }}>
                        <span>Submit to Editing Network (24h SLA) →</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

