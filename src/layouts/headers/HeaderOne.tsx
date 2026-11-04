'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo_white from "@/assets/img/studiogrowth360-logo-white.svg";

interface MenuItem {
  id: number;
  title: string;
  link: string;
}

const menu_data: MenuItem[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/service" },
  { id: 4, title: "Portfolio", link: "/portfolio" },
  { id: 5, title: "Studio Insights", link: "/blog" },
  { id: 6, title: "Studio Guide", link: "/faq" },
  { id: 7, title: "Contact", link: "/contact" },
];

const HeaderOne = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setSideDrawerOpen(false);
  };

  const toggleSideDrawer = () => {
    setSideDrawerOpen((prev) => !prev);
    setMobileMenuOpen(false);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setSideDrawerOpen(false);
  };

  // Keyboard navigation listener (ESC key closes open drawers)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAll();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu or side drawer is active
  useEffect(() => {
    if (mobileMenuOpen || sideDrawerOpen) {
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
  }, [mobileMenuOpen, sideDrawerOpen]);

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 1200px)");
    const closeMenuOnBreakpointChange = (event: MediaQueryListEvent) => {
      if ((event.matches && mobileMenuOpen) || (!event.matches && sideDrawerOpen)) {
        closeAll();
      }
    };

    desktopViewport.addEventListener("change", closeMenuOnBreakpointChange);
    return () => desktopViewport.removeEventListener("change", closeMenuOnBreakpointChange);
  }, [mobileMenuOpen, sideDrawerOpen]);

  // Smooth scroll listener without layout thrashing
  useEffect(() => {
    const handleScroll = () => {
      const windowTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(windowTop > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`cs_site_header cs_style1 cs_sticky_header cs_site_header_full_width ${scrolled ? 'cs_header_scrolled' : ''}`}>
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              {/* 1. Left: Brand Logo */}
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/" aria-label="StudioGrowth360 Home" onClick={closeAll}>
                  <Image src={Logo_white} alt="StudioGrowth360 logo" priority width={210} height={36} style={{ width: 'auto', height: '36px' }} />
                </Link>
              </div>

              {/* 2. Center: Centered Desktop Navigation */}
              <div className="cs_main_header_center d-none d-xl-flex">
                <nav className="cs_nav cs_nav_desktop" aria-label="Main Navigation">
                  <ul className="cs_nav_list">
                    {menu_data.map((item) => {
                      const isActive = pathname === item.link;
                      return (
                        <li key={item.id} className={isActive ? "current-menu-item" : ""}>
                          <Link href={item.link} className={isActive ? "cs_active" : ""}>
                            <span>{item.title}</span>
                            {isActive && <span className="cs_active_dot"></span>}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* 3. Right: Desktop Action Cluster & Modern Mobile Controls */}
              <div className="cs_main_header_right">
                {/* Desktop Book CTA */}
                <div className="d-none d-xl-flex align-items-center">
                  <Link href="/contact" className="cs_btn cs_style_1 cs_header_cta">
                    <span>Book Studio Time</span>
                    <svg width="15" height="11" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>

                {/* Desktop Toolbox 4-bar Toggle */}
                <div className="cs_toolbox d-none d-xl-flex">
                  <button
                    type="button"
                    className="cs_icon_btn"
                    onClick={toggleSideDrawer}
                    aria-label={sideDrawerOpen ? "Close studio menu" : "Open studio menu"}
                    aria-expanded={sideDrawerOpen}
                    aria-controls="desktop-navigation"
                  >
                    <span className="cs_icon_btn_in">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </button>
                </div>

                {/* Mobile / Tablet Right Cluster: Quick CTA + Modern Hamburger */}
                <div className="d-flex d-xl-none align-items-center gap-2">
                  <Link
                    href="/contact"
                    className="cs_mobile_quick_book_btn d-none d-md-inline-flex"
                    onClick={closeAll}
                  >
                    <span>Book Studio</span>
                  </Link>

                  <button
                    type="button"
                    className={`cs_mobile_hamburger_btn ${mobileMenuOpen ? "active" : ""}`}
                    onClick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-navigation"
                  >
                    <span className="cs_ham_line cs_ham_line_top"></span>
                    <span className="cs_ham_line cs_ham_line_mid"></span>
                    <span className="cs_ham_line cs_ham_line_bot"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer Panel */}
      <div
        id="mobile-navigation"
        className={`cs_mobile_menu_wrapper d-xl-none ${mobileMenuOpen ? "active" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="cs_mobile_menu_backdrop" onClick={closeAll}></div>
        <div className="cs_mobile_menu_panel">
          {/* Header Bar inside Drawer */}
          <div className="cs_mobile_menu_header d-flex align-items-center justify-content-between p-3 border-bottom border-secondary border-opacity-25">
            <Link className="cs_site_branding" href="/" onClick={closeAll}>
              <Image src={Logo_white} alt="StudioGrowth360" width={160} height={28} style={{ width: 'auto', height: '28px' }} priority />
            </Link>
            <button
              type="button"
              className="cs_mobile_close_btn"
              onClick={closeAll}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Drawer Body */}
          <div className="cs_mobile_menu_body p-3 d-flex flex-column justify-content-between flex-grow-1">
            <div>
              {/* Status Pill */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(255, 107, 0, 0.12)', border: '1px solid rgba(255, 107, 0, 0.3)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6B00', boxShadow: '0 0 8px #FF6B00' }}></span>
                <span style={{ color: '#FF6B00', fontSize: '11px', fontWeight: 800, letterSpacing: '0.6px' }}>4K BROADCAST PRODUCTION</span>
              </div>

              {/* Navigation Items */}
              <ul className="cs_mobile_nav_list list-unstyled mb-4">
                {menu_data.map((item, idx) => {
                  const isActive = pathname === item.link;
                  return (
                    <li key={item.id} className="mb-2">
                      <Link
                        href={item.link}
                        onClick={closeAll}
                        className={`d-flex align-items-center justify-content-between py-2 px-3 rounded-3 text-decoration-none transition-all ${
                          isActive ? "cs_mobile_nav_active" : "cs_mobile_nav_link"
                        }`}
                      >
                        <div className="d-flex align-items-center gap-3">
                          <span className="font-monospace text-secondary font-size-12">0{idx + 1}</span>
                          <span className="font-size-16 font-weight-bold">{item.title}</span>
                        </div>
                        <span className="cs_mobile_nav_arrow">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Bottom Actions Cluster */}
            <div className="pt-3 border-top border-secondary border-opacity-20">
              <Link
                href="/contact"
                onClick={closeAll}
                className="cs_btn cs_style_1 cs_color_1 w-100 text-center py-3 d-flex align-items-center justify-content-center gap-2 text-decoration-none shadow"
                style={{
                  background: 'linear-gradient(135deg, #FFA05C 0%, #FF6B00 60%, #E65100 100%)',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#FFFFFF',
                  boxShadow: '0 8px 25px rgba(255, 107, 0, 0.45)'
                }}
              >
                <span>Book 4K Studio Session</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div className="mt-3 text-center text-secondary font-size-12">
                <div>Studio Booking: <a href="mailto:grow@360growthlab.com" className="text-white font-weight-bold text-decoration-none">grow@360growthlab.com</a></div>
                <div className="mt-1">Direct: <a href="tel:7737579417" className="text-white text-decoration-none">773-757-9417</a> · VIP Green Room &amp; NDA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Slide-out Drawer */}
      <div
        id="desktop-navigation"
        className={`cs_side_header ${sideDrawerOpen ? "active" : ""}`}
        aria-hidden={!sideDrawerOpen}
      >
        <button className="cs_close" onClick={closeAll} aria-label="Close drawer"></button>
        <div className="cs_side_header_overlay" onClick={closeAll}></div>
        <div className="cs_side_header_in">
          <Link className="cs_site_branding" href="/" onClick={closeAll}>
            <Image src={Logo_white} alt="StudioGrowth360" />
          </Link>
          <div className="row align-items-end mt-4">
            <div className="col-12 col-md-7">
              <div className="cs_box_one">
                <div className="cs_nav_black_section cs_font_changes">
                  <ul>
                    {menu_data.map((item) => (
                      <li key={item.id} className="menu-item-has-black-section cs_style_1">
                        <Link href={item.link} onClick={closeAll}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 mt-4 mt-md-0">
              <div className="cs_box_two">
                <div>
                  <p className="d-flex align-items-center mb-3">
                    <svg width="14" height="18" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.0195312C3.14027 0.0195312 0 3.01027 0 6.68621C0 7.78973 0.289693 8.88387 0.840408 9.85434L6.6172 17.8047C6.69411 17.9373 6.84065 18.0195 7 18.0195C7.15935 18.0195 7.30589 17.9373 7.3828 17.8047L13.1617 9.85105C13.7103 8.88387 14 7.78969 14 6.68617C14 3.01027 10.8597 0.0195312 7 0.0195312ZM7 10.0195C5.07014 10.0195 3.50002 8.52418 3.50002 6.68621C3.50002 4.84824 5.07014 3.35289 7 3.35289C8.92986 3.35289 10.5 4.84824 10.5 6.68621C10.5 8.52418 8.92986 10.0195 7 10.0195Z" fill="#FF6B00"/>
                    </svg>
                    <span className="ms-2 cs_white_color font-weight-bold">StudioGrowth360 Headquarters</span>
                  </p>
                  <p className="cs_ternary_color mb-3 font-size-14">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1S280+Summit+Ave+Unit+E2+Suite+1B,+Oakbrook+Terrace,+IL+60181"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary text-decoration-none hover-white"
                    >
                      1S280 Summit Ave Unit E2 Suite 1B, Oakbrook Terrace, IL 60181
                    </a>
                    <br />
                    <a href="mailto:grow@360growthlab.com" className="text-secondary text-decoration-none hover-white">
                      grow@360growthlab.com
                    </a>
                  </p>

                  <h4 className="cs_phone_number mb-3">
                    <a href="tel:7737579417" className="cs_white_color text-decoration-none">
                      <span className="text-white">773-757-9417</span>
                    </a>
                  </h4>

                  <hr className="mt-2 mb-3 border-secondary" />
                  <div>
                    <Link href="/contact" onClick={closeAll} className="cs_btn cs_style_1 cs_color_1 w-100 text-center">
                      <span>Schedule Discovery Call</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;