import React from "react";
import { SiGithub, SiGmail, SiCodeforces } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import Reveal from "./Reveal";

const links = [
  { href: "https://github.com/DevAbidHasan", icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/", icon: BsLinkedin, label: "LinkedIn" },
  { href: "https://codeforces.com/profile/abidhasanplabon80", icon: SiCodeforces, label: "Codeforces" },
  { href: "mailto:abidhasanplabon80@gmail.com", icon: SiGmail, label: "Email" },
];

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elevated)" }}>
      <Reveal className="page-container py-10 flex flex-col md:flex-row items-center justify-between gap-6" animation="fade-up">
        <div>
          <p className="font-display font-medium text-sm" style={{ color: "var(--text)" }}>
            Abid Hasan Plabon
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} · Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-2">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="theme-toggle !w-9 !h-9"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
