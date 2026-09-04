import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
            >
              <i className={`${item.icon} nav-icon`}></i>
              <span className="nav-label">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
