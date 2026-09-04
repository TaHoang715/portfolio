import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const { techStackGroups } = PORTFOLIO_DATA;
  const [selected, setSelected] = useState<string>('all');

  const filtered =
    selected === 'all'
      ? techStackGroups
      : techStackGroups.filter((g) => g.id === selected);

  return (
    <section id="tech-stack" className="site-section">
      <div className="bento-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <Sparkles size={13} /> SYSTEM STACK & ARSENAL
          </div>
          <h2 className="section-title-bento">
            Hệ Thống <span style={{ color: 'var(--purple-accent)' }}>Công Nghệ</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Ngăn xếp công nghệ thực chiến gồm 6 phân hệ: backend phân tán, web UI, ứng dụng di động, hạ tầng cloud, dịch vụ thanh toán và kỹ nghệ AI Agents.
          </p>
        </div>

        {/* Tab filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '32px',
          }}
        >
          <button
            onClick={() => setSelected('all')}
            style={{
              padding: '6px 16px',
              borderRadius: '9999px',
              border: '1px solid',
              borderColor: selected === 'all' ? 'var(--crimson)' : 'rgba(255, 255, 255, 0.1)',
              background: selected === 'all' ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              color: selected === 'all' ? '#ffffff' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Tất Cả ({techStackGroups.reduce((acc, g) => acc + g.skills.length, 0)})
          </button>

          {techStackGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelected(g.id)}
              style={{
                padding: '6px 16px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selected === g.id ? 'var(--crimson)' : 'rgba(255, 255, 255, 0.1)',
                background: selected === g.id ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: selected === g.id ? '#ffffff' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {g.title}
            </button>
          ))}
        </div>

        {/* Terminal Matrix Box */}
        <div
          style={{
            background: 'rgba(4, 7, 29, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
          }}
        >
          {/* Window Top Bar */}
          <div
            style={{
              background: 'rgba(7, 12, 40, 0.9)',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
              <span
                style={{
                  marginLeft: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#ffffff',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                ▼ [//] SYSTEM STACK & TOOLS
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--gold)' }}>
              Interactive Live Matrix
            </div>
          </div>

          {/* Window Body */}
          <div style={{ padding: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
              {filtered.map((g) => (
                <div key={g.id}>
                  {/* Code comment */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Terminal size={14} color="var(--crimson)" />
                    <span>{g.comment}</span>
                  </div>

                  {/* Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {g.skills.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          borderRadius: '6px',
                          background: skill.bg,
                          color: skill.color,
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          cursor: 'default',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                          e.currentTarget.style.boxShadow = `0 8px 20px ${skill.bg}77`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.35)';
                        }}
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
