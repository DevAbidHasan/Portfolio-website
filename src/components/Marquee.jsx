import { useEffect, useRef } from "react";

const MAX_SCROLL_BOOST = 0.45;

const Marquee = ({ items, speed = 40 }) => {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const boostRef = useRef(0);
  const scrollBoostRef = useRef(0);
  const pausedRef = useRef(false);
  const frameRef = useRef(null);
  const lastFrameRef = useRef(performance.now());
  const doubled = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      loopWidthRef.current = track.scrollWidth / 2;
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    let lastScrollY = window.scrollY;
    let lastScrollT = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const dt = Math.max(now - lastScrollT, 16);
      const velocity = Math.abs(window.scrollY - lastScrollY) / dt;
      lastScrollY = window.scrollY;
      lastScrollT = now;

      scrollBoostRef.current = Math.min(velocity * 0.1, MAX_SCROLL_BOOST);
    };

    const tick = (now) => {
      const dt = Math.min((now - lastFrameRef.current) / 1000, 0.032);
      lastFrameRef.current = now;

      boostRef.current += (scrollBoostRef.current - boostRef.current) * 0.14;
      scrollBoostRef.current *= 0.9;

      const loopWidth = loopWidthRef.current;
      if (!pausedRef.current && loopWidth > 0) {
        const basePxPerSec = loopWidth / speed;
        const multiplier = reduced ? 0.6 : 1 + boostRef.current;
        offsetRef.current -= basePxPerSec * multiplier * dt;

        if (offsetRef.current <= -loopWidth) {
          offsetRef.current += loopWidth;
        }

        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [speed, items]);

  const setPaused = (paused) => {
    pausedRef.current = paused;
    lastFrameRef.current = performance.now();
  };

  return (
    <div
      className="marquee-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="marquee-track marquee-track-icons">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <span
              key={`${item.label}-${i}`}
              className="marquee-icon-item"
              title={item.label}
              aria-hidden={i >= items.length}
            >
              <Icon className="marquee-icon" style={{ color: item.color }} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
