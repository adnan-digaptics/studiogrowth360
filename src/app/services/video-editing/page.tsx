import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import PlatformStatsBar from '@/components/platform/PlatformStatsBar';

export const metadata: Metadata = {
  title: "Wholesale 24h 4K Multi-Cam Video Editing | Growth Domains",
  description:
    "White-label 24-hour turnaround multi-cam video podcast editing built for recording studios. Ingest raw 4K stems, color grade, broadcast master audio, and resell at 65%+ profit margin under your own studio brand.",
};

const pipelineSteps = [
  {
    step: "01",
    title: "Raw Stem Ingest & Automated Timecode Sync",
    desc: "Drag raw camera ISOs (Sony FX6, Blackmagic, Canon) and 32-bit float audio stems directly into your studio session vault. Our ingest engine auto-aligns audio waveforms and timecode across up to 8 concurrent camera angles.",
    badge: "15 Min Ingest",
  },
  {
    step: "02",
    title: "Multi-Angle Storyboard & Speaker-Tracking Cut",
    desc: "Our dedicated editing pod cuts between wide-master, host-solo, guest-solo, and reaction angles with broadcast precision. Dynamic cadence matching ensures high-energy dialogue without awkward jump cuts.",
    badge: "Cinema Cadence",
  },
  {
    step: "03",
    title: "DaVinci Resolve Studio Color Grade",
    desc: "Log profiles (S-Log3, BRAW, C-Log2) transformed into filmic Rec.709 color spaces with custom studio set tone matching, skin-tone preservation, and RGB neon lighting accentuation.",
    badge: "Broadcast Rec.709",
  },
  {
    step: "04",
    title: "Audio Mastering & Spectral Noise Cleansing",
    desc: "Vocal tracks cleansed through iZotope RX 10 for de-mouth-click, air conditioner rumble suppression, and calibrated to -14 LUFS loudness standard for Spotify and YouTube.",
    badge: "-14 LUFS Compliant",
  },
  {
    step: "05",
    title: "Motion Lower-Thirds & YouTube Chaptering",
    desc: "Custom motion graphics, guest title bars, social handles, and timestamped chapter markers generated directly for immediate YouTube SEO indexing.",
    badge: "YouTube Ready",
  },
  {
    step: "06",
    title: "White-Label Delivery in Under 24 Hours",
    desc: "Your studio receives a private, branded download link with your studio logo. You send the link to your client, bill them $450 to $650, pay us $160 wholesale, and pocket $290+ pure profit.",
    badge: "< 24h SLA",
  },
];

const gearSpecs = [
  { camera: "Sony Cinema Line", models: "FX3, FX6, FX9, A7S III", formats: "10-bit 4:2:2 XAVC-S / XAVC-I, S-Cinetone, S-Log3" },
  { camera: "Blackmagic Design", models: "Studio 4K Plus G2, Pocket 6K Pro, Cinema 6K", formats: "Blackmagic RAW (BRAW) 3:1 to 12:1, Constant Bitrate" },
  { camera: "Canon Cinema EOS", models: "C70, C300 Mark III, C500 Mark II", formats: "Cinema RAW Light, XF-AVC 10-bit 4:2:2" },
  { camera: "RED Digital Cinema", models: "KOMODO 6K, KOMODO-X, V-RAPTOR", formats: "REDCODE RAW (R3D) ProRes 422 HQ proxy auto-sync" },
];

const VideoEditingServicePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="position-relative overflow-hidden" style={{ background: '#09090B' }}>
            <div className="sg_glow_orb sg_glow_orb_1"></div>
            <div className="sg_glow_orb sg_glow_orb_2"></div>

            {/* Header Hero */}
            <section className="py-5 position-relative" style={{ zIndex: 2 }}>
              <div className="container py-4">
                <div className="text-center max-w-950 mx-auto">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                    <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
                    <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                      WHOLESALE 24-HOUR POST-PRODUCTION FULFILLMENT
                    </span>
                  </div>

                  <h1 className="text-white font-weight-bold font-size-34 font-size-md-52 mb-3">
                    Wholesale 24h Multi-Cam 4K Video Editing for Studios
                  </h1>

                  <p className="text-secondary font-size-17 max-w-780 mx-auto mb-4" style={{ lineHeight: '1.65' }}>
                    Stop letting clients take raw files home. Offer full 4K multi-cam video editing and viral shorts under your own studio brand. We deliver in under 24 hours at <strong className="text-white">$160 wholesale</strong>, which you resell at <strong className="text-white">$450+</strong> (pocketing <span style={{ color: '#FF6B00', fontWeight: 700 }}>65%+ margin</span> without hiring an in-house editor).
                  </p>

                  <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                    <Link href="/onboard" className="sg_primary_cta">
                      <span>Unlock Wholesale Editing Rate</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
                      </svg>
                    </Link>

                    <Link href="/dashboard" className="sg_secondary_cta">
                      <span>Order an Edit in Studio OS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Wholesale Economics Card */}
            <section className="py-4 position-relative">
              <div className="container">
                <div className="p-4 p-xl-5 rounded-4 position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #14141A 0%, #0D0D12 100%)', border: '1px solid rgba(255, 107, 0, 0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.7)' }}>
                  <div className="row g-4 align-items-center">
                    <div className="col-12 col-lg-7">
                      <span className="badge rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00', fontSize: '11px', fontWeight: 700 }}>
                        THE STUDIO UNIT ECONOMICS
                      </span>
                      <h2 className="text-white font-size-24 font-size-md-32 font-weight-bold mb-3">
                        How One Studio Suite Generates $6,960/mo in Extra Net Profit
                      </h2>
                      <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.6' }}>
                        If your studio records 24 sessions a month (approx. 6 sessions/week) and you bundle our 24h wholesale post-production into your client packages:
                      </p>

                      <div className="d-flex flex-column gap-2 font-size-14 text-secondary">
                        <div className="d-flex align-items-center justify-content-between p-2 rounded-2" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                          <span>Client Retails Full Edit:</span>
                          <span className="text-white font-weight-bold font-monospace">$450 per episode</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded-2" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
                          <span>Your Growth Domains Wholesale Cost:</span>
                          <span className="text-secondary font-weight-bold font-monospace">$160 flat</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between p-2 rounded-2" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                          <span className="text-success font-weight-bold">Your Studio Net Margin:</span>
                          <span className="text-success font-weight-bold font-monospace font-size-16">+$290 pure profit / ep (64.4%)</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-5">
                      <div className="p-4 rounded-3 text-center" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div className="text-secondary font-size-12 text-uppercase mb-1">24 Sessions / Month Margin</div>
                        <div className="font-monospace font-weight-bold" style={{ fontSize: 'clamp(36px, 4vw, 54px)', color: '#FF6B00' }}>
                          +$6,960
                        </div>
                        <div className="text-secondary font-size-13 mb-3">Annual Run-Rate Net Gain: <strong className="text-white">+$83,520</strong></div>
                        <div className="p-2 rounded-2 font-size-11 text-secondary" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                          ✓ Zero overhead · No employee taxes · Guaranteed 24h SLA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6-Stage Pipeline */}
            <section className="py-5 position-relative">
              <div className="container py-4">
                <div className="text-center max-w-750 mx-auto mb-5">
                  <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
                    The 6-Stage 24-Hour Post-Production Engine
                  </h2>
                  <p className="text-secondary font-size-15 cs_m0">
                    Engineered from hundreds of broadcast television workflows to ensure zero quality compromise under rapid turnarounds.
                  </p>
                </div>

                <div className="row g-4 align-items-stretch">
                  {pipelineSteps.map((step, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                      <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span className="font-monospace font-weight-bold font-size-22" style={{ color: '#FF6B00' }}>{step.step}</span>
                            <span className="badge rounded-pill" style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#A1A1AA', fontSize: '11px' }}>{step.badge}</span>
                          </div>
                          <h3 className="text-white font-size-18 font-weight-bold mb-2">{step.title}</h3>
                          <p className="text-secondary font-size-13 cs_m0" style={{ lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Camera Compatibility Matrix */}
            <section className="py-5 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div className="container py-4">
                <div className="text-center max-w-750 mx-auto mb-5">
                  <h2 className="text-white font-weight-bold font-size-28 font-size-md-36 mb-3">
                    Direct Camera Format Ingest Compatibility
                  </h2>
                  <p className="text-secondary font-size-15 cs_m0">
                    We accept raw camera cards and ISO switch drives directly from all major studio production systems.
                  </p>
                </div>

                <div className="table-responsive rounded-4 overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <table className="table table-dark mb-0 font-size-13" style={{ background: '#0F0F14' }}>
                    <thead>
                      <tr style={{ background: 'rgba(255, 255, 255, 0.03)', color: '#FF6B00' }}>
                        <th className="p-3">Camera Ecosystem</th>
                        <th className="p-3">Supported Models</th>
                        <th className="p-3">Native Color &amp; Codec Compatibility</th>
                        <th className="p-3 text-end">SLA Guarantee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gearSpecs.map((spec, idx) => (
                        <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                          <td className="p-3 text-white font-weight-bold">{spec.camera}</td>
                          <td className="p-3 text-secondary">{spec.models}</td>
                          <td className="p-3 font-monospace font-size-12 text-white-50">{spec.formats}</td>
                          <td className="p-3 text-end"><span className="badge bg-success bg-opacity-25 text-success font-size-11">&lt; 24h Turnaround</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <PlatformStatsBar />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default VideoEditingServicePage;
