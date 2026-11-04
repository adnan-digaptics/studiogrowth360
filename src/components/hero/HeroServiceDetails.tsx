
import React from 'react';
import Image from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';


interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Digital experiences, built around your business.",
  description: `StudioGrowth360 brings strategy, design, and technology together to create useful digital experiences. We shape each engagement around your goals, your audience, and the practical needs of your team.`,
  features: [
    `Custom website design and responsive development`,
    `Brand identity, UI/UX, and creative production`,
    `Search, paid media, and conversion-focused marketing`,
    `Automation and integrations that support your workflows`,
  ]
}
const { title, description, features } = hero_contact

const HeroServiceDetails = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                 {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>                    
                  ))} 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default HeroServiceDetails;