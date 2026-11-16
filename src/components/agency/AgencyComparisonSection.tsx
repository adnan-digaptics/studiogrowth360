'use client'

import React from 'react';
import Link from 'next/link';
import {
  IconContainer,
  IconZap,
  IconCreditCard,
  IconFileText,
  IconCalendar,
  IconStar,
  IconDatabase,
} from '@/components/common/AgencyIcons';

const comparisonRows = [
  {
    dimension: 'Inbound Inquiries & Calls',
    manual: 'Manual replies 4-8 hours late. Missed after-hours calls go directly to voicemail, losing prospective clients to local competitors.',
    automated: 'Instant < 2 minute SMS text-back and 24/7 AI Voice Phone Receptionist. Every lead is engaged, pre-qualified, and booked automatically.',
    icon: <IconZap size={18} color="#0066FF" />,
  },
  {
    dimension: 'Booking & Deposit Escrow',
    manual: 'Tedious back-and-forth emails. Chasing Venmo or Zelle payments. High rate of client cancellations and unpaid invoices.',
    automated: 'Self-service online booking with automated 50% Stripe deposit hold, card-on-file security, and instant digital calendar lock.',
    icon: <IconCreditCard size={18} color="#0066FF" />,
  },
  {
    dimension: 'Client Waivers & Prep',
    manual: 'Paper clipboards, lost liability releases, and clients showing up unprepared without equipment requirements.',
    automated: 'Automated digital liability waiver auto-signed upon booking, paired with automated SMS session prep guides.',
    icon: <IconFileText size={18} color="#0066FF" />,
  },
  {
    dimension: 'Multi-Room Scheduling',
    manual: 'Messy Google Sheets or disjointed calendars causing double-booking conflicts and zero buffer time between sessions.',
    automated: 'Unified multi-suite scheduling engine with automated 30-minute room reset intervals and technician assignment.',
    icon: <IconCalendar size={18} color="#0066FF" />,
  },
  {
    dimension: 'Google Reviews & Referrals',
    manual: 'Studio staff forgets to ask for reviews. Most happy clients never leave public feedback, hurting local SEO rankings.',
    automated: 'Automated 2-hour post-session Google review sequence with smart filtering that turns happy sessions into 5-star ratings.',
    icon: <IconStar size={18} color="#0066FF" />,
  },
  {
    dimension: 'Monthly Software Overhead',
    manual: '$650–$900/month spent across 6+ disconnected subscriptions (Acuity, HoneyBook, Zapier, Mailchimp, RingCentral, ClickFunnels).',
    automated: 'Consolidated GoHighLevel CRM + self-hosted n8n automation pipeline. One unified platform, zero per-task execution fees.',
    icon: <IconDatabase size={18} color="#0066FF" />,
  },
];

const AgencyComparisonSection = () => {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div className="container py-4 py-lg-5">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>BEFORE VS. AFTER</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            The Difference Between Surviving &amp; Scaling Your Studio
          </h2>
          <p className="sg_agency_desc mx-auto font-size-16" style={{ maxWidth: '760px' }}>
            See how American studio operators eliminate 25+ hours of weekly admin busywork and turn missed inquiries into predictable monthly revenue.
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on Mobile) */}
        <div className="d-none d-md-block rounded-4 border bg-white shadow-sm overflow-hidden mb-5" style={{ borderColor: '#E2E8F0' }}>
          <div className="table-responsive">
            <table className="sg_compare_table mb-0 w-100">
              <thead>
                <tr>
                  <th style={{ width: '25%', padding: '1.25rem 1.5rem', background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>Operational Dimension</th>
                  <th style={{ width: '37.5%', padding: '1.25rem 1.5rem', color: '#DC2626', background: '#FEF2F2', borderBottom: '2px solid #FCA5A5' }}>
                    <span className="d-flex align-items-center gap-2">
                      <span className="text-danger font-weight-bold">✕</span>
                      <span>Traditional Manual Studio Operations</span>
                    </span>
                  </th>
                  <th style={{ width: '37.5%', padding: '1.25rem 1.5rem', color: '#0066FF', background: '#EFF6FF', borderBottom: '2px solid #93C5FD' }}>
                    <span className="d-flex align-items-center gap-2">
                      <span className="text-success font-weight-bold">✓</span>
                      <span>StudioGrowth360 Automated Operating System</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '1.25rem 1.5rem' }}>
                      <div className="d-flex align-items-center gap-2">
                        <IconContainer size={34} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="8px" className="flex-shrink-0">
                          {row.icon}
                        </IconContainer>
                        <span className="font-size-14 font-weight-bold text-dark">{row.dimension}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', background: '#FFFDFD' }}>
                      <div className="font-size-13 text-secondary" style={{ lineHeight: '1.65' }}>
                        {row.manual}
                      </div>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', background: '#F8FAFF' }}>
                      <div className="font-size-13 text-dark font-weight-medium" style={{ lineHeight: '1.65' }}>
                        {row.automated}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Comparison Cards (Shown only on small screens) */}
        <div className="d-md-none d-flex flex-column gap-3 mb-5">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="p-3 rounded-4 bg-white border shadow-sm" style={{ borderColor: '#E2E8F0' }}>
              <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                <IconContainer size={32} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="8px">
                  {row.icon}
                </IconContainer>
                <span className="font-size-14 font-weight-bold text-dark">{row.dimension}</span>
              </div>

              {/* Before */}
              <div className="p-2 px-3 rounded-3 mb-2" style={{ background: '#FEF2F2', borderLeft: '3px solid #EF4444' }}>
                <div className="font-size-11 font-weight-bold text-danger text-uppercase mb-1">✕ Manual Setup:</div>
                <div className="font-size-12 text-secondary">{row.manual}</div>
              </div>

              {/* After */}
              <div className="p-2 px-3 rounded-3" style={{ background: '#F0FDF4', borderLeft: '3px solid #10B981' }}>
                <div className="font-size-11 font-weight-bold text-success text-uppercase mb-1">✓ StudioGrowth360:</div>
                <div className="font-size-12 text-dark font-weight-medium">{row.automated}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-4 p-xl-5 rounded-4 bg-white border d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
          <div>
            <div className="text-dark font-weight-bold font-size-16 mb-1">
              Ready to upgrade your studio from manual chaos to autonomous growth?
            </div>
            <div className="text-secondary font-size-14">
              We provide complete turnkey onboarding and data migration from your existing booking software in 7–14 days.
            </div>
          </div>

          <Link href="/book-consultation" className="sg_btn_primary font-size-14 py-3 px-4 flex-shrink-0">
            <span>Schedule Discovery Call →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyComparisonSection;
