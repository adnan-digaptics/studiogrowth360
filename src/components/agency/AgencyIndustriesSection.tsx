'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { industrySolutions } from '@/data/agency';
import { IconContainer, getIndustryVectorIcon } from '@/components/common/AgencyIcons';

const AgencyIndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = industrySolutions[activeTab];

  return (
    <section id="industries" className="py-5 bg-white">
      <div className="container py-4 py-lg-5">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>WHO WE HELP</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Tailored Growth Systems for 4 Studio Verticals
          </h2>
          <p className="sg_agency_desc mx-auto">
            We don&apos;t believe in one-size-fits-all software. Every studio vertical has unique booking dynamics, client retention cycles, and operational workflows.
          </p>
        </div>

        {/* 4 Industry Selection Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-5">
          {industrySolutions.map((ind, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className="px-3 px-sm-4 py-2 py-sm-3 rounded-pill font-size-13 font-size-sm-14 font-weight-bold transition-all border d-flex align-items-center gap-2"
                style={{
                  background: isActive ? "#0066FF" : "#F8FAFC",
                  color: isActive ? "#FFFFFF" : "#1E293B",
                  borderColor: isActive ? "#0066FF" : "#E2E8F0",
                  boxShadow: isActive ? "0 4px 16px rgba(0, 102, 255, 0.3)" : "none",
                  cursor: "pointer",
                }}
              >
                <span>{getIndustryVectorIcon(ind.slug, 18, isActive ? "#FFFFFF" : "#0066FF")}</span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="p-4 p-xl-5 rounded-4 border bg-white shadow-sm">
          <div className="row g-4 g-lg-5 align-items-center">
            {/* Left: Headline, Pain Points & Solutions */}
            <div className="col-12 col-lg-7">
              <div className="d-flex align-items-center gap-3 mb-3">
                <IconContainer size={44} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="12px">
                  {getIndustryVectorIcon(current.slug, 22, "#0066FF")}
                </IconContainer>
                <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary font-size-12 px-3 py-1 font-weight-bold" style={{ color: "#0066FF" }}>
                  {current.badge}
                </span>
              </div>

              <h3 className="text-dark font-size-24 font-size-md-34 font-weight-bold mb-3">
                {current.heroHeadline}
              </h3>

              <p className="text-secondary font-size-15 mb-4" style={{ lineHeight: "1.65" }}>
                {current.heroSubheadline}
              </p>

              {/* Solved Studio Challenges Grid */}
              <div className="mb-4">
                <div className="font-size-12 font-weight-bold text-uppercase text-dark mb-3" style={{ letterSpacing: "0.8px" }}>
                  Specialized Solutions We Deploy:
                </div>
                <div className="row g-3">
                  {current.solutions.slice(0, 4).map((sol, sIdx) => (
                    <div key={sIdx} className="col-12 col-sm-6">
                      <div className="p-3 rounded-3 h-100 border" style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                        <div className="d-flex align-items-center gap-2 mb-1">
                          <span className="text-primary font-weight-bold" style={{ color: "#0066FF" }}>✓</span>
                          <span className="text-dark font-size-13 font-weight-bold">{sol.title}</span>
                        </div>
                        <p className="text-secondary font-size-11 cs_m0" style={{ lineHeight: "1.5" }}>
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <Link href={`/${current.slug}`} className="sg_btn_primary font-size-13 py-2 px-4">
                  <span>Explore {current.name} Solutions</span>
                  <span>→</span>
                </Link>
                <Link href="/book-consultation" className="sg_btn_secondary font-size-13 py-2 px-3">
                  <span>Book Free Studio Audit</span>
                </Link>
              </div>
            </div>

            {/* Right: Studio Photo & Real Case Study */}
            <div className="col-12 col-lg-5">
              <div className="rounded-4 overflow-hidden shadow-lg border" style={{ borderColor: "rgba(0, 102, 255, 0.25)" }}>
                {/* Visual Header Image of Studio */}
                <div className="sg_img_16_10" style={{ borderRadius: "16px 16px 0 0" }}>
                  <img
                    src={current.image}
                    alt={current.name}
                    className="sg_img_cover"
                    style={{ transition: "transform 0.5s ease" }}
                  />
                  <div
                    className="position-absolute"
                    style={{
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(10, 25, 47, 0.15) 0%, rgba(10, 25, 47, 0.88) 100%)",
                    }}
                  ></div>
                  <div className="position-absolute bottom-0 start-0 p-3 text-white d-flex align-items-center justify-content-between w-100">
                    <span className="badge rounded-pill font-size-11 px-3 py-1 font-weight-bold" style={{ background: "#0066FF" }}>
                      {current.badge}
                    </span>
                    <span className="font-size-11 font-monospace" style={{ color: "#38BDF8" }}>
                      Real Studio Facility
                    </span>
                  </div>
                </div>

                {/* Case Study Body */}
                <div className="p-4 text-white" style={{ background: "#0A192F" }}>
                  <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                    <span className="font-monospace font-size-11 font-weight-bold text-uppercase" style={{ color: "#38BDF8" }}>
                      PROVEN STUDIO CASE STUDY
                    </span>
                    <span className="font-size-11 text-secondary" style={{ color: "#94A3B8" }}>
                      {current.caseStudy.location}
                    </span>
                  </div>

                  <div className="font-size-18 font-weight-bold text-white mb-2">
                    {current.caseStudy.studioName}
                  </div>

                  <div className="d-flex flex-column gap-2 mb-3">
                    {current.caseStudy.results.map((res, rIdx) => (
                      <div key={rIdx} className="d-flex align-items-center gap-2 font-size-13">
                        <span style={{ color: "#00E676" }}>✓</span>
                        <span className="font-weight-medium">{res}</span>
                      </div>
                    ))}
                  </div>

                  <p className="font-italic font-size-13 mb-3" style={{ color: "#CBD5E1", lineHeight: "1.6" }}>
                    &ldquo;{current.caseStudy.quote}&rdquo;
                  </p>

                  <div className="font-size-12 font-weight-bold" style={{ color: "#38BDF8" }}>
                    — {current.caseStudy.owner}
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

export default AgencyIndustriesSection;
