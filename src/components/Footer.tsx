import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ChevronUp, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(3, 7, 18, 0.95)',
        padding: '40px 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#ffffff' }}>
              {personal.fullName}
            </span>
            <span style={{ color: 'var(--crimson-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
              (@{personal.alias})
            </span>
          </div>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
            Deep Space Galaxy & Arlecchino 3D Experience • Designed & Engineered with{' '}
            <Heart size={14} color="var(--crimson-bright)" style={{ display: 'inline', verticalAlign: 'middle' }} />
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--gold-star)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={13} /> Hosted on Vercel
          </span>

          <button
            onClick={scrollToTop}
            className="btn btn-glass"
            style={{
              padding: '8px 14px',
              fontSize: '0.85rem',
            }}
            aria-label="Scroll back to top"
          >
            <ChevronUp size={16} /> Lên Đầu Trang
          </button>
        </div>
      </div>
    </footer>
  );
};
