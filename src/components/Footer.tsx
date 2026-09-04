import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { lang } = usePortfolio();
  const tNav = TRANSLATIONS[lang].nav;
  const tFooter = TRANSLATIONS[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">
            TaHoang<span className="accent-text">715</span>
          </h2>
          <p className="footer-tagline">{tFooter.tagline}</p>
        </div>

        <ul className="footer-nav-links">
          <li><a href="#home" onClick={(e) => scrollTo('home', e)}>{tNav.home}</a></li>
          <li><a href="#about" onClick={(e) => scrollTo('about', e)}>{tNav.about}</a></li>
          <li><a href="#experience" onClick={(e) => scrollTo('experience', e)}>{tNav.experience}</a></li>
          <li><a href="#projects" onClick={(e) => scrollTo('projects', e)}>{tNav.projects}</a></li>
          <li><a href="#skills" onClick={(e) => scrollTo('skills', e)}>{tNav.skills}</a></li>
          <li><a href="#certifications" onClick={(e) => scrollTo('certifications', e)}>{tNav.certifications}</a></li>
          <li><a href="#profiles" onClick={(e) => scrollTo('profiles', e)}>{tNav.profiles}</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo('contact', e)}>{tNav.contact}</a></li>
        </ul>

        <div className="footer-socials">
          <a
            href="https://github.com/TaHoang715"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="mailto:taminhhoang715@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tạ Minh Hoàng (TaHoang715). {tFooter.rights}</p>
        <button
          onClick={scrollToTop}
          className="back-to-top bounce"
          aria-label="Back to top"
          title="Back to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};
