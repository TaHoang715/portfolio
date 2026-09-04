import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Profiles: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].profiles;

  return (
    <section className="profiles-section" id="profiles">
      <h2 className="section-title">
        {t.heading} - <span className="accent-text">{t.highlight}</span>
      </h2>

      <div className="profile-header">
        <div className="profile-img-main">
          <img
            src="https://github.com/TaHoang715.png"
            alt="Tạ Minh Hoàng (TaHoang715)"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://api.dicebear.com/7.x/bottts/svg?seed=TaHoang715';
            }}
          />
        </div>
        <div className="profile-text">
          <h2>Tạ Minh Hoàng</h2>
          <p>@TaHoang715</p>
        </div>
      </div>

      <div className="profiles-grid">
        {t.items.map((p, idx) => (
          <a
            key={idx}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <div className="profile-icon">
              <i className={p.icon} style={p.iconColor ? { color: p.iconColor } : undefined}></i>
            </div>
            <div className="profile-info">
              <h3>{p.name}</h3>
              <p>{p.action}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
