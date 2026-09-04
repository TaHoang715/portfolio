import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArlecchinoCanvas } from './canvas/ArlecchinoCanvas';
import { GraduationCap, Award, Briefcase, Mail, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const BentoGrid: React.FC = () => {
  const { academic, careers, personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#cbacf9', '#38bdf8'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="about" className="site-section">
      <div className="bento-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <Sparkles size={13} /> PROFILE & CAPABILITIES
          </div>
          <h2 className="section-title-bento">
            Về Tôi & <span style={{ color: 'var(--purple-accent)' }}>Hồ Sơ Năng Lực</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            Tổng hòa giữa kiến thức kỹ thuật bài bản từ Đại học FPT, năng lực ngoại ngữ quốc tế và kinh nghiệm thực chiến.
          </p>
        </div>

        {/* Bento Grid Layout (Asymmetric Tiles) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
          }}
          className="bento-grid-wrapper"
        >
          {/* Tile 1: 3D Arlecchino Interactive Canvas (Span 7 col) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '420px',
              padding: '24px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--crimson)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--crimson)' }} />
                  Interactive 3D Centerpiece
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                  }}
                >
                  Di chuột để tương tác
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                Arlecchino (The Knave) • Balemoon 3D
              </h3>
            </div>

            {/* 3D Canvas Viewport */}
            <ArlecchinoCanvas height="280px" />

            <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--purple-accent)' }}>✦</span>
              Nhân vật 3D tương tác xoay ánh mắt và cơ thể theo con trỏ chuột của bạn trong thời gian thực.
            </div>
          </div>

          {/* Tile 2: Academic Degree (Span 5 col) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(251, 191, 36, 0.12)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  marginBottom: '18px',
                }}
              >
                <GraduationCap size={24} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--gold)', marginBottom: '4px' }}>
                BẰNG CẤP CHÍNH QUY
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, marginBottom: '6px' }}>
                {academic.degree}
              </h3>
              <div style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                {academic.school}
              </div>

              {/* GPA Bar */}
              <div
                style={{
                  background: 'rgba(0, 3, 25, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  marginBottom: '16px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '8px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Điểm Tích Lũy GPA</span>
                  <strong style={{ color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>{academic.gpa}</strong>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', borderRadius: '3px' }} />
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
              Được trang bị tư duy giải thuật, cấu trúc dữ liệu, thiết kế hệ thống và làm việc theo quy chuẩn kỹ nghệ phần mềm.
            </p>
          </div>

          {/* Tile 3: English Proficiency (Span 5 col) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(203, 172, 249, 0.12)',
                  border: '1px solid rgba(203, 172, 249, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--purple-accent)',
                  marginBottom: '16px',
                }}
              >
                <Award size={24} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--purple-accent)', marginBottom: '4px' }}>
                CHỨNG CHỈ QUỐC TẾ
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '14px' }}>
                Năng Lực Ngoại Ngữ
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {academic.englishLevels.map((lvl, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '8px',
                      padding: '10px 14px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '1px 6px',
                          borderRadius: '4px',
                          background: 'rgba(225, 29, 72, 0.2)',
                          color: 'var(--crimson)',
                        }}
                      >
                        {lvl.badge}
                      </span>
                      <strong style={{ fontSize: '0.88rem', color: '#ffffff' }}>{lvl.title}</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{lvl.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tile 4: Career Experience (Span 4 col) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan)',
                  marginBottom: '16px',
                }}
              >
                <Briefcase size={24} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan)', marginBottom: '4px' }}>
                THỜI GIAN LÀM VIỆC
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '14px' }}>
                Kinh Nghiệm Thực Chiến
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {careers.slice(0, 2).map((c) => (
                  <div key={c.number} style={{ borderLeft: '2px solid var(--crimson)', paddingLeft: '10px' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{c.role}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--cyan)' }}>{c.company}</div>
                    <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      {c.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#experience" style={{ color: 'var(--purple-accent)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600, marginTop: '16px' }}>
              Xem toàn bộ timeline ➔
            </a>
          </div>

          {/* Tile 5: Connect / Copy Email CTA (Span 3 col) */}
          <div
            className="bento-card"
            style={{
              gridColumn: 'span 3',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, rgba(4, 7, 29, 0.8) 0%, rgba(225, 29, 72, 0.15) 100%)',
              borderColor: 'rgba(225, 29, 72, 0.3)',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(225, 29, 72, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--crimson)',
                  marginBottom: '16px',
                }}
              >
                <Mail size={22} />
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--crimson)', marginBottom: '4px' }}>
                KẾT NỐI
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>
                Bắt Đầu Dự Án Mới?
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Sao chép địa chỉ email để liên hệ trao đổi trực tiếp chỉ với 1 chạm.
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="magic-button"
              style={{ width: '100%', height: '42px' }}
            >
              <span className="magic-button-shimmer" />
              <span className="magic-button-content" style={{ fontSize: '0.85rem' }}>
                {copied ? <Check size={15} color="#34d399" /> : <Copy size={15} />}
                <span>{copied ? 'Đã Copy Email!' : 'Sao Chép Email'}</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bento-card {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
};
