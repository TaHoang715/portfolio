import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Cpu, Terminal, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const { techStackGroups } = PORTFOLIO_DATA;
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const filteredGroups =
    selectedGroup === 'all'
      ? techStackGroups
      : techStackGroups.filter((g) => g.id === selectedGroup);

  return (
    <section id="tech-stack" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-badge">
            <Cpu size={14} /> Hệ Thống Công Nghệ & Công Cụ
          </div>
          <h2 className="section-title">
            Bản Đồ Kỹ Năng <span className="gradient-text-gold">Toàn Diện</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tổng hợp các ngôn ngữ lập trình, hệ thống backend, framework hiện đại, hạ tầng đám mây và kỹ nghệ AI Agents.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
          }}
        >
          <button
            onClick={() => setSelectedGroup('all')}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid',
              borderColor: selectedGroup === 'all' ? 'var(--crimson-primary)' : 'var(--border-subtle)',
              background: selectedGroup === 'all' ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.03)',
              color: selectedGroup === 'all' ? '#ffffff' : 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
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
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: selectedGroup === group.id ? 'var(--crimson-primary)' : 'var(--border-subtle)',
                background: selectedGroup === group.id ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedGroup === group.id ? '#ffffff' : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
              }}
            >
              {group.title}
            </button>
          ))}
        </div>

        {/* Terminal Window Container */}
        <div
          style={{
            background: '#040916',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(3, 7, 18, 0.8)',
            overflow: 'hidden',
          }}
        >
          {/* Terminal Window Header Bar */}
          <div
            style={{
              background: '#070f24',
              padding: '12px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span
                style={{
                  marginLeft: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                ▼ [//] SYSTEM STACK & TOOLS
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--gold-star)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={12} /> Live Interactive Matrix
            </div>
          </div>

          {/* Terminal Content Body */}
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {filteredGroups.map((group) => (
                <div key={group.id}>
                  {/* Code Comment Header */}
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
                    <Terminal size={14} color="var(--crimson-bright)" />
                    <span>{group.comment}</span>
                  </div>

                  {/* Badges Flow */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                    }}
                  >
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '7px',
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
