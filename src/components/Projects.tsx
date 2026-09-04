import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Github, ExternalLink, Sparkles, Check, Flame } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="site-section">
      <div className="bento-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <Flame size={13} /> SHOWCASE & REPOSITORIES
          </div>
          <h2 className="section-title-bento">
            Dự Án <span style={{ color: 'var(--purple-accent)' }}>Tiêu Biểu</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Các sản phẩm độc lập được xây dựng với tinh thần chỉn chu về trải nghiệm người dùng,
            thuật toán va chạm mượt mà và mã nguồn sạch sẽ.
          </p>
        </div>

        {/* 3D Pin Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {projects.map((p) => {
            const isSecret = p.id === 'flagship-project';

            return (
              <div key={p.id} className="pin-card-wrapper">
                <div
                  className="bento-card pin-card-inner"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderTop: `3px solid ${p.accentColor}`,
                  }}
                >
                  <div>
                    {/* Top status */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          padding: '3px 10px',
                          borderRadius: '9999px',
                          background: isSecret ? 'rgba(225, 29, 72, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                          border: `1px solid ${isSecret ? 'rgba(225, 29, 72, 0.4)' : 'rgba(16, 185, 129, 0.4)'}`,
                          color: isSecret ? '#fda4af' : '#34d399',
                        }}
                      >
                        {isSecret ? 'IN THE LAB' : 'COMPLETED'}
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

                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                      {p.title}
                    </h3>
                    <div style={{ fontSize: '0.88rem', color: p.accentColor, fontWeight: 600, marginBottom: '12px' }}>
                      {p.tagline}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '18px' }}>
                      {p.description}
                    </p>

                    {/* Highlights */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                      {p.points.map((pt, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#e2e8f0' }}>
                          <Check size={14} color={p.accentColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Tags & Button */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '10px 16px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 600,
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <Github size={16} /> Xem Mã Nguồn <ExternalLink size={13} />
                      </a>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          padding: '10px 16px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          color: 'var(--gold)',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <Sparkles size={14} /> Dự Án Sắp Ra Mắt
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
