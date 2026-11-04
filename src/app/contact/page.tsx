import type { Metadata } from 'next';
import React from 'react';
import ContactArea from '@/components/contact/ContactArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact StudioGrowth360 to book 4K studio time, schedule an acoustic tour, or discuss your show production retainer with our team.",
  openGraph: {
    title: "Contact | Studio360",
    description:
      "Contact StudioGrowth360 to book 4K studio time, schedule an acoustic tour, or discuss your show production retainer with our team.",
  },
  twitter: {
    title: "Contact | Studio360",
    description:
      "Contact StudioGrowth360 to book 4K studio time, schedule an acoustic tour, or discuss your show production retainer with our team.",
  },
};

const ContactPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
