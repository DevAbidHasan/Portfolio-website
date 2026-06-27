import React from "react";
import Reveal from "./Reveal";

const journey = [
  {
    period: "2023 — 2027",
    level: "University",
    title: "B.Sc in Computer Science & Engineering",
    place: "Jahangirnagar University",
    location: "Savar, Dhaka",
    note: "Where I formalized what I was already doing — data structures, algorithms, software engineering. Most of my projects here are practice or showcase work from this period.",
    current: true,
  },
  {
    period: "2019 — 2021",
    level: "Higher Secondary",
    title: "HSC in Science",
    place: "Shahid Syed Nazrul Islam College",
    location: "Mymensingh",
    note: "Math and physics heavy years. Didn't code yet, but this is where I got comfortable breaking down hard problems.",
  },
  {
    period: "2017 — 2019",
    level: "Secondary",
    title: "SSC in Science",
    place: "Jalsuka Kumudganj High School",
    location: "Netrakona",
    note: "Finished school in Netrakona before moving toward college in Mymensingh and, eventually, tech.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-block surface-muted">
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
              School in Netrakona, college in Mymensingh, then university in Dhaka — with development
              becoming a serious focus once I started CSE.
            </p>
          </Reveal>

          <ol className="edu-list lg:col-span-8">
            {journey.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                className="edu-item"
                animation="fade-left"
                delay={i * 130}
              >
                <time className="edu-period" dateTime={item.period.replace(/\s/g, "")}>
                  {item.period}
                </time>

                <div className="edu-body">
                  <div className="edu-head">
                    <h3 className="edu-title heading-sm">{item.title}</h3>
                    <div className="edu-tags">
                      <span className="edu-level">{item.level}</span>
                      {item.current && <span className="edu-status">In progress</span>}
                    </div>
                  </div>

                  <p className="edu-meta">
                    {item.place}
                    <span className="edu-meta-sep"> · </span>
                    {item.location}
                  </p>

                  <p className="edu-note">{item.note}</p>
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
