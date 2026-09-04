import React from 'react';
import { InteractiveWorldCanvas } from './components/canvas/InteractiveWorldCanvas';
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
      {/* Persistent Fullscreen 3D World: Stars + Arlecchino reacting to scroll flow */}
      <InteractiveWorldCanvas />

      {/* Foreground Sections flowing seamlessly over 3D space */}
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
