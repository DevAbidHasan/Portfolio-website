import React, { useState, useEffect } from "react";
import logo from "../../public/logo-1.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Work", href: "/#projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "experience", "projects"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const map = {
              hero: "Home",
              about: "About",
              experience: "Experience",
              projects: "Work",
            };
            if (map[e.target.id]) setActive(map[e.target.id]);
          }
        });
      },
      { rootMargin: "-42% 0px -48% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        }}
      >
        <div className="page-container flex items-center justify-between h-16 md:h-[4.5rem]">
          <a href="/#hero" className="flex items-center gap-3 shrink-0 group">
            <img src={logo} alt="" className="w-8 h-8 rounded-lg transition-transform group-hover:scale-105" />
            <span className="font-display text-sm font-medium hidden sm:block" style={{ color: "var(--text)" }}>
              Abid Hasan
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setActive(l.name)}
                className={`nav-link ${active === l.name ? "active" : ""}`}
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="nav-desktop-actions">
            <ThemeToggle />
            <a href="/#contact" className="btn-pill btn-pill-primary btn-pill-nav">
              Contact
              <span className="btn-pill-icon" aria-hidden="true">
                <FiArrowRight size={16} />
              </span>
            </a>
          </div>

          <div className="nav-mobile-actions">
            <ThemeToggle />
            <button type="button" onClick={() => setOpen(true)} aria-label="Menu" className="nav-menu-btn">
              <HiOutlineMenu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`nav-drawer-backdrop md:hidden ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        className={`nav-drawer md:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="flex items-center justify-between p-5" style={{ borderBottom: "1px solid var(--border)" }}>
          <span className="font-display font-semibold" style={{ color: "var(--text)" }}>Navigation</span>
          <button type="button" onClick={() => setOpen(false)} style={{ color: "var(--text-muted)" }}>
            <HiOutlineX size={22} />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-1">
          {NAV.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => { setActive(l.name); setOpen(false); }}
              className={`nav-link !py-3 ${active === l.name ? "active" : ""}`}
            >
              {l.name}
            </a>
          ))}
        </div>
        <div className="nav-drawer-cta">
          <a
            href="#contact"
            className="btn-pill btn-pill-primary btn-pill-nav"
            onClick={() => setOpen(false)}
          >
            Contact
            <span className="btn-pill-icon" aria-hidden="true">
              <FiArrowRight size={16} />
            </span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
