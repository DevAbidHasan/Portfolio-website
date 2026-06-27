import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="section-block">
      <div className="page-container max-w-3xl">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              Full-stack developer with{" "}
              <span className="text-accent">1.5+ years</span> of experience
            </>
          }
          className="!mb-0"
        />
        <Reveal as="p" className="mt-2 text-body" delay={200}>
          I build full-stack web apps with the MERN stack — from UI to APIs and deployment.
          Still early in my career: one production project so far, with more practice and showcase work in my portfolio.
          Currently in my final year of CSE at Jahangirnagar University, based in Dhaka and open to remote work.
        </Reveal>
      </div>
    </section>
  );
};

export default About;
