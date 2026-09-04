import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Contact: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].contact;

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = 'taminhhoang715@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#0ea5e9', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#00f2fe', '#38bdf8', '#34d399'],
      });
      setTimeout(() => setFormSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div>
          <h2 className="section-title">
            {t.heading} - <span className="accent-text">{t.highlight}</span>
          </h2>
          <h4 className="contact-note">{t.note}</h4>
        </div>

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder=" " autoComplete="off" />
              <label htmlFor="name">{t.nameLabel}</label>
              <i className="fa-solid fa-user input-icon"></i>
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder=" " autoComplete="off" />
              <label htmlFor="email">{t.emailLabel}</label>
              <i className="fa-solid fa-envelope input-icon"></i>
            </div>

            <div className="form-group">
              <textarea id="message" name="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">{t.messageLabel}</label>
              <i className="fa-solid fa-comment input-icon"></i>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-resume btn-submit"
            >
              {isSubmitting ? (
                <>
                  <span>{t.btnSending}</span>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </>
              ) : formSubmitted ? (
                <>
                  <span>{t.btnSent}</span>
                  <i className="fa-solid fa-check"></i>
                </>
              ) : (
                <>
                  <span>{t.btnSubmit}</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>

          {/* Quick email copy */}
          <div className="quick-email-box">
            <span className="quick-email-text">
              {t.directEmail} <strong>{email}</strong>
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-copy-email"
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              <span>{copied ? t.btnCopied : t.btnCopy}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
