import { gsap } from "gsap"; 

const buttonAnimation = async () => {  
  if (typeof window === "undefined") return;

  try {
    const jQuery = (await import("jquery")).default;
    (function ($) {
      "use strict";

      $(".cs_hero_btn").on("mouseenter", function (e) {
        var offset = $(this).offset();
        if (!offset) return;
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;

        $(this).find("span").css({
          top: y,
          left: x,
        });
      });

      $(".cs_hero_btn").on("mouseout", function (e) {
        var offset = $(this).offset();
        if (!offset) return;
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;

        $(this).find("span").css({
          top: y,
          left: x,
        });
      });

      // Button Move Animation
      const all_btn = gsap.utils.toArray(".cs_round_btn_wrap");
      const all_btn_circle = gsap.utils.toArray(".cs_hero_btn");

      if (all_btn && all_btn.length > 0 && all_btn_circle && all_btn_circle.length > 0) {
        all_btn.forEach((btn, i) => {
          if (!btn || !all_btn_circle[i]) return;

          $(btn).on("mousemove", function (e) {
            var $this = $(btn);
            var offset = $this.offset();
            if (!offset) return;
            var relX = e.pageX - offset.left;
            var relY = e.pageY - offset.top;
            var width = $this.width() || 1;
            var height = $this.height() || 1;

            gsap.to(all_btn_circle[i], {
              duration: 0.5,
              x: ((relX - width / 2) / width) * 40,
              y: ((relY - height / 2) / height) * 40,
              ease: "power2.out",
            });
          });

          $(btn).on("mouseleave", function () {
            gsap.to(all_btn_circle[i], {
              duration: 0.5,
              x: 0,
              y: 0,
              ease: "power2.out",
            });
          });
        });
      }
    })(jQuery);
  } catch (err) {
    console.warn("buttonAnimation warning:", err);
  }
};

export default buttonAnimation;
