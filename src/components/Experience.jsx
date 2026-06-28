import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal";

const experiences = [
  {
    period: "Mar 2026 — Present",
    role: "Frontend Developer",
    org: "Rent Nao",
    location: "Remote",
    type: "Work",
    current: true,
    live: "https://rentnao.co/",
    highlights: [
      "Building and refining the frontend for Rent Nao — a live rental platform.",
      "Focused on UI, responsive layouts, and smooth user-facing flows.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-block surface-muted">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{02}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Experience
            </p>
            <h2 className="section-title">Where I&apos;m working now</h2>
            <p className="mt-4 text-body">
              I&apos;m currently on the frontend team at Rent Nao — about four months in
              and counting, working on a live rental platform.
            </p>
          </Reveal>

          <ol className="exp-list lg:col-span-8">
            {experiences.map((item, i) => (
              <Reveal
                as="li"
                key={item.role}
                className="exp-item"
                animation="fade-left"
                delay={i * 130}
              >
                <time className="exp-period" dateTime="2026-03">
                  {item.period}
                </time>

                <div className="exp-body">
                  <div className="exp-head">
                    <h3 className="exp-title heading-sm">{item.role}</h3>
                    <div className="exp-tags">
                      <span className="exp-type">{item.type}</span>
                      {item.current && <span className="exp-status">Current</span>}
                    </div>
                  </div>

                  <p className="exp-meta">
                    {item.org}
                    <span className="exp-meta-sep"> · </span>
                    {item.location}
                  </p>

                  <div className="exp-desc">
                    {item.highlights.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>

                  {item.live && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill btn-pill-secondary exp-visit-btn"
                    >
                      Visit site
                      <span className="btn-pill-icon" aria-hidden="true">
                        <FiArrowRight size={18} />
                      </span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
