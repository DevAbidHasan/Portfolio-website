import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Are you open to work?",
    a: "Yes — full-time, part-time, and remote-friendly roles while I finish my final year at Jahangirnagar University.",
  },
  {
    q: "What's your main stack?",
    a: "MERN is my go-to: React, Node/Express, MongoDB, plus TypeScript, Tailwind, JWT, and Postman for day-to-day work.",
  },
  {
    q: "Do you take freelance projects?",
    a: "Select small to medium web projects — especially full-stack builds, API work, or shipping an MVP.",
  },
  {
    q: "How do you usually work?",
    a: "Align on scope first, build in small slices, ship early, then iterate from real feedback instead of long specs.",
  },
  {
    q: "What are you working on right now?",
    a: "I'm on the frontend team at Rent Nao — building UI for a live rental platform. I've been there for about four months alongside my university work.",
  },
  {
    q: "When do you graduate?",
    a: "I'm in my final year of CSE at Jahangirnagar University, expected to finish in 2027. I'm open to roles that fit around my schedule until then.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-block surface-muted">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{08}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              FAQ
            </p>
            <h2 className="section-title">Quick answers</h2>
            <p className="mt-4 text-body">
              A few things people usually ask before reaching out.
            </p>
          </Reveal>

          <div className="faq-list lg:col-span-8">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} className="faq-item" animation="fade-left" delay={i * 80}>
                  <button
                    type="button"
                    className={`faq-trigger ${isOpen ? "is-open" : ""}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <FiChevronDown className="faq-chevron" aria-hidden="true" />
                  </button>
                  <div className={`faq-panel ${isOpen ? "is-open" : ""}`}>
                    <p>{item.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
