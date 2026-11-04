"use client";

import { gsap } from "gsap";
import { useEffect } from "react";
import DarkLight from "@/components/common/DarkLight";
import MouseMove from "@/components/common/MouseMove";
import ScrollToTop from "@/components/common/ScrollToTop";

import { usePathname } from "next/navigation";
import { animationCreate } from "@/utils/utils";

import animationTitle from "@/utils/animationTitle";
import buttonAnimation from "@/utils/buttonAnimation";

import {
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from "@/plugins";

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin, SplitText);
  } catch (err) {
    console.warn("GSAP plugin registration warning:", err);
  }
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Load bootstrap JS safely on client
    import("bootstrap/dist/js/bootstrap").catch(() => {});

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setTimeout(() => {
      animationCreate();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let smoother: any = null;
    try {
      const wrapperEl = document.querySelector("#smooth-wrapper");
      const contentEl = document.querySelector("#smooth-content");

      if (wrapperEl && contentEl && ScrollSmoother && typeof ScrollSmoother.create === "function") {
        smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.2,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }
    } catch (err) {
      // Graceful fallback to native scroll
    }

    return () => {
      try {
        if (smoother && typeof smoother.kill === "function") {
          smoother.kill();
        }
      } catch (err) {}
    };
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setTimeout(() => {
      try {
        buttonAnimation();
        animationTitle();
      } catch (err) {}
    }, 100);

    return () => {
      clearTimeout(timer);
      try {
        if (ScrollTrigger && typeof ScrollTrigger.getAll === "function") {
          ScrollTrigger.getAll().forEach((trigger: { kill: () => void }) => {
            if (trigger && typeof trigger.kill === "function") {
              trigger.kill();
            }
          });
        }
      } catch (err) {}
    };
  }, [pathname]);

  return (
    <>
      {children}
      <MouseMove />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
