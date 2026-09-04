import React from 'react';

interface Certification {
  badge: string;
  title: string;
  institution: string;
  description: string;
  icon: string;
}

const CERTS: Certification[] = [
  {
    badge: 'BẰNG KỸ SƯ • GPA 7.0/10',
    title: 'Kỹ Sư Phần Mềm (Software Engineering)',
    institution: 'Đại Học FPT (FPT University)',
    description:
      'Chương trình đào tạo kỹ sư phần mềm thực chiến, rèn luyện tư duy thuật toán, cấu trúc dữ liệu, kiến trúc hệ thống và kỹ năng làm việc nhóm theo tiêu chuẩn công nghiệp.',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    badge: 'TIẾNG ANH CHUẨN QUỐC TẾ',
    title: 'Chứng Chỉ Tiếng Anh CEFR B2',
    institution: 'IELTS 5.5 (March 2023)',
    description:
      'Năng lực đọc hiểu tài liệu kỹ thuật chuyên sâu, viết tài liệu dự án và giao tiếp chuyên nghiệp với cộng đồng lập trình viên quốc tế.',
    icon: 'fa-solid fa-language',
  },
  {
    badge: 'FULL CAMBRIDGE SUITE',
    title: 'Lộ Trình Cambridge English Toàn Diện',
    institution: 'Cambridge Assessment English',
    description:
      'Sở hữu trọn bộ chứng chỉ Cambridge từ Starters, Movers, Flyers cho đến KET và PET, khẳng định nền tảng tiếng Anh được rèn luyện bài bản và vững vàng từ sớm.',
    icon: 'fa-solid fa-certificate',
  },
];

export const Certifications: React.FC = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="section-title">
        Certifications & Education - <span className="accent-text">Milestones!</span>
      </h2>

      <div className="cert-grid">
        {CERTS.map((cert, idx) => (
          <div key={idx} className="cert-item">
            <div className="cert-header-icon">
              <i className={cert.icon}></i>
            </div>
            <div className="cert-info">
              <span className="cert-badge">{cert.badge}</span>
              <h3>{cert.title}</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '8px' }}>
                {cert.institution}
              </p>
              <p>{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
