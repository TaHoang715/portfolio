import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Github, Sparkles, Check, Flame, Lock } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <FolderGit2 size={14} /> Sản Phẩm & Mã Nguồn Mở
          </div>
          <h2 className="section-title">
            Dự Án <span className="gradient-text-crimson">Tiêu Biểu</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Các sản phẩm độc lập được xây dựng với tinh thần chỉn chu về trải nghiệm người dùng,
            thuật toán tối ưu và mã nguồn sạch sẽ.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
          }}
          className="projects-grid"
        >
          {projects.map((proj) => {
            const isSecret = proj.id === 'flagship-future';

            return (
              <div
                key={proj.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${proj.accentColor}`,
                }}
              >
                <div>
                  {/* Top Bar Status */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        background: isSecret ? 'rgba(225, 29, 72, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                        border: `1px solid ${isSecret ? 'rgba(225, 29, 72, 0.4)' : 'rgba(16, 185, 129, 0.4)'}`,
                        color: isSecret ? '#fda4af' : '#34d399',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {isSecret ? <Lock size={12} /> : <Flame size={12} />}
                      {isSecret ? 'IN DEVELOPMENT' : 'COMPLETED'}
                    </span>

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: 'var(--text-muted)',
                          transition: 'color 0.2s ease',
                          display: 'flex',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '8px',
                    }}
                  >
                    {proj.title}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.9rem',
                      color: proj.accentColor,
                      fontWeight: 600,
                      marginBottom: '14px',
                    }}
                  >
                    {proj.tagline}
                  </div>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      marginBottom: '22px',
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div style={{ marginBottom: '24px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--text-dim)',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Điểm Nổi Bật:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {proj.highlights.map((h, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.88rem',
                            color: 'var(--text-main)',
                          }}
                        >
                          <Check size={15} color={proj.accentColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Tags & Links */}
                <div>
                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '20px',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-subtle)',
                    }}
                  >
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '3px 9px',
                          borderRadius: '4px',
                          color: '#cbd5e1',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {proj.github ? (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-glass"
                        style={{ flex: 1, padding: '10px 16px', fontSize: '0.9rem' }}
                      >
                        <Github size={16} /> Xem Source Code <ExternalLink size={14} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="btn btn-glass"
                        style={{
                          flex: 1,
                          padding: '10px 16px',
                          fontSize: '0.9rem',
                          opacity: 0.6,
                          cursor: 'not-allowed',
                        }}
                      >
                        <Sparkles size={16} color="var(--gold-star)" /> Sắp Công Bố
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
