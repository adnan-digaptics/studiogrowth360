'use client'

import React from 'react';
import Link from 'next/link';
import { IconStar, IconMapPin } from '@/components/common/AgencyIcons';

const testimonials = [
  {
    name: 'Marcus Vance',
    role: 'Founder & Head Photographer',
    studio: 'Lumina Creative Studio',
    location: 'Chicago, IL',
    vertical: 'Photography Studio',
    rating: 5,
    metric: '+48% Booked Revenue',
    quote:
      'Before StudioGrowth360, I was spending 3 hours every night answering Instagram DMs, chasing deposits on Zelle, and sending reminders manually. Now, the instant SMS response engages leads in 60 seconds, collects 50% Stripe deposits, and has virtually eliminated our client no-shows.',
    avatarColor: '#0066FF',
  },
  {
    name: 'Elena Rostova',
    role: 'Executive Producer',
    studio: 'Capital Wave Podcast Lounge',
    location: 'Austin, TX',
    vertical: 'Podcast Studio',
    rating: 5,
    metric: '26 hrs Admin Saved/wk',
    quote:
      'The 24/7 AI Voice Phone Receptionist is pure magic. High-profile podcast guests and commercial brands call at 10 PM, and the AI answers instantly with our exact equipment specs, hourly rates, and books their session right onto our calendar. It paid for itself in the first 4 days.',
    avatarColor: '#38BDF8',
  },
  {
    name: 'David Chen',
    role: 'Studio Director',
    studio: 'Prana Flow Movement Sanctuary',
    location: 'Miami, FL',
    vertical: 'Yoga Studio',
    rating: 5,
    metric: '3.8x Meta Ad ROAS',
    quote:
      'We had tried running Facebook and Google Ads with two other agencies and got zero quality signups. StudioGrowth360 built an automated intro-offer funnel into GoHighLevel with 5-day automated nurture SMS. We sold 68 new memberships in our very first month.',
    avatarColor: '#10B981',
  },
  {
    name: 'Maya Lin',
    role: 'Owner & Ceramic Artist',
    studio: 'Clay & Kiln Arts Hub',
    location: 'Brooklyn, NY',
    vertical: 'Craft Studio',
    rating: 5,
    metric: '100% Sold Out Workshops',
    quote:
      'Our weekend pottery workshops used to have chaotic registration on Eventbrite with high processing fees. StudioGrowth360 migrated us onto a custom booking system with automated waitlists and liability waivers. Every single weekend session is fully booked 3 weeks in advance.',
    avatarColor: '#F59E0B',
  },
];

const AgencyTestimonialsSection = () => {
  return (
    <section className="py-5 bg-white border-top">
      <div className="container py-4 py-lg-5">
        <div className="text-center max-w-850 mx-auto mb-5">
          <div className="sg_badge_electric mb-3">
            <span>PROVEN CLIENT RESULTS</span>
          </div>
          <h2 className="sg_agency_title font-size-28 font-size-md-42 mb-3">
            Trusted by 350+ Studio Owners Across the USA
          </h2>
          <p className="sg_agency_desc mx-auto">
            Read how photography, podcast, yoga, and craft studios are using our CRM, n8n automations, and lead generation to scale revenue and reclaim their time.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="row g-4 align-items-stretch mb-5">
          {testimonials.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3">
              <div className="p-4 rounded-4 h-100 bg-white border d-flex flex-column justify-content-between sg_card_white">
                <div>
                  {/* Rating Stars & Metric Pill */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-1 text-warning">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <IconStar key={rIdx} size={13} color="#F59E0B" />
                      ))}
                    </div>
                    <span className="badge rounded-pill bg-success bg-opacity-10 text-success font-size-11 px-2 py-1 font-weight-bold">
                      {item.metric}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-secondary font-size-13 mb-4" style={{ lineHeight: '1.65' }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-3 border-top">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle text-white font-weight-bold font-size-14 flex-shrink-0"
                      style={{ width: '40px', height: '40px', background: item.avatarColor }}
                    >
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-dark font-size-14 font-weight-bold">
                        {item.name}
                      </div>
                      <div className="text-secondary font-size-11">
                        {item.role} · {item.studio}
                      </div>
                      <div className="font-size-11 font-weight-bold text-primary d-flex align-items-center gap-1" style={{ color: '#0066FF' }}>
                        <IconMapPin size={11} color="#0066FF" />
                        <span>{item.location} ({item.vertical})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Proof Bar */}
        <div className="p-4 rounded-4 border bg-light d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex flex-wrap align-items-center gap-3 gap-md-4">
            <div>
              <div className="font-monospace font-weight-bold font-size-22 text-dark">4.9 / 5.0</div>
              <div className="font-size-11 text-secondary">Verified Studio Operator Rating</div>
            </div>
            <div className="border-start ps-3 ps-md-4">
              <div className="font-monospace font-weight-bold font-size-22 text-primary" style={{ color: '#0066FF' }}>98.4%</div>
              <div className="font-size-11 text-secondary">Client Retention Rate</div>
            </div>
            <div className="border-start ps-3 ps-md-4">
              <div className="font-monospace font-weight-bold font-size-22 text-success">$42M+</div>
              <div className="font-size-11 text-secondary">Total Studio Bookings Processed</div>
            </div>
          </div>

          <Link href="/book-consultation" className="sg_btn_primary font-size-13 py-2 px-4">
            <span>Join Our Network of Studios →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyTestimonialsSection;
