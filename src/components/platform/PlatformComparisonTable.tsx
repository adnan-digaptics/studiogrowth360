'use client'

import React from 'react';
import Link from 'next/link';

const comparisonRows = [
  {
    feature: "Monthly Base Cost (for 8 Shows / 32 eps)",
    inHouse: "$6,500 / mo (Salary + taxes + desk)",
    freelance: "$4,200 / mo (Erratic hourly rates)",
    growthDomains: "$1,280 / mo ($160/ep pay-as-you-record)",
    winner: true,
  },
  {
    feature: "Turnaround Time SLA",
    inHouse: "3 – 5 Business Days",
    freelance: "Unpredictable / Frequent Ghosting",
    growthDomains: "Guaranteed < 24 Hours",
    winner: true,
  },
  {
    feature: "Average Studio Profit Margin Retained",
    inHouse: "18% – 25% (Eaten by fixed payroll)",
    freelance: "30% – 40% (Time spent managing)",
    growthDomains: "65%+ Pure Studio Net Margin",
    winner: true,
  },
  {
    feature: "Slow Season Overhead Risk",
    inHouse: "HIGH (Must pay full salary even with 0 bookings)",
    freelance: "MEDIUM (Constant churn & re-hiring)",
    growthDomains: "ZERO (100% variable cost tied to sessions)",
    winner: true,
  },
  {
    feature: "10x Kinetic Viral Shorts Included",
    inHouse: "Requires extra time or second hire",
    freelance: "Expensive $40/short add-on",
    growthDomains: "Included in 24h wholesale bundle",
    winner: true,
  },
  {
    feature: "White-Label Client Download Portal",
    inHouse: "Messy Google Drive / WeTransfer links",
    freelance: "Generic Dropbox folders",
    growthDomains: "100% Branded with Your Studio Logo",
    winner: true,
  },
  {
    feature: "Mutual Studio NDA & Client Copyright Protection",
    inHouse: "Basic employment agreement",
    freelance: "Zero enforceable NDAs",
    growthDomains: "Institutional Mutual Enterprise NDA",
    winner: true,
  },
  {
    feature: "Integrated Booking & Room Scheduling OS",
    inHouse: "Disconnected (Requires separate software)",
    freelance: "Disconnected (Manual spreadsheets)",
    growthDomains: "Native All-In-One Studio OS",
    winner: true,
  },
];

const PlatformComparisonTable = () => {
  return (
    <section className="py-5 position-relative" style={{ background: '#09090B' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
            <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
            <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
              THE HARD NUMBERS
            </span>
          </div>
          <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-3">
            Why Studio Owners Are Ditching In-House Payroll
          </h2>
          <p className="text-secondary font-size-15 font-size-md-16 cs_m0">
            Compare the true costs, turnaround speeds, and profit margins between hiring in-house video editors, juggling erratic freelancers, and tapping into Growth Domains&apos; wholesale fulfillment pod.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="table-responsive rounded-4 overflow-hidden mb-4" style={{ border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}>
          <table className="table table-dark mb-0 font-size-13" style={{ background: '#0F0F14' }}>
            <thead>
              <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                <th className="p-3 p-md-4 text-secondary font-size-12 text-uppercase" style={{ width: '30%' }}>Operational Metric</th>
                <th className="p-3 p-md-4 text-white font-size-13" style={{ width: '23%' }}>In-House Full-Time Editor</th>
                <th className="p-3 p-md-4 text-white font-size-13" style={{ width: '23%' }}>Freelance Marketplaces</th>
                <th
                  className="p-3 p-md-4 text-white font-size-14 font-weight-bold"
                  style={{
                    width: '24%',
                    background: 'rgba(255, 107, 0, 0.12)',
                    borderLeft: '2px solid #FF6B00',
                    borderRight: '2px solid #FF6B00',
                    color: '#FF6B00',
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <span>★ Growth Domains</span>
                    <span className="badge bg-warning bg-opacity-25 text-warning font-size-10">Wholesale</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td className="p-3 p-md-4 text-white font-weight-bold">
                    {row.feature}
                  </td>
                  <td className="p-3 p-md-4 text-secondary">
                    {row.inHouse}
                  </td>
                  <td className="p-3 p-md-4 text-secondary">
                    {row.freelance}
                  </td>
                  <td
                    className="p-3 p-md-4 font-weight-bold text-white"
                    style={{
                      background: 'rgba(255, 107, 0, 0.05)',
                      borderLeft: '2px solid #FF6B00',
                      borderRight: '2px solid #FF6B00',
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-success font-size-14">✓</span>
                      <span style={{ color: '#FF944D' }}>{row.growthDomains}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Stat Pill */}
        <div className="p-4 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div className="d-flex align-items-center gap-3">
            <span style={{ fontSize: '24px' }}>💡</span>
            <div className="text-secondary font-size-13">
              Average annual studio savings switching from in-house payroll to Growth Domains: <strong className="text-white">$62,640 / facility</strong>.
            </div>
          </div>

          <Link href="/onboard" className="sg_primary_cta flex-shrink-0">
            <span>Onboard Your Facility →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparisonTable;
