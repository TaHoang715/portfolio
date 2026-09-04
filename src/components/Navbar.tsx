import React, { useState, useEffect, useRef } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'fa-solid fa-house' },
  { id: 'about', label: 'About', icon: 'fa-solid fa-user' },
  { id: 'experience', label: 'Experience', icon: 'fa-solid fa-briefcase' },
  { id: 'projects', label: 'Projects', icon: 'fa-solid fa-code' },
  { id: 'skills', label: 'Skills', icon: 'fa-solid fa-layer-group' },
  { id: 'certifications', label: 'Certs', icon: 'fa-solid fa-award' },
  { id: 'profiles', label: 'Profiles', icon: 'fa-solid fa-globe' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-envelope' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const isHoveredNearTop = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scrolled state (for compact padding & deeper blur)
      setIsScrolled(currentScrollY > 80);

      // Scroll direction logic:
      // When scrolling down, hide navbar. When scrolling up, reveal navbar immediately!
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN
        if (!isHoveredNearTop.current) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Active Section Spy
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

    // Hover near top reveals navbar even when scrolled down
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
  }, []);

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
        </div>
      </nav>
    </header>
  );
};
