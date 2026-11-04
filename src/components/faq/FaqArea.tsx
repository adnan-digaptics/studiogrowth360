'use client'

import React, { useState } from 'react';
import Link from 'next/link';

interface FaqItem {
  id: string;
  category: string;
  question: string;
  ans: string;
}

const faq_data: FaqItem[] = [
  {
    id: "01",
    category: "Studio Equipment",
    question: "What gear and cameras are included with every studio booking?",
    ans: "Every studio booking includes 3 to 4 Sony Cinema Line cameras (FX6 / FX3) with prime G-Master glass, industry-standard Shure SM7B broadcast microphones with Cloudlifters, RØDECaster Pro II audio consoles, calibrated Aputure & Nanlite cinema lighting, and an on-site broadcast audio engineer managing your levels live in real-time.",
  },
  {
    id: "02",
    category: "Turnaround Time",
    question: "How quickly do we receive the raw files, master episode, and viral shorts?",
    ans: "Immediately after your session wraps, raw 4K video files and uncompressed 48kHz WAV audio stems are synced to your private cloud drive. Full multi-cam edited master episodes, loudness calibrated for Spotify and Apple Podcasts, along with 10 kinetic-subtitled vertical shorts, are delivered within 24 to 48 hours.",
  },
  {
    id: "03",
    category: "Remote Guests",
    question: "Can I interview remote guests who are located in another city or country?",
    ans: "Yes. Our suites are integrated with Riverside.fm 4K enterprise capture. Our on-site producer conducts the remote guest tech check, monitors audio levels, and captures local uncompressed 4K video from your remote guest while you host comfortably inside our soundproof studio.",
  },
  {
    id: "04",
    category: "Viral Social Shorts",
    question: "How are the viral vertical shorts selected and formatted?",
    ans: "Our editors comb through your entire recording to identify the highest-converting emotional hooks and debate moments. We edit each into a 9:16 vertical short with kinetic animated typography, dynamic face-tracking punch-ins, and sound effects engineered for maximum watch-time on TikTok, Instagram Reels, and YouTube Shorts.",
  },
  {
    id: "05",
    category: "Syndication & Launch",
    question: "Do you handle RSS syndication, cover art, and YouTube chaptering?",
    ans: "Yes. For launching shows or existing programs, we manage your global RSS feed across Spotify, Apple Podcasts, Amazon Music, and YouTube Podcasts. We also produce custom YouTube thumbnail designs, timestamped show notes, and transcripts formatted for Google search indexing.",
  },
  {
    id: "06",
    category: "VIP Hospitality",
    question: "What privacy and green room amenities are provided for high-profile guests?",
    ans: "Studio360 features a private VIP creator green room lounge with cognac leather seating, complimentary espresso bar, high-speed Wi-Fi, and soundproof glass overlooking the studio floor. Enterprise mutual NDAs are standard for all confidential corporate and celebrity sessions.",
  },
  {
    id: "07",
    category: "Production Packages",
    question: "Do you offer recurring show memberships and production retainers?",
    ans: "Yes. Most creators and enterprise shows enroll in our Weekly or Bi-Weekly Production Retainer. Retainers include reserved studio hours, dedicated audio engineering, full multi-cam post-production, 10 viral shorts per episode, and priority turnaround at discounted rates.",
  },
  {
    id: "08",
    category: "Studio Tours",
    question: "Can we schedule an in-person tour of the studio suites before our first session?",
    ans: "Absolutely. We encourage hosts, founders, and executive teams to tour our soundproof recording suites, test our Shure microphones, and preview custom lighting presets with our head engineer. You can request a studio tour anytime via our booking form.",
  },
];

const categories = ["All", "Studio Equipment", "Turnaround Time", "Remote Guests", "Viral Social Shorts", "Syndication & Launch", "VIP Hospitality", "Production Packages", "Studio Tours"];

const FaqArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openItem, setOpenItem] = useState<string | null>("01");

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const filteredFaqs =
    activeCategory === "All"
      ? faq_data
      : faq_data.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="cs_height_180 cs_height_lg_100"></div>
      <section className="cs_faq_main_section">
        <div className="container">
          {/* Header */}
          <div className="cs_section_heading cs_style_1 text-center max-w-780 mx-auto mb-5">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                Planning Your Studio Session
              </div>
              <h1 className="cs_section_title anim_text_writting" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
                Studio Guide
              </h1>
              <p className="text-secondary font-size-18 mt-3" style={{ lineHeight: '1.7' }}>
                Everything you need to know about recording suites, equipment, 24-hour turnaround, viral shorts, and turnkey podcast production.
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className="cs_btn py-2 px-3 rounded-pill text-uppercase font-size-12 font-weight-bold transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? '#FF6B00' : 'rgba(255, 255, 255, 0.04)',
                  borderColor: activeCategory === cat ? '#FF6B00' : 'rgba(255, 255, 255, 0.12)',
                  color: activeCategory === cat ? '#FFFFFF' : '#A1A1AA',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="max-w-920 mx-auto">
            <div className="d-flex flex-column gap-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openItem === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="p-4 rounded-4 transition-all"
                    style={{
                      background: isOpen ? 'rgba(255, 107, 0, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                      border: isOpen ? '1px solid rgba(255, 107, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div
                      className="d-flex justify-content-between align-items-center cursor-pointer user-select-none"
                      onClick={() => toggleItem(faq.id)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <span className="cs_primary_font font-weight-bold" style={{ color: '#FF6B00', fontSize: '18px' }}>
                          {faq.id}
                        </span>
                        <h2 className="text-white font-size-18 font-weight-bold mb-0">
                          {faq.question}
                        </h2>
                      </div>
                      <span
                        className="rounded-circle d-flex align-items-center justify-content-center text-white ms-3"
                        style={{
                          width: '32px',
                          height: '32px',
                          background: isOpen ? '#FF6B00' : 'rgba(255, 255, 255, 0.08)',
                          fontSize: '18px',
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        +
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mt-3 pt-3 border-top border-secondary border-opacity-25">
                        <p className="text-secondary font-size-15 mb-0" style={{ lineHeight: '1.75' }}>
                          {faq.ans}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Support Footer Callout */}
            <div className="text-center mt-5 p-4 rounded-4" style={{ background: 'rgba(255, 107, 0, 0.05)', border: '1px solid rgba(255, 107, 0, 0.2)' }}>
              <h3 className="text-white font-size-20 font-weight-bold mb-2">Have a unique show brief or technical requirement?</h3>
              <p className="text-secondary font-size-15 mb-3">Our executive production directors are available to discuss studio availability, custom set design, and multi-camera configurations.</p>
              <Link href="/contact" className="cs_btn cs_style_1 cs_color_1 py-2 px-4 font-size-14">
                <span>Book a Studio Tour or Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
