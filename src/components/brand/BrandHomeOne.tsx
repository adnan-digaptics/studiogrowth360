'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';

type DataType = StaticImageData[];
import brand_img_1 from "@/assets/img/partner_1.svg";
import brand_img_2 from "@/assets/img/partner_2.svg";
import brand_img_3 from "@/assets/img/partner_3.svg";
import brand_img_4 from "@/assets/img/partner_4.svg";
import brand_img_5 from "@/assets/img/partner_5.svg";
import brand_img_6 from "@/assets/img/partner_6.svg";
import brand_img_7 from "@/assets/img/partner_7.svg";
import brand_img_8 from "@/assets/img/partner_8.svg";
import brand_img_9 from "@/assets/img/partner_11.svg";

const brand_data: DataType = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_6,
  brand_img_7,
  brand_img_8,
  brand_img_9,
];

import brand_thumb_1 from "@/assets/img/partner_9.svg";
import brand_thumb_2 from "@/assets/img/partner_10.svg";
import brand_thumb_3 from "@/assets/img/partner_11.svg";
import brand_thumb_4 from "@/assets/img/partner_12.svg";
import brand_thumb_5 from "@/assets/img/partner_13.svg";
import brand_thumb_6 from "@/assets/img/partner_14.svg";
import brand_thumb_7 from "@/assets/img/partner_15.svg";
import brand_thumb_8 from "@/assets/img/partner_1.svg";
import brand_thumb_9 from "@/assets/img/partner_3.svg";

const brand_thumb_data: DataType = [
  brand_thumb_1,
  brand_thumb_2,
  brand_thumb_3,
  brand_thumb_4,
  brand_thumb_5,
  brand_thumb_6,
  brand_thumb_7,
  brand_thumb_8,
  brand_thumb_9,
];

interface BrandHomeOneProps {
  style_2?: boolean;
}

const BrandHomeOne = ({ style_2 }: BrandHomeOneProps) => {
  return (
    <section className="cs_brand_partners_section py-4">
      <div className="container text-center mb-4">
        <p className="cs_font_16 text-uppercase text-secondary font-weight-bold" style={{ letterSpacing: '2px', fontSize: '13px' }}>
          SYNDICATED ACROSS GLOBAL AUDIO &amp; VIDEO NETWORKS · STREAMED BY MILLIONS WORLDWIDE
        </p>
      </div>

      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) => (
                <div key={i} className="cs_partner_logo opacity-75">
                  <Image src={item} alt="Partner Brand Logo" />
                </div>
              ))}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_40">
            <div className="cs_partner_logo_wrap">
              {brand_data.map((item, i) => (
                <div key={`dup-${i}`} className="cs_partner_logo opacity-75">
                  <Image src={item} alt="Partner Brand Logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_20 cs_height_lg_20"></div>

      <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push">
        <div className="cs_moving_section_in">
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) => (
                <div key={i} className="cs_partner_logo opacity-75">
                  <Image src={item} alt="Partner Brand Logo" />
                </div>
              ))}
            </div>
          </div>
          <div className="cs_moving_section cs_animation_speed_50">
            <div className="cs_partner_logo_wrap">
              {brand_thumb_data.map((item, i) => (
                <div key={`dup-${i}`} className="cs_partner_logo opacity-75">
                  <Image src={item} alt="Partner Brand Logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHomeOne;
