import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const { academic } = PORTFOLIO_DATA;

  return (
    <section id="about" className="flow-section">
      <div className="flow-container" style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '100%', maxWidth: '620px' }}>
          {/* Section Number */}
          <div className="section-label">
            01 / HỌC VẤN & BẰNG CẤP
          </div>

          <h2 className="section-heading-huge">
            Nền Tảng <br />
            <span style={{ color: 'var(--gold)' }}>Kỹ Thuật</span> & Ngoại Ngữ
          </h2>

          <div className="clean-panel" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(251, 191, 36, 0.12)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                }}
              >
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
                  {academic.degree}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {academic.school} • Điểm GPA: <strong style={{ color: 'var(--gold)' }}>{academic.gpa}</strong>
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.65 }}>
              Tốt nghiệp chuyên ngành Kỹ Thuật Phần Mềm tại Đại học FPT với nền tảng vững chắc về giải thuật,
              kiến trúc hướng đối tượng, cơ sở dữ liệu và quy trình phát triển sản phẩm.
            </p>
          </div>

          {/* English Proficiency */}
          <div className="clean-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Award size={22} color="var(--crimson)" />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
                Năng Lực Anh Ngữ Quốc Tế
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {academic.englishLevels.map((lvl, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    padding: '12px 16px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(225, 29, 72, 0.2)',
                        color: 'var(--crimson)',
                      }}
                    >
                      {lvl.badge}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: '0.96rem', color: '#ffffff' }}>
                      {lvl.title}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    {lvl.detail}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '16px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-dim)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <CheckCircle size={14} color="var(--cyan)" />
              Lộ trình Cambridge: Starters ➔ Movers ➔ Flyers ➔ KET ➔ PET
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
