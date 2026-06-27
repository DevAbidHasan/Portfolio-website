import React from "react";
import Reveal from "./Reveal";

const stats = [
  { value: "1.5+", label: "Years", sub: "Building for production" },
  { value: "4+", label: "Projects", sub: "Shipped end to end" },
  { value: "12+", label: "Technologies", sub: "In my daily stack" },
];

const Stats = () => {
  return (
    <section className="stats-band" aria-label="Highlights">
      <div className="page-container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stats-item" animation="zoom-in" delay={i * 160}>
              <p className="stats-value">{s.value}</p>
              <p className="stats-label">{s.label}</p>
              <p className="stats-sub">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
