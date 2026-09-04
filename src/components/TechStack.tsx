import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Terminal, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const { techStackGroups } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const filteredGroups =
    selectedGroup === 'all'
      ? techStackGroups
      : techStackGroups.filter((g) => g.id === selectedGroup);

  return (
    <section id="tech-stack" className="flow-section" style={{ minHeight: 'auto', padding: '140px 0' }}>
      <div className="flow-container" style={{ width: '100%' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            03 / SYSTEM STACK & TOOLS
          </div>
          <h2 className="section-heading-huge">
            Hệ Thống <span style={{ color: 'var(--gold)' }}>Công Nghệ</span>
          </h2>
          <p className="para-lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Ngăn xếp công nghệ thực chiến bao gồm ngôn ngữ lập trình, hệ thống backend, hạ tầng đám mây và kỹ nghệ AI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          <button
            onClick={() => setSelectedGroup('all')}
            style={{
              padding: '8px 18px',
              borderRadius: '9999px',
              border: '1px solid',
              borderColor: selectedGroup === 'all' ? 'var(--crimson)' : 'var(--border-subtle)',
              background: selectedGroup === 'all' ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedGroup === 'all' ? '#ffffff' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Tất Cả ({techStackGroups.reduce((acc, g) => acc + g.skills.length, 0)})
          </button>

          {techStackGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedGroup === group.id ? 'var(--crimson)' : 'var(--border-subtle)',
                background: selectedGroup === group.id ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedGroup === group.id ? '#ffffff' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div
          style={{
            background: 'rgba(4, 9, 22, 0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              background: 'rgba(7, 15, 36, 0.9)',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#eab308' }} />
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e' }} />
              <span
                style={{
                  marginLeft: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#ffffff',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                ▼ [//] SYSTEM STACK & TOOLS
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={12} /> Interactive Matrix
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {filteredGroups.map((group) => (
                <div key={group.id}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--text-dim)',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Terminal size={14} color="var(--crimson)" />
                    <span>{group.comment}</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {group.skills.map((skill) => (
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
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
                          cursor: 'default',
                          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px) scale(1.04)';
                          e.currentTarget.style.boxShadow = `0 8px 20px ${skill.bg}88`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.35)';
                        }}
                      >
                        <span>{skill.name}</span>
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
