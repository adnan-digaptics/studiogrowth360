'use client';

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import Link from 'next/link';

export default function StudioToolsPage() {
  // Rate Card Calculator State
  const [suitesCount, setSuitesCount] = useState<number>(2);
  const [hourlyRate, setHourlyRate] = useState<number>(175);
  const [weeklyHoursPerSuite, setWeeklyHoursPerSuite] = useState<number>(25);
  const [upsellEditPercent, setUpsellEditPercent] = useState<number>(50);

  // Computed financial numbers
  const roomRevenueMonthly = suitesCount * hourlyRate * weeklyHoursPerSuite * 4.3;
  const sessionsPerMonth = suitesCount * (weeklyHoursPerSuite / 2.5) * 4.3;
  const editUpsellMonthly = sessionsPerMonth * (upsellEditPercent / 100) * (450 - 160); // Resale $450 - Wholesale $160
  const totalMonthlyGross = roomRevenueMonthly + editUpsellMonthly;

  // STC Acoustic Calculator State
  const [wallType, setWallType] = useState<string>('decoupled');
  const [ceilingType, setCeilingType] = useState<string>('baffles');
  const [hvacType, setHvacType] = useState<string>('silenced');

  const getSTCScore = () => {
    let score = 42;
    if (wallType === 'decoupled') score += 14;
    if (wallType === 'double_greenglue') score += 18;
    if (ceilingType === 'baffles') score += 5;
    if (ceilingType === 'suspended_acoustical') score += 8;
    if (hvacType === 'silenced') score += 6;
    return score;
  };

  // Contract Generator State
  const [studioLegalName, setStudioLegalName] = useState<string>('Apex Sound & Cinema Studios LLC');
  const [copiedContract, setCopiedContract] = useState<boolean>(false);

  const sampleAgreementText = `STUDIO HIRE & FACILITY USE AGREEMENT

1. PARTIES & PREMISES:
This Agreement is entered into between ${studioLegalName} ("Studio") and the Client. Studio agrees to provide access to designated 4K recording suites, broadcast dynamic microphones, cinema lighting, and live video switching infrastructure.

2. OVERAGE & BILLING:
Session time commences at the scheduled reservation hour. Sessions exceeding the scheduled window by more than 15 minutes shall be billed in 30-minute increments at Studio's standard hourly rate card.

3. DATA & FOOTAGE STORAGE:
Studio shall maintain raw 4K ISO camera files and uncompressed 48kHz WAV audio for 14 calendar days post-wrap. Client is encouraged to transfer project masters to their dedicated Growth Domains cloud storage locker.

4. INDEMNITY & EQUIPMENT INTEGRITY:
Client agrees to treat Studio equipment (including Sony Cinema FX cameras and Shure microphones) with care. Any gross mechanical or liquid damage caused by guests shall be the sole liability of Client.

Governed under the laws of the State of Illinois.`;

  const copyContract = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(sampleAgreementText);
      setCopiedContract(true);
      setTimeout(() => setCopiedContract(false), 2500);
    }
  };

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="py-5" style={{ minHeight: '90vh', background: 'radial-gradient(ellipse at top, rgba(255, 107, 0, 0.08) 0%, rgba(9, 9, 11, 1) 75%)' }}>
            <div className="container py-4">
              {/* Header */}
              <div className="text-center max-w-780 mx-auto mb-5 pt-3">
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                  <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ OPERATIONAL OS TOOLS</span>
                </div>
                <h1 className="text-white font-weight-bold mb-3" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                  Studio Business Tools &amp; <span style={{ color: '#FF6B00' }}>Calculators</span>
                </h1>
                <p className="text-secondary font-size-16 mb-0">
                  Field-tested financial calculators, acoustic isolation estimators, and legal contract templates built to help studios scale profitably.
                </p>
              </div>

              {/* TOOL 1: INTERACTIVE REVENUE & YIELD CALCULATOR */}
              <div className="p-4 p-md-5 rounded-4 mb-5" style={{ background: 'rgba(18, 18, 24, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="row g-4 align-items-center">
                  <div className="col-12 col-lg-6">
                    <span className="badge rounded-pill bg-warning bg-opacity-25 text-warning font-size-11 mb-2 px-3 py-1 font-weight-bold">
                      REVENUE &amp; MARGIN MODELER
                    </span>
                    <h2 className="text-white font-size-26 font-weight-bold mb-3">
                      Calculate Your Studio&apos;s Untapped Revenue Potential
                    </h2>
                    <p className="text-secondary font-size-14 mb-4">
                      Adjust your suite count, hourly rate, and wholesale post-production upsells to see how Growth Domains impacts your monthly gross income.
                    </p>

                    <div className="d-flex flex-column gap-3 mb-4">
                      <div>
                        <div className="d-flex justify-content-between text-white font-size-13 font-weight-bold mb-1">
                          <span>Number of Active Recording Suites</span>
                          <span style={{ color: '#FF6B00' }}>{suitesCount} Suites</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="8"
                          value={suitesCount}
                          onChange={(e) => setSuitesCount(parseInt(e.target.value, 10))}
                          className="form-range"
                          style={{ accentColor: '#FF6B00' }}
                        />
                      </div>

                      <div>
                        <div className="d-flex justify-content-between text-white font-size-13 font-weight-bold mb-1">
                          <span>Average Room Rate ($/hour)</span>
                          <span style={{ color: '#FF6B00' }}>${hourlyRate}/hr</span>
                        </div>
                        <input
                          type="range"
                          min="75"
                          max="400"
                          step="10"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(parseInt(e.target.value, 10))}
                          className="form-range"
                          style={{ accentColor: '#FF6B00' }}
                        />
                      </div>

                      <div>
                        <div className="d-flex justify-content-between text-white font-size-13 font-weight-bold mb-1">
                          <span>Average Booked Hours / Suite / Week</span>
                          <span style={{ color: '#FF6B00' }}>{weeklyHoursPerSuite} hrs/wk</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="50"
                          value={weeklyHoursPerSuite}
                          onChange={(e) => setWeeklyHoursPerSuite(parseInt(e.target.value, 10))}
                          className="form-range"
                          style={{ accentColor: '#FF6B00' }}
                        />
                      </div>

                      <div>
                        <div className="d-flex justify-content-between text-white font-size-13 font-weight-bold mb-1">
                          <span>% Clients Upsold on 24h Post-Production</span>
                          <span style={{ color: '#00E676' }}>{upsellEditPercent}% Upsold</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="5"
                          value={upsellEditPercent}
                          onChange={(e) => setUpsellEditPercent(parseInt(e.target.value, 10))}
                          className="form-range"
                          style={{ accentColor: '#00E676' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="p-4 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.12) 0%, rgba(20, 20, 26, 0.95) 100%)', border: '1px solid rgba(255, 107, 0, 0.35)' }}>
                      <div className="text-secondary font-size-12 font-weight-bold text-uppercase mb-1">Projected Monthly Studio Gross</div>
                      <div className="text-white font-size-42 font-weight-bold mb-3" style={{ color: '#FFFFFF' }}>
                        ${Math.round(totalMonthlyGross).toLocaleString()}
                        <span className="font-size-16 text-secondary font-weight-normal"> / month</span>
                      </div>

                      <div className="d-flex flex-column gap-2 pt-3 border-top border-secondary border-opacity-25 mb-4 font-size-13">
                        <div className="d-flex justify-content-between text-secondary">
                          <span>Room Hire Revenue (Suite Hours):</span>
                          <span className="text-white font-weight-bold">${Math.round(roomRevenueMonthly).toLocaleString()}</span>
                        </div>
                        <div className="d-flex justify-content-between text-secondary">
                          <span>Post-Production Upsell Net Profit:</span>
                          <span className="text-success font-weight-bold">+${Math.round(editUpsellMonthly).toLocaleString()}</span>
                        </div>
                        <div className="d-flex justify-content-between text-secondary">
                          <span>Annualized Run-Rate:</span>
                          <span className="text-warning font-weight-bold">${Math.round(totalMonthlyGross * 12).toLocaleString()}/year</span>
                        </div>
                      </div>

                      <Link href="/onboard" className="cs_btn cs_style_1 cs_color_1 w-100 text-center py-3 text-decoration-none" style={{ borderRadius: '10px' }}>
                        <span>Unlock This Revenue · Onboard Your Studio →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOOL 2 & 3: ACOUSTIC CHECK & CONTRACT GENERATOR */}
              <div className="row g-4 mb-5">
                {/* Acoustic Estimator */}
                <div className="col-12 col-lg-6">
                  <div className="p-4 p-md-5 rounded-4 h-100" style={{ background: 'rgba(18, 18, 24, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <span className="badge rounded-pill bg-info bg-opacity-25 text-info font-size-11 mb-2 px-3 py-1 font-weight-bold">
                      ACOUSTIC CALIBRATION
                    </span>
                    <h3 className="text-white font-size-20 font-weight-bold mb-2">Acoustic STC &amp; Sound Isolation Estimator</h3>
                    <p className="text-secondary font-size-13 mb-4">Benchmark your studio transmission loss against broadcast voiceover standards.</p>

                    <div className="d-flex flex-column gap-3 mb-4">
                      <div>
                        <label className="text-white font-size-12 font-weight-bold mb-1">Wall Architecture</label>
                        <select
                          value={wallType}
                          onChange={(e) => setWallType(e.target.value)}
                          className="form-select bg-dark text-white border-secondary font-size-13"
                        >
                          <option value="single">Standard Single Drywall Stud (STC ~42)</option>
                          <option value="decoupled">Decoupled Staggered Studs (STC ~56)</option>
                          <option value="double_greenglue">Double Layer + Green Glue + Damping (STC ~60+)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-white font-size-12 font-weight-bold mb-1">Ceiling &amp; Cloud Treatment</label>
                        <select
                          value={ceilingType}
                          onChange={(e) => setCeilingType(e.target.value)}
                          className="form-select bg-dark text-white border-secondary font-size-13"
                        >
                          <option value="none">Standard Hard Ceiling (Flutter Echo Risk)</option>
                          <option value="baffles">Hanging Acoustic Baffles (Moderate Absorption)</option>
                          <option value="suspended_acoustical">Suspended Mineral Wool Cloud (Optimal STC)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-white font-size-12 font-weight-bold mb-1">HVAC &amp; Ventilation Ducting</label>
                        <select
                          value={hvacType}
                          onChange={(e) => setHvacType(e.target.value)}
                          className="form-select bg-dark text-white border-secondary font-size-13"
                        >
                          <option value="standard">Standard Commercial Duct (NC 35 - Audible)</option>
                          <option value="silenced">Baffled Silencer Boxes &amp; Flexible Duct (NC &lt; 20 - Broadcast)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3 rounded-3 d-flex align-items-center justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <div>
                        <div className="text-secondary font-size-11 text-uppercase">Estimated Acoustic Rating</div>
                        <div className="text-white font-size-22 font-weight-bold">STC {getSTCScore()} Rating</div>
                      </div>
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-12 px-3 py-1">
                        {getSTCScore() >= 60 ? 'Broadcast Pristine' : 'Commercial Ready'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contract Generator */}
                <div className="col-12 col-lg-6">
                  <div className="p-4 p-md-5 rounded-4 h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(18, 18, 24, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div>
                      <span className="badge rounded-pill bg-success bg-opacity-25 text-success font-size-11 mb-2 px-3 py-1 font-weight-bold">
                        LEGAL INFRASTRUCTURE
                      </span>
                      <h3 className="text-white font-size-20 font-weight-bold mb-2">Studio Rental &amp; Liability Agreement Generator</h3>
                      <p className="text-secondary font-size-13 mb-3">Customized legal contract protecting studio equipment, defining overage fees, and clarifying IP.</p>

                      <div className="mb-3">
                        <label className="text-white font-size-12 font-weight-bold mb-1">Your Studio Legal Entity</label>
                        <input
                          type="text"
                          value={studioLegalName}
                          onChange={(e) => setStudioLegalName(e.target.value)}
                          className="form-control bg-dark text-white border-secondary font-size-13"
                        />
                      </div>

                      <div className="p-3 rounded-3 mb-3 font-monospace font-size-11 text-secondary overflow-auto" style={{ maxHeight: '160px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.06)', whiteSpace: 'pre-wrap' }}>
                        {sampleAgreementText}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={copyContract}
                      className="btn btn-outline-warning text-warning w-100 py-2 font-size-13 font-weight-bold"
                      style={{ borderRadius: '10px', borderColor: 'rgba(255,107,0,0.4)', background: 'rgba(255,107,0,0.06)' }}
                    >
                      {copiedContract ? '✓ Copied to Clipboard!' : 'Copy Agreement Template'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}

