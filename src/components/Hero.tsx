import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Facebook, Mail, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="home" className="site-section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '150px' }}>
      {/* Background Grid Pattern & Spotlights */}
      <div className="bg-grid-pattern" />
      <div className="spotlight-glow-top" />

      <div className="bento-container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Top Tech Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            background: 'rgba(203, 172, 249, 0.1)',
            border: '1px solid rgba(203, 172, 249, 0.25)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            color: 'var(--purple-accent)',
            marginBottom: '28px',
          }}
        >
          <Sparkles size={13} /> DYNAMIC FULL-STACK & 3D ARCHITECTURE
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            maxWidth: '960px',
            margin: '0 auto 24px',
          }}
        >
          Biến Mọi Ý Tưởng Thành <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #ffffff 10%, #cbacf9 60%, #e11d48 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Trải Nghiệm Số Mượt Mà
          </span>
        </h1>

        {/* Subtitle / Intro */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.28rem)',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            margin: '0 auto 40px',
            lineHeight: 1.65,
          }}
        >
          Xin chào! Tôi là <strong style={{ color: '#ffffff' }}>{personal.shortName}</strong> ({personal.alias}) —{' '}
          <span style={{ color: 'var(--purple-accent)' }}>{personal.title}</span>. Đam mê kiến trúc backend hiệu năng cao,
          đồ họa 3D tương tác và các giải pháp AI tự hành.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="#projects" className="magic-button">
            <span className="magic-button-shimmer" />
            <span className="magic-button-content">
              Khám Phá Các Dự Án <ArrowDown size={16} />
            </span>
          </a>

          <a
            href="#about"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 24px',
              height: '48px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)')}
          >
            Về Tôi & Kỹ Năng
          </a>
        </div>

        {/* Social Pill Links */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '18px' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text-muted)',
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'var(--crimson)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text-muted)',
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0077b5';
              e.currentTarget.style.borderColor = '#0077b5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href={personal.facebook}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text-muted)',
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#1877f2';
              e.currentTarget.style.borderColor = '#1877f2';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>

          <a
            href={`mailto:${personal.email}`}
            style={{
              color: 'var(--text-muted)',
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--crimson)';
              e.currentTarget.style.borderColor = 'var(--crimson)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
