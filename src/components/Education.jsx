import React from "react";
import Reveal from "./Reveal";

const journey = [
  {
    period: "2023 — 2027",
    title: "B.Sc in Computer Science & Engineering",
    place: "Jahangirnagar University",
    location: "Savar, Dhaka",
    note: "Where I formalized what I was already doing — data structures, algorithms, software engineering. Most of my portfolio projects were built while studying here.",
  },
  {
    period: "2019 — 2021",
    title: "HSC in Science",
    place: "Shahid Syed Nazrul Islam College",
    location: "Mymensingh",
    note: "Math and physics heavy years. Didn't code yet, but this is where I got comfortable breaking down hard problems.",
  },
  {
    period: "2017 — 2019",
    title: "SSC in Science",
    place: "Local high school",
    location: "Mymensingh",
    note: "Finished school in my hometown before moving toward college and, eventually, tech.",
  },
];

const Education = () => {
  return (
    <section className="section-block surface-muted">
      <div className="page-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28" animation="fade-right">
            <p className="section-eyebrow">
              <span className="section-index">{"{05}"}</span>
              <span className="section-eyebrow-sep"> — </span>
              Background
            </p>
            <h2 className="section-title">Education</h2>
            <p className="mt-4 text-body">
              School in Mymensingh, college, then university in Dhaka — with development becoming
              a serious focus once I started CSE.
            </p>
          </Reveal>

          <ol className="edu-timeline lg:col-span-8">
            {journey.map((item, i) => (
              <Reveal as="li" key={item.title} className="edu-timeline-item" animation="fade-left" delay={i * 140}>
                <span className="edu-timeline-dot" aria-hidden="true" />
                <div className="edu-timeline-body">
                  <time className="edu-timeline-period">{item.period}</time>
                  <h3 className="edu-timeline-title heading-sm">{item.title}</h3>
                  <p className="edu-timeline-place">
                    {item.place}
                    <span className="edu-timeline-sep"> · </span>
                    {item.location}
                  </p>
                  <p className="edu-timeline-note">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Education;
