import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CharacterScene } from './canvas/CharacterScene';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  Send,
  Github,
  Linkedin,
  Facebook,
  Mail,
  Compass,
  FileCheck,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal, academic } = PORTFOLIO_DATA;

  const triggerCelebration = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#e11d48', '#fbbf24', '#ffffff', '#38bdf8'],
    });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '60px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '40px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Intro & Details */}
          <div>
            {/* Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: '#34d399',
                marginBottom: '22px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                  display: 'inline-block',
                }}
              />
              {personal.statusBadge}
            </div>

            {/* Main Greeting & Name */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              Xin chào, tôi là <br />
              <span className="gradient-text-crimson">{personal.fullName}</span>
            </h1>

            {/* Title & Alias */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--gold-star)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Sparkles size={18} /> {personal.title}
              </span>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                }}
              >
                @{personal.alias}
              </span>
            </div>

            {/* Bio Tagline */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '32px',
              }}
            >
              {personal.bio}
            </p>

            {/* Quick Metrics Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                marginBottom: '36px',
              }}
            >
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  HỌC VẤN
                </div>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                  {academic.school}
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 16px',
                }}
              >
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  TRÌNH ĐỘ TIẾNG ANH
                </div>
                <div style={{ fontWeight: 700, color: 'var(--gold-star)', fontSize: '0.95rem' }}>
                  CEFR B2 & Cambridge
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '40px',
              }}
            >
              <a href="#projects" className="btn btn-crimson">
                <Compass size={18} /> Khám Phá Dự Án <ArrowRight size={16} />
              </a>

              <a href="#contact" className="btn btn-glass">
                <Send size={18} /> Liên Hệ Ngay
              </a>

              <button
                onClick={triggerCelebration}
                className="btn btn-glass"
                style={{
                  borderColor: 'rgba(251, 191, 36, 0.3)',
                  color: 'var(--gold-star)',
                }}
                title="Bấm để kích hoạt hiệu ứng chúc mừng"
              >
                <FileCheck size={18} /> Hồ Sơ Năng Lực
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                KẾT NỐI:
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-muted)',
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
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
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0077b5';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
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
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1877f2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
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
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  transition: 'var(--transition-smooth)',
                  display: 'flex',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--crimson-bright)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Arlecchino Viewport */}
          <div
            style={{
              position: 'relative',
              height: '560px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Ambient Background Aura */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, rgba(59, 130, 246, 0.1) 60%, transparent 80%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            {/* 3D Canvas */}
            <CharacterScene />

            {/* Floating Info Tag */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                background: 'rgba(3, 7, 18, 0.75)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-crimson)',
                borderRadius: 'var(--radius-full)',
                padding: '6px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-mono)',
                color: '#fda4af',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--crimson-primary)',
                  boxShadow: '0 0 8px var(--crimson-primary)',
                }}
              />
              Arlecchino 3D Core • Tương tác theo con trỏ chuột
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};
