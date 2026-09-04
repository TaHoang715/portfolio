import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Facebook, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const copyEmail = () => {
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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject || 'Liên hệ từ Portfolio')}&body=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="site-section" style={{ paddingBottom: '140px' }}>
      <div className="bento-container" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* Tag */}
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <Sparkles size={13} /> GET IN TOUCH
          </div>

          <h2 className="section-title-bento">
            Sẵn Sàng Đưa Ý Tưởng <br />
            <span style={{ color: 'var(--purple-accent)' }}>Lên Tầm Cao Mới?</span>
          </h2>

          <p className="section-desc" style={{ margin: '0 auto 36px' }}>
            Hãy liên hệ với tôi ngay hôm nay để cùng thảo luận về cách chúng ta có thể hiện thực hóa các mục tiêu dự án của bạn.
          </p>

          {/* Copy Email Pill Button */}
          <div
            onClick={copyEmail}
            className="magic-button"
            style={{ height: '52px', marginBottom: '40px' }}
          >
            <span className="magic-button-shimmer" />
            <span className="magic-button-content" style={{ gap: '14px', padding: '0 28px', fontSize: '1rem' }}>
              <Mail size={18} color="var(--crimson)" />
              <span style={{ fontFamily: 'var(--font-mono)' }}>{personal.email}</span>
              <span style={{ fontSize: '0.8rem', color: copied ? '#34d399' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? 'Đã Sao Chép!' : 'Sao Chép'}
              </span>
            </span>
          </div>

          {/* Contact Message Form */}
          <div className="bento-card" style={{ textAlign: 'left', marginBottom: '36px' }}>
            <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  CHỦ ĐỀ / TIÊU ĐỀ
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Trao đổi dự án / Cơ hội việc làm..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 3, 25, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  NỘI DUNG LỜI NHẮN
                </label>
                <textarea
                  rows={3}
                  placeholder="Nhập nội dung bạn muốn gửi tới Tạ Minh Hoàng..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(0, 3, 25, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="magic-button"
                style={{ height: '44px', alignSelf: 'flex-end' }}
              >
                <span className="magic-button-shimmer" />
                <span className="magic-button-content" style={{ fontSize: '0.88rem' }}>
                  <Send size={15} /> Gửi Tin Nhắn Qua Email
                </span>
              </button>
            </form>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
            >
              <Github size={17} /> GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#0077b5',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
            >
              <Linkedin size={17} /> LinkedIn
            </a>

            <a
              href={personal.facebook}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#1877f2',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)')}
            >
              <Facebook size={17} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
