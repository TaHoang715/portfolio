import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới Thiệu', href: '#about' },
    { name: 'Kinh Nghiệm', href: '#experience' },
    { name: 'Kỹ Năng', href: '#tech-stack' },
    { name: 'Dự Án', href: '#projects' },
    { name: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(3, 7, 18, 0.82)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
        padding: scrolled ? '14px 0' : '22px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #e11d48, #0f172a)',
              border: '1px solid rgba(225, 29, 72, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(225, 29, 72, 0.4)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              fontSize: '1.1rem',
            }}
          >
            TH
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
                display: 'block',
                lineHeight: 1.1,
              }}
            >
              TaHoang<span style={{ color: 'var(--crimson-primary)' }}>715</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-star)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Sparkles size={11} /> Deep Space Galaxy
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.94rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="btn btn-crimson"
            style={{
              padding: '8px 20px',
              fontSize: '0.9rem',
            }}
          >
            <Send size={15} /> Kết Nối
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(3, 7, 18, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-crimson)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-crimson"
            style={{ marginTop: '8px' }}
          >
            <Send size={16} /> Liên Hệ Ngay
          </a>
        </div>
      )}

      {/* Embedded CSS for responsive nav */}
      <style>{`
        @media (max-width: 820px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};
