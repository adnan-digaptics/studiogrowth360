'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconCamera,
  IconMic,
  IconLotus,
  IconPalette,
} from '@/components/common/AgencyIcons';

const verticals = [
  { id: 'photography', slug: 'photography-studios', name: 'Photography Studio', defaultRate: 150, defaultRooms: 2, icon: (color: string) => <IconCamera size={16} color={color} /> },
  { id: 'podcast', slug: 'podcast-studios', name: 'Podcast & Media Studio', defaultRate: 125, defaultRooms: 2, icon: (color: string) => <IconMic size={16} color={color} /> },
  { id: 'yoga', slug: 'yoga-studios', name: 'Yoga & Movement Studio', defaultRate: 35, defaultRooms: 2, icon: (color: string) => <IconLotus size={16} color={color} /> },
  { id: 'craft', slug: 'craft-studios', name: 'Arts & Crafts Studio', defaultRate: 65, defaultRooms: 1, icon: (color: string) => <IconPalette size={16} color={color} /> },
];

const AgencyRoiCalculator = () => {
  const [selectedVertical, setSelectedVertical] = useState(verticals[1]);
  const [rooms, setRooms] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(125);
  const [weeklyBookedHours, setWeeklyBookedHours] = useState(22);

  // Dynamic calculations:
  const currentMonthlyGross = Math.round(rooms * hourlyRate * weeklyBookedHours * 4.33);

  // Potential extra hours recovered by StudioGrowth360:
  const totalWeeklyCapacity = rooms * 45; // 45 hours open per week
  const vacantWeeklyHours = Math.max(0, totalWeeklyCapacity - (rooms * weeklyBookedHours));
  const recoveredWeeklyHours = Math.round(vacantWeeklyHours * 0.65);
  const addedMonthlyRevenue = Math.round(recoveredWeeklyHours * hourlyRate * 4.33);
  const projectedTotalMonthly = currentMonthlyGross + addedMonthlyRevenue;
  const projectedAnnualBoost = addedMonthlyRevenue * 12;
  const adminHoursSaved = Math.round(rooms * 14 * 4.33); // ~14 hrs/wk per room saved

  const handleVerticalChange = (v: typeof verticals[0]) => {
    setSelectedVertical(v);
    setHourlyRate(v.defaultRate);
    setRooms(v.defaultRooms);
  };

  return (
    <section id="roi-calculator" className="py-5 bg-white border-top border-bottom">
      <div className="container py-4 py-lg-5">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>INTERACTIVE ROI &amp; REVENUE MODELER</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Calculate Your Studio&apos;s Revenue Upside
          </h2>
          <p className="sg_agency_desc mx-auto">
            Most creative and wellness studios leave 35%–50% of their weekday hours unbooked due to slow inquiry responses and zero automated retargeting. See how much our systems recover for your facility.
          </p>

          {/* Vertical Selector Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {verticals.map((v) => {
              const isSelected = selectedVertical.id === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => handleVerticalChange(v)}
                  className="px-3 py-2 rounded-pill font-size-13 font-weight-bold transition-all border d-flex align-items-center gap-2"
                  style={{
                    background: isSelected ? '#0066FF' : '#F8FAFC',
                    color: isSelected ? '#FFFFFF' : '#1E293B',
                    borderColor: isSelected ? '#0066FF' : '#E2E8F0',
                    boxShadow: isSelected ? '0 4px 14px rgba(0, 102, 255, 0.25)' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>{v.icon(isSelected ? '#FFFFFF' : '#0066FF')}</span>
                  <span>{v.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left Column: Sliders */}
          <div className="col-12 col-lg-6">
            <div className="p-4 p-xl-5 rounded-4 border bg-light shadow-sm">
              <h3 className="text-dark font-size-20 font-weight-bold mb-4">
                Your Studio Baseline Parameters
              </h3>

              {/* Slider 1: Rooms / Suites */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="font-size-14 font-weight-bold text-dark">
                    Active Suites / Studios / Rooms
                  </label>
                  <span className="font-monospace font-weight-bold px-3 py-1 rounded-pill bg-white border text-primary" style={{ color: '#0066FF' }}>
                    {rooms} {rooms === 1 ? 'Room' : 'Rooms'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="1"
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="form-range w-100 sg_range_slider"
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>1 Suite</span>
                  <span>3 Suites</span>
                  <span>6 Suites</span>
                </div>
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="font-size-14 font-weight-bold text-dark">
                    Average Booking / Hourly Rate
                  </label>
                  <span className="font-monospace font-weight-bold px-3 py-1 rounded-pill bg-white border text-primary" style={{ color: '#0066FF' }}>
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="350"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="form-range w-100 sg_range_slider"
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>$25/hr</span>
                  <span>$175/hr</span>
                  <span>$350/hr</span>
                </div>
              </div>

              {/* Slider 3: Current Weekly Booked Hours */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="font-size-14 font-weight-bold text-dark">
                    Current Booked Hours (per room / week)
                  </label>
                  <span className="font-monospace font-weight-bold px-3 py-1 rounded-pill bg-white border text-primary" style={{ color: '#0066FF' }}>
                    {weeklyBookedHours} hrs / wk
                  </span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="40"
                  step="2"
                  value={weeklyBookedHours}
                  onChange={(e) => setWeeklyBookedHours(Number(e.target.value))}
                  className="form-range w-100 sg_range_slider"
                />
                <div className="d-flex justify-content-between font-size-11 text-secondary mt-1">
                  <span>8 hrs (Low)</span>
                  <span>24 hrs (Average)</span>
                  <span>40 hrs (Near Max)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Yield Card */}
          <div className="col-12 col-lg-6">
            <div
              className="p-4 p-xl-5 rounded-4 border shadow-lg position-relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0A192F 0%, #0F172A 100%)',
                color: '#FFFFFF',
                borderColor: 'rgba(0, 102, 255, 0.4)',
              }}
            >
              <div className="d-flex align-items-center justify-content-between mb-4">
                <span className="font-monospace font-size-11 font-weight-bold text-uppercase px-3 py-1 rounded-pill" style={{ background: 'rgba(0, 230, 118, 0.15)', color: '#00E676', border: '1px solid rgba(0, 230, 118, 0.3)' }}>
                  PROJECTED MONTHLY GROWTH
                </span>
                <span className="font-size-12 text-secondary" style={{ color: '#94A3B8' }}>
                  Based on 350+ US Studio Audits
                </span>
              </div>

              {/* Main Net Added Monthly Profit */}
              <div className="mb-4">
                <div className="font-size-13 text-secondary text-uppercase font-monospace" style={{ color: '#94A3B8' }}>
                  Added Monthly Revenue (Recovered Vacancy)
                </div>
                <div
                  className="font-monospace font-weight-bold mt-1"
                  style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', color: '#00E676', lineHeight: 1 }}
                >
                  +${addedMonthlyRevenue.toLocaleString()}
                  <span className="font-size-18 font-weight-normal text-white-50"> / mo</span>
                </div>
                <div className="font-size-13 mt-2" style={{ color: '#38BDF8' }}>
                  ↑ Annualized Revenue Boost: <strong>+${projectedAnnualBoost.toLocaleString()}/year</strong>
                </div>
              </div>

              {/* Sub-Metrics Grid */}
              <div className="row g-3 pt-3 border-top mb-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                <div className="col-6">
                  <div className="font-size-11 text-secondary" style={{ color: '#94A3B8' }}>Admin Hours Saved</div>
                  <div className="font-size-20 font-weight-bold text-white mt-1">
                    ~{adminHoursSaved} hrs / mo
                  </div>
                  <div className="font-size-11 text-white-50">Invoicing, DMs, scheduling</div>
                </div>

                <div className="col-6">
                  <div className="font-size-11 text-secondary" style={{ color: '#94A3B8' }}>Projected Studio Run-Rate</div>
                  <div className="font-size-20 font-weight-bold text-white mt-1">
                    ${projectedTotalMonthly.toLocaleString()} / mo
                  </div>
                  <div className="font-size-11 text-white-50">Combined automated yield</div>
                </div>
              </div>

              <div className="d-flex flex-column gap-2">
                <Link
                  href="/book-consultation"
                  className="sg_btn_primary font-size-14 py-3 px-4 justify-content-center text-center shadow-lg"
                  style={{ background: '#0066FF', borderColor: '#0066FF' }}
                >
                  <span>Claim Your Free Studio Audit &amp; Blueprint →</span>
                </Link>
                <div className="text-center font-size-12 text-secondary mt-1" style={{ color: '#94A3B8' }}>
                  No lock-in contracts · Custom GoHighLevel &amp; n8n deployment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyRoiCalculator;
