'use client'

import React from 'react';
import { publicAsset } from '@/utils/publicAsset';
import Link from 'next/link';
import {
  IconContainer,
  IconPhone,
  IconMessage,
  IconTarget,
  IconZap,
} from '@/components/common/AgencyIcons';

const aiCapabilities = [
  {
    icon: <IconPhone size={24} color="#38BDF8" />,
    title: "24/7 AI Voice Phone Receptionist",
    desc: "Human-sounding conversational phone agents that answer incoming studio calls in 1 ring, answer questions about hourly rates, studio equipment, and parking, and book appointments live on the phone.",
    metric: "0 Missed Calls",
  },
  {
    icon: <IconMessage size={24} color="#38BDF8" />,
    title: "Intelligent Website Chatbot",
    desc: "Trained directly on your studio's equipment catalog, acoustic specs, and booking policies to engage visitors, answer technical questions, and guide them directly into calendar checkout.",
    metric: "24/7 Availability",
  },
  {
    icon: <IconTarget size={24} color="#38BDF8" />,
    title: "Automated Lead Qualification",
    desc: "Screens prospective clients automatically over SMS and web forms. Separates low-budget inquiries from commercial clients with $3,000+ budgets, routing VIP leads directly to the owner.",
    metric: "Instant Screening",
  },
  {
    icon: <IconZap size={24} color="#38BDF8" />,
    title: "AI Booking & Rescheduling Assistant",
    desc: "Enables clients to negotiate session times, reschedule shoots, or add wholesale video editing add-ons over conversational text messaging without staff intervention.",
    metric: "Zero Friction",
  },
];

const AgencyAiSolutions = () => {
  return (
    <section className="py-5 sg_section_navy" style={{ background: "#0A192F", borderTop: "1px solid rgba(255, 255, 255, 0.08)", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="container py-4 py-lg-5">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3" style={{ background: "rgba(0, 102, 255, 0.15)", color: "#38BDF8", borderColor: "rgba(0, 102, 255, 0.3)" }}>
            <span>ARTIFICIAL INTELLIGENCE FOR STUDIOS</span>
          </div>
          <h2 className="text-white font-size-28 font-size-md-42 font-weight-bold mb-3">
            AI-Powered Business Solutions That Never Sleep
          </h2>
          <p className="text-secondary font-size-16 mx-auto" style={{ color: "#94A3B8" }}>
            Over 40% of studio booking inquiries occur outside normal business hours. Our custom AI voice and chat agents capture revenue while you sleep and handle routine questions while you run sessions.
          </p>
        </div>

        <div className="row g-4 align-items-stretch mb-5">
          {aiCapabilities.map((ai, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-3">
              <div
                className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <IconContainer size={44} bg="rgba(0, 102, 255, 0.15)" border="1px solid rgba(56, 189, 248, 0.3)" radius="12px">
                      {ai.icon}
                    </IconContainer>
                    <span className="badge rounded-pill font-monospace font-size-10 px-2 py-1" style={{ background: "rgba(0, 230, 118, 0.12)", color: "#00E676", border: "1px solid rgba(0, 230, 118, 0.3)" }}>
                      {ai.metric}
                    </span>
                  </div>

                  <h3 className="text-white font-size-17 font-weight-bold mb-2">
                    {ai.title}
                  </h3>

                  <p className="font-size-13 mb-0" style={{ color: "#94A3B8", lineHeight: "1.6" }}>
                    {ai.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Studio AI Receptionist Visual Showcase Banner */}
        <div className="rounded-4 overflow-hidden border mb-5 shadow-lg" style={{ borderColor: "rgba(56, 189, 248, 0.3)", background: "rgba(255, 255, 255, 0.02)" }}>
          <div className="row g-0 align-items-center">
            <div className="col-12 col-lg-5 position-relative" style={{ minHeight: "260px" }}>
              <img
                src={publicAsset("/assets/img/studios/podcast-studio.jpg")}
                alt="AI Receptionist in Podcast Studio"
                className="sg_img_cover position-absolute top-0 start-0"
              />
              <div
                className="position-absolute"
                style={{
                  inset: 0,
                  background: "linear-gradient(90deg, transparent 0%, rgba(10, 25, 47, 0.8) 70%, rgba(10, 25, 47, 1) 100%)",
                }}
              ></div>
              <div className="position-absolute top-0 start-0 p-3">
                <span className="badge rounded-pill bg-danger text-white font-size-11 px-3 py-1 font-weight-bold">
                  ● LIVE AI AGENT ENGAGED
                </span>
              </div>
            </div>

            <div className="col-12 col-lg-7 p-4 p-xl-5 text-white">
              <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                <div className="d-flex align-items-center gap-2">
                  <span className="sg_live_pulse" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#00E676" }}></span>
                  <span className="font-monospace font-size-12" style={{ color: "#38BDF8" }}>
                    Active Inbound Call: Apex Broadcast Suite
                  </span>
                </div>
                <span className="font-size-11 text-secondary" style={{ color: "#94A3B8" }}>
                  Latency: 480ms · Twilio Voice
                </span>
              </div>

              <div className="p-3 rounded-3 mb-3" style={{ background: "rgba(0, 0, 0, 0.3)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div className="font-size-13 mb-2" style={{ color: "#FFFFFF" }}>
                  <strong className="me-2" style={{ color: "#38BDF8" }}>AI Voice Agent:</strong>
                  <span className="text-white" style={{ color: "#FFFFFF" }}>&ldquo;Thanks for calling! Yes, our Studio B podcast booth is available Saturday from 10:00 AM to 1:00 PM with 4 Shure SM7B mics and 4K ISO video. I&apos;ve reserved the slot and sent a 1-click booking link to your phone.&rdquo;</span>
                </div>
                <div className="d-flex align-items-center gap-2 font-size-12 text-success font-weight-bold">
                  <span>✓ Deposit Held</span>
                  <span>·</span>
                  <span>Google Calendar Blocked</span>
                  <span>·</span>
                  <span>Guest NDA Dispatched</span>
                </div>
              </div>

              <p className="font-size-13 text-secondary mb-0" style={{ color: "#94A3B8" }}>
                Trained specifically on studio gear specs, room acoustics, engineer buffers, and cancellation policies.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/ai-automation" className="sg_btn_primary font-size-14 py-3 px-4 px-sm-5 shadow-lg w-100 w-sm-auto justify-content-center text-center">
            <span>Explore AI Voice &amp; Chatbot Automations →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyAiSolutions;
