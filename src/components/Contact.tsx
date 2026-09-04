import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Facebook, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#38bdf8', '#fbbf24'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Liên hệ từ Portfolio 3D')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '120px' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <Mail size={14} /> Kênh Trao Đổi Trực Tiếp
          </div>
          <h2 className="section-title">
            Hãy Cùng <span className="gradient-text-gold">Tạo Nên Điều Kỳ Diệu</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Bạn đang có dự án cần phát triển, cơ hội việc làm hay ý tưởng muốn cùng hợp tác?
            Tôi luôn sẵn sàng kết nối và trao đổi.
          </p>
        </div>

        {/* 2 Column Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '36px',
            maxWidth: '1020px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left: Contact Info & Socials */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px' }}>
                Thông Tin Kết Nối
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '28px' }}>
                Phản hồi email nhanh chóng trong vòng 24 giờ. Bạn có thể sao chép email trực tiếp hoặc nhắn qua mạng xã hội.
              </p>

              {/* Email Copier Box */}
              <div
                onClick={handleCopyEmail}
                style={{
                  background: 'rgba(3, 7, 18, 0.7)',
                  border: '1px solid rgba(225, 29, 72, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--crimson-primary)';
                  e.currentTarget.style.boxShadow = '0 0 20px var(--crimson-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      background: 'rgba(225, 29, 72, 0.15)',
                      padding: '10px',
                      borderRadius: '8px',
                      color: 'var(--crimson-bright)',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                      EMAIL TRỰC TIẾP
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.94rem', fontWeight: 700, color: '#ffffff' }}>
                      {personal.email}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: copied ? '#34d399' : 'var(--crimson-bright)',
                  }}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'Đã Copy!' : 'Sao chép'}</span>
                </div>
              </div>

              {/* Location Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '32px',
                }}
              >
                <MapPin size={18} color="var(--gold-star)" />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  Vị trí: <strong style={{ color: '#ffffff' }}>{personal.location}</strong>
                </span>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '14px' }}>
                MẠNG XÃ HỘI & HỒ SƠ DEV:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{ padding: '10px', fontSize: '0.85rem' }}
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{ padding: '10px', fontSize: '0.85rem' }}
                >
                  <Linkedin size={16} color="#0077b5" /> LinkedIn
                </a>
                <a
                  href={personal.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-glass"
                  style={{ padding: '10px', fontSize: '0.85rem' }}
                >
                  <Facebook size={16} color="#1877f2" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick Message Form */}
          <div className="glass-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '6px' }}>
              Gửi Tin Nhắn Nhanh
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Điền nội dung để gửi email trao đổi trực tiếp tới hộp thư của tôi.
            </p>

            <form onSubmit={handleSendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                  }}
                >
                  TIÊU ĐỀ / CHỦ ĐỀ
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Trao đổi cơ hội hợp tác / Dự án..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(3, 7, 18, 0.7)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--crimson-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                  }}
                >
                  NỘI DUNG TIN NHẮN
                </label>
                <textarea
                  rows={4}
                  placeholder="Nội dung lời nhắn của bạn..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(3, 7, 18, 0.7)',
                    border: '1px solid var(--border-subtle)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--crimson-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  required
                />
              </div>

              <button type="submit" className="btn btn-crimson" style={{ padding: '14px', fontSize: '1rem', marginTop: '6px' }}>
                <Send size={18} /> Gửi Lời Nhắn Qua Email <Sparkles size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
