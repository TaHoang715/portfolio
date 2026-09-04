import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const { careers } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="flow-section">
      <div className="flow-container" style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ width: '100%', maxWidth: '640px' }}>
          {/* Section Number */}
          <div className="section-label">
            02 / KINH NGHIỆM LÀM VIỆC
          </div>

          <h2 className="section-heading-huge">
            Hành Trình <br />
            <span style={{ color: 'var(--crimson)' }}>Thực Chiến</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {careers.map((c) => (
              <div key={c.number} className="clean-panel" style={{ padding: '24px 28px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '8px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <Calendar size={13} /> {c.period}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                    }}
                  >
                    #{c.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {c.role}
                </h3>

                <h4
                  style={{
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    color: 'var(--cyan)',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Briefcase size={14} /> {c.company}
                </h4>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}
                >
                  {c.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {c.techs.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.76rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '4px',
                        padding: '3px 8px',
                        color: '#cbd5e1',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
