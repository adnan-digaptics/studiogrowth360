import type { Metadata } from 'next';
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import Service from '@/components/service/Service';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import StudioGrowthApproach from '@/components/about/StudioGrowthApproach';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://studiogrowth360.com";
const siteBaseUrl = `${siteUrl.replace(/\/+$/, "")}/`;
const heroImageUrl = new URL("assets/img/podcast/hero_podcast_studio.jpg", siteBaseUrl).toString();

export const metadata: Metadata = {
  title: "Home",
  description:
    "StudioGrowth360 is an award-winning luxury 4K podcast recording studio, full-service audio engineering facility, and turnkey viral shorts production network.",
  openGraph: {
    title: "Home | Studio360",
    description:
      "StudioGrowth360 is an award-winning luxury 4K podcast recording studio, full-service audio engineering facility, and turnkey viral shorts production network.",
    images: [heroImageUrl],
  },
  twitter: {
    title: "Home | Studio360",
    description:
      "StudioGrowth360 is an award-winning luxury 4K podcast recording studio, full-service audio engineering facility, and turnkey viral shorts production network.",
    images: [heroImageUrl],
  },
};

const HomePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
            <BrandHomeOne />
            <MarqueeAreaHomeOne />
            <FunFactHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            <PortfolioHomeOne />
            <Service />
            <AwardsHomeOne />
            <Testimonial />
            <StudioGrowthApproach />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
