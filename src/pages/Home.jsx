import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SkillsOrbit from '../components/SkillsOrbit';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home({ setActiveSection }) {
  return (
    <div className="flex flex-col gap-10">
      <Hero setActiveSection={setActiveSection} />
      <About />
      <SkillsOrbit />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}