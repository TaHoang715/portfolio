import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Navbar: React.FC = () => {
  const { lang, setLang } = usePortfolio();
  const t = TRANSLATIONS[lang].nav;

  const NAV_ITEMS = [
    { id: 'home', label: t.home, icon: 'fa-solid fa-house' },
    { id: 'about', label: t.about, icon: 'fa-solid fa-user' },
    { id: 'experience', label: t.experience, icon: 'fa-solid fa-briefcase' },
    { id: 'projects', label: t.projects, icon: 'fa-solid fa-code' },
    { id: 'skills', label: t.skills, icon: 'fa-solid fa-layer-group' },
    { id: 'certifications', label: t.certifications, icon: 'fa-solid fa-award' },
    { id: 'profiles', label: t.profiles, icon: 'fa-solid fa-globe' },
    { id: 'contact', label: t.contact, icon: 'fa-solid fa-envelope' },
  ];

  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const isHoveredNearTop = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);

      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        if (!isHoveredNearTop.current) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      const scrollPosition = currentScrollY + window.innerHeight * 0.35;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const elementTop = top + currentScrollY;
          const elementBottom = bottom + currentScrollY;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 50) {
        isHoveredNearTop.current = true;
        setIsVisible(true);
      } else {
        isHoveredNearTop.current = false;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lang]);

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`site-nav-wrapper ${isVisible ? 'nav-visible' : 'nav-hidden'} ${
        isScrolled ? 'nav-scrolled' : ''
      }`}
    >
      <nav className="site-nav" id="siteNav">
        <div className="nav-pill">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(item.id, e)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                data-section={item.id}
                title={item.label}
              >
                <i className={`${item.icon} nav-icon`}></i>
                <span className="nav-label">{item.label}</span>
                {isActive && <span className="active-dot" aria-hidden="true" />}
              </a>
            );
          })}

          {/* Quick Lang Switcher inside pill */}
          <button
            onClick={() => setLang(lang === 'en' ? 'vi' : 'en')}
            className="pill-lang-btn"
            title={`Chuyển sang ${lang === 'en' ? 'Tiếng Việt' : 'English'}`}
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>
        </div>
      </nav>
    </header>
  );
};
