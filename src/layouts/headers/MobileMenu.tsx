'use client'

import Link from 'next/link';
import React from 'react';

interface MenuItem {
  id: number;
  title: string;
  link: string;
  badge?: string;
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

interface MobileMenuProps {
  active?: boolean;
  navTitle?: string;
  openMobileMenu?: (menu: string) => void;
  onItemClick?: () => void;
}

const MobileMenu = ({ active, onItemClick }: MobileMenuProps) => {
  return (
    <ul className={`cs_nav_list ${active ? "cs_mobile_active" : ""}`}>
      {menu_data.map((menu) => (
        <li key={menu.id}>
          <Link href={menu.link} onClick={onItemClick}>
            <span>{menu.title}</span>
            <span className="cs_menu_arrow d-xl-none" style={{ color: '#FF6B00', fontSize: '15px' }}>→</span>
          </Link>
        </li>
      ))}
      <li className="d-xl-none cs_mobile_menu_cta_item pt-3">
        <Link
          href="/contact"
          onClick={onItemClick}
          className="cs_btn cs_style_1 cs_color_1 w-100 justify-content-center text-center py-3"
          style={{
            background: 'linear-gradient(135deg, #FF944D 0%, #FF6B00 60%, #E65100 100%)',
            color: '#FFFFFF',
            borderRadius: '12px',
            fontWeight: 700,
            fontSize: '15px',
          }}
        >
          <span>Book Studio Time</span>
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
