import React from 'react';
import Link from 'next/link';
import studioServices from '@/data/studioServices';
import { publicAsset } from '@/utils/publicAsset';

const HeroService = () => {
  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>
      <section className="position-relative cs_services_archive_section">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                Our Services
              </div>
              <h1 className="cs_section_title anim_word_writting" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
                Services Engineered for Maximum Reach &amp; Authority
              </h1>
              <p className="text-secondary font-size-18 mt-3" style={{ maxWidth: '780px', lineHeight: '1.7' }}>
                From acoustically tuned 4K multi-cam studio recording to viral vertical shorts extraction and global RSS distribution, we handle every technical step so you can focus 100% on high-impact conversations.
              </p>
            </div>
          </div>

          <div className="cs_height_60 cs_height_lg_40"></div>

          {/* Detailed Service Cards */}
          <div className="cs_card_1_list">
            {studioServices.map((item, i) => (
              <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns mb-4 p-4 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${publicAsset('/assets/img/podcast/podcast_audio_console.jpg')}')`,
                    }}
                  >
                    {item.id}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                      <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(255,107,0,0.15)', color: '#FF6B00', fontSize: '12px', padding: '6px 12px' }}>
                        Impact: {item.metrics}
                      </span>
                    </div>

                    <h2 className="cs_card_title font-size-28 font-weight-bold mb-2">
                      <Link href="/contact" className="text-white hover-orange">{item.title}</Link>
                    </h2>

                    <div className="cs_card_subtitle mb-4">
                      <p className="text-secondary font-size-16" style={{ lineHeight: '1.7' }}>
                        {item.description}
                      </p>

                      <div className="row mt-4 g-3">
                        <div className="col-lg-7">
                          <h4 className="text-white font-size-15 font-weight-bold mb-2">Key Deliverables:</h4>
                          <ul className="list-unstyled text-secondary font-size-14 mb-0">
                            {item.deliverables.map((deliverable, dIdx) => (
                              <li key={dIdx} className="mb-2 d-flex align-items-start">
                                <span className="me-2" style={{ color: '#FF6B00' }}>✓</span>
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-5">
                          <h4 className="text-white font-size-15 font-weight-bold mb-2">Technology &amp; Tooling:</h4>
                          <div className="d-flex flex-wrap gap-2">
                            {item.technologies.map((tech, tIdx) => (
                              <span key={tIdx} className="badge bg-dark border border-secondary text-white-50 px-2 py-1 font-size-12">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cs_card_link_wrap">
                  <Link href="/contact" className="cs_card_link" aria-label={`Request ${item.title}`}>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z" fill="currentColor"></path>
                      </svg>
                    </span>
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="cs_height_60 cs_height_lg_40"></div>
    </>
  );
};

export default HeroService;
