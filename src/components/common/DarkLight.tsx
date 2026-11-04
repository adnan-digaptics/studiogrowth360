'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dark from '@/assets/img/close.svg';
import brightnes from '@/assets/img/brightnes.svg';

const DarkLight = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeMode, setActiveMode] = useState<string>('dark'); 

  useEffect(() => {
    try {
      const storedMode = typeof window !== 'undefined' ? localStorage.getItem('mode') : null;
      if (storedMode) {
        setActiveMode(storedMode);
      }
    } catch {
      // localStorage may be disabled in private/sandboxed windows
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && document.body) {
      document.body.classList.add('dark');
      try {
        localStorage.setItem('mode', 'dark');
      } catch {
        // silent
      }
    }
  }, [activeMode]);

  const handleModeChange = (mode: string) => {
    setActiveMode(mode);
  };

  const openDarkLight = () => {
    setOpen(!open);
  };

  return (
    <div className="cs_toggle">
      <div className="setting_mode" style={{ right: open ? '120px' : '0px' }}>
        <button id="open" onClick={openDarkLight} style={{ display: open ? 'none' : 'block' }} aria-label="Open theme switcher">
          <Image src={brightnes} alt="Brightness icon" />
        </button>
        <button id="clecel" onClick={openDarkLight} style={{ display: open ? 'inline-block' : 'none' }} aria-label="Close theme switcher">
          <Image src={dark} alt="Close icon" />
        </button>
      </div>
      <div className="cs_mode_btn js-mode-type" style={{ right: open ? '0px' : '-120px' }}>
        <button
          type="button"
          className={activeMode === 'light' ? 'active' : ''}
          onClick={() => handleModeChange('light')}
          data-mode="light"
        >
          Light
        </button>

        <button
          type="button"
          className={activeMode === 'dark' ? 'active' : ''}
          onClick={() => handleModeChange('dark')}
          data-mode="dark"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default DarkLight;
