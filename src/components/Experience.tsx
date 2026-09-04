import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, Terminal } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <Briefcase size={14} /> Quá Trình Làm Việc & Thực Chiến
          </div>
          <h2 className="section-title">
            Kinh Nghiệm <span className="gradient-text-crimson">Sự Nghiệp</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Hành trình cọ xát thực tế qua các môi trường doanh nghiệp công nghệ, tổ chức giáo dục và dự án tự do.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--crimson-primary), var(--cyan-nebula), transparent)',
              boxShadow: '0 0 12px var(--crimson-glow)',
            }}
            className="timeline-line"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {experiences.map((exp) => (
              <div
                key={exp.id}
                style={{
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
                className="timeline-item"
              >
                {/* Timeline Node Dot */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#070e20',
                    border: '2px solid var(--crimson-primary)',
                    boxShadow: '0 0 16px var(--crimson-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--crimson-bright)',
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                  className="timeline-dot"
                >
                  <Building2 size={22} />
                </div>

                {/* Experience Content Card */}
                <div className="glass-card" style={{ flex: 1, padding: '24px 28px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: 'var(--gold-star)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(251, 191, 36, 0.1)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid rgba(251, 191, 36, 0.25)',
                      }}
                    >
                      <Calendar size={13} /> {exp.period}
                    </span>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '4px',
                    }}
                  >
                    {exp.role}
                  </h3>

                  <h4
                    style={{
                      fontSize: '1.02rem',
                      fontWeight: 600,
                      color: 'var(--cyan-nebula)',
                      marginBottom: '14px',
                    }}
                  >
                    {exp.company}
                  </h4>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      marginBottom: '18px',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Skills tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          color: '#e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <Terminal size={11} color="var(--crimson-bright)" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line {
            left: 18px !important;
          }
          .timeline-dot {
            width: 38px !important;
            height: 38px !important;
          }
          .timeline-item {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
