import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Projects: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].projects;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        {t.heading} - <span className="accent-text">{t.highlight}</span>
      </h2>

      <div className="experience-grid">
        {t.items.map((proj, idx) => (
          <div key={idx} className="experience-card" onMouseMove={handleMouseMove}>
            <div className="experience-date">{proj.date}</div>
            <div className="project-tag">{proj.category}</div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links-wrapper">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <i className="fa-brands fa-github"></i>
                {t.viewGithub}
              </a>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  {t.viewSource}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
