import React from 'react';

export const Footer: React.FC = () => {
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
          <p className="footer-tagline">
            Building reliable software with curiosity, precision & code.
          </p>
        </div>

        <ul className="footer-nav-links">
          <li><a href="#home" onClick={(e) => scrollTo('home', e)}>Home</a></li>
          <li><a href="#about" onClick={(e) => scrollTo('about', e)}>About</a></li>
          <li><a href="#experience" onClick={(e) => scrollTo('experience', e)}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => scrollTo('projects', e)}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => scrollTo('skills', e)}>Skills</a></li>
          <li><a href="#certifications" onClick={(e) => scrollTo('certifications', e)}>Certifications</a></li>
          <li><a href="#profiles" onClick={(e) => scrollTo('profiles', e)}>Profiles</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo('contact', e)}>Contact</a></li>
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
        <p>&copy; {new Date().getFullYear()} Tạ Minh Hoàng (TaHoang715). All rights reserved.</p>
        <button
          onClick={scrollToTop}
          className="back-to-top bounce"
          aria-label="Về đầu trang"
          title="Về đầu trang"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};
