import type { Metadata } from 'next';
import React from 'react';
import BannerAbout from '@/components/brand/BannerAbout';
import About from '@/components/about/About';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Service from '@/components/service/Service';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about StudioGrowth360 — our luxury 4K podcast suites, broadcast audio engineering, Sony Cinema rigs, and full-service media production network.",
  openGraph: {
    title: "About | Studio360",
    description:
      "Learn about StudioGrowth360 — our luxury 4K podcast suites, broadcast audio engineering, Sony Cinema rigs, and full-service media production network.",
  },
  twitter: {
    title: "About | Studio360",
    description:
      "Learn about StudioGrowth360 — our luxury 4K podcast suites, broadcast audio engineering, Sony Cinema rigs, and full-service media production network.",
  },
};

const AboutPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BannerAbout />
            <About />
            <FunFactHomeOne style_2={true} />
            <Service />
            <AwardsHomeOne />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
