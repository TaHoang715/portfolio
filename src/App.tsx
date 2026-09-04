import React from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor, ScrollProgress } from './components/InteractiveControls';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Profiles } from './components/Profiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app">
      {/* 3D Starfield Background Canvas */}
      <BackgroundCanvas />

      {/* Custom Mouse Cursor & Top Scroll Progress */}
      <CustomCursor />
      <ScrollProgress />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Profiles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
