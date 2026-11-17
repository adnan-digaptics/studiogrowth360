'use client'

import React from 'react';
import Link from 'next/link';
import { ourProcess } from '@/data/agency';
import { IconContainer, IconSparkles, IconTarget, IconZap, IconRocket, IconTrendingUp } from '@/components/common/AgencyIcons';

const getProcessStepIcon = (idx: number) => {
  switch (idx) {
    case 0:
      return <IconTarget size={22} color="#0066FF" />;
    case 1:
      return <IconZap size={22} color="#0066FF" />;
    case 2:
      return <IconRocket size={22} color="#0066FF" />;
    case 3:
      return <IconTrendingUp size={22} color="#0066FF" />;
    default:
      return <IconSparkles size={22} color="#0066FF" />;
  }
};

const processDeliverables = [
  ["Tech stack & calendar audit", "Current CAC & booking analysis", "Custom automation blueprint"],
  ["GoHighLevel CRM snapshot", "Self-hosted n8n workflows", "24/7 AI Voice agent setup"],
  ["Hands-on staff video walkthroughs", "Stripe payment testing", "Live multi-room calendar sync"],
  ["Weekly performance reviews", "A/B creative testing", "Ongoing SLA maintenance & support"],
];

const AgencyProcessSection = () => {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-4 py-lg-5">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>PROVEN 4-STEP METHODOLOGY</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            How We Partner With Your Studio
          </h2>
          <p className="sg_agency_desc mx-auto font-size-16" style={{ maxWidth: '760px' }}>
            A structured, collaborative implementation process designed to deploy your studio automation systems smoothly without interrupting ongoing client sessions or rehearsals.
          </p>
        </div>

        {/* 4-Step Pipeline Architecture */}
        <div className="row g-4 align-items-stretch mb-5">
          {ourProcess.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3">
              <div
                className="p-4 p-xl-4 rounded-4 h-100 border d-flex flex-column justify-content-between shadow-sm transition-all position-relative"
                style={{
                  background: '#F8FAFC',
                  borderColor: '#E2E8F0',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  {/* Step Header */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <IconContainer size={42} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="12px">
                      {getProcessStepIcon(idx)}
                    </IconContainer>
                    <span className="badge rounded-pill bg-white text-dark border font-size-11 px-3 py-1 font-monospace font-weight-bold">
                      {item.timeline}
                    </span>
                  </div>

                  <div className="font-monospace font-size-11 font-weight-bold text-primary mb-1" style={{ color: '#0066FF' }}>
                    {item.step}
                  </div>

                  <h3 className="text-dark font-size-18 font-weight-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-secondary font-size-13 mb-3" style={{ lineHeight: '1.65' }}>
                    {item.desc}
                  </p>

                  {/* Micro Deliverables Checklist */}
                  <div className="pt-2 border-top" style={{ borderColor: '#E2E8F0' }}>
                    <div className="font-size-11 font-weight-bold text-uppercase text-dark mb-2 font-monospace">
                      Key Deliverables:
                    </div>
                    <div className="d-flex flex-column gap-1 font-size-12 text-secondary">
                      {processDeliverables[idx]?.map((d, dIdx) => (
                        <div key={dIdx} className="d-flex align-items-start gap-1">
                          <span className="text-primary font-weight-bold" style={{ color: '#0066FF' }}>✓</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-top mt-3 font-size-11 text-secondary font-monospace d-flex align-items-center justify-content-between" style={{ borderColor: '#E2E8F0' }}>
                  <span>Stage Milestone</span>
                  <span className="text-success font-weight-bold">Guaranteed SLA</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div
          className="p-4 p-xl-5 rounded-4 border bg-light shadow-sm"
          style={{ borderColor: '#E2E8F0' }}
        >
          <div className="row align-items-center g-3 g-lg-4">
            <div className="col-12 col-lg-8">
              <div className="d-flex align-items-center gap-3">
                <IconContainer size={48} bg="rgba(0, 102, 255, 0.1)" border="1px solid rgba(0, 102, 255, 0.25)" radius="12px" className="flex-shrink-0">
                  <IconSparkles size={24} color="#0066FF" />
                </IconContainer>
                <div>
                  <div className="text-dark font-weight-bold font-size-16 mb-1">
                    Ready to begin Step 1 with a free Discovery &amp; Studio Tech Audit?
                  </div>
                  <div className="text-secondary font-size-13" style={{ lineHeight: '1.6' }}>
                    We&apos;ll inspect your current booking pipeline and pinpoint your highest-ROI automation opportunities within 30 minutes.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 text-start text-lg-end">
              <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 d-inline-flex">
                <span>Book Your Free Studio Audit →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyProcessSection;
