'use client'

import React from 'react';

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Owner & Managing Director",
    studio: "SoundGrid Chicago (3 Suites)",
    quote:
      "Before Growth Domains, our two podcast suites sat dark on Tuesday and Wednesday mornings. Between the corporate outreach playbook and the 24h wholesale editing turnaround, we added $8,400 per month in net margin without hiring full-time editors.",
    metrics: "+$8,400/mo net profit · 88% weekday utilization",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    role: "Founder & Creative Lead",
    studio: "Soho Audio Laboratories, NYC (4 Suites)",
    quote:
      "Our corporate and Fortune 500 clients expect enterprise security, prompt digital NDA release forms, and instantaneous cloud delivery. Growth Domains gave us the SaaS infrastructure to compete with mega-agencies at a fraction of the cost.",
    metrics: "42 enterprise shows hosted · 100% on-time SLA",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Co-Founder",
    studio: "Austin Broadcast Collective (2 Suites)",
    quote:
      "Growth Domains is to podcast and video studios what Toast is to restaurants. We run our room bookings, deposit payments, and post-production requests through one clean screen. I can't imagine running our facility without it.",
    metrics: "2.5x booking volume in 90 days · Zero double bookings",
    rating: 5,
  },
];

const StudioTestimonials = () => {
  return (
    <section className="py-5 position-relative" style={{ background: '#09090B' }}>
      <div className="container py-4">
        <div className="text-center max-w-750 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              STUDIO OPERATOR PERSPECTIVES
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Built by Studio Operators. Loved by Studio Owners.
          </h2>
          <p className="text-secondary font-size-15 cs_m0">
            See how independent studio facilities are replacing fragmented tools with Growth Domains.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {testimonials.map((t, idx) => (
            <div key={idx} className="col-12 col-lg-4">
              <div
                className="p-4 p-xl-5 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="text-warning font-size-14">
                      {"★".repeat(t.rating)}
                    </div>
                    <span className="badge rounded-pill" style={{ background: 'rgba(255, 107, 0, 0.1)', color: '#FF6B00', fontSize: '11px' }}>
                      Verified Studio
                    </span>
                  </div>

                  <p className="text-secondary font-size-14 mb-4" style={{ lineHeight: '1.65', color: '#E4E4E7' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-10">
                  <div className="text-white font-weight-bold font-size-15">
                    {t.name}
                  </div>
                  <div className="text-secondary font-size-12 mb-2">
                    {t.role} · <span className="text-white-50">{t.studio}</span>
                  </div>
                  <div className="font-size-11 font-weight-bold" style={{ color: '#22c55e' }}>
                    ✦ {t.metrics}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioTestimonials;

