import React from 'react';
import { BackgroundCosmos } from './components/canvas/BackgroundCosmos';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000319', overflow: 'hidden' }}>
      {/* 3D Cosmos Particles Background */}
      <BackgroundCosmos />

      {/* Floating Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <BentoGrid />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
