import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

export const Contact: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].contact;

  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const targetEmail = 'taminhhoang.nk@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#0ea5e9', '#ffffff'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`[Portfolio TaHoang715] Liên hệ từ ${name || 'Khách truy cập'}`);
    const body = encodeURIComponent(
      `Chào Hoàng,\n\n${message || 'Tôi muốn kết nối và trao đổi công việc cùng bạn.'}\n\n---\nTừ: ${name || 'Ẩn danh'} (${senderEmail || 'Không để lại email'})`
    );
    // Mở trực tiếp giao diện Soạn thư của Gmail trên web (hoạt động 100% trên mọi máy mà không cần cài app Outlook)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Send real email via /api/contact (handled by Vite dev middleware locally & Vercel serverless in prod)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: senderEmail.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormSubmitted(true);
        setName('');
        setSenderEmail('');
        setMessage('');

        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.7 },
          colors: ['#00f2fe', '#38bdf8', '#34d399', '#ffffff'],
        });

        setTimeout(() => setFormSubmitted(false), 6000);
      } else {
        throw new Error(data.error || data.message || 'Lỗi gửi tin nhắn');
      }
    } catch (err) {
      console.warn('Direct API submission failed, providing instant mailto alternative:', err);
      setErrorMessage(t.sendError);
    } finally {
      setIsSubmitting(false);
    }
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
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="contact-name" className="form-field-label">
                <i className="fa-solid fa-user"></i>
                <span>{t.nameLabel}</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder={t.namePlaceholder}
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="contact-email" className="form-field-label">
                <i className="fa-solid fa-envelope"></i>
                <span>{t.emailLabel}</span>
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  required
                  placeholder={t.emailPlaceholder}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="contact-message" className="form-field-label">
                <i className="fa-solid fa-comment-dots"></i>
                <span>{t.messageLabel}</span>
              </label>
              <div className="input-wrapper">
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder={t.messagePlaceholder}
                ></textarea>
              </div>
            </div>

            {/* Success Feedback Alert */}
            {formSubmitted && (
              <div className="contact-alert success-alert" role="alert">
                <i className="fa-solid fa-circle-check"></i>
                <span>{t.sendSuccess}</span>
              </div>
            )}

            {/* Error Feedback Alert with 1-click fallback */}
            {errorMessage && (
              <div className="contact-alert error-alert" role="alert">
                <i className="fa-solid fa-triangle-exclamation"></i>
                <div className="error-alert-content">
                  <p>{errorMessage}</p>
                  <button
                    type="button"
                    onClick={handleOpenMailto}
                    className="btn-alert-fallback"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>{t.btnMailto}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Actions: Submit button & Mailto shortcut */}
            <div className="form-actions">
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

              <button
                type="button"
                onClick={handleOpenMailto}
                className="btn-mailto-link"
                title="Mở trong trình duyệt hoặc ứng dụng mail cá nhân"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                <span>{t.btnMailto}</span>
              </button>
            </div>
          </form>

          {/* Quick email copy */}
          <div className="quick-email-box">
            <span className="quick-email-text">
              {t.directEmail} <strong>{targetEmail}</strong>
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
