
import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data: DataType[] = [
  {
    id: '01',
    title: "Listen & understand",
    description: `We begin with your goals, audience, constraints, and what success needs to mean for your business.`,
  },
  {
    id: '02',
    title: "Set a clear direction",
    description: `We align on priorities, scope, and a practical plan before creative or development work begins.`,
  },
  {
    id: '03',
    title: "Create together",
    description: `We develop the agreed strategy, design, content, or technology in close collaboration with your team.`,
  },
  {
    id: '04',
    title: "Refine & deliver",
    description: `We review the work against the brief, make agreed refinements, and prepare a considered handoff or launch.`,
  },
]


const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              A practical process from first conversation to delivery
            </h4>
            <p className="cs_mp0 anim_text">
              The right engagement depends on your goals and starting point. We align on scope and priorities first, then bring in the right mix of creative, development, and marketing support.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;