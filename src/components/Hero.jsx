import React from "react";
import img from "../../public/PXL_20240130_070044507.jpg";
import resume from "../../public/Resume_MERN_Plabon.pdf";
import { FiArrowRight } from "react-icons/fi";
import Marquee from "./Marquee";
import HeroProfileCard from "./HeroProfileCard";
import Reveal from "./Reveal";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const STACK = [
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { label: "Next.js", icon: SiNextdotjs, color: "var(--text)" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { label: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { label: "Express", icon: SiExpress, color: "var(--text-secondary)" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="page-container flex-1 flex flex-col justify-center pt-24 pb-8 md:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">
          <Reveal className="lg:col-span-7 xl:col-span-8 min-w-0" animation="fade-right">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="badge">
                <span className="badge-dot" />
                Available for projects
              </span>
              <span className="hero-period">2024 — Present</span>
            </div>

            <p className="hero-greeting">Hi, I&apos;m</p>

            <h1 className="hero-title">
              Abid Hasan
              <br />
              Plabon
            </h1>

            <p className="mt-6 text-body max-w-lg">
              a <span className="font-medium" style={{ color: "var(--text)" }}>Full Stack Developer</span> from{" "}
              <span className="font-medium" style={{ color: "var(--text)" }}>Dhaka</span> building apps that hold up in production.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="btn-pill btn-pill-primary">
                View my work
                <span className="btn-pill-icon" aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </a>
              <a href={resume} download="Resume_MERN_Plabon.pdf" className="btn-pill btn-pill-secondary">
                View resume
                <span className="btn-pill-icon" aria-hidden="true">
                  <FiArrowRight size={18} />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end min-w-0 px-1 sm:px-2" animation="fade-up" delay={160}>
            <HeroProfileCard image={img} alt="Abid Hasan Plabon" />
          </Reveal>
        </div>
      </div>

      <div className="mt-auto border-t" style={{ borderColor: "var(--border)" }}>
        <Marquee items={STACK} />
      </div>
    </section>
  );
};

export default Hero;
