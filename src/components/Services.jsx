import React from "react";
import { FiArrowRight, FiLayers, FiShield, FiSmartphone, FiUploadCloud } from "react-icons/fi";
import Reveal from "./Reveal";

const services = [
  {
    title: "Full-stack web apps",
    desc: "MERN builds from UI to API, database design, and deployment.",
    icon: FiLayers,
  },
  {
    title: "REST APIs & auth",
    desc: "JWT flows, protected routes, and structured Express backends.",
    icon: FiShield,
  },
  {
    title: "Responsive UI",
    desc: "Mobile-first layouts with Tailwind and clean component patterns.",
    icon: FiSmartphone,
  },
  {
    title: "Deploy & maintain",
    desc: "Netlify, Firebase hosting, and post-launch fixes on real devices.",
    icon: FiUploadCloud,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-block">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{06}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Services
            </p>
            <h2 className="section-title">What I can help with</h2>
            <p className="mt-4 text-body">
              Open to internships, junior roles, and select freelance work — especially
              full-stack web builds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-pill btn-pill-primary">
                Contact
                <span className="btn-pill-icon" aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-7 xl:col-span-8">
            <div className="skills-stack-scene">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <Reveal
                    key={service.title}
                    className="skills-stack-card"
                    delay={i * 90}
                    style={{ "--i": i }}
                  >
                    <span className="skills-stack-icon">
                      <Icon size={26} style={{ color: "var(--accent)" }} />
                    </span>
                    <div className="skills-stack-text">
                      <span className="skills-stack-name">{service.title}</span>
                      <p className="skills-stack-desc">{service.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
              <div className="skills-stack-spacer" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
