'use client'

import React from 'react';
import Link from 'next/link';
import {
  IconContainer,
  IconDollar,
  IconPlug,
  IconGitBranch,
  IconCpu,
  IconZap,
  IconCalendar,
  IconCloud,
  IconArrowDown,
} from '@/components/common/AgencyIcons';

const n8nBenefits = [
  {
    title: "Zero Per-Task Usage Fees",
    desc: "Unlike Zapier or Make that charge hundreds of dollars when automation tasks spike, self-hosted n8n workflows run unlimited tasks with zero penalty.",
    iconType: "dollar",
  },
  {
    title: "500+ Native App Connectors",
    desc: "Connect your cameras, Stripe, QuickBooks, Google Drive, Dropbox, Slack, Twilio, and GoHighLevel into synchronized autonomous pipelines.",
    iconType: "plug",
  },
  {
    title: "Complex Multi-Branch Logic",
    desc: "Handle edge cases, room conflict alerts, automated file transcoding, and conditional routing based on studio suite availability.",
    iconType: "branch",
  },
  {
    title: "Embedded AI & LLM Nodes",
    desc: "Embed OpenAI GPT-4o and Claude directly into workflows to auto-summarize client briefs, format show notes, and draft custom follow-ups.",
    iconType: "cpu",
  },
];

const renderBenefitIcon = (type: string) => {
  switch (type) {
    case 'dollar':
      return <IconDollar size={20} color="#0066FF" />;
    case 'plug':
      return <IconPlug size={20} color="#0066FF" />;
    case 'branch':
      return <IconGitBranch size={20} color="#0066FF" />;
    case 'cpu':
      return <IconCpu size={20} color="#0066FF" />;
    default:
      return <IconZap size={20} color="#0066FF" />;
  }
};

const AgencyAutomationTech = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-4 py-lg-5">
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Left: Deep Info on n8n & GHL */}
          <div className="col-12 col-lg-6">
            <div className="sg_badge_electric mb-3">
              <span>WORKFLOW ORCHESTRATION</span>
            </div>

            <h2 className="sg_agency_title font-size-28 font-size-md-38 mb-3">
              Custom n8n &amp; GoHighLevel Automation
            </h2>

            <p className="text-secondary font-size-16 mb-4" style={{ lineHeight: "1.7" }}>
              Most studios struggle with fragmented tools that don&apos;t talk to each other. We use n8n and GoHighLevel to create a unified nervous system for your studio—connecting lead capture, calendar booking, payment processing, stem uploads, and accounting into autonomous workflows.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              {n8nBenefits.map((item, idx) => (
                <div key={idx} className="d-flex align-items-start gap-3 p-3 rounded-3 bg-light border">
                  <IconContainer size={40} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)">
                    {renderBenefitIcon(item.iconType)}
                  </IconContainer>
                  <div>
                    <div className="text-dark font-size-14 font-weight-bold">{item.title}</div>
                    <div className="text-secondary font-size-12 mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <Link href="/n8n-automation" className="sg_btn_primary font-size-13 py-2 px-4">
                <span>Explore n8n Services</span>
                <span>→</span>
              </Link>
              <Link href="/gohighlevel-services" className="sg_btn_secondary font-size-13 py-2 px-4">
                <span>GoHighLevel Services</span>
              </Link>
            </div>
          </div>

          {/* Right: Visual Node Workflow Diagram Preview */}
          <div className="col-12 col-lg-6">
            <div className="p-4 p-xl-4 rounded-4 shadow-sm" style={{ background: "#0A192F", border: "1px solid rgba(0, 102, 255, 0.3)" }}>
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                <div className="d-flex align-items-center gap-2">
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}></span>
                  <span className="text-white font-size-13 font-weight-bold">n8n Studio Automation Flow v3.2</span>
                </div>
                <span className="badge rounded-pill bg-primary bg-opacity-25 text-primary font-size-10 px-2 py-1" style={{ color: "#38BDF8" }}>
                  Active Execution
                </span>
              </div>

              {/* Node Sequence Visualizer */}
              <div className="d-flex flex-column gap-3">
                {/* Node 1 */}
                <div className="p-3 rounded-3 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div className="d-flex align-items-center gap-2">
                    <IconContainer size={32} bg="rgba(56, 189, 248, 0.15)" border="1px solid rgba(56, 189, 248, 0.3)">
                      <IconZap size={16} color="#38BDF8" />
                    </IconContainer>
                    <div>
                      <div className="text-white font-size-12 font-weight-bold">Webhook Trigger: Stripe Deposit Paid</div>
                      <div className="text-secondary font-size-10" style={{ color: "#94A3B8" }}>Captures Client Name, Email, Session Type, &amp; Retainer Amount</div>
                    </div>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success font-size-9">Success (200)</span>
                </div>

                <div className="text-center" style={{ lineHeight: "1" }}>
                  <IconArrowDown size={14} color="#38BDF8" />
                </div>

                {/* Node 2 */}
                <div className="p-3 rounded-3 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div className="d-flex align-items-center gap-2">
                    <IconContainer size={32} bg="rgba(0, 102, 255, 0.15)" border="1px solid rgba(0, 102, 255, 0.3)">
                      <IconCalendar size={16} color="#38BDF8" />
                    </IconContainer>
                    <div>
                      <div className="text-white font-size-12 font-weight-bold">Google Calendar &amp; GHL Slot Lock</div>
                      <div className="text-secondary font-size-10" style={{ color: "#94A3B8" }}>Blocks 2h Recording Suite + 15m Engineer Buffer Interval</div>
                    </div>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success font-size-9">Synced</span>
                </div>

                <div className="text-center" style={{ lineHeight: "1" }}>
                  <IconArrowDown size={14} color="#38BDF8" />
                </div>

                {/* Node 3 */}
                <div className="p-3 rounded-3 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div className="d-flex align-items-center gap-2">
                    <IconContainer size={32} bg="rgba(245, 158, 11, 0.15)" border="1px solid rgba(245, 158, 11, 0.3)">
                      <IconCpu size={16} color="#FBBF24" />
                    </IconContainer>
                    <div>
                      <div className="text-white font-size-12 font-weight-bold">AI Node: Generate Creative Brief &amp; NDA</div>
                      <div className="text-secondary font-size-10" style={{ color: "#94A3B8" }}>Extracts Client Details &amp; Sends Digital Signature Request via SMS</div>
                    </div>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success font-size-9">Executed</span>
                </div>

                <div className="text-center" style={{ lineHeight: "1" }}>
                  <IconArrowDown size={14} color="#38BDF8" />
                </div>

                {/* Node 4 */}
                <div className="p-3 rounded-3 d-flex align-items-center justify-content-between" style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div className="d-flex align-items-center gap-2">
                    <IconContainer size={32} bg="rgba(16, 185, 129, 0.15)" border="1px solid rgba(16, 185, 129, 0.3)">
                      <IconCloud size={16} color="#34D399" />
                    </IconContainer>
                    <div>
                      <div className="text-white font-size-12 font-weight-bold">Cloud Folder Creation &amp; Slack Staff Alert</div>
                      <div className="text-secondary font-size-10" style={{ color: "#94A3B8" }}>S3 / Drive Folder Created + On-Duty Engineer Alerted</div>
                    </div>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success font-size-9">Complete (0.4s)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyAutomationTech;
