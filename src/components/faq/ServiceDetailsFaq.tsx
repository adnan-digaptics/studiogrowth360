
'use client'

import React, { useState } from 'react';


interface DataType {
  faq_data: {
    id: string;
    question: string;
    answer: string;
  }[];
  title: string;
  description: string;
  features: string[];
}

const service_faq_content: DataType = {
  faq_data: [
    {
      id: 'One',
      question: `What is the design process for branding?`,
      answer: `We begin with your audience, positioning, and goals, then shape a visual direction and a practical identity system for the touchpoints your business uses.`,
    },
    {
      id: 'Two',
      question: `What services does your agency offer?`,
      answer: `We offer website design and development, branding, digital marketing, content production, UI/UX, and automation. Scope is tailored to the goals and needs of each engagement.`,
    },
    {
      id: 'Three',
      question: `How do you approach a new project?`,
      answer: `We first learn about your goals, audience, timing, and constraints, then agree on priorities and scope. You are involved at key review points throughout the work.`,
    },
    {
      id: 'Four',
      question: `How do you handle revisions or changes to a project?`,
      answer: `We agree on review stages and feedback before work begins. If your needs change, we discuss the impact on the agreed scope and schedule before making adjustments.`,
    },
  ],
  title: `Creative, digital, and growth services`,
  description: `Choose focused support for a specific need or discuss a connected scope across strategy, design, development, content, and marketing.`,
  features: [
    `Web Design & Development`,
    `Digital Marketing`,
    `Content Creation & Creative Production`,
    `UI/UX Design & Digital Experiences`,
    `Automation & Business Solutions`,
  ]
}
const {
  faq_data,
  title,
  description,
  features
} = service_faq_content


const ServiceDetailsFaq = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="cs_service_details cs_type_2">
          <div className="cs_service_details_img">
            <div className="cs_accordeon">
              {faq_data.map((item, i) => (
                <div key={i}
                  onClick={() => toggleAccordion(i)}
                  className={`cs_accordion_item ${i === activeIndex ? 'active cs_icon' : ''}`}>
                  <div className="cs_accordion_header">
                    <p className="cs_accordion_title cs_m0" id={`heading${item.id}`}>
                      {item.question}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="30" style={{ transform: i === activeIndex ? 'rotate(-90deg)' : 'none' }}>
                      <path
                        d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                        data-name="Right" />
                    </svg>
                  </div>

                  <div className={`cs_accordion_body ${i === activeIndex ? '' : 'd-none'}`}>{item.answer}</div>
                </div>
              ))}

            </div>
          </div>
          <div className="cs_service_details_text">
            <div className="cs_specialization cs_section_heading cs_style_1">
              <div className="cs_section_heading_text">
                <h4 className="cs_section_title_4">{title}</h4>
              </div>
              <p>{description} </p>
              <div>
                <ul>
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="cs_back_to_services_btn">
              <a href="/service" className="cs_style_1">
                <span>Explore all services</span>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsFaq;