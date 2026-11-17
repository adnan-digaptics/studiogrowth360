'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { publicAsset } from '@/utils/publicAsset';

const partnerStudiosData = [
  {
    id: 1,
    name: "Apex Soundstage & Visuals",
    city: "Chicago, IL",
    category: "4K Multi-Cam & Video",
    suites: "3 Recording Suites",
    image: "/assets/img/podcast/wj/podcast_banner.webp",
    utilization: "94% Booked",
    wholesaleProfit: "+$8,400/mo",
    quote: "Growth Domains replaced our messy Google Calendars with a rock-solid booking engine and gave us $8k/mo in wholesale editing margin without hiring an in-house editor.",
    operator: "Marcus Vance, Managing Partner",
    badge: "Enterprise Partner",
  },
  {
    id: 2,
    name: "The Broadcast Loft",
    city: "Austin, TX",
    category: "Podcast & Livestream Hub",
    suites: "2 Soundproof Suites",
    image: "/assets/img/podcast/wj/studio_slide_1.png",
    utilization: "89% Booked",
    wholesaleProfit: "+$6,100/mo",
    quote: "Our weekday vacancy dropped from 45% down to under 12% in 60 days using the Growth Domains local corporate acquisition funnel.",
    operator: "Sarah Jenkins, Studio Director",
    badge: "Growth Tier",
  },
  {
    id: 3,
    name: "Vanguard Creator Hub",
    city: "New York, NY",
    category: "Sony Cinema & Vocals",
    suites: "4 Multi-Room Suites",
    image: "/assets/img/podcast/wj/studio_slide_2.png",
    utilization: "96% Booked",
    wholesaleProfit: "+$11,600/mo",
    quote: "The automated deposit billing and digital NDA generator made our check-in process seamless for Fortune 500 corporate shows.",
    operator: "David Chen, Operations Lead",
    badge: "Enterprise Partner",
  },
  {
    id: 4,
    name: "Mayfair Media Lounge",
    city: "London, UK",
    category: "Executive Broadcast Facility",
    suites: "2 Acoustic Suites",
    image: "/assets/img/podcast/wj/studio_slide_3.png",
    utilization: "91% Booked",
    wholesaleProfit: "+$7,250/mo",
    quote: "Our clients love the under 24-hour turnaround on full multi-cam edits and viral shorts. It sets our studio miles ahead of London competitors.",
    operator: "Oliver Sterling, Founder",
    badge: "Growth Tier",
  },
  {
    id: 5,
    name: "Wynwood Wave Studios",
    city: "Miami, FL",
    category: "Acoustic Audio & Video",
    suites: "3 Suites",
    image: "/assets/img/podcast/wj/studio_slide_4.png",
    utilization: "93% Booked",
    wholesaleProfit: "+$8,700/mo",
    quote: "Having the dynamic rate card optimizer allowed us to double our weekend rates and bundle post-production seamlessly.",
    operator: "Elena Morales, Creative Director",
    badge: "Growth Tier",
  },
  {
    id: 6,
    name: "SoundGrid Laboratories",
    city: "Los Angeles, CA",
    category: "Cinema & Live Switching",
    suites: "5 Production Suites",
    image: "/assets/img/podcast/wj/photo_studio_setup.png",
    utilization: "95% Booked",
    wholesaleProfit: "+$14,200/mo",
    quote: "Growth Domains is the backbone of our 5-room facility. We run bookings, wholesale editing, and rate cards through one single tab.",
    operator: "Jason Reynolds, Studio Owner",
    badge: "Enterprise Partner",
  },
];

const PartnerStudiosShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredStudios = activeFilter === "All"
    ? partnerStudiosData
    : partnerStudiosData.filter(s => s.badge.toLowerCase().includes(activeFilter.toLowerCase()) || s.city.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section className="py-5 position-relative" style={{ background: '#09090B' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-5">
          <div className="max-w-750">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.1)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
              <span style={{ color: '#FF6B00', fontSize: '10px' }}>✦</span>
              <span style={{ color: '#FF6B00', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }} className="text-uppercase">
                NETWORK SHOWCASE · 350+ PARTNER STUDIOS
              </span>
            </div>
            <h2 className="text-white font-weight-bold font-size-28 font-size-md-38 mb-2">
              Powering World-Class Recording Studios Globally
            </h2>
            <p className="text-secondary font-size-15 cs_m0">
              Independent podcast, video, and audio facilities scaling room utilization and client revenue with Growth Domains.
            </p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <Link href="/onboard" className="sg_primary_cta flex-shrink-0">
              <span>Onboard Your Facility</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* 6 Studio Cards Grid */}
        <div className="row g-4 align-items-stretch">
          {filteredStudios.map((studio) => (
            <div key={studio.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="rounded-4 overflow-hidden h-100 d-flex flex-column justify-content-between position-relative"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Studio Facility Photo */}
                <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={publicAsset(studio.image)}
                    alt={`${studio.name} - ${studio.city}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(9, 9, 11, 0.1) 0%, rgba(9, 9, 11, 0.85) 100%)',
                    }}
                  ></div>

                  {/* Top Badges */}
                  <div className="position-absolute top-0 start-0 w-100 p-3 d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill" style={{ background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(8px)', color: '#FF6B00', border: '1px solid rgba(255, 107, 0, 0.4)', fontSize: '11px', fontWeight: 700 }}>
                      {studio.city}
                    </span>
                    <span className="badge rounded-pill" style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.4)', fontSize: '11px', fontWeight: 700 }}>
                      {studio.utilization}
                    </span>
                  </div>

                  {/* Bottom Image Stats */}
                  <div className="position-absolute bottom-0 start-0 w-100 p-3 d-flex justify-content-between align-items-end">
                    <div className="text-white font-weight-bold font-size-13">
                      {studio.suites}
                    </div>
                    <div className="badge rounded-2" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontSize: '11px' }}>
                      Wholesale Profit: {studio.wholesaleProfit}
                    </div>
                  </div>
                </div>

                {/* Studio Facility Info & Testimonial Quote */}
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h3 className="text-white font-size-18 font-weight-bold mb-0">
                        {studio.name}
                      </h3>
                    </div>
                    <div className="text-secondary font-size-12 mb-3">
                      {studio.category}
                    </div>
                    <p className="text-secondary font-size-13 fst-italic mb-3" style={{ lineHeight: '1.5', color: '#D4D4D8' }}>
                      &ldquo;{studio.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-top border-secondary border-opacity-10 d-flex align-items-center justify-content-between">
                    <span className="text-secondary font-size-12">
                      {studio.operator}
                    </span>
                    <span className="badge bg-secondary bg-opacity-25 text-white font-size-10">
                      {studio.badge}
                    </span>
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

export default PartnerStudiosShowcase;

