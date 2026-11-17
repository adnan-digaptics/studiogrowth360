'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { mainServices, industrySolutions } from '@/data/agency';
import { IconContainer, getServiceVectorIcon, getIndustryVectorIcon } from '@/components/common/AgencyIcons';

interface MobileMenuProps {
  active?: boolean;
  onItemClick?: () => void;
}

const MobileMenu = ({ active, onItemClick }: MobileMenuProps) => {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [industriesExpanded, setIndustriesExpanded] = useState(false);

  return (
    <ul className={`cs_nav_list ${active ? "cs_mobile_active" : ""}`}>
      <li>
        <Link href="/" onClick={onItemClick}>
          <span>Home</span>
        </Link>
      </li>

      <li>
        <div
          onClick={() => setServicesExpanded(!servicesExpanded)}
          className="d-flex align-items-center justify-content-between py-2 text-dark font-size-14 font-weight-bold"
          style={{ cursor: 'pointer' }}
        >
          <span style={{ color: '#0066FF' }}>Services</span>
          <span style={{ fontSize: '11px', color: '#64748B' }}>{servicesExpanded ? '▲' : '▼'}</span>
        </div>

        {servicesExpanded && (
          <ul className="list-unstyled ps-3 my-1 border-start border-primary border-opacity-25 d-flex flex-column gap-2">
            {mainServices.map((srv) => (
              <li key={srv.id}>
                <Link
                  href={`/${srv.slug}`}
                  onClick={onItemClick}
                  className="font-size-13 text-secondary text-decoration-none d-flex align-items-center gap-2 py-1"
                >
                  <IconContainer size={24} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)" radius="6px">
                    {getServiceVectorIcon(srv.slug, 13)}
                  </IconContainer>
                  <span className="text-dark font-weight-bold">{srv.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                onClick={onItemClick}
                className="font-size-12 text-primary font-weight-bold text-decoration-none pt-1 d-block"
                style={{ color: '#0066FF' }}
              >
                View All 7 Core Services →
              </Link>
            </li>
          </ul>
        )}
      </li>

      <li>
        <div
          onClick={() => setIndustriesExpanded(!industriesExpanded)}
          className="d-flex align-items-center justify-content-between py-2 text-dark font-size-14 font-weight-bold"
          style={{ cursor: 'pointer' }}
        >
          <span style={{ color: '#0066FF' }}>Who We Help</span>
          <span style={{ fontSize: '11px', color: '#64748B' }}>{industriesExpanded ? '▲' : '▼'}</span>
        </div>

        {industriesExpanded && (
          <ul className="list-unstyled ps-3 my-1 border-start border-primary border-opacity-25 d-flex flex-column gap-2">
            {industrySolutions.map((ind) => (
              <li key={ind.id}>
                <Link
                  href={`/${ind.slug}`}
                  onClick={onItemClick}
                  className="font-size-13 text-secondary text-decoration-none d-flex align-items-center gap-2 py-1"
                >
                  <IconContainer size={24} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)" radius="6px">
                    {getIndustryVectorIcon(ind.slug, 13)}
                  </IconContainer>
                  <span className="text-dark font-weight-bold">{ind.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/industries-we-serve"
                onClick={onItemClick}
                className="font-size-12 text-primary font-weight-bold text-decoration-none pt-1 d-block"
                style={{ color: '#0066FF' }}
              >
                View All 4 Verticals →
              </Link>
            </li>
          </ul>
        )}
      </li>

      <li>
        <Link href="/pricing" onClick={onItemClick}>
          <span>Pricing</span>
        </Link>
      </li>

      <li>
        <Link href="/about" onClick={onItemClick}>
          <span>About Us</span>
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={onItemClick}>
          <span>Contact Us</span>
        </Link>
      </li>

      <li className="d-xl-none pt-3">
        <Link
          href="/book-consultation"
          onClick={onItemClick}
          className="sg_btn_primary w-100 justify-content-center text-center py-3 font-size-14"
        >
          <span>Book Free Strategy Call</span>
          <span>→</span>
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
