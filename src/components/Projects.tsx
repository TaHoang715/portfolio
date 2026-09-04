import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, ExternalLink, Sparkles, Check } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="flow-section">
      <div className="flow-container" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '100%', maxWidth: '680px' }}>
          {/* Section Number */}
          <div className="section-label">
            04 / DỰ ÁN & MÃ NGUỒN
          </div>

          <h2 className="section-heading-huge">
            Sản Phẩm <br />
            <span style={{ color: 'var(--crimson)' }}>Tâm Huyết</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {projects.map((p) => (
              <div
                key={p.id}
                className="clean-panel"
                style={{
                  borderLeft: `4px solid ${p.accentColor}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: p.accentColor,
                      fontWeight: 700,
                    }}
                  >
                    #{p.number} • {p.category}
                  </span>

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {p.title}
                </h3>

                <div style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {p.tagline}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                  {p.points.map((pt, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#e2e8f0' }}>
                      <Check size={14} color={p.accentColor} style={{ flexShrink: 0 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags & Actions */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          color: '#cbd5e1',
                        }}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-action btn-ghost-border"
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    >
                      <Github size={15} /> Source Code <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Sparkles size={14} /> In Development
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
