'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { agencyFaqs } from '@/data/agency';
import { IconMessage } from '@/components/common/AgencyIcons';

const AgencyFaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-5 bg-white border-top">
      <div className="container py-4 py-lg-5">
        <div className="row g-4 g-lg-5">
          {/* Left Column: Heading & Support Callout */}
          <div className="col-12 col-lg-5">
            <div className="position-sticky" style={{ top: '100px' }}>
              <div className="sg_badge_electric mb-3">
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="sg_agency_title font-size-28 font-size-md-40 mb-3">
                Everything You Need to Know About Studio Automation
              </h2>
              <p className="sg_agency_desc mb-4">
                Have questions about our CRM setups, n8n integrations, or how we engineer guaranteed leads for American studios? Here are honest, direct answers.
              </p>

              {/* Direct Support Card */}
              <div
                className="p-4 rounded-4 border"
                style={{ background: '#F8FAFC', borderColor: '#E2E8F0' }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'rgba(0, 102, 255, 0.1)',
                    }}
                  >
                    <IconMessage size={20} color="#0066FF" />
                  </div>
                  <div>
                    <div className="text-dark font-size-15 font-weight-bold">
                      Have a specific studio question?
                    </div>
                    <div className="text-secondary font-size-12">
                      Our automation team responds in &lt; 15 mins
                    </div>
                  </div>
                </div>

                <p className="font-size-13 text-secondary mb-3" style={{ lineHeight: '1.6' }}>
                  Speak directly with an automation engineer about your current booking software, CRM pipelines, and revenue targets.
                </p>

                <div className="d-flex flex-column gap-2">
                  <Link
                    href="/book-consultation"
                    className="sg_btn_primary font-size-13 py-2 px-3 text-center justify-content-center"
                  >
                    <span>Book a Free Strategy Call →</span>
                  </Link>
                  <a
                    href="tel:7737579417"
                    className="text-center font-size-13 font-weight-bold text-decoration-none py-2"
                    style={{ color: '#0066FF' }}
                  >
                    Or Call (773) 757-9417
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-3">
              {agencyFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-4 border transition-all"
                    style={{
                      background: isOpen ? '#FFFFFF' : '#F8FAFC',
                      borderColor: isOpen ? '#0066FF' : '#E2E8F0',
                      boxShadow: isOpen ? '0 8px 24px rgba(0, 102, 255, 0.08)' : 'none',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="w-100 p-4 text-start border-0 bg-transparent d-flex align-items-center justify-content-between gap-3"
                      style={{ cursor: 'pointer' }}
                      aria-expanded={isOpen}
                    >
                      <span
                        className="font-size-16 font-weight-bold"
                        style={{ color: isOpen ? '#0066FF' : '#0F172A', lineHeight: '1.4' }}
                      >
                        {faq.q}
                      </span>
                      <span
                        className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 transition-all"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: isOpen ? '#0066FF' : 'rgba(0, 0, 0, 0.05)',
                          color: isOpen ? '#FFFFFF' : '#475569',
                          fontSize: '16px',
                          fontWeight: 'bold',
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 pt-0">
                        <div
                          className="pt-3 border-top text-secondary font-size-14"
                          style={{
                            lineHeight: '1.7',
                            color: '#475569',
                            borderColor: '#F1F5F9',
                          }}
                        >
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyFaqSection;
