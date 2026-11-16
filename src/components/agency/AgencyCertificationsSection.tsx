'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import {
  IconContainer,
  IconRocket,
  IconZap,
  IconCreditCard,
  IconTrendingUp,
  IconShield,
} from '@/components/common/AgencyIcons';

interface CertItem {
  id: number;
  badge: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  metric: string;
  icon: React.ReactNode;
}

const certifications: CertItem[] = [
  {
    id: 1,
    badge: 'PLATINUM CRM ARCHITECT',
    year: '2024',
    title: 'Top Studio CRM Solution Provider',
    organization: 'GoHighLevel Partner Awards',
    description: 'Awarded for developing specialized multi-room booking snapshots, automated digital waiver flows, and deposit escrow pipelines for US studios.',
    metric: '350+ Live Snapshots',
    icon: <IconRocket size={24} color="#38BDF8" />,
  },
  {
    id: 2,
    badge: 'WORKFLOW EXCELLENCE',
    year: '2024',
    title: 'Enterprise Workflow Creator of the Year',
    organization: 'n8n Automation Community',
    description: 'Honored for building autonomous multi-branch node pipelines that connect studio hardware, calendars, Stripe, and customer communications with zero per-task fees.',
    metric: '1.2M+ Executions / mo',
    icon: <IconZap size={24} color="#38BDF8" />,
  },
  {
    id: 3,
    badge: 'ESCROW & PAYMENTS',
    year: '2024',
    title: 'Verified Financial Infrastructure Partner',
    organization: 'Stripe Connect Ecosystem',
    description: 'Certified for high-volume automated deposit collections, card-on-file security, and frictionless instant refund authorizations for studio bookings.',
    metric: '$42M+ Ingested',
    icon: <IconCreditCard size={24} color="#38BDF8" />,
  },
  {
    id: 4,
    badge: 'LOCAL SEARCH DOMINANCE',
    year: '2023–2024',
    title: 'Premier Agency Partner (Local Services)',
    organization: 'Google Ads & Maps Partner Network',
    description: 'Recognized for helping photography, podcast, yoga, and craft studios dominate local map pack searches and achieve an average 3.4x ROAS.',
    metric: '3.4x Average ROAS',
    icon: <IconTrendingUp size={24} color="#38BDF8" />,
  },
];

const AgencyCertificationsSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-5 position-relative overflow-hidden" style={{ background: '#0A192F', color: '#FFFFFF' }}>
      {/* Background Subtle Electric Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      ></div>

      <div className="container position-relative py-4 py-lg-5" style={{ zIndex: 2 }}>
        {/* Section Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
          <div>
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2"
              style={{ background: 'rgba(0, 102, 255, 0.2)', border: '1px solid rgba(56, 189, 248, 0.4)' }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E676' }}></span>
              <span className="font-monospace font-size-11 font-weight-bold text-uppercase" style={{ color: '#38BDF8', letterSpacing: '1px' }}>
                INDUSTRY RECOGNITION &amp; CERTIFICATIONS
              </span>
            </div>
            <h2 className="text-white mb-2" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800 }}>
              Proven Engineering Standards You Can Rely On
            </h2>
            <p className="text-secondary font-size-15 mb-0" style={{ maxWidth: '650px', color: '#94A3B8' }}>
              We don&apos;t experiment on your studio business. Our automation architectures, CRM pipelines, and lead funnels are certified by industry leaders.
            </p>
          </div>

          <div className="text-secondary font-size-14 font-weight-bold d-none d-md-block">
            <span style={{ color: '#38BDF8' }}>Top 1%</span> Certified Studio Agency Partner
          </div>
        </div>

        {/* Certifications List */}
        <div className="d-flex flex-column gap-3 mb-5">
          {certifications.map((item, i) => {
            const isHovered = hoveredIdx === i;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="p-4 rounded-4 transition-all position-relative"
                style={{
                  background: isHovered ? 'rgba(0, 102, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                  border: isHovered ? '1px solid rgba(0, 102, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered ? '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 102, 255, 0.2)' : 'none',
                  transform: isHovered ? 'translateY(-2px)' : 'none',
                  cursor: 'default',
                }}
              >
                <div className="row align-items-center g-3 g-lg-4">
                  {/* Left: Icon & Badge */}
                  <div className="col-12 col-md-3">
                    <div className="d-flex align-items-center gap-3">
                      <IconContainer size={50} bg="rgba(0, 102, 255, 0.15)" border="1px solid rgba(56, 189, 248, 0.3)" radius="12px">
                        {item.icon}
                      </IconContainer>
                      <div>
                        <span className="badge rounded-pill bg-primary bg-opacity-25 text-primary font-monospace font-size-10 px-2 py-1" style={{ color: '#38BDF8' }}>
                          {item.badge}
                        </span>
                        <div className="text-white-50 font-size-11 mt-1">{item.organization}</div>
                      </div>
                    </div>
                  </div>

                  {/* Center: Title & Description */}
                  <div className="col-12 col-md-6">
                    <div className="text-white font-size-17 font-weight-bold mb-1">
                      {item.title}
                    </div>
                    <div className="text-secondary font-size-13" style={{ color: '#94A3B8', lineHeight: '1.5' }}>
                      {item.description}
                    </div>
                  </div>

                  {/* Right: Key Metric */}
                  <div className="col-12 col-md-3 text-md-end">
                    <div className="font-monospace font-weight-bold text-white font-size-18" style={{ color: '#00E676' }}>
                      {item.metric}
                    </div>
                    <div className="text-secondary font-size-11" style={{ color: '#94A3B8' }}>Verified Achievement</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-4 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="d-flex align-items-center gap-3">
            <IconContainer size={44} bg="rgba(0, 102, 255, 0.15)" border="1px solid rgba(56, 189, 248, 0.3)" radius="12px">
              <IconShield size={22} color="#38BDF8" />
            </IconContainer>
            <div>
              <div className="text-white font-weight-bold font-size-15">
                Enterprise Data Protection &amp; Institutional NDA Included
              </div>
              <div className="text-secondary font-size-13" style={{ color: '#94A3B8' }}>
                Your client lists, revenue data, and booking pipelines are encrypted with SOC-2 compliant infrastructure.
              </div>
            </div>
          </div>

          <Link href="/book-consultation" className="sg_btn_primary font-size-13 py-2 px-4 flex-shrink-0">
            <span>Consult Our Certified Team →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyCertificationsSection;
