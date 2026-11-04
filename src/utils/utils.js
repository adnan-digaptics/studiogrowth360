export const animationCreate = () => {
  if (typeof window === "undefined") return;

  try {
    import("wowjs")
      .then((module) => {
        const WOWClass = module.default?.WOW || module.default || module.WOW;
        if (typeof WOWClass === "function") {
          new WOWClass({ live: false }).init();
        }
      })
      .catch(() => {
        // silent fallback
      });
  } catch {
    // silent fallback
  }
};
