'use client'

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";
import award_thumb_1 from "@/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/assets/img/award_thumb_3.jpg";

interface AwardItem {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  project: string;
  year: string;
  des: string;
}

const award_data: AwardItem[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: "The Signal Awards",
    year: "2024",
    title: "Best Studio Production & Video Direction",
    project: "The Founder's Orbit",
    des: "Awarded top honours for groundbreaking 4K multi-cam video podcast production, dynamic lighting, and pristine vocal fidelity.",
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: "Spotify Podcaster Network",
    year: "2024",
    title: "Production Studio of the Year",
    project: "Unfiltered Culture & Pulse",
    des: "Celebrated across the Spotify Creator Network for scaling creator shows into weekly trending charts with viral shorts.",
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: "The Webby Awards",
    year: "2023",
    title: "Excellence in Audio Engineering & Sound Design",
    project: "The Deep Tech Blueprint",
    des: "Honoured by the International Academy of Digital Arts and Sciences for pristine acoustic mastering and immersive sound design.",
  },
];

interface AwardsHomeOneProps {
  style_2?: boolean;
}

const AwardsHomeOne = ({ style_2 }: AwardsHomeOneProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section className="sg_awards_section py-5 position-relative overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-5 gap-3">
          <div>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-2" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
              <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800 }}>✦ INDUSTRY HONOURS</span>
            </div>
            <h2 className="text-white mb-2" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800 }}>
              Award-Winning Craft Celebrated Globally
            </h2>
            <p className="text-secondary font-size-17 mb-0" style={{ maxWidth: '620px' }}>
              Recognized by the world&apos;s leading audio, media and creator production juries for pushing acoustic and video boundaries.
            </p>
          </div>

          <div className="text-secondary font-size-14 font-weight-bold">
            <span style={{ color: '#FF6B00' }}>28</span> Global Nominations &amp; Trophies
          </div>
        </div>

        {/* Awards Clean List */}
        <div className="d-flex flex-column gap-3">
          {award_data.map((item, i) => (
            <div
              key={item.id}
              onMouseEnter={() => setActiveTab(i)}
              onMouseLeave={() => setActiveTab(null)}
              className="p-4 rounded-4 transition-all position-relative"
              style={{
                background: activeTab === i ? 'rgba(255, 107, 0, 0.05)' : 'rgba(18, 18, 24, 0.75)',
                border: activeTab === i ? '1px solid rgba(255, 107, 0, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: activeTab === i ? '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 107, 0, 0.15)' : 'none',
                transform: activeTab === i ? 'translateY(-2px)' : 'none',
              }}
            >
              <div className="row align-items-center g-3 g-lg-4">
                {/* Col 1: Award Logo & Year */}
                <div className="col-12 col-md-4 col-xl-3 d-flex align-items-center gap-3">
                  <div className="p-2 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '56px', height: '56px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <Image src={item.ward_img} alt={`${item.brand} award icon`} width={36} height={36} style={{ objectFit: 'contain' }} />
                  </div>
                  <div>
                    <span className="badge px-2 py-1 rounded-pill font-size-11 font-weight-bold" style={{ background: 'rgba(255, 107, 0, 0.15)', color: '#FF6B00' }}>
                      {item.year}
                    </span>
                    <div className="text-white font-weight-bold font-size-15 font-size-lg-16 mt-1" style={{ lineHeight: 1.3 }}>{item.brand}</div>
                  </div>
                </div>

                {/* Col 2: Title & Project Description */}
                <div className="col-12 col-md-5 col-xl-6">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h3 className="text-white font-size-17 font-size-lg-18 font-weight-bold mb-0">
                      {item.title}
                    </h3>
                  </div>
                  <div className="font-size-13 font-weight-bold mb-1" style={{ color: '#FF6B00' }}>
                    Project: {item.project}
                  </div>
                  <p className="text-secondary font-size-13 font-size-lg-14 mb-0" style={{ lineHeight: 1.6 }}>
                    {item.des}
                  </p>
                </div>

                {/* Col 3: Visual Badge / Status */}
                <div className="col-12 col-md-3 col-xl-3 d-flex justify-content-start justify-content-md-end">
                  <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill font-size-12 font-size-lg-13 font-weight-bold" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#FFFFFF' }}>
                    <span>🏆</span>
                    <span>Verified Winner</span>
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

export default AwardsHomeOne;
