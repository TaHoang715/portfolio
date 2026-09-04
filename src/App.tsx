import React from 'react';
import { GalaxyCanvas } from './components/canvas/GalaxyCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 3D Deep Space Particle Canvas */}
      <GalaxyCanvas />

      {/* Main Content Layout */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
