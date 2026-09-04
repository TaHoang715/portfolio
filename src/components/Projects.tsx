import React from 'react';

interface Project {
  date: string;
  category: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    date: '2024',
    category: 'Game Development',
    title: 'DBP Air Defense',
    description:
      'Tựa game phòng không lịch sử lấy cảm hứng từ chiến dịch Điện Biên Phủ hào hùng. Tự lập trình cơ chế quỹ đạo vật lý bắn pháo, đường bay tuần tra của phi cơ địch và hệ thống âm thanh chiến đấu sống động.',
    githubUrl: 'https://github.com/TaHoang715/DBP-Air-Defense',
  },
  {
    date: '2024',
    category: 'Web Application',
    title: 'LSD Word Guess',
    description:
      'Web mini-game thử thách đoán từ với giao diện trực quan và trải nghiệm mượt mà. Tích hợp hệ thống gợi ý manh mối thông minh, bộ đếm điểm theo lượt và tối ưu phản hồi tương tác thời gian thực.',
    githubUrl: 'https://github.com/TaHoang715/lsd-word-guess',
  },
  {
    date: '2025',
    category: 'Frontend Engineering',
    title: 'Modern Developer Portfolio',
    description:
      'Không gian trưng bày năng lực lập trình phong cách DevHQ hiện đại. Tích hợp canvas hạt sao 3D tương tác theo chuột mượt mà, bộ lọc kỹ năng động và tối ưu chuẩn SEO.',
    githubUrl: 'https://github.com/TaHoang715/portfolio',
    liveUrl: 'https://github.com/TaHoang715/portfolio',
  },
  {
    date: 'IN PROGRESS',
    category: 'Indie & AI Experiment',
    title: 'Indie Mechanics & Game Toolkit',
    description:
      'Bộ công cụ thực nghiệm các thuật toán tìm đường trong game (Pathfinding), xử lý trạng thái nhân vật và tích hợp API mô hình tự động hóa sinh dữ liệu hội thoại linh hoạt.',
    githubUrl: 'https://github.com/TaHoang715',
  },
];

export const Projects: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">
        Projects Showcase - <span className="accent-text">What I've Built!</span>
      </h2>

      <div className="experience-grid">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="experience-card" onMouseMove={handleMouseMove}>
            <div className="experience-date">{proj.date}</div>
            <div className="project-tag">{proj.category}</div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links-wrapper">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <i className="fa-brands fa-github"></i>
                GitHub
              </a>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  Source Repo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
