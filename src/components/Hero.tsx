import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Facebook, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="flow-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="flow-container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '640px' }}>
          {/* Status Label */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#34d399',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
                display: 'inline-block',
              }}
            />
            {personal.statusBadge}
          </div>

          {/* Bold Intro */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              marginBottom: '8px',
            }}
          >
            {personal.greeting}
          </div>

          {/* Huge Name */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.04em',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            {personal.fullName}
          </h1>

          {/* Subtitle / Role */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.8rem)',
              fontWeight: 700,
              color: 'var(--crimson)',
              marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}
          >
            {personal.title}
          </div>

          {/* Natural summary */}
          <p
            style={{
              fontSize: '1.12rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '540px',
            }}
          >
            {personal.summary}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <a href="#about" className="btn-action btn-crimson-solid">
              Cuộn Xuống Khám Phá <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-action btn-ghost-border">
              Liên Hệ Trực Tiếp
            </a>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0077b5')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={personal.facebook}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1877f2')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--crimson)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
