import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
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
            Get In Touch - <span className="accent-text">Let's Talk!</span>
          </h2>
          <h4 className="contact-note">
            Bạn đang có dự án cần hợp tác, cơ hội việc làm hay đơn giản chỉ muốn trao đổi về công nghệ?
            Hộp thư của mình luôn rộng mở chào đón!
          </h4>
        </div>

        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder=" " autoComplete="off" />
              <label htmlFor="name">Họ và tên của bạn</label>
              <i className="fa-solid fa-user input-icon"></i>
            </div>

            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder=" " autoComplete="off" />
              <label htmlFor="email">Địa chỉ Email</label>
              <i className="fa-solid fa-envelope input-icon"></i>
            </div>

            <div className="form-group">
              <textarea id="message" name="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Nội dung tin nhắn</label>
              <i className="fa-solid fa-comment input-icon"></i>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-resume btn-submit"
            >
              {isSubmitting ? (
                <>
                  <span>Đang gửi...</span>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </>
              ) : formSubmitted ? (
                <>
                  <span>Đã gửi thành công!</span>
                  <i className="fa-solid fa-check"></i>
                </>
              ) : (
                <>
                  <span>Gửi tin nhắn</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>

          {/* Quick email copy */}
          <div className="quick-email-box">
            <span className="quick-email-text">
              Hoặc gửi thư trực tiếp đến: <strong>{email}</strong>
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-copy-email"
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              <span>{copied ? 'Đã sao chép email!' : 'Sao chép Email'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
