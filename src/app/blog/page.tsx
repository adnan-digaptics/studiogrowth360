import type { Metadata } from 'next';
import React from 'react';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import BlogArea from '@/components/blog/BlogArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';

export const metadata: Metadata = {
  title: "Studio Insights | StudioGrowth360",
  description:
    "Read StudioGrowth360's blog for field-tested playbooks on 4K video podcasting, broadcast audio mastering, viral shorts, and global RSS syndication.",
  openGraph: {
    title: "Studio Insights | StudioGrowth360",
    description:
      "Read StudioGrowth360's blog for field-tested playbooks on 4K video podcasting, broadcast audio mastering, viral shorts, and global RSS syndication.",
  },
  twitter: {
    title: "Studio Insights | StudioGrowth360",
    description:
      "Read StudioGrowth360's blog for field-tested playbooks on 4K video podcasting, broadcast audio mastering, viral shorts, and global RSS syndication.",
  },
};

const BlogPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogArea />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogPage;
