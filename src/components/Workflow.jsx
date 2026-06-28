import React from "react";
import Reveal from "./Reveal";

const steps = [
  {
    title: "Talk first",
    desc: "Before I open an editor, we align on the goal, who it's for, and what “done” looks like. I'd rather ask too many questions early than fix the wrong thing later.",
  },
  {
    title: "Sketch lightly",
    desc: "Rough layout, pick the stack, split work into small chunks. I don't write long specs — just enough to start building without guessing.",
  },
  {
    title: "Build in pieces",
    desc: "Frontend and backend together, one slice at a time. Easier to review, easier to change when requirements shift (they usually do).",
  },
  {
    title: "Ship, then fix",
    desc: "Deploy, test on real devices, catch the bugs. I stay on it until it works in production — not just on my laptop.",
  },
];

const Workflow = () => {
  return (
    <section className="section-block">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{03}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Process
            </p>
            <h2 className="section-title">
              How I actually work
            </h2>
            <p className="mt-4 text-body">
              No agency playbook — just what I&apos;ve picked up from practice projects, one production build, and shipping this portfolio.
            </p>
          </Reveal>

          <ol className="process-list lg:col-span-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} className="process-item" delay={i * 130}>
                <span className="process-num">{i + 1}</span>
                <div>
                  <h3 className="process-item-title heading-sm">{step.title}</h3>
                  <p className="process-item-desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
