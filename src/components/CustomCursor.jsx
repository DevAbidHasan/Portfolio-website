import { useEffect, useRef, useState } from "react";

const DOT_LERP = 0.62;
const RING_LERP = 0.11;

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, .btn-primary, .btn-secondary, .btn-pill, .theme-toggle, .theme-switch, .nav-menu-btn, .nav-link";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [onPage, setOnPage] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const apply = () => {
      const on = fine.matches;
      setEnabled(on);
      document.documentElement.classList.toggle("has-custom-cursor", on);
    };
    apply();
    fine.addEventListener("change", apply);
    return () => {
      fine.removeEventListener("change", apply);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      setOnPage(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      setHovering(!!el?.closest(INTERACTIVE));
    };

    const onLeave = () => setOnPage(false);
    const onDown = () => setPressing(true);
    const onUp = () => setPressing(false);

    const animate = () => {
      dotPos.current.x += (target.current.x - dotPos.current.x) * DOT_LERP;
      dotPos.current.y += (target.current.y - dotPos.current.y) * DOT_LERP;
      ringPos.current.x += (target.current.x - ringPos.current.x) * RING_LERP;
      ringPos.current.y += (target.current.y - ringPos.current.y) * RING_LERP;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  const state = [
    onPage ? "is-visible" : "",
    hovering ? "is-hovering" : "",
    pressing ? "is-pressing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className={`cursor-ring ${state}`} />
      <div ref={dotRef} className={`cursor-dot ${state}`} />
    </div>
  );
};

export default CustomCursor;
