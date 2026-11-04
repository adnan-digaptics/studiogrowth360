import type { Metadata } from 'next';
import React from 'react';
import Portfolio from '@/components/portfolio/Portfolio';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore StudioGrowth360's portfolio of featured video podcasts, creator shows, and enterprise media productions recorded, mixed, and syndicated in our suites.",
  openGraph: {
    title: "Portfolio | Studio360",
    description:
      "Explore StudioGrowth360's portfolio of featured video podcasts, creator shows, and enterprise media productions recorded, mixed, and syndicated in our suites.",
  },
  twitter: {
    title: "Portfolio | Studio360",
    description:
      "Explore StudioGrowth360's portfolio of featured video podcasts, creator shows, and enterprise media productions recorded, mixed, and syndicated in our suites.",
  },
};

const PortfolioPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Portfolio />
            <AwardsHomeOne />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioPage;
