import AOS from "aos";

export const REVEAL_DURATION = 1100;
export const REVEAL_EASING = "ease-out-cubic";

let initialized = false;

export function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return;
  }

  if (!initialized) {
    AOS.init({
      duration: REVEAL_DURATION,
      once: true,
      easing: REVEAL_EASING,
      offset: 90,
      anchorPlacement: "top-bottom",
    });
    initialized = true;
    return;
  }

  AOS.refresh();
}
