import React, { useState } from 'react';
import { usePortfolio, BgMode } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const ThemeWidget: React.FC = () => {
  const { lang, setLang, bgMode, setBgMode } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang].switcher;

  const BG_OPTIONS: { id: BgMode; label: string; icon: string }[] = [
    { id: 'aurora', label: t.aurora, icon: 'fa-solid fa-wand-magic-sparkles' },
    { id: 'constellation', label: t.constellation, icon: 'fa-solid fa-circle-nodes' },
    { id: 'matrix', label: t.matrix, icon: 'fa-solid fa-wave-square' },
    { id: 'minimal', label: t.minimal, icon: 'fa-solid fa-moon' },
  ];

  return (
    <div className="theme-widget-container">
      {/* Expanded Controls Panel */}
      {isOpen && (
        <div className="theme-widget-panel">
          <div className="theme-widget-header">
            <span>
              <i className="fa-solid fa-sliders" style={{ marginRight: '6px', color: 'var(--accent-color)' }}></i>
              Display Settings
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="theme-widget-close"
              aria-label="Close settings"
            >
              &times;
            </button>
          </div>

          {/* Language Switcher */}
          <div className="theme-widget-group">
            <div className="theme-group-label">
              <i className="fa-solid fa-globe"></i>
              Language / Ngôn ngữ
            </div>
            <div className="lang-toggle-bar">
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                🇬🇧 English
              </button>
              <button
                className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
                onClick={() => setLang('vi')}
              >
                🇻🇳 Tiếng Việt
              </button>
            </div>
          </div>

          {/* Background Modes Switcher */}
          <div className="theme-widget-group">
            <div className="theme-group-label">
              <i className="fa-solid fa-palette"></i>
              {t.bgTitle} ({BG_OPTIONS.length} options)
            </div>
            <div className="bg-options-list">
              {BG_OPTIONS.map((opt) => {
                const isActive = bgMode === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setBgMode(opt.id)}
                    className={`bg-opt-btn ${isActive ? 'active' : ''}`}
                  >
                    <i className={opt.icon}></i>
                    <span>{opt.label}</span>
                    {isActive && <i className="fa-solid fa-check active-check"></i>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="theme-widget-trigger"
        title="Đổi hình nền & Ngôn ngữ (Background & Language Settings)"
        aria-label="Display Settings"
      >
        <i className="fa-solid fa-palette"></i>
        <span className="theme-trigger-label">
          {lang === 'en' ? 'Theme & Lang' : 'Đổi Nền & Ngôn Ngữ'}
        </span>
      </button>
    </div>
  );
};
