import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Facebook } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [msg, setMsg] = useState('');

  const copyEmail = () => {
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

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${personal.email}?subject=Liên hệ hợp tác&body=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="flow-section" style={{ paddingBottom: '160px' }}>
      <div className="flow-container" style={{ width: '100%', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {/* Section Number */}
          <div className="section-label" style={{ justifyContent: 'center' }}>
            05 / KẾT NỐI TRỰC TIẾP
          </div>

          <h2 className="section-heading-huge">
            Let's <span style={{ color: 'var(--crimson)' }}>Connect</span>
          </h2>

          <p className="para-lead" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Bạn có cơ hội việc làm, dự án hợp tác hay chỉ đơn giản muốn trao đổi về công nghệ?
            Hãy để lại lời nhắn hoặc gửi email trực tiếp cho tôi.
          </p>

          {/* Email Copier Box */}
          <div
            onClick={copyEmail}
            style={{
              background: 'rgba(11, 19, 43, 0.65)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(225, 29, 72, 0.4)',
              borderRadius: '9999px',
              padding: '16px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              cursor: 'pointer',
              marginBottom: '36px',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--crimson)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(225, 29, 72, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.4)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={22} color="var(--crimson)" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
              {personal.email}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: copied ? '#34d399' : 'var(--text-dim)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Đã Sao Chép!' : 'Sao Chép'}
            </span>
          </div>

          {/* Quick Message Form */}
          <div className="clean-panel" style={{ textAlign: 'left', marginBottom: '36px' }}>
            <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                GỬI TIN NHẮN NHANH QUA EMAIL:
              </label>
              <textarea
                rows={3}
                placeholder="Nhập nội dung bạn muốn gửi tới Tạ Minh Hoàng..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(3, 7, 18, 0.7)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.98rem',
                  outline: 'none',
                  resize: 'vertical',
                }}
                required
              />
              <button type="submit" className="btn-action btn-crimson-solid" style={{ alignSelf: 'flex-end' }}>
                <Send size={16} /> Gửi Tin Nhắn
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="btn-action btn-ghost-border"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-action btn-ghost-border"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Linkedin size={18} color="#0077b5" /> LinkedIn
            </a>
            <a
              href={personal.facebook}
              target="_blank"
              rel="noreferrer"
              className="btn-action btn-ghost-border"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <Facebook size={18} color="#1877f2" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
