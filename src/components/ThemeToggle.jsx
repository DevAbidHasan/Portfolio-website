import { useTheme } from "../context/ThemeContext";

const SunGlyph = () => (
  <svg className="theme-switch-glyph" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3.25" fill="currentColor" />
    <path
      d="M12 4.1v2.1M12 17.8v2.1M4.1 12h2.1M17.8 12h2.1M6.2 6.2l1.5 1.5M16.3 16.3l1.5 1.5M6.2 17.8l1.5-1.5M16.3 7.7l1.5-1.5"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
    />
  </svg>
);

const MoonGlyph = () => (
  <svg className="theme-switch-glyph" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M15.4 4.8a6.8 6.8 0 1 0 6.1 9.9A5.6 5.6 0 1 1 15.4 4.8z"
      fill="currentColor"
    />
  </svg>
);

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`theme-switch${isDark ? " is-dark" : ""} ${className}`.trim()}
    >
      <span className="theme-switch-track">
        <span className="theme-switch-icon theme-switch-icon--sun">
          <SunGlyph />
        </span>
        <span className="theme-switch-icon theme-switch-icon--moon">
          <MoonGlyph />
        </span>
        <span className="theme-switch-thumb" />
      </span>
    </button>
  );
};

export default ThemeToggle;
