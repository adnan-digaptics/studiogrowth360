'use client'

import React from 'react';

const stats = [
  {
    value: "350+",
    label: "Partner Studios",
    desc: "Independent podcast & video facilities on Growth Domains",
    accent: "#FF6B00",
  },
  {
    value: "$4.2M+",
    label: "Gross Booking Volume",
    desc: "Processed through automated Stripe Connect escrow",
    accent: "#22c55e",
  },
  {
    value: "< 24h",
    label: "Wholesale Edit Turnaround",
    desc: "Guaranteed SLA for full multi-cam master delivery",
    accent: "#38bdf8",
  },
  {
    value: "65%+",
    label: "Resale Profit Margin",
    desc: "Average margin earned by studios on post-production add-ons",
    accent: "#f59e0b",
  },
];

const PlatformStatsBar = () => {
  return (
    <section className="py-4 position-relative" style={{ background: '#0D0D12', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div className="row g-3 g-lg-4 align-items-stretch">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3">
              <div
                className="p-3 p-xl-4 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="d-flex align-items-baseline gap-2 mb-2">
                  <span
                    className="font-monospace font-weight-bold"
                    style={{
                      fontSize: 'clamp(28px, 3.5vw, 40px)',
                      color: stat.accent,
                      lineHeight: '1.1',
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-size-15 font-size-xl-16 font-weight-bold mb-1">
                    {stat.label}
                  </h4>
                  <p className="cs_m0 text-secondary font-size-12 font-size-xl-13" style={{ lineHeight: '1.4' }}>
                    {stat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformStatsBar;

