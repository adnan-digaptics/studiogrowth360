'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: "How does the wholesale post-production 24-hour turnaround guarantee work?",
    a: "Immediately after your client's recording session wraps, you upload the raw camera ISOs and microphone WAV stems to your Growth Domains studio vault. The 24-hour clock begins upon stem upload confirmation. Our dedicated post-production pod executes the multi-cam edit, color grade, audio loudness normalization, and 10 viral shorts. If we fail to deliver within 24 hours, the wholesale charge ($160) is completely refunded as a platform credit. We maintain a 99.8% on-time delivery record.",
  },
  {
    q: "What video and audio formats can our studio upload?",
    a: "We natively ingest raw files from Sony Cinema Line (FX3, FX6, FX9 in XAVC-S, XAVC-I, S-Cinetone, S-Log3), Blackmagic Design (BRAW from Studio 4K, Pocket 6K, and ATEM Mini ISO switches), Canon (Cinema RAW Light, XF-AVC), and RED (R3D). Audio stems can be uncompressed 24-bit or 32-bit float WAV files at 48kHz or 96kHz. Proxies are generated automatically by our cloud pipeline, so your studio doesn't need to waste time transcoding.",
  },
  {
    q: "How does our studio bill clients and retain the 65%+ profit margin?",
    a: "You bill your client directly under your own pricing structure (e.g., $450 to $650 per episode or bundled into a $2,500/month 4-episode package). Your studio keeps 100% of the client payment via your own Stripe account. Growth Domains simply bills your studio account the flat wholesale cost ($160 for full edit, $75 for 10 shorts). You pocket the remaining $290 to $490 per episode as pure profit with zero editor payroll.",
  },
  {
    q: "Can we customize the client download portal with our own studio logo and domain?",
    a: "Yes, 100%. All client-facing deliverables—including the private download portal, cloud player, and proofing links—are completely white-labeled. There is zero Growth Domains branding visible to your client. On the Growth and Enterprise tiers, you can host the client portal on your own custom subdomain (e.g., vault.yourstudioname.com).",
  },
  {
    q: "What is the process for client edit revisions and feedback?",
    a: "Your white-labeled client link includes an interactive frame-accurate timestamp review tool (similar to Frame.io). Clients can click directly on the video player at a specific second and leave feedback. Each wholesale edit includes one round of polish revisions (trimming, title spelling, chapter adjustments) delivered within 12 hours.",
  },
  {
    q: "How does the dynamic rate card algorithm increase our weekday room utilization?",
    a: "Most studios suffer from dead suites on Tuesday and Wednesday mornings. Our dynamic rate card engine uses historical demand telemetry to automatically discount off-peak weekday hours by 15-20% on your public booking page, while applying peak surge pricing for in-demand weekend slots. In addition, our B2B corporate acquisition funnels target local enterprise marketing directors who record corporate podcasts during standard business hours.",
  },
  {
    q: "Does Growth Domains integrate with our existing calendar and Stripe account?",
    a: "Yes. Our Studio Management OS connects bi-directionally with Google Calendar, Outlook 365, and Apple iCal to prevent double-bookings. Payments are processed through Stripe Connect, ensuring that room deposits and session fees are deposited directly into your bank account with zero platform hold times.",
  },
  {
    q: "Are there any hidden setup fees or long-term contracts?",
    a: "None. All Growth Domains membership plans (Starter $79/mo, Growth $199/mo, Enterprise $499/mo) operate on month-to-month billing with no long-term contracts. You can cancel, upgrade, or downgrade anytime. Wholesale post-production services are pay-as-you-record, meaning you only incur wholesale costs when you have active clients booking in your suites.",
  },
];

const PlatformFaqAccordion = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-5 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container py-4">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Everything Studio Operators Ask About Growth Domains
          </h2>
          <p className="text-secondary font-size-15 font-size-md-16 cs_m0">
            Clear, transparent answers about wholesale economics, turnaround SLAs, camera gear compatibility, and client billing.
          </p>
        </div>

        <div className="max-w-900 mx-auto d-flex flex-column gap-3 mb-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-4 overflow-hidden border transition-all"
                style={{
                  background: isOpen ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.015)',
                  borderColor: isOpen ? 'rgba(255, 107, 0, 0.35)' : 'rgba(255, 255, 255, 0.06)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-100 p-4 text-start d-flex align-items-center justify-content-between gap-3 border-0 bg-transparent text-white font-weight-bold font-size-16"
                  style={{ cursor: 'pointer' }}
                >
                  <span style={{ color: isOpen ? '#FF6B00' : '#FFFFFF' }}>{faq.q}</span>
                  <span
                    className="flex-shrink-0 font-monospace font-weight-bold font-size-18"
                    style={{
                      color: isOpen ? '#FF6B00' : '#71717A',
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-secondary font-size-14" style={{ lineHeight: '1.7', borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Help Callout */}
        <div className="p-4 rounded-4 text-center max-w-750 mx-auto" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="text-white font-size-15 font-weight-bold mb-1">
            Have a specialized studio technical question or custom multi-location setup?
          </div>
          <div className="text-secondary font-size-13 mb-3">
            Speak directly with a senior studio systems engineer.
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link href="/contact" className="sg_primary_cta">
              <span>Schedule 1-on-1 Studio Walkthrough</span>
            </Link>
            <a href="mailto:grow@360growthlab.com" className="sg_secondary_cta">
              <span>Email Engineering: grow@360growthlab.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFaqAccordion;
