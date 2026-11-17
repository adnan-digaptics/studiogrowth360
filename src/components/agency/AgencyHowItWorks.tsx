'use client'

import React, { useState } from 'react';
import { automationStages } from '@/data/agency';
import {
  IconContainer,
  IconTarget,
  IconSparkles,
  IconMessage,
  IconCalendar,
  IconStar,
} from '@/components/common/AgencyIcons';

const getStageIcon = (idx: number, color = "#0066FF") => {
  switch (idx) {
    case 0:
      return <IconTarget size={16} color={color} />;
    case 1:
      return <IconSparkles size={16} color={color} />;
    case 2:
      return <IconMessage size={16} color={color} />;
    case 3:
      return <IconCalendar size={16} color={color} />;
    case 4:
      return <IconStar size={16} color={color} />;
    default:
      return <IconTarget size={16} color={color} />;
  }
};

const AgencyHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-5 bg-white">
      <div className="container py-4 py-lg-5">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>AUTOMATED CLIENT JOURNEY</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            How Our Studio Automation System Works
          </h2>
          <p className="sg_agency_desc mx-auto">
            From the moment a prospective client discovers your studio to their 5th repeat session: see how our 5-stage automated engine eliminates admin busywork and maximizes revenue.
          </p>
        </div>

        {/* 5 Stage Step Badges - Award-Winning Responsive Flex Layout */}
        <div className="d-flex flex-nowrap flex-lg-wrap justify-content-start justify-content-lg-between gap-2 gap-lg-3 mb-4 overflow-x-auto pb-2 pb-lg-0" style={{ scrollbarWidth: 'none' }}>
          {automationStages.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <div key={idx} style={{ flex: '1 1 0', minWidth: '140px' }}>
                <button
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="w-100 p-3 rounded-4 border text-start transition-all"
                  style={{
                    background: isActive ? "#0066FF" : "#F8FAFC",
                    color: isActive ? "#FFFFFF" : "#1E293B",
                    borderColor: isActive ? "#0066FF" : "#E2E8F0",
                    boxShadow: isActive ? "0 8px 20px rgba(0, 102, 255, 0.25)" : "none",
                    cursor: "pointer",
                    minHeight: "82px",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="font-monospace font-size-11 font-weight-bold opacity-75">STAGE {st.step}</span>
                    <span>{getStageIcon(idx, isActive ? "#FFFFFF" : "#0066FF")}</span>
                  </div>
                  <div className="font-size-13 font-weight-bold text-truncate">{st.name}</div>
                  <div className="font-size-10 opacity-75 text-truncate">{st.tag}</div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Stage Showcase */}
        <div className="p-4 p-xl-5 rounded-4 bg-light border shadow-sm">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white border font-size-12 font-weight-bold text-primary mb-3" style={{ color: "#0066FF" }}>
                <span>STAGE {automationStages[activeStep].step}</span>
                <span>·</span>
                <span>{automationStages[activeStep].tag}</span>
              </div>

              <h3 className="text-dark font-size-24 font-size-md-32 font-weight-bold mb-3">
                {automationStages[activeStep].headline}
              </h3>

              <p className="text-secondary font-size-15 mb-4" style={{ lineHeight: "1.7" }}>
                {automationStages[activeStep].desc}
              </p>

              <div className="p-3 rounded-3 bg-white border">
                <div className="font-monospace font-size-11 font-weight-bold text-uppercase text-secondary mb-1">
                  LIVE WORKFLOW TRIGGER:
                </div>
                <div className="font-size-14 text-dark font-weight-bold" style={{ color: "#0066FF" }}>
                  {automationStages[activeStep].trigger}
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="p-4 rounded-4 bg-white border shadow-sm">
                <div className="font-size-12 font-monospace font-weight-bold text-uppercase text-secondary mb-3">
                  STAGE METRICS &amp; IMPACT
                </div>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                    <span className="text-secondary font-size-13">Response Latency</span>
                    <span className="font-monospace font-weight-bold text-dark font-size-14">&lt; 2 minutes</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                    <span className="text-secondary font-size-13">Conversion Rate</span>
                    <span className="font-monospace font-weight-bold text-success font-size-14">34.8% Average</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between pb-2 border-bottom">
                    <span className="text-secondary font-size-13">Human Effort Required</span>
                    <span className="font-monospace font-weight-bold text-primary font-size-14" style={{ color: "#0066FF" }}>Zero (Autonomous)</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-secondary font-size-13">Platform Sync</span>
                    <span className="badge rounded-pill bg-light text-dark border font-size-11">GoHighLevel + n8n</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyHowItWorks;
