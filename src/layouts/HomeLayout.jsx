import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Workflow from "../components/Workflow";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Education from "../components/Education";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const HomeLayout = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Workflow />
      <Stats />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <FAQ />
      <CTA />
    </>
  );
};

export default HomeLayout;
