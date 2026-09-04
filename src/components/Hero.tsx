import React, { useState, useEffect } from 'react';

const TYPING_WORDS = ['DEVELOPER', 'PROGRAMMER', 'INDIE CREATOR', 'ENGINEER', 'PROBLEM SOLVER'];

export const Hero: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex((prev) => prev - 1), 60);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
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
  }, [charIndex, isDeleting, wordIndex]);

  const currentText = TYPING_WORDS[wordIndex].substring(0, charIndex);

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
        <h2 className="sub-title">Woah! You Landed on the Portfolio Website of The</h2>

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

        <h5 className="year">Tạ Minh Hoàng (TaHoang715) | Software Engineering Graduate</h5>

        <div className="hero-buttons">
          <a
            href="#contact"
            onClick={(e) => scrollToSection('contact', e)}
            className="btn-resume"
          >
            <i className="fa-solid fa-paper-plane" style={{ fontSize: '0.85rem' }}></i>
            Let's Connect
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollToSection('projects', e)}
            className="btn-resume"
          >
            <i className="fa-solid fa-code" style={{ fontSize: '0.85rem' }}></i>
            View Projects
          </a>
        </div>
      </div>
    </main>
  );
};
