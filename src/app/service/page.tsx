import type { Metadata } from 'next';
import React from 'react';
import HeroService from '@/components/hero/HeroService';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Service from '@/components/service/Service';
import Testimonial from '@/components/testimonial/Testimonial';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore StudioGrowth360's podcast production services: 4K multi-cam cinema recording, live audio engineering, 24h turnaround, and viral shorts.",
  openGraph: {
    title: "Services | Studio360",
    description:
      "Explore StudioGrowth360's podcast production services: 4K multi-cam cinema recording, live audio engineering, 24h turnaround, and viral shorts.",
  },
  twitter: {
    title: "Services | Studio360",
    description:
      "Explore StudioGrowth360's podcast production services: 4K multi-cam cinema recording, live audio engineering, 24h turnaround, and viral shorts.",
  },
};

const ServicePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroService />
            <FunFactHomeOne style_2={true} />
            <Service />
            <Testimonial style_service={true} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicePage;
