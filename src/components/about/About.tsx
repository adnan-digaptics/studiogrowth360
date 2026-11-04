import React from 'react';
import Image from 'next/image';
import { publicAsset } from '@/utils/publicAsset';

const coreValues = [
  {
    title: "Acoustic Precision",
    desc: "STC 65 soundproofing, floating floors, and custom diffusers ensure every voice cuts through with zero room echo or harsh plosives.",
  },
  {
    title: "Cinema-Grade Multi-Cam",
    desc: "Sony FX6 and FX3 cinema cameras with prime G-Master glass and live ATEM switching provide broadcast television production quality.",
  },
  {
    title: "Turnkey Session Concierge",
    desc: "From microphone level balancing by our live audio engineer to instant cloud backup at wrap, we eliminate every technical friction.",
  },
  {
    title: "Algorithmic Retention Engine",
    desc: "We analyze watch-time psychology and produce 10+ vertical shorts per episode with kinetic subtitles and sound effects built to go viral.",
  },
];

const About = () => {
  return (
    <>
      <section className="cs_about_main_section">
        <div className="cs_primary_bg py-5">
          <div className="container">
            <div className="cs_height_60 cs_height_lg_40"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text text-center">
                  <div className="cs_section_subtitle mb-2" style={{ color: '#FF6B00' }}>
                    Who We Are
                  </div>
                  <h2 className="cs_section_title anim_heading_title">
                    The Modern Media &amp; Podcast Studio
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_60 cs_height_lg_40"></div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h3 className="cs_section_title_3 text-white font-weight-bold" style={{ fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
                  Giving creators, founders, and enterprises the production power of a major broadcast network.
                </h3>
              </div>
              <div className="col-lg-6">
                <p className="cs_ternary_color font-size-18" style={{ lineHeight: '1.7' }}>
                  Creating an authoritative show shouldn&apos;t require spending hundreds of hours managing camera angles, audio plugins, noise gates, and social cutdowns.
                </p>
                <p className="cs_ternary_color font-size-18" style={{ lineHeight: '1.7' }}>
                  <strong className="text-white">Studio360</strong> is a premier luxury podcast studio and production network. We provide soundproof suites, broadcast audio engineering, 4K multi-cam switching, and a turnkey viral shorts engine so you can focus entirely on delivering world-class conversations.
                </p>
              </div>
            </div>

            <div className="cs_height_60 cs_height_lg_40"></div>

            {/* Core Values Grid */}
            <div className="row g-3 g-xl-4 mb-4">
              {coreValues.map((val, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="p-3 p-xl-4 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div className="text-warning mb-2 font-weight-bold" style={{ color: '#FF6B00' }}>
                      0{idx + 1} ✦
                    </div>
                    <h4 className="text-white font-size-18 font-weight-bold mb-2">{val.title}</h4>
                    <p className="text-secondary font-size-14 mb-0">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cs_height_80 cs_height_lg_40"></div>
          </div>
        </div>

        {/* Studio Gallery with Generated Podcast Images */}
        <div className="container mt-5">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="rounded-4 overflow-hidden h-100 shadow position-relative" style={{ minHeight: 'clamp(240px, 45vw, 360px)' }}>
                <Image
                  src={publicAsset("/assets/img/podcast/podcast_recording_session.jpg")}
                  alt="Studio360 Live Podcast Recording Session"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="rounded-4 overflow-hidden h-100 shadow position-relative" style={{ minHeight: 'clamp(240px, 45vw, 360px)' }}>
                <Image
                  src={publicAsset("/assets/img/podcast/podcast_studio_branded_sign.jpg")}
                  alt="Studio Growth 360 Acoustic Neon Suite"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex flex-column gap-4">
              <div className="rounded-4 overflow-hidden shadow position-relative" style={{ height: 'clamp(140px, 20vw, 170px)' }}>
                <Image
                  src={publicAsset("/assets/img/podcast/podcast_audio_console.jpg")}
                  alt="Podcast Audio Mixing Console"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="rounded-4 overflow-hidden shadow position-relative" style={{ height: 'clamp(140px, 20vw, 170px)' }}>
                <Image
                  src={publicAsset("/assets/img/podcast/podcast_studio_lounge.jpg")}
                  alt="VIP Creator Green Room Lounge"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_80 cs_height_lg_50"></div>
    </>
  );
};

export default About;
