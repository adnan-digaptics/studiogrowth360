'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blog_data, { BlogItem } from '@/data/blog_data';

const categories = ["All", "Show Strategy", "Audio Engineering", "Viral Shorts", "Executive Shows", "Studio Design", "Syndication & SEO"];

const BlogArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState<BlogItem[]>(blog_data);

  const filterCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setItems(blog_data);
    } else {
      setItems(blog_data.filter((b) => b.category === cat));
    }
  };

  const featured = blog_data[0];

  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>

      <section className="cs_blog_archive_section">
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                Studio Insights
              </div>
              <h1 className="cs_section_title anim_heading_title" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
                Studio Insights &amp; Playbooks
              </h1>
              <p className="text-secondary font-size-18 mt-3" style={{ maxWidth: '720px', lineHeight: '1.7' }}>
                Tactical guides on 4K multi-cam video podcasting, broadcast vocal engineering, algorithmic viral shorts, and global RSS syndication.
              </p>
            </div>
          </div>

          <div className="cs_height_50 cs_height_lg_30"></div>

          {/* Category Filter */}
          <div className="d-flex flex-wrap gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => filterCategory(cat)}
                className={`cs_btn py-2 px-3 rounded-pill text-uppercase font-size-13 font-weight-bold transition-all ${
                  activeCategory === cat ? 'bg-warning text-dark' : 'bg-dark text-white-50 border border-secondary'
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

          {/* Featured Article Banner (Only on 'All') */}
          {activeCategory === "All" && (
            <div className="mb-5 p-4 rounded-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 107, 0, 0.25)' }}>
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div className="rounded-3 overflow-hidden" style={{ aspectRatio: '16/10', position: 'relative' }}>
                    <Image src={featured.img} alt={featured.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge" style={{ backgroundColor: 'rgba(255,107,0,0.15)', color: '#FF6B00', fontSize: '12px' }}>
                      Featured Guide
                    </span>
                    <span className="text-secondary font-size-13">{featured.readTime}</span>
                    <span className="text-secondary">·</span>
                    <span className="text-secondary font-size-13">{featured.date}</span>
                  </div>
                  <h2 className="text-white font-size-28 font-weight-bold mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-secondary font-size-16 mb-4" style={{ lineHeight: '1.7' }}>
                    {featured.des}
                  </p>
                  <Link href="/contact" className="cs_btn cs_style_1 cs_color_1">
                    <span>Discuss With Our Strategists</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="row g-4">
            {items.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <article className="cs_blog_card p-3 rounded-4 h-100 d-flex flex-column" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                  <div className="rounded-3 overflow-hidden position-relative mb-3" style={{ aspectRatio: '16/10' }}>
                    <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className="position-absolute top-0 start-0 m-2">
                      <span className="badge bg-dark bg-opacity-75 text-white font-size-11">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-secondary font-size-12">{item.readTime}</span>
                    <span className="text-secondary">·</span>
                    <span className="text-secondary font-size-12">{item.date}</span>
                  </div>

                  <h3 className="text-white font-size-18 font-weight-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-secondary font-size-14 mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {item.des}
                  </p>

                  <div className="pt-2 border-top border-secondary mt-auto">
                    <Link href="/contact" className="text-white-50 font-size-13 text-decoration-none hover-orange d-inline-flex align-items-center gap-1">
                      <span>Explore Growth Strategy</span>
                      <span style={{ color: '#FF6B00' }}>→</span>
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

export default BlogArea;
