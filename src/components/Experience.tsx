import React, { useEffect, useRef } from 'react';

interface TimelineEntry {
  number: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  side: 'left' | 'right';
}

const EXPERIENCES: TimelineEntry[] = [
  {
    number: '01',
    role: 'Operations & Digital Solutions',
    company: 'TDV Co., Ltd.',
    period: '2024 – PRESENT (2 YEARS)',
    bullets: [
      'Quản trị và vận hành các quy trình số hóa, theo dõi luồng dữ liệu kỹ thuật và bảo đảm hệ thống vận hành liên tục, ổn định.',
      'Đề xuất và triển khai cải tiến quy trình công việc nội bộ, ứng dụng công cụ tự động hóa để tiết kiệm thời gian xử lý thủ công.',
    ],
    side: 'left',
  },
  {
    number: '02',
    role: 'Software Engineer Intern',
    company: 'KNS Software',
    period: '2023 (6 MONTHS)',
    bullets: [
      'Trực tiếp tham gia phát triển và bảo trì các module tính năng web và backend theo chuẩn quy trình phần mềm chuyên nghiệp.',
      'Cộng tác chặt chẽ cùng các senior engineer trong việc review code, xử lý bug, viết tài liệu kỹ thuật và tối ưu trải nghiệm người dùng.',
    ],
    side: 'right',
  },
  {
    number: '03',
    role: 'Independent & Indie Game Creator',
    company: 'Indie & Side Projects',
    period: '2022 – PRESENT',
    bullets: [
      'Tự tay thiết kế và lập trình các dự án game độc lập (tiêu biểu như DBP Air Defense với hệ thống quỹ đạo vật lý đạn pháo).',
      'Xây dựng các web app tương tác, tối ưu hiệu năng và chia sẻ mã nguồn mở trên GitHub cá nhân.',
    ],
    side: 'left',
  },
];

export const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      if (!timeline || !progress) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startOffset = windowHeight * 0.5;
      const scrollDistance = startOffset - rect.top;
      const progressPercent = Math.max(0, Math.min(100, (scrollDistance / rect.height) * 100));

      progress.style.height = `${progressPercent}%`;

      const dots = timeline.querySelectorAll('.timeline-dot');
      dots.forEach((dot) => {
        const dotRect = dot.getBoundingClientRect();
        const lineBottom = progress.getBoundingClientRect().bottom;
        if (lineBottom >= dotRect.top) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">
        Work Experience - <span className="accent-text">Professional Journey!</span>
      </h2>

      <div ref={timelineRef} className="timeline">
        <div className="timeline-line">
          <div ref={progressRef} className="timeline-progress" />
        </div>

        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className={`timeline-item ${exp.side}`}>
            <div className="timeline-number">{exp.number}</div>
            <div className="timeline-content">
              <div className="project-tag">{exp.company}</div>
              <h3>{exp.role}</h3>
              <div style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7 }}>
                {exp.bullets.map((b, bIdx) => (
                  <p key={bIdx} style={{ marginBottom: '8px' }}>
                    • {b}
                  </p>
                ))}
              </div>
            </div>
            <div className="timeline-date">{exp.period}</div>
            <div className="timeline-dot" />
          </div>
        ))}
      </div>
    </section>
  );
};
