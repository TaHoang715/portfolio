import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Experience: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].experience;

  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      if (!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.5;
      const scrollDistance = startOffset - rect.top;
      const progressPercent = Math.max(0, Math.min(100, (scrollDistance / rect.height) * 100));

      progress.style.height = `${progressPercent}%`;

      const dots = timeline.querySelectorAll('.timeline-dot');
      dots.forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const lineBottom = progress.getBoundingClientRect().bottom;
        if (lineBottom >= dotRect.top) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        {t.heading} - <span className="accent-text">{t.highlight}</span>
      </h2>

      <div ref={timelineRef} className="timeline">
        <div className="timeline-line">
          <div ref={progressRef} className="timeline-progress" />
        </div>

        {t.items.map((exp, idx) => {
          const side = idx % 2 === 0 ? 'left' : 'right';
          return (
            <div key={idx} className={`timeline-item ${side}`}>
              <div className="timeline-number">{exp.number}</div>
              <div className="timeline-content">
                <div className="project-tag">{exp.company}</div>
                <h3>{exp.role}</h3>
                <div style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {exp.bullets.map((b, bIdx) => (
                    <p key={bIdx} style={{ marginBottom: '8px' }}>
                      • {b}
                    </p>
                  ))}
                </div>
              </div>
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-dot" />
            </div>
          );
        })}
      </div>
    </section>
  );
};
