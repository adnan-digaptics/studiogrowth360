'use client'
import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}[]
const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `What makes a useful brand strategy?`,
    des: `Connect audience, positioning, and visual direction before investing in a new identity.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Planning a website around customer needs`,
    des: `Shape navigation and content around the questions your customers need answered.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `A clearer way to connect marketing channels`,
    des: `Use consistent messaging and useful measurement to guide campaign decisions.`,
  },
  {
    id: 4,
    img: blog_img_1,
    title: `When should a business consider automation?`,
    des: `Recognize repetitive handoffs and decide where a defined workflow could help.`,
  },
  {
    id: 5,
    img: blog_img_2,
    title: `The role of content in a strong digital presence`,
    des: `Useful content helps people understand a brand and take a confident next step.`,
  },
  {
    id: 6,
    img: blog_img_3,
    title: `A more thoughtful approach to user experience`,
    des: `Improve clarity, accessibility, and feedback to make digital products easier to use.`,
  },

]



const BlogHomeOne = ({ style_2, style_3 }: any) => {
  return (
    <>
      <section>
        <div className="container">
          {style_3 ?
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2 className="cs_section_title anim_heading_title">
                  Related Insights <br /> New Day New Inspiration
                </h2>
              </div>
            </div>
            :
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <div className="cs_section_subtitle anim_div_ShowZoom">
                  Studio Insights
                </div>
                <h2 className="cs_section_title anim_heading_title">
                  New Day <br />New Inspiration
                </h2>
              </div>
              <div className="cs_section_heading_right cs_btn_anim">
                <Link href="/blog" className="cs_btn cs_style_1">
                  <span>View All Insights</span>
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                      fill="currentColor"></path>
                  </svg>
                </Link>
              </div>
            </div>
          }
          <div className="cs_height_100 cs_height_lg_60"></div>
          <Swiper
            loop={true}
            speed={1000}
            spaceBetween={30}
            slidesPerView={"auto"}
            pagination={{
              el: ".cs_pagination",
              clickable: true
            }}
            className={`cs_slider cs_slider_3 anim_blog ${style_2 ? '' : 'style_slider'}`}>
            {blog_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="cs_post cs_style_1">
                  <Link href="/blog" className="cs_post_thumb">
                    <Image src={item.img} alt={item.title} width={600} height={380} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                  </Link>
                  <div className="cs_post_info">
                    <h2 className="cs_post_title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h2>
                    <p className="cs_m0">
                      {item.des}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </section>
      {style_2 ? null : style_3 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}


    </>
  );
};

export default BlogHomeOne;