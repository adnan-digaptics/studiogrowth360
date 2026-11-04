import React from 'react';
import Link from 'next/link';
import studioServices from '@/data/studioServices';
import { publicAsset } from '@/utils/publicAsset';

const ServiceHomeOne = () => {
  return (
    <section className="cs_primary_bg position-relative cs_service_home_section py-5">
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
          <div className="cs_section_heading_text">
            <div className="cs_section_subtitle anim_div_ShowZoom" style={{ color: '#FF6B00' }}>
              Turnkey Production &amp; Distribution
            </div>
            <h2 className="cs_section_title anim_heading_title">
              Our 360° Podcast Production Services
            </h2>
          </div>
          <div className="cs_section_heading_right cs_btn_anim">
            <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
              <span>Explore All 6 Services</span>
              <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="cs_height_50 cs_height_lg_30"></div>
        <div className="cs_card_1_list d-flex flex-column gap-4">
          {studioServices.map((item, i) => (
            <div key={i} className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns p-4 rounded-4" style={{ background: 'rgba(18, 18, 24, 0.75)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="cs_card_left">
                <div
                  className="cs_card_number cs_primary_font"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${publicAsset(item.img)})`,
                  }}
                >
                  {item.id}
                </div>
              </div>
              <div className="cs_card_right">
                <div className="cs_card_right_in">
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                    <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(255,107,0,0.15)', color: '#FF6B00', fontSize: '12px', padding: '6px 12px' }}>
                      {item.metrics}
                    </span>
                  </div>
                  <h3 className="cs_card_title mb-2">
                    <Link href="/service">{item.title}</Link>
                  </h3>
                  <div className="cs_card_subtitle mb-3 text-secondary">
                    {item.shortDesc}
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {item.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary-subtle text-white-50" style={{ fontSize: '11px', fontWeight: 500 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cs_card_link_wrap">
                <Link href="/service" className="cs_card_link" aria-label={`Explore ${item.title}`}>
                  <span>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z" fill="currentColor" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHomeOne;
