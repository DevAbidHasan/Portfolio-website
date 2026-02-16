import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Workflow from '../components/Workflow';

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Workflow></Workflow>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Certifications></Certifications>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;