import { gsap } from "gsap";
import { SplitText } from "@/plugins";

const animationTitle = () => {
  if (typeof window === "undefined") return;

  try {
    // 1. Heading title lines animation
    const splitTitleLines = gsap.utils.toArray(".anim_heading_title");
    if (splitTitleLines && splitTitleLines.length > 0) {
      splitTitleLines.forEach((splitTextLine) => {
        if (!splitTextLine || !(splitTextLine instanceof HTMLElement)) return;
        try {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "words, lines",
          });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 2. Text writing animation
    const textTextWrittings = gsap.utils.toArray(".anim_text_writting");
    if (textTextWrittings && textTextWrittings.length > 0) {
      textTextWrittings.forEach((splitTextLine) => {
        if (!splitTextLine || !(splitTextLine instanceof HTMLElement)) return;
        try {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });
          const textCharsWritting = new SplitText(splitTextLine, {
            type: "chars, words",
          });
          if (textCharsWritting.chars && textCharsWritting.chars.length > 0) {
            tl.from(
              textCharsWritting.chars,
              {
                duration: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05,
              },
              "-=0.5"
            );
          }
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 3. Word writing animation
    const textWordWrittings = gsap.utils.toArray(".anim_word_writting");
    if (textWordWrittings && textWordWrittings.length > 0) {
      textWordWrittings.forEach((splitWordLine) => {
        if (!splitWordLine || !(splitWordLine instanceof HTMLElement)) return;
        try {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitWordLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });
          const textWordWritting = new SplitText(splitWordLine, {
            type: "words",
          });
          if (textWordWritting.words && textWordWritting.words.length > 0) {
            tl.from(
              textWordWritting.words,
              {
                duration: 0.7,
                x: 80,
                delay: 0.2,
                autoAlpha: 0,
                stagger: 0.1,
              },
              "-=0.5"
            );
          }
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 4. Paragraph text animation
    const splitTextLines = gsap.utils.toArray(".anim_text");
    if (splitTextLines && splitTextLines.length > 0) {
      splitTextLines.forEach((splitTextLine) => {
        if (!splitTextLine || !(splitTextLine instanceof HTMLElement)) return;
        try {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              duration: 1.5,
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "lines",
          });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" });
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 5. Anim div show zoom
    const divShowsZoom = gsap.utils.toArray(".anim_div_ShowZoom");
    if (divShowsZoom && divShowsZoom.length > 0) {
      divShowsZoom.forEach((showsZoom) => {
        if (!showsZoom || !(showsZoom instanceof HTMLElement)) return;
        try {
          gsap.set(showsZoom, { opacity: 0, scale: 0.8 });
          gsap.to(showsZoom, {
            scrollTrigger: {
              trigger: showsZoom,
              start: "top 90%",
              end: "bottom 60%",
              markers: false,
            },
            opacity: 1,
            scale: 1,
            delay: 0.2,
            ease: "power3.out",
            duration: 0.8,
          });
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 6. Anim div show left side
    const divShowsLeftSide = gsap.utils.toArray(".anim_div_ShowLeftSide");
    if (divShowsLeftSide && divShowsLeftSide.length > 0) {
      divShowsLeftSide.forEach((showsLeft) => {
        if (!showsLeft || !(showsLeft instanceof HTMLElement)) return;
        try {
          gsap.set(showsLeft, { opacity: 0, x: -60 });
          gsap.to(showsLeft, {
            scrollTrigger: {
              trigger: showsLeft,
              start: "top 90%",
              end: "bottom 60%",
              markers: false,
            },
            opacity: 1,
            x: 0,
            ease: "power2.out",
            duration: 1,
          });
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 7. Anim div show right side
    const divShowsRightSide = gsap.utils.toArray(".anim_div_ShowRightSide");
    if (divShowsRightSide && divShowsRightSide.length > 0) {
      divShowsRightSide.forEach((showsRight) => {
        if (!showsRight || !(showsRight instanceof HTMLElement)) return;
        try {
          gsap.set(showsRight, { opacity: 0, x: 60 });
          gsap.to(showsRight, {
            scrollTrigger: {
              trigger: showsRight,
              start: "top 90%",
              end: "bottom 60%",
              markers: false,
            },
            opacity: 1,
            x: 0,
            ease: "power2.out",
            duration: 1,
          });
        } catch (e) {
          // graceful fallback
        }
      });
    }

    // 8. Anim div show downs
    const divShowsDowns = gsap.utils.toArray(".anim_div_ShowDowns");
    if (divShowsDowns && divShowsDowns.length > 0) {
      divShowsDowns.forEach((showsDown) => {
        if (!showsDown || !(showsDown instanceof HTMLElement)) return;
        try {
          gsap.set(showsDown, { opacity: 0, y: 50 });
          gsap.to(showsDown, {
            scrollTrigger: {
              trigger: showsDown,
              start: "top 90%",
              end: "bottom 60%",
              markers: false,
            },
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 1,
          });
        } catch (e) {
          // graceful fallback
        }
      });
    }
  } catch (err) {
    console.warn("animationTitle warning:", err);
  }
};

export default animationTitle;
