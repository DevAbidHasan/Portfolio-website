import React from "react";
import { FiArrowRight } from "react-icons/fi";
import avatarImg from "../../public/profile-avatar.webp";
import resume from "../../public/Resume_MERN_Plabon.pdf";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const CTA = () => {
  return (
    <section id="contact" className="section-block">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{09}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Contact
            </p>
            <h2 className="section-title">Let&apos;s talk</h2>
            <p className="mt-4 text-body max-w-md">
              Have a role, project, or question? Drop a message — I usually reply within a day or two.
            </p>

            <a
              href={resume}
              download="Resume_MERN_Plabon.pdf"
              className="btn-pill btn-pill-secondary cta-resume-btn"
            >
              View resume
              <span className="btn-pill-icon" aria-hidden="true">
                <FiArrowRight size={18} />
              </span>
            </a>

            <div className="cta-aside">
              <div className="cta-profile">
                <div className="cta-avatar-wrap">
                  <img
                    src={avatarImg}
                    alt=""
                    className="cta-avatar"
                    width={48}
                    height={48}
                  />
                  <span className="cta-avatar-status" title="Available" aria-label="Available" />
                </div>
                <div className="cta-profile-text">
                  <p className="cta-name">Abid Hasan Plabon</p>
                  <p className="cta-role">Full Stack Developer · Available</p>
                </div>
              </div>

              <p className="cta-email">
                <a href="mailto:abidhasanplabon80@gmail.com" className="cta-link">
                  abidhasanplabon80@gmail.com
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 xl:col-span-8" animation="fade-left" delay={120}>
            <div className="cta-form-card">
              <p className="cta-form-label">Send a message</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
