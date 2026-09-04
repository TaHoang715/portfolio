import React, { useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const About: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].about;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section className="about-section" id="about">
      <div
        ref={cardRef}
        className="glass-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2>
          {t.heading} - <span className="accent-text">{t.highlight}</span>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: t.content1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        <br />
        <p dangerouslySetInnerHTML={{ __html: t.content2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      </div>
    </section>
  );
};
