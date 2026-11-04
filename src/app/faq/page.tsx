import type { Metadata } from 'next';
import React from 'react';
import FaqArea from '@/components/faq/FaqArea';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently Asked Questions (FAQs) about StudioGrowth360 studio bookings, 4K multi-cam equipment, turnaround times, and production packages.",
  openGraph: {
    title: "FAQs | Studio360",
    description:
      "Frequently Asked Questions (FAQs) about StudioGrowth360 studio bookings, 4K multi-cam equipment, turnaround times, and production packages.",
  },
  twitter: {
    title: "FAQs | Studio360",
    description:
      "Frequently Asked Questions (FAQs) about StudioGrowth360 studio bookings, 4K multi-cam equipment, turnaround times, and production packages.",
  },
};

const FaqPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqPage;
