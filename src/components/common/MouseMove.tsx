"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const MouseMove = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable custom cursor on touch devices or small screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || window.innerWidth <= 1024;
    if (isTouch) return;

    const cursor1 = document.querySelector(".cs_cursor_1") as HTMLElement | null;
    const cursor2 = document.querySelector(".cs_cursor_2") as HTMLElement | null;
    if (!cursor1 || !cursor2) return;

    let hasMoved = false;

    const mousemoveHandler = (e: MouseEvent) => {
      try {
        if (!hasMoved) {
          hasMoved = true;
          // Set initial position instantly at cursor without flying from (0,0)
          gsap.set([cursor1, cursor2], {
            x: e.clientX,
            y: e.clientY,
          });
          cursor1.classList.add("cs_cursor_visible");
          cursor2.classList.add("cs_cursor_visible");
          return;
        }

        gsap.to(cursor1, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.12,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(cursor2, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.28,
          ease: "power2.out",
          overwrite: "auto",
        });
      } catch {
        // silent fallback
      }
    };

    const mouseleaveHandler = () => {
      cursor1.classList.remove("cs_cursor_visible");
      cursor2.classList.remove("cs_cursor_visible");
    };

    const mouseenterHandler = () => {
      if (hasMoved) {
        cursor1.classList.add("cs_cursor_visible");
        cursor2.classList.add("cs_cursor_visible");
      }
    };

    window.addEventListener("mousemove", mousemoveHandler, { passive: true });
    document.addEventListener("mouseleave", mouseleaveHandler);
    document.addEventListener("mouseenter", mouseenterHandler);

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler);
      document.removeEventListener("mouseleave", mouseleaveHandler);
      document.removeEventListener("mouseenter", mouseenterHandler);
    };
  }, []);

  return (
    <>
      <div className="cs_cursor_1"></div>
      <div className="cs_cursor_2"></div>
    </>
  );
};

export default MouseMove;
