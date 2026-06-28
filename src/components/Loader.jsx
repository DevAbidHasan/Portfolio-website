import { useEffect, useRef, useState } from "react";
import avatar from "../../public/profile-avatar.webp";

const MESSAGES = [
  "Getting things ready…",
  "Pulling up my work…",
  "Almost there…",
];

const easeOutCubic = (t) => 1 - (1 - t) ** 3;

const Loader = ({ exiting = false }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 1500;
    startRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      setProgress(easeOutCubic(t));
      if (t < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (exiting) return undefined;

    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % MESSAGES.length);
    }, 520);

    return () => clearInterval(interval);
  }, [exiting]);

  return (
    <div
      className={`loader-screen${exiting ? " is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-backdrop" aria-hidden="true" />

      <div className="loader-content">
        <div className="loader-avatar-wrap">
          <img
            src={avatar}
            alt=""
            className="loader-avatar"
            width={72}
            height={72}
            decoding="async"
          />
          <span className="loader-avatar-status" aria-hidden="true" />
        </div>

        <p className="loader-greeting">Hey there,</p>
        <p className="loader-name">Abid Hasan Plabon</p>

        <p className="loader-status" key={messageIndex}>
          {MESSAGES[messageIndex]}
        </p>

        <div className="loader-progress" aria-hidden="true">
          <span className="loader-progress-fill" style={{ transform: `scaleX(${progress})` }} />
        </div>

        <div className="loader-dots" aria-hidden="true">
          <span className="loader-dot" />
          <span className="loader-dot" />
          <span className="loader-dot" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
