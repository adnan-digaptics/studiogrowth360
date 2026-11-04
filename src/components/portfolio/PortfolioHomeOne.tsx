'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import portfolio_data from '@/data/portfolio_data';

const PortfolioHomeOne = () => {
  return (
    <section className="sg_portfolio_showcase_section position-relative py-5 overflow-hidden">
      <div className="container">
        {/* Section Heading */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
          <div>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
              <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ FEATURED SHOWS &amp; PRODUCTIONS</span>
            </div>
            <h2 className="text-white mb-2" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800 }}>
              Podcasts &amp; Shows Recorded at Studio360
            </h2>
            <p className="text-secondary font-size-17 mb-0" style={{ maxWidth: '620px' }}>
              From top-tier venture capital shows to chart-topping creator entertainment, explore the signature productions produced in our suites.
            </p>
          </div>

          <div>
            <Link href="/portfolio" className="sg_secondary_cta">
              <span>View All 7 Shows</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Swiper Project Carousel */}
        <Swiper
          loop={true}
          speed={900}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".sg_portfolio_pagination",
            clickable: true,
          }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.1, spaceBetween: 16 },
            576: { slidesPerView: 1.5, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 2.35, spaceBetween: 22 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="sg_portfolio_swiper"
        >
          {portfolio_data.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href="/portfolio" className="sg_portfolio_card d-block position-relative rounded-4 overflow-hidden text-decoration-none">
                {/* Visual Image */}
                <div className="sg_portfolio_media position-relative" style={{ aspectRatio: '16/11' }}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="sg_portfolio_gradient_overlay"></div>

                  {/* Impact Metric Pill */}
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge px-3 py-2 rounded-pill font-size-12 font-weight-bold" style={{ background: 'rgba(9, 9, 11, 0.85)', backdropFilter: 'blur(8px)', color: '#FF6B00', border: '1px solid rgba(255, 107, 0, 0.4)' }}>
                      {item.impact}
                    </span>
                  </div>
                </div>

                {/* Card Content Bar */}
                <div className="sg_portfolio_caption p-3 p-xl-4 position-relative" style={{ background: 'rgba(18, 18, 24, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-1 mb-1">
                    <span className="font-size-11 font-weight-bold text-uppercase" style={{ color: '#FF6B00', letterSpacing: '0.8px' }}>
                      {item.category}
                    </span>
                    <span className="text-secondary font-size-12">{item.client}</span>
                  </div>

                  <h3 className="text-white font-size-17 font-size-xl-18 font-weight-bold mb-2 text-truncate" title={item.title}>
                    {item.title}
                  </h3>

                  <div className="d-flex flex-wrap gap-1 mt-2">
                    {item.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="badge bg-secondary-subtle text-white-50 font-size-11" style={{ fontWeight: 500 }}>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Pagination Dots */}
        <div className="sg_portfolio_pagination d-flex justify-content-center gap-2 mt-4"></div>
      </div>
    </section>
  );
};

export default PortfolioHomeOne;
