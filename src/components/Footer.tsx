import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(0, 3, 25, 0.95)',
        padding: '36px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="bento-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: '#ffffff' }}>
            {personal.fullName}{' '}
            <span style={{ color: 'var(--crimson)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 600 }}>
              (@{personal.alias})
            </span>
          </div>
          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            © {new Date().getFullYear()} Tạ Minh Hoàng. Powered by React, Three.js & Tailwind.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--purple-accent)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={12} /> Hosted on Vercel
          </span>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
            }}
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
