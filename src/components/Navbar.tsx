import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
        pointerEvents: 'none',
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto',
          background: scrolled ? 'rgba(4, 7, 29, 0.88)' : 'rgba(4, 7, 29, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '9999px',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            textDecoration: 'none',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.05rem',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ color: 'var(--crimson)' }}>TH</span>
          <span>715</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="desktop-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="magic-button"
          style={{ height: '36px', padding: '1px' }}
        >
          <span className="magic-button-shimmer" />
          <span className="magic-button-content" style={{ padding: '0 14px', fontSize: '0.82rem' }}>
            <Send size={12} /> Contact
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-btn"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            pointerEvents: 'auto',
            position: 'absolute',
            top: '70px',
            width: '90%',
            maxWidth: '380px',
            background: 'rgba(4, 7, 29, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                padding: '8px 0',
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="magic-button"
            style={{ width: '100%', marginTop: '8px' }}
          >
            <span className="magic-button-shimmer" />
            <span className="magic-button-content">
              <Sparkles size={14} /> Contact Me
            </span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
