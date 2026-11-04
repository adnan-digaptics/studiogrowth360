'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import avatar_img from "@/assets/img/avatar_1.jpg";
import testimonial_thumb from "@/assets/img/podcast/podcast_recording_session.jpg";
import Image, { StaticImageData } from 'next/image';

interface TestimonialItem {
  id: number;
  img: StaticImageData;
  name: string;
  role: string;
  company: string;
  location: string;
  metric: string;
  quote: string;
}

const testimonial_data: TestimonialItem[] = [
  {
    id: 1,
    img: avatar_img,
    name: "Aiden Vance",
    role: "Host & Managing Partner",
    company: "The Founder's Orbit (Tech VC)",
    location: "New York, NY",
    metric: "24M+ Views · Top 10 Spotify",
    quote:
      "Recording at Studio360 is the smoothest part of my week. We walk into the suite with our guest, the 4K Sony FX6 cameras and Shure mics are dialed in, and within 24 hours I have an immaculate full-length master and 10 high-retention shorts that blow up on TikTok and LinkedIn.",
  },
  {
    id: 2,
    img: avatar_img,
    name: "Maya Sterling",
    role: "Co-Host & Creator (3.8M Subs)",
    company: "Unfiltered Culture & Pulse",
    location: "Los Angeles, CA",
    metric: "45M+ Organic Short Views",
    quote:
      "The acoustic treatment and cinema lighting make our show look like an HBO television production. Their post-production team understands watch-time psychology—our weekly episodes now consistently trend #1 on YouTube Podcasts.",
  },
  {
    id: 3,
    img: avatar_img,
    name: "Harrison Sterling",
    role: "Managing Director",
    company: "Macro Wealth & Private Capital",
    location: "London & New York",
    metric: "$140M Deal Flow Accelerated",
    quote:
      "For C-suite and billionaire investor guests, confidentiality and technical perfection are non-negotiable. Studio360 provides a private VIP green room, broadcast-level audio engineering, and flawless remote backup whenever guests dial in from Zurich or Tokyo.",
  },
];

interface TestimonialProps {
  style_service?: boolean;
}

const Testimonial = ({ style_service }: TestimonialProps) => {
  return (
    <section className={`${style_service ? 'cs_shape_wrap_3' : 'cs_primary_bg cs_shape_wrap_2'} cs_testimonial_section position-relative overflow-hidden py-5`}>
      {!style_service && (
        <>
          <div className="cs_shape_1">
            <svg width="1041" height="1005" viewBox="0 0 1041 1005" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.3" cx="538.5" cy="502.5" r="501.5" stroke="#454545" strokeWidth="2" />
              <circle opacity="0.3" cx="501.5" cy="526.5" r="458.5" stroke="#454545" strokeWidth="2" />
              <circle opacity="0.3" cx="453" cy="570" r="424" stroke="#454545" strokeWidth="2" />
              <circle opacity="0.3" cx="396" cy="591" r="377" stroke="#454545" strokeWidth="2" />
              <circle opacity="0.3" cx="330" cy="630" r="329" stroke="#454545" strokeWidth="2" />
            </svg>
          </div>

          <div className="cs_shape_2">
            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.23">
                <path d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z" fill="#454545" />
                <path d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z" fill="#454545" />
              </g>
            </svg>
          </div>
        </>
      )}

      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="cs_testimonial_thumb_box">
              <Image 
                src={testimonial_thumb} 
                alt="StudioGrowth360 Live Podcast Recording Session" 
                priority
              />
              <div className="cs_testimonial_thumb_badge">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span style={{ color: '#FF6B00', fontSize: '15px' }}>★★★★★</span>
                  <span className="text-white font-weight-bold font-size-14">4.9 / 5.0</span>
                </div>
                <div className="text-secondary font-size-12">Over 90+ verified executive &amp; creator reviews</div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className={`cs_testimonial ${style_service ? 'cs_style_2' : 'cs_style_1 cs_color_1'}`}>
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                Client Endorsements
              </div>
              <h2 className="cs_testimonial_title mb-4">
                What Founders &amp; Growth Leaders Say About Us
              </h2>

              <Swiper
                loop={true}
                speed={1000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                modules={[Autoplay, Pagination]}
                pagination={{
                  el: ".cs_testimonial_pagination",
                  clickable: true,
                }}
                className="cs_slider cs_slider_4"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="cs_testimonial_box pb-2">
                      <div className="cs_testimonial_quote_icon mb-3">
                        <svg width="45" height="32" viewBox="0 0 61 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z" fill="#FF6B00" />
                          <path d="M35.0312 26.2855H48.0156L39.3593 43.4283H52.3438L61 26.2855V0.571289H35.0312V26.2855Z" fill="#FF6B00" />
                        </svg>
                      </div>

                      <div className="badge mb-3 px-3 py-2" style={{ backgroundColor: 'rgba(255,107,0,0.15)', color: '#FF6B00', fontSize: '13px' }}>
                        Result: {item.metric}
                      </div>

                      <p className="cs_testimonial_quote text-white mb-4" style={{ fontSize: '18px', lineHeight: '1.7', fontStyle: 'italic' }}>
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      <div className="cs_testimonial_author pt-3 border-top border-secondary border-opacity-25">
                        <h4 className="text-white mb-1 font-size-18 font-weight-bold">{item.name}</h4>
                        <p className="text-secondary mb-0 font-size-14">
                          {item.role}, <strong className="text-white-50">{item.company}</strong> · {item.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dedicated Swiper Pagination Container (Positioned Safely Below Content) */}
              <div className="cs_testimonial_pagination_wrapper d-flex align-items-center justify-content-between mt-4 pt-2">
                <div className="cs_testimonial_pagination d-flex align-items-center gap-2"></div>
                <span className="text-secondary font-size-12 d-none d-sm-block">
                  Swipe or click to view all endorsements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
