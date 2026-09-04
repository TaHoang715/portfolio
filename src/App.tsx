import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
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
    <PortfolioProvider>
      <div className="portfolio-app">
        {/* Dynamic Background Canvas (4 switchable modes) */}
        <BackgroundCanvas />

        {/* Custom Mouse Cursor & Top Scroll Progress */}
        <CustomCursor />
        <ScrollProgress />

        {/* Smart Floating Pill Navbar */}
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
    </PortfolioProvider>
  );
};

export default App;
