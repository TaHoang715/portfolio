export interface SkillGroup {
  id: string;
  title: string;
  comment: string;
  skills: { name: string; bg: string; color: string }[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  github?: string;
  status: 'active' | 'in_progress';
  accentColor: string;
  points: string[];
}

export interface CareerItem {
  number: string;
  role: string;
  company: string;
  period: string;
  desc: string;
  techs: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    greeting: "HELLO! I'M",
    fullName: "TA MINH HOANG",
    shortName: "Tạ Minh Hoàng",
    alias: "TaHoang715",
    title: "FULL-STACK SOFTWARE ENGINEER",
    location: "Ho Chi Minh City, Vietnam",
    summary: "Lập trình viên Full-stack xuất thân từ chuyên ngành Kỹ Thuật Phần Mềm - Đại học FPT. Đam mê kiến trúc backend hiệu năng cao, trải nghiệm 3D tương tác và các giải pháp AI tự hành.",
    statusBadge: "Available for new opportunities",
    email: "taminhhoang.nk@gmail.com",
    github: "https://github.com/TaHoang715",
    linkedin: "https://www.linkedin.com/in/tahoang715/",
    facebook: "https://www.facebook.com/ta.minh.hoang.293535/",
  },

  academic: {
    school: "Đại học FPT",
    degree: "Kỹ Sư Phần Mềm (Software Engineering)",
    gpa: "7.0 / 10",
    englishLevels: [
      {
        badge: "CEFR B2",
        title: "IELTS Certificate (CEFR B2 Level)",
        detail: "Chứng chỉ tiếng Anh IELTS chuẩn quốc tế CEFR B2, giao tiếp và đọc hiểu tài liệu kỹ thuật thành thạo.",
      },
      {
        badge: "CAMBRIDGE",
        title: "Trọn Bộ Cambridge English Suite",
        detail: "Sở hữu đầy đủ các chứng chỉ Cambridge từ Starters, Movers, Flyers cho đến KET và PET.",
      },
    ],
  },

  careers: [
    {
      number: "01",
      role: "Operations & Digital Support",
      company: "Trung tâm Tiếng Anh Thần Đồng Việt Úc (TDV)",
      period: "2024 — Hiện tại (2 năm)",
      desc: "Phụ trách điều phối số hóa, quản lý dữ liệu học viên và hỗ trợ kỹ thuật vận hành trung tâm xuyên suốt 2 năm qua.",
      techs: ["Workflow Automation", "Data Tracking", "Communication"],
    },
    {
      number: "02",
      role: "Software Engineer Intern",
      company: "Công ty Kỷ Nguyên Số (KNS)",
      period: "2025 (6 tháng)",
      desc: "Tham gia phát triển backend, xây dựng các module RESTful API, tối ưu truy vấn cơ sở dữ liệu và làm việc trong quy trình Git/Agile thực tế.",
      techs: ["Backend APIs", "Database Optimization", "Git Flow", "Agile"],
    },
    {
      number: "03",
      role: "Freelance & Indie Creator",
      company: "Independent Practice",
      period: "2024 — Nay",
      desc: "Chủ động nghiên cứu và phát triển các sản phẩm web tùy biến cùng các tựa mini-game giải trí độc lập.",
      techs: ["Game Logic", "Canvas / WebGL", "Full-stack Web", "TypeScript"],
    },
  ] as CareerItem[],

  projects: [
    {
      id: "dbp-air-defense",
      number: "01",
      title: "DBP Air Defense",
      category: "Arcade Combat Game",
      tagline: "Game bắn súng phòng không đánh chặn máy bay retro",
      description: "Tựa game arcade tự phát triển với logic phòng không, thuật toán xử lý va chạm máy bay, hiệu ứng âm thanh sống động và vòng lặp game loop tối ưu 60 FPS.",
      tags: ["Game Dev", "Collision Detection", "Arcade Physics", "Canvas", "Audio"],
      github: "https://github.com/TaHoang715/DBP-Air-Defense",
      status: "active",
      accentColor: "#ef4444",
      points: [
        "Thuật toán phát hiện va chạm vật lý chính xác",
        "Vòng lặp game loop mượt mà không drop frame",
        "Âm thanh và hiệu ứng retro arcade cuốn hút"
      ],
    },
    {
      id: "lsd-word-guess",
      number: "02",
      title: "LSD Word Guess",
      category: "Interactive Word Game",
      tagline: "Game đoán từ vựng tương tác giải đố",
      description: "Ứng dụng giải đố từ vựng tương tác cao với thuật toán kiểm tra từ tức thì, quản lý state mượt mà và giao diện tối giản thích ứng mọi kích thước màn hình.",
      tags: ["Word Game", "State Management", "TypeScript", "Interactive UI"],
      github: "https://github.com/TaHoang715/lsd-word-guess",
      status: "active",
      accentColor: "#06b6d4",
      points: [
        "Logic gợi ý và chấm điểm từ vựng tức thì",
        "Giao diện phản hồi trực quan, tương thích đa nền tảng",
        "Trải nghiệm chơi thư giãn, kích thích tư duy từ vựng"
      ],
    },
    {
      id: "flagship-project",
      number: "03",
      title: "Next-Gen Flagship Project",
      category: "Secret In-Lab Project",
      tagline: "Siêu phẩm tương lai tích hợp AI tự hành",
      description: "Dự án tâm đắc đang được ấp ủ và hoàn thiện trong phòng thí nghiệm. Kết hợp kiến trúc hệ thống phân tán, xử lý dữ liệu lớn và các Agent AI tự động.",
      tags: ["Distributed System", "Autonomous AI", "Next.js", "Docker"],
      status: "in_progress",
      accentColor: "#e11d48",
      points: [
        "Kiến trúc micro-services hiện đại, khả năng mở rộng cao",
        "Tích hợp các mô hình Agentic AI suy luận đa tác nhân",
        "Sẽ chính thức công bố mã nguồn trong thời gian tới"
      ],
    },
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
