"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";

export function AgencyHeader() {
  return <HeaderOne />;
}

export function AgencyFooter() {
  return <FooterOne />;
}

export function AgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="sg_agency_body_content" style={{ minHeight: "80vh" }}>
            {children}
          </div>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
