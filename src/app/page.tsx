import type { Metadata } from 'next';
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AgencyHero from '@/components/agency/AgencyHero';
import AgencyTrustBar from '@/components/agency/AgencyTrustBar';
import AgencyStudioShowcase from '@/components/agency/AgencyStudioShowcase';
import AgencyServicesBento from '@/components/agency/AgencyServicesBento';
import AgencyIndustriesSection from '@/components/agency/AgencyIndustriesSection';
import AgencyComparisonSection from '@/components/agency/AgencyComparisonSection';
import AgencyWhyChooseUs from '@/components/agency/AgencyWhyChooseUs';
import AgencyHowItWorks from '@/components/agency/AgencyHowItWorks';
import AgencyRoiCalculator from '@/components/agency/AgencyRoiCalculator';
import AgencyCrmSolutions from '@/components/agency/AgencyCrmSolutions';
import AgencyAutomationTech from '@/components/agency/AgencyAutomationTech';
import AgencyAiSolutions from '@/components/agency/AgencyAiSolutions';
import AgencyProcessSection from '@/components/agency/AgencyProcessSection';
import AgencyTestimonialsSection from '@/components/agency/AgencyTestimonialsSection';
import AgencyCertificationsSection from '@/components/agency/AgencyCertificationsSection';
import AgencyPricingSection from '@/components/agency/AgencyPricingSection';
import AgencyFaqSection from '@/components/agency/AgencyFaqSection';
import AgencyCtaSection from '@/components/agency/AgencyCtaSection';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';

export const metadata: Metadata = {
  title: "StudioGrowth360 | Studio Growth, CRM & Automation Partner for USA Studios",
  description:
    "We help photography, podcast, yoga, and creative studios across the USA generate more leads, automate daily operations, manage clients, and grow their businesses with powerful CRM, n8n, and AI automation solutions. Automate. Grow. Scale.",
  keywords: [
    "Studio Automation Services",
    "CRM for Photography Studios",
    "Photography Studio Lead Generation",
    "Podcast Studio Automation",
    "Yoga Studio CRM",
    "Craft Studio Automation",
    "GoHighLevel Services",
    "n8n Automation Agency",
    "Business Automation Services",
    "AI Automation for Small Businesses",
    "Lead Generation for Studios",
    "CRM Automation Solutions",
  ],
  openGraph: {
    title: "StudioGrowth360 | Automate. Grow. Scale.",
    description:
      "All-in-one studio growth, CRM & automation partner for photography, podcast, yoga, and craft studios across the USA.",
    url: "https://studiogrowth360.com",
    siteName: "StudioGrowth360",
    images: [
      {
        url: "/assets/img/studios/podcast-studio.jpg",
        width: 1200,
        height: 630,
        alt: "StudioGrowth360 Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioGrowth360 | Studio Growth, CRM & Automation Partner",
    description:
      "Grow your studio. Automate your business. Scale without limits with GoHighLevel CRM, n8n workflows, and AI voice agents.",
    images: ["/assets/img/studios/podcast-studio.jpg"],
  },
};

const HomePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* 1. Hero Section (With 4-Tab Interactive Live Dashboard Preview) */}
            <AgencyHero />

            {/* 2. Trusted Growth Solutions for Studios */}
            <AgencyTrustBar />

            {/* 2.5 Real Studio Facilities Visual Showcase (Photorealistic Studio Spaces) */}
            <AgencyStudioShowcase />

            {/* 3. Our Services (Bento Grid) */}
            <AgencyServicesBento />

            {/* 4. Industries We Serve (Who We Help) */}
            <AgencyIndustriesSection />

            {/* 5. Before vs. After Comparison Matrix (Manual Chaos vs. Automated OS) */}
            <AgencyComparisonSection />

            {/* 6. Why Choose StudioGrowth360 */}
            <AgencyWhyChooseUs />

            {/* 7. How Our Automation System Works (5-Stage Interactive Workflow) */}
            <AgencyHowItWorks />

            {/* 8. Interactive Studio Yield & ROI Modeler */}
            <AgencyRoiCalculator />

            {/* 9. Lead Generation and CRM Solutions */}
            <AgencyCrmSolutions />

            {/* 10. n8n and GoHighLevel Automation */}
            <AgencyAutomationTech />

            {/* 11. AI-Powered Business Solutions (24/7 AI Receptionist) */}
            <AgencyAiSolutions />

            {/* 12. Our 4-Step Implementation Process */}
            <AgencyProcessSection />

            {/* 13. Studio Operator Testimonials & Case Studies */}
            <AgencyTestimonialsSection />

            {/* 14. Industry Recognition & Partner Certifications */}
            <AgencyCertificationsSection />

            {/* 15. Pricing / Packages (Monthly/Annual 20% Switch) */}
            <AgencyPricingSection />

            {/* 16. Frequently Asked Questions (Accordion + Support Card) */}
            <AgencyFaqSection />

            {/* 17. Strong Call-to-Action Section */}
            <AgencyCtaSection />
          </main>
          {/* 18. Modern Footer */}
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;
