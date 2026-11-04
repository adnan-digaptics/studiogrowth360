import React from 'react';
import Image from 'next/image';
import iconEmblem from '@/assets/img/studiogrowth360-icon.svg';

const BannerAbout = () => {
  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>
      <section className="cs_banner_about_section">
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                About StudioGrowth360
              </div>
              <h1 className="cs_section_title anim_text_writting" style={{ fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: '1.15' }}>
                About Our 4K Recording Suites <br /> &amp; Broadcast Media Network
              </h1>
            </div>
            <div className="cs_section_heading_right mt-4 mt-lg-0">
              <div className="cs_animated_badge">
                <div className="rounded_text rotating">
                  <svg viewBox="0 0 200 200">
                    <path
                      id="textPathAbout"
                      d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                      transform="translate(100,100)"
                      fill="none"
                      strokeWidth="0"
                    ></path>
                    <g fontSize="20px">
                      <text textAnchor="start">
                        <textPath className="coloring" href="#textPathAbout" startOffset="0%">
                          StudioGrowth360 · 360° Digital Growth Studio · &nbsp;
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="position-absolute cs_ceneter_text d-flex align-items-center justify-content-center">
                  <Image src={iconEmblem} alt="StudioGrowth360 Emblem" width={56} height={56} style={{ borderRadius: '12px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_60 cs_height_lg_30"></div>
    </>
  );
};

export default BannerAbout;
