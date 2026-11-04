'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolio_data, { PortfolioDataType } from '@/data/portfolio_data';

const categories = ["All", "Tech & Venture", "Culture & Creators", "Deep Tech & AI", "Finance & Wealth", "Health & Performance", "Music & Audio"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState<PortfolioDataType[]>(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      setItems(portfolio_data);
    } else {
      const filtered = portfolio_data.filter((item) => item.category === cateItem);
      setItems(filtered);
    }
  };

  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>

      <section className="cs_portfolio_archive_section">
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                Our Portfolio
              </div>
              <h1 className="cs_section_title anim_text_writting" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
                Portfolio of Featured Shows &amp; Podcasts
              </h1>
              <p className="text-secondary font-size-18 mt-3" style={{ maxWidth: '720px', lineHeight: '1.7' }}>
                Explore signature video podcasts, executive interview series, and viral creator productions recorded, mixed, and syndicated by Studio360.
              </p>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_30"></div>

          {/* Category Filter Tabs */}
          <div className="d-flex flex-wrap gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => filterItems(cat)}
                className={`cs_btn py-2 px-3 rounded-pill text-uppercase font-size-13 font-weight-bold transition-all ${
                  activeCategory === cat ? 'bg-warning text-dark font-weight-bold' : 'bg-dark text-white-50 border border-secondary'
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? '#FF6B00' : undefined,
                  borderColor: activeCategory === cat ? '#FF6B00' : 'rgba(255,255,255,0.15)',
                  color: activeCategory === cat ? '#FFFFFF' : undefined,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="row g-5">
            {items.map((item) => (
              <div key={item.id} className="col-12 col-lg-6">
                <article className="cs_portfolio_card p-3 rounded-4 h-100 d-flex flex-column" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div className="position-relative rounded-4 overflow-hidden mb-4" style={{ aspectRatio: '16/10' }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 991px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      className="transition-transform"
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge rounded-pill" style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(8px)', color: '#FF6B00', border: '1px solid rgba(255, 107, 0, 0.35)', padding: '8px 14px', fontSize: '13px' }}>
                        {item.impact}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-secondary font-size-13 text-uppercase font-weight-bold" style={{ letterSpacing: '1px' }}>
                      {item.client} · {item.category}
                    </span>
                  </div>

                  <h2 className="text-white font-size-24 font-weight-bold mb-2">
                    {item.title}
                  </h2>

                  <p className="text-secondary font-size-15 mb-4 flex-grow-1" style={{ lineHeight: '1.7' }}>
                    {item.des}
                  </p>

                  <div className="pt-3 border-top border-secondary d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div className="d-flex flex-wrap gap-2">
                      {item.services.map((srv, sIdx) => (
                        <span key={sIdx} className="badge bg-dark border border-secondary text-white-50 font-size-12">
                          {srv}
                        </span>
                      ))}
                    </div>
                    <Link href="/contact" className="cs_btn cs_style_1 cs_color_1 py-2 px-3 font-size-13">
                      <span>Book Studio for Your Show</span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
    </>
  );
};

export default Portfolio;
