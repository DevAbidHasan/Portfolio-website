import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Workflow from "../components/Workflow";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Workflow />
      <Stats />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <CTA />
    </>
  );
};

export default HomeLayout;
