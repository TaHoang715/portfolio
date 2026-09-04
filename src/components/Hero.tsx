import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].hero;

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = t.typingWords;

  useEffect(() => {
    setWordIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex((prev) => prev - 1), 60);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timer = setTimeout(() => {}, 400);
      }
    } else {
      if (charIndex < currentWord.length) {
        timer = setTimeout(() => setCharIndex((prev) => prev + 1), 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1800);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  const currentWord = words[wordIndex % words.length];
  const currentText = currentWord.substring(0, charIndex);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="hero" id="home">
      {/* Floating Corner Badges */}
      <div className="floating-icon icon-top-left">
        <i className="fa-solid fa-code"></i>
      </div>
      <div className="floating-icon icon-top-right">
        <i className="fa-solid fa-gamepad"></i>
      </div>
      <div className="floating-icon icon-bottom-left">
        <i className="fa-solid fa-terminal"></i>
      </div>
      <div className="floating-icon icon-bottom-right">
        <i className="fa-regular fa-lightbulb"></i>
      </div>

      <div className="content-wrapper">
        <h2 className="sub-title">{t.subtitle}</h2>

        <h1 className="sr-only">Tạ Minh Hoàng - Software Developer Portfolio</h1>
        <h2 className="main-title">
          <span className="accent-text" id="typing-text">
            {currentText}
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '3px',
              height: '1em',
              backgroundColor: 'var(--accent-color)',
              verticalAlign: 'middle',
              animation: 'pulse 1s infinite',
            }}
          />
        </h2>

        <h5 className="year">{t.titleSuffix}</h5>

        <div className="hero-buttons">
          <a
            href="#contact"
            onClick={(e) => scrollToSection('contact', e)}
            className="btn-resume"
          >
            <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.85rem' }}></i>
            {t.btnConnect}
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection('projects', e)}
            className="btn-resume"
          >
            <i className="fa-solid fa-code" style={{ fontSize: '0.85rem' }}></i>
            {t.btnProjects}
          </a>
        </div>
      </div>
    </main>
  );
};
