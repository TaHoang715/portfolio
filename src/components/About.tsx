import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Globe, BookOpen, CheckCircle2, User } from 'lucide-react';

export const About: React.FC = () => {
  const { academic } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-badge">
            <User size={14} /> Hồ Sơ & Nền Tảng Học Vấn
          </div>
          <h2 className="section-title">
            Hành Trình <span className="gradient-text-gold">Đào Tạo & Chứng Chỉ</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Nền tảng kỹ thuật vững chắc từ Đại học FPT kết hợp năng lực ngoại ngữ chuẩn quốc tế
            giúp tôi tiếp cận nhanh chóng các công nghệ tiên tiến trên thế giới.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
          }}
          className="about-grid"
        >
          {/* Degree & University Card */}
          <div className="glass-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(251, 191, 36, 0.12)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-star)',
                }}
              >
                <GraduationCap size={28} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--gold-star)',
                    textTransform: 'uppercase',
                  }}
                >
                  Bằng Cấp Chính Quy
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800 }}>
                  {academic.degree}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '22px', fontSize: '1.02rem' }}>
              Tốt nghiệp chuyên ngành Kỹ Thuật Phần Mềm tại <strong style={{ color: '#ffffff' }}>{academic.school}</strong>.
              Được đào tạo bài bản về kiến trúc phần mềm, thuật toán, phát triển hệ thống phân tán và quy trình chuẩn công nghiệp.
            </p>

            {/* GPA Meter */}
            <div
              style={{
                background: 'rgba(3, 7, 18, 0.6)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Điểm Trung Bình Tích Lũy (GPA)
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: 'var(--gold-star)',
                  }}
                >
                  {academic.gpa}
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '70%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                    borderRadius: '4px',
                    boxShadow: '0 0 12px rgba(251, 191, 36, 0.6)',
                  }}
                />
              </div>
            </div>

            {/* Key highlights */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} color="var(--gold-star)" />
                <span>Thực hành liên tục qua các đồ án thực tế và quy trình Agile Scrum</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.94rem', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} color="var(--gold-star)" />
                <span>Nền tảng cấu trúc dữ liệu, giải thuật và bảo mật ứng dụng</span>
              </li>
            </ul>
          </div>

          {/* English Certifications Card */}
          <div className="glass-card">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-nebula)',
                }}
              >
                <Globe size={28} />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--cyan-nebula)',
                    textTransform: 'uppercase',
                  }}
                >
                  Năng Lực Ngoại Ngữ
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800 }}>
                  Anh Ngữ Chuẩn Quốc Tế
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '22px', fontSize: '1.02rem' }}>
              Sở hữu hành trình rèn luyện tiếng Anh bài bản từ nhỏ với trọn bộ chứng chỉ Cambridge và
              trình độ Anh ngữ chuyên môn bậc cao:
            </p>

            {/* Certifications List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              {academic.languages.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(3, 7, 18, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(225, 29, 72, 0.15)',
                      padding: '8px',
                      borderRadius: '8px',
                      color: 'var(--crimson-bright)',
                      marginTop: '2px',
                    }}
                  >
                    <Award size={18} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <strong style={{ color: '#ffffff', fontSize: '1rem', fontFamily: 'var(--font-heading)' }}>
                        {item.cert}
                      </strong>
                      <span
                        style={{
                          background: 'rgba(56, 189, 248, 0.15)',
                          color: '#38bdf8',
                          fontSize: '0.75rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {item.level}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.86rem',
                color: 'var(--text-dim)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <BookOpen size={14} /> Cambridge English Track: Starters ➔ Movers ➔ Flyers ➔ KET ➔ PET
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
