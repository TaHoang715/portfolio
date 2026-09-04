import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Certifications: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].certifications;

  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">
        {t.heading} - <span className="accent-text">{t.highlight}</span>
      </h2>

      <div className="cert-grid">
        {t.items.map((cert, idx) => (
          <div key={idx} className="cert-item">
            <div className="cert-header-icon">
              <i className={cert.icon}></i>
            </div>
            <div className="cert-info">
              <span className="cert-badge">{cert.badge}</span>
              <h3>{cert.title}</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '8px' }}>
                {cert.institution}
              </p>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
