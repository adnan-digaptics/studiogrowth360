'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoImg from "@/assets/img/studiogrowth360-logo.svg";
import { mainServices, industrySolutions } from "@/data/agency";
import { IconContainer, getServiceVectorIcon, getIndustryVectorIcon } from "@/components/common/AgencyIcons";

const HeaderOne = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(windowTop > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_sticky_header w-100 position-sticky top-0 transition-all ${
          scrolled ? 'bg-white shadow-sm py-2' : 'bg-white py-3'
        }`}
        style={{
          zIndex: 1000,
          borderBottom: '1px solid #E2E8F0',
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* 1. Brand Logo */}
            <div className="d-flex align-items-center gap-3">
              <Link href="/" aria-label="StudioGrowth360 Home" onClick={closeAll}>
                <Image
                  src={LogoImg}
                  alt="StudioGrowth360 Logo"
                  priority
                  width={220}
                  height={38}
                  style={{ width: 'auto', height: '34px' }}
                />
              </Link>
            </div>

            {/* 2. Desktop Navigation */}
            <div className="d-none d-xl-flex align-items-center">
              <nav className="d-flex align-items-center gap-1" aria-label="Main Navigation">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-pill font-size-14 font-weight-bold text-decoration-none transition-all ${
                    pathname === "/" ? "text-primary bg-primary bg-opacity-10" : "text-secondary hover-dark"
                  }`}
                  style={{ color: pathname === "/" ? "#0066FF" : "#1E293B" }}
                >
                  Home
                </Link>

                {/* Services Dropdown */}
                <div
                  className="position-relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/services"
                    className={`px-3 py-2 rounded-pill font-size-14 font-weight-bold text-decoration-none d-flex align-items-center gap-1 transition-all ${
                      pathname.startsWith("/services") || pathname.includes("-services") ? "text-primary bg-primary bg-opacity-10" : "text-secondary hover-dark"
                    }`}
                    style={{ color: pathname.startsWith("/services") ? "#0066FF" : "#1E293B" }}
                  >
                    <span>Services</span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      style={{
                        transition: "transform 0.2s ease",
                        transform: activeDropdown === "services" ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Services Mega Menu */}
                  {activeDropdown === "services" && (
                    <div
                      className="position-absolute start-0 top-100 pt-2"
                      style={{ zIndex: 1050, width: "720px", marginLeft: "-100px" }}
                    >
                      <div
                        className="p-4 rounded-4 shadow-lg border"
                        style={{
                          background: "#FFFFFF",
                          borderColor: "#E2E8F0",
                          boxShadow: "0 25px 60px rgba(15, 23, 42, 0.12), 0 0 30px rgba(0, 102, 255, 0.05)",
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom border-light">
                          <span className="font-monospace text-uppercase font-size-11 font-weight-bold" style={{ color: "#0066FF", letterSpacing: "1px" }}>
                            OUR CORE STUDIO AUTOMATION SERVICES
                          </span>
                          <span className="font-size-12 text-secondary">
                            USA Studio Growth &amp; Tech Systems
                          </span>
                        </div>

                        <div className="row g-2">
                          {mainServices.map((srv) => (
                            <div key={srv.id} className="col-6">
                              <Link
                                href={`/${srv.slug}`}
                                onClick={closeAll}
                                className="p-2 rounded-3 text-decoration-none d-flex align-items-start gap-2 sg_dropdown_service_item"
                                style={{ borderRadius: "10px" }}
                              >
                                <IconContainer size={32} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="8px" className="mt-1 flex-shrink-0">
                                  {getServiceVectorIcon(srv.slug, 16, "#0066FF")}
                                </IconContainer>
                                <div>
                                  <div className="text-dark font-size-13 font-weight-bold">
                                    {srv.title}
                                  </div>
                                  <div className="text-secondary font-size-11 text-truncate" style={{ maxWidth: "230px" }}>
                                    {srv.tagline}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 mt-3 border-top border-light d-flex align-items-center justify-content-between">
                          <span className="font-size-12 text-secondary">
                            Built for GoHighLevel, n8n, Stripe, and Meta/Google Ads
                          </span>
                          <Link
                            href="/services"
                            onClick={closeAll}
                            className="text-primary font-size-12 font-weight-bold text-decoration-none"
                            style={{ color: "#0066FF" }}
                          >
                            Explore All 7 Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Industries Dropdown ("Who We Help") */}
                <div
                  className="position-relative"
                  onMouseEnter={() => setActiveDropdown("industries")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href="/industries-we-serve"
                    className={`px-3 py-2 rounded-pill font-size-14 font-weight-bold text-decoration-none d-flex align-items-center gap-1 transition-all ${
                      pathname.includes("industries") ? "text-primary bg-primary bg-opacity-10" : "text-secondary hover-dark"
                    }`}
                    style={{ color: pathname.includes("industries") ? "#0066FF" : "#1E293B" }}
                  >
                    <span>Who We Help</span>
                    <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary ms-1 font-size-10 px-2 py-1" style={{ color: "#0066FF" }}>
                      4 Verticals
                    </span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      style={{
                        transition: "transform 0.2s ease",
                        transform: activeDropdown === "industries" ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <path d="M1 1L5 5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  {/* Industries Dropdown Menu */}
                  {activeDropdown === "industries" && (
                    <div
                      className="position-absolute start-0 top-100 pt-2"
                      style={{ zIndex: 1050, width: "480px" }}
                    >
                      <div
                        className="p-3 rounded-4 shadow-lg border"
                        style={{
                          background: "#FFFFFF",
                          borderColor: "#E2E8F0",
                          boxShadow: "0 25px 60px rgba(15, 23, 42, 0.12)",
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-between pb-2 mb-2 border-bottom border-light">
                          <span className="font-monospace text-uppercase font-size-11 font-weight-bold" style={{ color: "#0066FF" }}>
                            SPECIALIZED STUDIO VERTICALS
                          </span>
                        </div>

                        <div className="d-flex flex-column gap-1">
                          {industrySolutions.map((ind) => (
                            <Link
                              key={ind.id}
                              href={`/${ind.slug}`}
                              onClick={closeAll}
                              className="p-2 rounded-3 text-decoration-none d-flex align-items-center justify-content-between sg_dropdown_service_item"
                            >
                              <div className="d-flex align-items-center gap-2">
                                <IconContainer size={32} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.2)" radius="8px" className="flex-shrink-0">
                                  {getIndustryVectorIcon(ind.slug, 16, "#0066FF")}
                                </IconContainer>
                                <div>
                                  <div className="text-dark font-size-13 font-weight-bold">
                                    {ind.name}
                                  </div>
                                  <div className="text-secondary font-size-11">
                                    {ind.tagline}
                                  </div>
                                </div>
                              </div>
                              <span className="text-primary font-size-12">→</span>
                            </Link>
                          ))}
                        </div>

                        <div className="pt-2 mt-2 border-top border-light text-center">
                          <Link href="/industries-we-serve" onClick={closeAll} className="font-size-12 text-primary font-weight-bold text-decoration-none">
                            View All Industry Solutions &amp; Case Studies →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/pricing"
                  className={`px-3 py-2 rounded-pill font-size-14 font-weight-bold text-decoration-none transition-all ${
                    pathname === "/pricing" ? "text-primary bg-primary bg-opacity-10" : "text-secondary hover-dark"
                  }`}
                  style={{ color: pathname === "/pricing" ? "#0066FF" : "#1E293B" }}
                >
                  Pricing
                </Link>

                <Link
                  href="/about"
                  className={`px-3 py-2 rounded-pill font-size-14 font-weight-bold text-decoration-none transition-all ${
                    pathname === "/about" ? "text-primary bg-primary bg-opacity-10" : "text-secondary hover-dark"
                  }`}
                  style={{ color: pathname === "/about" ? "#0066FF" : "#1E293B" }}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className={`px-3 py-2 rounded-pill font-size-14 font-weight-bold text-decoration-none transition-all ${
                    pathname === "/contact" ? "text-primary bg-primary bg-opacity-10" : "text-secondary hover-dark"
                  }`}
                  style={{ color: pathname === "/contact" ? "#0066FF" : "#1E293B" }}
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* 3. Action CTAs */}
            <div className="d-flex align-items-center gap-2 gap-md-3">
              <Link
                href="/book-consultation"
                className="sg_btn_primary font-size-13 py-2 px-3 px-md-4 d-none d-sm-inline-flex"
                style={{ borderRadius: "9999px" }}
              >
                <span>Book Free Consultation</span>
                <span className="font-size-14">→</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <div className="d-flex d-xl-none align-items-center">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle Mobile Menu"
                  className="btn p-2 border rounded-3 bg-light"
                  style={{ cursor: "pointer" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`position-fixed inset-0 bg-dark bg-opacity-50 transition-all ${
          mobileMenuOpen ? "opacity-100 pe-auto" : "opacity-0 pe-none"
        }`}
        style={{ zIndex: 9998, transition: "opacity 0.3s ease" }}
        onClick={closeAll}
      ></div>

      {/* Mobile Drawer Content */}
      <div
        className="position-fixed top-0 end-0 bg-white shadow-lg p-4 overflow-y-auto"
        style={{
          width: "min(340px, 85vw)",
          height: "100vh",
          zIndex: 9999,
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
          <Image src={LogoImg} alt="StudioGrowth360" width={170} height={30} style={{ width: 'auto', height: '26px' }} />
          <button onClick={closeAll} className="btn border-0 font-size-20 text-secondary p-1">
            ✕
          </button>
        </div>

        <div className="d-flex flex-column gap-2 mb-4">
          <Link href="/" onClick={closeAll} className="text-dark font-size-15 font-weight-bold py-2 text-decoration-none">
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="py-2 border-top">
            <div className="font-size-14 font-weight-bold mb-2" style={{ color: "#0066FF" }}>
              Our Services (7)
            </div>
            <div className="d-flex flex-column gap-2 ps-2 border-start ms-1">
              {mainServices.map((srv) => (
                <Link
                  key={srv.id}
                  href={`/${srv.slug}`}
                  onClick={closeAll}
                  className="text-secondary font-size-13 text-decoration-none d-flex align-items-center gap-2 py-1"
                >
                  <IconContainer size={26} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)" radius="6px">
                    {getServiceVectorIcon(srv.slug, 14)}
                  </IconContainer>
                  <span className="text-dark font-weight-bold">{srv.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Industries Accordion */}
          <div className="py-2 border-top">
            <div className="font-size-14 font-weight-bold mb-2" style={{ color: "#0066FF" }}>
              Who We Help (4 Verticals)
            </div>
            <div className="d-flex flex-column gap-2 ps-2 border-start ms-1">
              {industrySolutions.map((ind) => (
                <Link
                  key={ind.id}
                  href={`/${ind.slug}`}
                  onClick={closeAll}
                  className="text-secondary font-size-13 text-decoration-none d-flex align-items-center gap-2 py-1"
                >
                  <IconContainer size={26} bg="rgba(0, 102, 255, 0.08)" border="1px solid rgba(0, 102, 255, 0.15)" radius="6px">
                    {getIndustryVectorIcon(ind.slug, 14)}
                  </IconContainer>
                  <span className="text-dark font-weight-bold">{ind.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/pricing" onClick={closeAll} className="text-dark font-size-15 font-weight-bold py-2 text-decoration-none border-top">
            Pricing
          </Link>
          <Link href="/about" onClick={closeAll} className="text-dark font-size-15 font-weight-bold py-2 text-decoration-none border-top">
            About Us
          </Link>
          <Link href="/contact" onClick={closeAll} className="text-dark font-size-15 font-weight-bold py-2 text-decoration-none border-top">
            Contact Us
          </Link>
        </div>

        <div className="pt-3 border-top">
          <Link
            href="/book-consultation"
            onClick={closeAll}
            className="sg_btn_primary w-100 justify-content-center text-center font-size-14 py-3"
          >
            <span>Book Free Strategy Call</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
