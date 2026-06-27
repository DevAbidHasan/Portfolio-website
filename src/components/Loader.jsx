import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

const Loader = ({ exiting = false }) => {
  const [progress, setProgress] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 1200;
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      setProgress(Math.round(easeOutCubic(t) * 100));
      if (t < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`loader-screen${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-ambient" aria-hidden="true" />
      <div className="loader-orb loader-orb-a" aria-hidden="true" />
      <div className="loader-orb loader-orb-b" aria-hidden="true" />

      <div className="loader-content">
        <p className="loader-eyebrow">
          <span className="loader-eyebrow-dot" />
          Portfolio
        </p>

        <h1 className="loader-title" aria-hidden="true">
          <span className="loader-word">Abid Hasan</span>
          <span className="loader-word">Plabon</span>
        </h1>

        <div className="loader-progress-wrap">
          <div className="loader-track">
            <div className="loader-fill" style={{ transform: `scaleX(${progress / 100})` }} />
            <div className="loader-shimmer" />
          </div>
          <span className="loader-percent">{progress}</span>
        </div>

        <p className="loader-tagline">Crafting digital experiences</p>
      </div>
    </div>
  );
};

export default Loader;
