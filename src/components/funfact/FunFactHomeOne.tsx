import React from 'react';
import Count from '../common/Count';

interface DataType {
  id: number;
  title: string;
  prefix?: string;
  number: number;
  suffix: string;
  sub: string;
}

const counter_data: DataType[] = [
  {
    id: 1,
    title: "Episodes Produced",
    number: 1200,
    suffix: "+",
    sub: "Broadcast across 180+ signature shows",
  },
  {
    id: 2,
    title: "Global Stream Views",
    number: 500,
    suffix: "M+",
    sub: "Generated on YouTube, Spotify & Apple",
  },
  {
    id: 3,
    title: "Top 100 Charted Shows",
    number: 14,
    suffix: "+",
    sub: "In Business, Tech & Culture categories",
  },
  {
    id: 4,
    title: "Rapid Edit Turnaround",
    prefix: "< ",
    number: 24,
    suffix: "h",
    sub: "Full episode master + 10 viral shorts",
  },
];

interface FunFactProps {
  style_2?: boolean;
  style_3?: boolean;
}

const FunFactHomeOne = ({ style_2, style_3 }: FunFactProps) => {
  return (
    <section className="cs_funfact_section py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {counter_data.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-3">
              <div className="cs_funfact cs_style1 p-3 p-xl-4 rounded-3 h-100" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)' }}>
                <div className="d-flex align-items-baseline mb-2">
                  {item.prefix && <span className="cs_primary_font font-weight-bold" style={{ fontSize: 'clamp(20px, 3.5vw, 32px)', color: '#FF6B00' }}>{item.prefix}</span>}
                  <div className="cs_funfact_number">
                    <div className="amin_auto_count cs_primary_font" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800 }}>
                      <Count number={item.number} add_style={true} />
                    </div>
                  </div>
                  <span className="cs_primary_font font-weight-bold" style={{ fontSize: 'clamp(20px, 3.5vw, 32px)', color: '#FF6B00' }}>{item.suffix}</span>
                </div>
                <div className="cs_funfact_text">
                  <h4 className="mb-1 text-white font-size-16 font-size-xl-18 font-weight-bold">{item.title}</h4>
                  <p className="cs_m0 text-secondary font-size-13 font-size-xl-14">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactHomeOne;
