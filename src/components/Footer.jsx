import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub, SiGmail, SiCodeforces } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../public/logo-1.png";
import Reveal from "./Reveal";

const EXPLORE = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const SOCIAL = [
  { href: "https://github.com/DevAbidHasan", icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/", icon: BsLinkedin, label: "LinkedIn" },
  { href: "https://codeforces.com/profile/abidhasanplabon80", icon: SiCodeforces, label: "Codeforces" },
  { href: "mailto:abidhasanplabon80@gmail.com", icon: SiGmail, label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="page-container footer-main">
        <Reveal className="footer-grid" animation="fade-up">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <img src={logo} alt="" width={32} height={32} />
              <span>Abid Hasan Plabon</span>
            </a>
            <p className="footer-tagline">
              Full Stack Developer building reliable web products with the MERN stack.
            </p>
            <p className="footer-location">Dhaka, Bangladesh · Open to remote</p>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Explore</p>
            <ul className="footer-links">
              {EXPLORE.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-title">Connect</p>
            <ul className="footer-links">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  >
                    <Icon size={14} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-status-col">
            <p className="footer-col-title">Status</p>
            <p className="footer-status">
              <span className="footer-status-dot" aria-hidden="true" />
              Available for full-time, part-time & freelance
            </p>
            <a href="#contact" className="btn-pill btn-pill-primary footer-cta-btn">
              Get in touch
              <span className="btn-pill-icon" aria-hidden="true">
                <FiArrowRight size={16} />
              </span>
            </a>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} Abid Hasan Plabon. All rights reserved.</p>
          <p className="footer-meta">
            <a
              href="https://github.com/DevAbidHasan/Portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio-website
            </a>
            <span className="footer-meta-sep">·</span>
            <span>Built with React & Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
