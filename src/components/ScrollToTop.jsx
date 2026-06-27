import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="theme-toggle fixed bottom-6 right-6 z-40 !shadow-md"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <FiArrowUp size={18} />
    </button>
  );
};

export default ScrollToTop;
