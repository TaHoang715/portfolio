export interface SkillItem {
  name: string;
  category: string;
  color?: string;
  bg?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  comment: string;
  skills: { name: string; bg: string; color: string; icon?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  status: 'active' | 'completed' | 'in_progress';
  featured: boolean;
  accentColor: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Tạ Minh Hoàng",
    alias: "TaHoang715",
    title: "Full-stack Software Engineer",
    location: "Ho Chi Minh City, Vietnam",
    bio: "Kỹ sư phần mềm đam mê kiến trúc hệ thống hiện đại, tối ưu hóa backend hiệu năng cao, trải nghiệm web tương tác 3D và các giải pháp AI tự hành (Agentic AI).",
    tagline: "Building scalable backend services, rich interactive experiences & modern digital products.",
    statusBadge: "Available for new challenges & collaborations",
    email: "taminhhoang.nk@gmail.com",
    github: "https://github.com/TaHoang715",
    linkedin: "https://www.linkedin.com/in/ho%C3%A0ng-t%E1%BA%A1-a9a5031b8/",
    facebook: "https://www.facebook.com/ta.minh.hoang.293535/",
  },

  academic: {
    school: "Đại học FPT (FPT University)",
    degree: "Kỹ Sư Phần Mềm (Software Engineering)",
    gpa: "7.0 / 10.0",
    languages: [
      {
        cert: "CEFR B2",
        level: "B2 Upper-Intermediate",
        desc: "Tương đương IELTS 5.5 - 6.0, giao tiếp chuyên môn & làm việc kỹ thuật lưu loát."
      },
      {
        cert: "Cambridge English Suite",
        level: "Trọn bộ chứng chỉ quốc tế",
        desc: "Lộ trình Cambridge toàn diện: Starters, Movers, Flyers, KET và PET."
      }
    ]
  },

  experiences: [
    {
      id: "tdv",
      period: "2024 - Hiện tại (2 Năm)",
      role: "Digital Instructor & Operations",
      company: "Trung tâm Tiếng Anh Thần Đồng Việt Úc (TDV)",
      type: "Full-time / Regular",
      description: "Đồng hành giảng dạy, tối ưu hóa quy trình quản trị dữ liệu số và nâng cao trải nghiệm ứng dụng công nghệ giáo dục.",
      skills: ["EdTech", "Communication", "Workflow Automation", "Data Management"]
    },
    {
      id: "kns",
      period: "2025 (6 Tháng)",
      role: "Software Engineer Intern",
      company: "Công ty Kỷ Nguyên Số (KNS)",
      type: "Internship",
      description: "Trực tiếp tham gia phát triển và bảo trì các module dịch vụ backend, xây dựng RESTful APIs, tối ưu hóa cơ sở dữ liệu và cộng tác trong quy trình Agile/Scrum.",
      skills: ["Backend Architecture", "RESTful APIs", "SQL / NoSQL", "Git Workflow", "Team Collaboration"]
    },
    {
      id: "freelance",
      period: "2024 - Hiện tại",
      role: "Freelance Developer & Indie Game Creator",
      company: "Independent Practice",
      type: "Freelance",
      description: "Phát triển các ứng dụng độc lập, giải pháp full-stack tùy biến và các tựa mini-game arcade trên nền tảng web.",
      skills: ["Game Physics", "Full-stack Web", "TypeScript", "Performance Tuning"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "dbp-air-defense",
      title: "DBP Air Defense",
      tagline: "Phòng Không Chiến - Tựa Game Phòng Thủ Cứ Điểm Arcade",
      description: "Trò chơi phòng không chiến thuật mô phỏng đánh chặn mục tiêu trên không. Xây dựng logic bắn hạ mục tiêu, hệ thống tính điểm, hiệu ứng âm thanh & hình ảnh trực quan cùng cơ chế va chạm mượt mà.",
      tags: ["Game Dev", "Collision Detection", "Arcade Physics", "Canvas/Web", "Sound FX"],
      github: "https://github.com/TaHoang715/DBP-Air-Defense",
      demo: "https://github.com/TaHoang715/DBP-Air-Defense",
      status: "completed",
      featured: true,
      accentColor: "#ef4444",
      highlights: [
        "Thuật toán phát hiện va chạm (Collision Detection) chính xác cao",
        "Hệ thống vòng lặp game loop tối ưu 60 FPS",
        "Trải nghiệm arcade retro kịch tính với âm thanh hào hùng"
      ]
    },
    {
      id: "lsd-word-guess",
      title: "LSD Word Guess",
      tagline: "Trò Chơi Giải Đố Đoán Từ Vựng Tương Tác",
      description: "Ứng dụng game đoán từ trí tuệ kết hợp giao diện tối giản hiện đại. Hỗ trợ hệ thống gợi ý từ vựng, tính toán lượt đoán, đo lường thời gian phản xạ và giao diện người dùng thân thiện.",
      tags: ["Word Puzzle", "Interactive UI", "State Management", "TypeScript", "Educational"],
      github: "https://github.com/TaHoang715/lsd-word-guess",
      demo: "https://github.com/TaHoang715/lsd-word-guess",
      status: "completed",
      featured: true,
      accentColor: "#06b6d4",
      highlights: [
        "Xử lý state và logic kiểm tra từ vựng tức thì không giật lag",
        "Giao diện Clean UI thích ứng mọi kích thước màn hình",
        "Bộ từ vựng phong phú phù hợp cho học tập & giải trí"
      ]
    },
    {
      id: "flagship-future",
      title: "Next-Gen Flagship Project",
      tagline: "Dự Án Cờ Đầu Thế Hệ Mới (Secret In-Lab)",
      description: "Siêu phẩm tương lai kết hợp kiến trúc Full-stack phân tán quy mô lớn, tích hợp hệ thống Autonomous AI Agents đa tác nhân và bảo mật cấp cao.",
      tags: ["Distributed Systems", "Agentic AI", "Next.js", "Docker", "Event-Driven"],
      status: "in_progress",
      featured: true,
      accentColor: "#e11d48",
      highlights: [
        "Kiến trúc micro-services hiện đại, tính module hóa cao",
        "Tích hợp mô hình AI suy luận tự động (Autonomous Agents)",
        "Đang hoàn thiện những khâu cuối cùng trong phòng thí nghiệm"
      ]
    }
  ] as ProjectItem[],

  techStackGroups: [
    {
      id: "backend",
      title: "Core Languages & Backend",
      comment: "/* Core Languages & Backend */",
      skills: [
        { name: "C#", bg: "#239120", color: "#ffffff" },
        { name: ".NET", bg: "#512bd4", color: "#ffffff" },
        { name: ".NET Core", bg: "#512bd4", color: "#ffffff" },
        { name: "ASP.NET Core", bg: "#0078d7", color: "#ffffff" },
        { name: "Java", bg: "#ea2d2e", color: "#ffffff" },
        { name: "Spring Boot", bg: "#6db33f", color: "#ffffff" },
        { name: "TypeScript", bg: "#3178c6", color: "#ffffff" },
        { name: "JavaScript", bg: "#f7df1e", color: "#000000" },
        { name: "Node.js", bg: "#339933", color: "#ffffff" }
      ]
    },
    {
      id: "frontend",
      title: "Web Frameworks & UI",
      comment: "/* Web Frameworks & UI */",
      skills: [
        { name: "Next.js", bg: "#000000", color: "#ffffff" },
        { name: "React", bg: "#20232a", color: "#61dafb" },
        { name: "Tailwind CSS", bg: "#06b6d4", color: "#ffffff" }
      ]
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      comment: "/* Mobile App Development */",
      skills: [
        { name: "Kotlin", bg: "#7f52ff", color: "#ffffff" },
        { name: "Flutter", bg: "#02569b", color: "#ffffff" },
        { name: "Dart", bg: "#0175c2", color: "#ffffff" },
        { name: "Swift", bg: "#f05138", color: "#ffffff" }
      ]
    },
    {
      id: "infra",
      title: "Databases, Cloud & Infrastructure",
      comment: "/* Databases, Cloud & Infrastructure */",
      skills: [
        { name: "Vercel", bg: "#000000", color: "#ffffff" },
        { name: "Koyeb", bg: "#121212", color: "#ffffff" },
        { name: "Convex", bg: "#f04438", color: "#ffffff" },
        { name: "Render", bg: "#46e3b7", color: "#000000" },
        { name: "PostgreSQL", bg: "#4169e1", color: "#ffffff" },
        { name: "Azure", bg: "#0078d4", color: "#ffffff" },
        { name: "Docker", bg: "#2496ed", color: "#ffffff" },
        { name: "GitHub Actions", bg: "#2088ff", color: "#ffffff" },
        { name: "MySQL", bg: "#4479a1", color: "#ffffff" },
        { name: "MongoDB", bg: "#47a248", color: "#ffffff" },
        { name: "Git", bg: "#f05032", color: "#ffffff" }
      ]
    },
    {
      id: "services",
      title: "Payments, Mail & Third-Party APIs",
      comment: "/* Payments, Mail & Third-Party APIs */",
      skills: [
        { name: "Stripe", bg: "#635bff", color: "#ffffff" },
        { name: "PayPal", bg: "#003087", color: "#ffffff" },
        { name: "PayOS", bg: "#0068ff", color: "#ffffff" },
        { name: "Resend", bg: "#000000", color: "#ffffff" },
        { name: "SendGrid", bg: "#1a82e2", color: "#ffffff" },
        { name: "Firebase", bg: "#ffca28", color: "#000000" },
        { name: "Supabase", bg: "#3ecf8e", color: "#000000" },
        { name: "Redis", bg: "#dc382d", color: "#ffffff" },
        { name: "Postman", bg: "#ff6c37", color: "#ffffff" },
        { name: "Swagger", bg: "#85ea2d", color: "#000000" }
      ]
    },
    {
      id: "ai",
      title: "AI & Agentic Engineering",
      comment: "/* AI & Agentic Engineering */",
      skills: [
        { name: "Claude", bg: "#d97706", color: "#ffffff" },
        { name: "DeepSeek", bg: "#4f46e5", color: "#ffffff" },
        { name: "Antigravity", bg: "#2563eb", color: "#ffffff" },
        { name: "Google Gemini", bg: "#8e75ff", color: "#ffffff" },
        { name: "Qwen", bg: "#ec5a24", color: "#ffffff" },
        { name: "Kimi AI", bg: "#3b82f6", color: "#ffffff" },
        { name: "OpenAI", bg: "#10a37f", color: "#ffffff" },
        { name: "Ollama", bg: "#18181b", color: "#ffffff" }
      ]
    }
  ] as SkillGroup[]
};
