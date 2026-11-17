'use client'

import React from 'react';
import Link from 'next/link';

const securityFeatures = [
  {
    icon: "🛡️",
    title: "Institutional Mutual Studio NDA",
    desc: "Every post-production pod member signs a legally binding non-disclosure agreement. Your clients' unreleased episodes, celebrity interviews, and pre-IPO executive disclosures remain 100% confidential under ironclad copyright protections.",
    tag: "Legal Protection",
  },
  {
    icon: "✍️",
    title: "Digital Client Release & Waiver Automation",
    desc: "Guests and hosts auto-sign our digital appearance release before entering the booth. Protects your studio from future likeness claims, defamation disputes, or intellectual property entanglements with timestamped audit logs.",
    tag: "Studio Liability",
  },
  {
    icon: "⏱️",
    title: "Guaranteed < 24-Hour Turnaround SLA",
    desc: "If our wholesale post-production pod fails to deliver a complete multi-cam master within 24 hours of stem ingest confirmation, your studio receives a 100% credit refund. Zero risk to your studio client promises.",
    tag: "99.8% On-Time Record",
  },
  {
    icon: "🔒",
    title: "256-Bit AES Encrypted Session Vault",
    desc: "Raw 4K camera cards and master WAV stems are encrypted at rest and in transit via Amazon S3 GovCloud infrastructure with automated 30-day archival and instant client download link generation.",
    tag: "SOC-2 Type II Ingest",
  },
];

const PlatformSecuritySLA = () => {
  return (
    <section className="py-5 position-relative" style={{ background: '#09090B' }}>
      <div className="container py-4">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
            <span style={{ color: '#22c55e', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#22c55e', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              INSTITUTIONAL TRUST &amp; COMPLIANCE
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Enterprise Rigor. Zero Studio Liability.
          </h2>
          <p className="text-secondary font-size-15 font-size-md-16 cs_m0">
            When Fortune 500 executives and top creators record in your facility, they expect institutional confidentiality. Growth Domains provides the legal and security backing you need.
          </p>
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          {securityFeatures.map((feat, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div
                className="p-4 p-xl-5 rounded-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="font-size-30">{feat.icon}</span>
                    <span className="badge rounded-pill" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', fontSize: '11px' }}>
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-white font-size-20 font-weight-bold mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-secondary font-size-14 cs_m0" style={{ lineHeight: '1.65' }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NDA & Legal Tools Callout */}
        <div className="p-4 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3" style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)', border: '1px solid rgba(34, 197, 94, 0.25)' }}>
          <div>
            <div className="text-white font-size-16 font-weight-bold mb-1">
              Need to generate a studio liability waiver or mutual NDA right now?
            </div>
            <div className="text-secondary font-size-13">
              Use our instant legal contract generator in the free Tools Hub.
            </div>
          </div>

          <Link href="/tools" className="sg_secondary_cta flex-shrink-0">
            <span>Open Legal Agreement Generator →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformSecuritySLA;
