import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      className={`theme-toggle ${className}`}
    >
      {theme === "light" ? <HiOutlineMoon size={18} /> : <HiOutlineSun size={18} />}
    </button>
  );
};

export default ThemeToggle;
