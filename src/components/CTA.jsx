import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { SiGithub, SiCodeforces } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import img from "../../public/PXL_20240130_070044507.jpg";
import resume from "../../public/Resume_MERN_Plabon.pdf";
import Reveal from "./Reveal";

const SOCIAL = [
  { href: "https://github.com/DevAbidHasan", icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/abid-hasan-plabon-a4aa222a1/", icon: BsLinkedin, label: "LinkedIn" },
  { href: "https://codeforces.com/profile/abidhasanplabon80", icon: SiCodeforces, label: "Codeforces" },
];

const CTA = () => {
  return (
    <section id="contact" className="section-block pb-20 md:pb-28">
      <div className="page-container">
        <div className="cta-panel">
          <div className="cta-ring" aria-hidden="true" />

          <div className="cta-grid">
            <Reveal className="cta-headline" animation="fade-right">
              <p className="section-eyebrow !mb-6">
                <span className="section-index">{"{07}"}</span>
                <span className="section-eyebrow-sep"> — </span>
                Contact
              </p>
              <h2 className="cta-title">
                Looking for a skilled developer? Let&apos;s build something amazing together
                <span className="cta-dot" aria-hidden="true">.</span>
              </h2>
            </Reveal>

            <Reveal className="cta-side" animation="fade-left" delay={200}>
              <div className="cta-profile">
                <div className="cta-waves" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <img src={img} alt="Abid Hasan Plabon" className="cta-avatar" />
                <div className="cta-profile-text">
                  <p className="cta-name">Abid Hasan Plabon</p>
                  <p className="cta-role">Full Stack Developer</p>
                  <div className="cta-socials">
                    {SOCIAL.map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="cta-social-icon"
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cta-contact">
                <p className="cta-contact-label">Contact me</p>
                <a href="mailto:abidhasanplabon80@gmail.com" className="cta-email">
                  abidhasanplabon80<span className="cta-email-at">@</span>gmail.com
                </a>
                <p className="cta-blurb">
                  Looking for a skilled{" "}
                  <strong>full stack developer</strong> who builds{" "}
                  <strong>production-ready</strong>, scalable applications? Let&apos;s connect!
                </p>
                <a href={resume} download="Resume_MERN_Plabon.pdf" className="btn-pill btn-pill-primary mt-7">
                  View my resume
                  <span className="btn-pill-icon" aria-hidden="true">
                    <FiArrowRight size={18} />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
