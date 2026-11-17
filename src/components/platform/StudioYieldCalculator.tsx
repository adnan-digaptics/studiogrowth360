'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const StudioYieldCalculator = () => {
  const [suites, setSuites] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(150);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [wholesaleResalePercent, setWholesaleResalePercent] = useState(60);

  // Calculations:
  // Direct Room Booking Revenue = suites * hourlyRate * hoursPerWeek * 4.33 weeks
  const monthlyRoomRevenue = Math.round(suites * hourlyRate * hoursPerWeek * 4.33);

  // Wholesale Resale Margin:
  // Each booked session is roughly ~2 hours. So sessions/month = (suites * hoursPerWeek * 4.33) / 2
  const monthlySessions = Math.round((suites * hoursPerWeek * 4.33) / 2);
  // Clients buying post-production edits
  const editClients = Math.round(monthlySessions * (wholesaleResalePercent / 100));
  // Studio retails full edit at $450, wholesale cost via Growth Domains is $160 => Pure Profit is $290 per edit!
  const monthlyWholesaleProfit = Math.round(editClients * 290);

  const totalMonthlyGross = monthlyRoomRevenue + monthlyWholesaleProfit;
  const projectedAnnualRunRate = Math.round(totalMonthlyGross * 12);

  return (
    <section className="py-5 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container py-4">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Column: Interactive Controls */}
          <div className="col-12 col-lg-6">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
              <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
              <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                INTERACTIVE STUDIO YIELD MODELER
              </span>
            </div>

            <h2 className="text-white font-weight-bold font-size-28 font-size-md-36 mb-3">
              See How Much Revenue Your Studio Is Leaving on the Table
            </h2>
            <p className="text-secondary font-size-15 mb-4" style={{ lineHeight: '1.6' }}>
              Most studios rely only on room rental fees and let clients take raw files elsewhere. With Growth Domains, you fill empty weekday hours and resell wholesale 24h editing at a <strong className="text-white">65% pure margin</strong>.
            </p>

            <div className="p-4 rounded-4 d-flex flex-column gap-4" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {/* Slider 1: Number of Suites */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="text-white font-size-14 font-weight-bold">
                    Active Recording Suites
                  </label>
                  <span className="font-monospace font-weight-bold text-white px-2 py-1 rounded-2" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}>
                    {suites} {suites === 1 ? 'Suite' : 'Suites'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={suites}
                  onChange={(e) => setSuites(Number(e.target.value))}
                  className="form-range w-100"
                  style={{ accentColor: '#FF6B00' }}
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>1 Suite</span>
                  <span>3 Suites</span>
                  <span>6 Suites</span>
                </div>
              </div>

              {/* Slider 2: Hourly Rate */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="text-white font-size-14 font-weight-bold">
                    Average Hourly Rate Billed
                  </label>
                  <span className="font-monospace font-weight-bold text-white px-2 py-1 rounded-2" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}>
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="75"
                  max="350"
                  step="25"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="form-range w-100"
                  style={{ accentColor: '#FF6B00' }}
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>$75/hr</span>
                  <span>$200/hr</span>
                  <span>$350/hr</span>
                </div>
              </div>

              {/* Slider 3: Booked Hours per Week per Suite */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="text-white font-size-14 font-weight-bold">
                    Booked Hours / Week (per Suite)
                  </label>
                  <span className="font-monospace font-weight-bold text-white px-2 py-1 rounded-2" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}>
                    {hoursPerWeek} hrs / week
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="form-range w-100"
                  style={{ accentColor: '#FF6B00' }}
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>5 hrs (Underbooked)</span>
                  <span>20 hrs (Target)</span>
                  <span>40 hrs (Full Capacity)</span>
                </div>
              </div>

              {/* Slider 4: Post-Production Upsell % */}
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="text-white font-size-14 font-weight-bold">
                    Clients Upsold on Wholesale 24h Editing
                  </label>
                  <span className="font-monospace font-weight-bold text-white px-2 py-1 rounded-2" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                    {wholesaleResalePercent}% of clients
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  value={wholesaleResalePercent}
                  onChange={(e) => setWholesaleResalePercent(Number(e.target.value))}
                  className="form-range w-100"
                  style={{ accentColor: '#38bdf8' }}
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>0% (Raw Files Only)</span>
                  <span>50% (Standard)</span>
                  <span>100% (Turnkey Packages)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Yield Projection Dashboard */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 p-xl-5 rounded-4 position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #121217 0%, #0A0A0E 100%)',
                border: '1px solid rgba(255, 107, 0, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 107, 0, 0.1)',
              }}
            >
              {/* Top Accent Strip */}
              <div className="d-flex align-items-center justify-content-between pb-3 mb-4 border-bottom border-secondary border-opacity-10">
                <span className="badge rounded-pill" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00', fontSize: '11px', fontWeight: 700, padding: '5px 12px' }}>
                  STUDIO FINANCIAL YIELD FORECAST
                </span>
                <span className="text-secondary font-size-12">Dynamic Calculation</span>
              </div>

              {/* Main Revenue Numbers */}
              <div className="mb-4">
                <div className="text-secondary font-size-13 text-uppercase font-monospace mb-1">
                  Projected Monthly Gross Revenue
                </div>
                <div className="font-monospace font-weight-bold" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', color: '#FFFFFF', lineHeight: '1.1' }}>
                  ${totalMonthlyGross.toLocaleString()}
                  <span className="font-size-18 text-secondary font-sans font-weight-normal ms-2">/ month</span>
                </div>
              </div>

              {/* Financial Breakdown Tiles */}
              <div className="row g-3 mb-4">
                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="text-secondary font-size-11 text-uppercase mb-1">Room Rental Revenue</div>
                    <div className="text-white font-weight-bold font-size-20 font-monospace">
                      ${monthlyRoomRevenue.toLocaleString()}
                    </div>
                    <div className="text-secondary font-size-11 mt-1">
                      {suites} suites · {hoursPerWeek} hrs/wk each
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                    <div className="font-size-11 text-uppercase mb-1" style={{ color: '#38bdf8' }}>Wholesale Resale Profit</div>
                    <div className="font-weight-bold font-size-20 font-monospace" style={{ color: '#38bdf8' }}>
                      +${monthlyWholesaleProfit.toLocaleString()}
                    </div>
                    <div className="text-secondary font-size-11 mt-1">
                      {editClients} edits @ $290 pure profit
                    </div>
                  </div>
                </div>
              </div>

              {/* Annualized Run-Rate Card */}
              <div className="p-3 rounded-3 mb-4 d-flex align-items-center justify-content-between" style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.25)' }}>
                <div>
                  <div className="text-success font-size-12 font-weight-bold text-uppercase">Projected Annual Run-Rate</div>
                  <div className="text-white font-weight-bold font-size-22 font-monospace">
                    ${projectedAnnualRunRate.toLocaleString()} <span className="font-size-12 text-secondary">/ year</span>
                  </div>
                </div>
                <span className="badge bg-success bg-opacity-25 text-success font-size-11 px-2 py-1">
                  High Margin Model
                </span>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3">
                <Link href="/onboard" className="sg_primary_cta text-center flex-fill">
                  <span>Claim Your Studio Plan →</span>
                </Link>
                <Link href="/tools" className="sg_secondary_cta text-center flex-fill">
                  <span>Full Financial Tool</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioYieldCalculator;

