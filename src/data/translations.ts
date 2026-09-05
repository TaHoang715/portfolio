export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certs',
      profiles: 'Profiles',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Woah! You Landed on the Portfolio Website of The',
      titleSuffix: 'Tạ Minh Hoàng (TaHoang715) | Software Engineering Graduate',
      typingWords: ['DEVELOPER', 'PROGRAMMER', 'INDIE CREATOR', 'ENGINEER', 'PROBLEM SOLVER'],
      btnConnect: "Let's Connect",
      btnProjects: 'View Projects',
    },
    about: {
      heading: 'About Me',
      highlight: 'Behind The Code!',
      content1:
        "Hi, I'm **Tạ Minh Hoàng** (online handle **TaHoang715**), a fresh Software Engineering graduate from FPT University. To me, software development is all about translating ideas into reliable, well-crafted applications that solve real-world problems.",
      content2:
        'My primary focus is on full-stack web engineering and backend architecture, paired with an enduring passion for indie game mechanics and experimenting with modern AI automation workflows. I believe in writing maintainable code, staying curious, and adapting quickly to whatever technology best serves the mission.',
    },
    experience: {
      heading: 'Work Experience',
      highlight: 'Professional Journey!',
      items: [
        {
          number: '01',
          role: 'Operations & Digital Solutions',
          company: 'TDV Co., Ltd.',
          period: '2024 – PRESENT (2 YEARS)',
          bullets: [
            'Overseeing digital operations workflows and data flow integrity to ensure smooth day-to-day business continuity.',
            'Collaborated on optimizing internal procedures, integrating automation tools to reduce manual overhead and boost team productivity.',
          ],
        },
        {
          number: '02',
          role: 'Software Engineer Intern',
          company: 'KNS Software',
          period: '2023 (6 MONTHS)',
          bullets: [
            'Participated in engineering and maintaining web features and backend services under industry-standard development lifecycles.',
            'Worked alongside senior engineers on code reviews, bug fixes, unit tests, and performance improvements.',
          ],
        },
        {
          number: '03',
          role: 'Independent & Indie Game Creator',
          company: 'Indie & Side Projects',
          period: '2022 – PRESENT',
          bullets: [
            'Designed and engineered independent gameplay prototypes (such as DBP Air Defense featuring simulated ballistics in C# and Unity).',
            'Built responsive web applications, interactive tools, and shared open-source experiments on GitHub.',
          ],
        },
      ],
    },
    projects: {
      heading: 'Projects Showcase',
      highlight: "What I've Built!",
      viewGithub: 'GitHub',
      viewSource: 'Source Repo',
      items: [
        {
          date: '2024',
          category: 'Game Development',
          title: 'DBP Air Defense',
          description:
            'A historic air defense artillery game inspired by the legendary Dien Bien Phu victory. Features custom ballistics trajectory physics, patrolling enemy bomber flight paths, and responsive combat sound effects.',
          githubUrl: 'https://github.com/TaHoang715/DBP-Air-Defense',
        },
        {
          date: '2024',
          category: 'Web Application',
          title: 'LSD Word Guess',
          description:
            'An engaging web-based word puzzle challenge with clean responsive UI. Features intelligent clue hints, real-time score tracking, and smooth interactive gameplay.',
          githubUrl: 'https://github.com/TaHoang715/lsd-word-guess',
        },
        {
          date: '2025',
          category: 'Frontend Engineering',
          title: 'Modern Developer Portfolio',
          description:
            'High-performance personal developer showcase. Built with interactive 3D particle canvas, dynamic background themes, responsive auto-hiding navbar, and SEO best practices.',
          githubUrl: 'https://github.com/TaHoang715/portfolio',
          liveUrl: 'https://github.com/TaHoang715/portfolio',
        },
        {
          date: 'IN PROGRESS',
          category: 'Indie & AI Experiment',
          title: 'Indie Mechanics & Game Toolkit',
          description:
            'A laboratory suite experimenting with game pathfinding algorithms (A* / NavMesh), character state machines, and dynamic NPC dialog generation using modern LLM APIs.',
          githubUrl: 'https://github.com/TaHoang715',
        },
      ],
    },
    skills: {
      heading: 'System Stack',
      highlight: 'Core Expertise!',
      subtitle: '[//] SYSTEM STACK & AI-POWERED DEVELOPMENT',
      categories: {
        all: 'All Stack',
        languages: 'Core & Backend',
        frontend: 'Web & Mobile',
        databases: 'Cloud & Database',
        ai: 'AI Coding Tools',
      },
    },
    certifications: {
      heading: 'Certifications & Education',
      highlight: 'Milestones!',
      items: [
        {
          badge: 'DEGREE • GPA 7.0 / 10',
          title: 'Bachelor of Software Engineering',
          institution: 'FPT University',
          description:
            'Hands-on computer science degree emphasizing algorithmic thinking, data structures, software design patterns, and agile engineering practices.',
          icon: 'fa-solid fa-graduation-cap',
        },
        {
          badge: 'INTERNATIONAL PROFICIENCY',
          title: 'IELTS English Certificate',
          institution: 'International English Certification (CEFR B2)',
          description:
            'Certified IELTS English proficiency at CEFR B2 level. Demonstrated ability to comprehend complex technical documentation, write clear specifications, and communicate effectively with global development teams.',
          icon: 'fa-solid fa-language',
        },
        {
          badge: 'FULL CAMBRIDGE PROGRESSION',
          title: 'Complete Cambridge English Suite',
          institution: 'Cambridge Assessment English',
          description:
            'Completed the entire progressive Cambridge assessment track from Starters, Movers, Flyers through KET and PET, building a solid and enduring English foundation from an early age.',
          icon: 'fa-solid fa-certificate',
        },
      ],
    },
    profiles: {
      heading: 'Web Presence',
      highlight: 'Dev Network!',
      items: [
        { name: 'GitHub', action: 'Follow & Star', icon: 'fa-brands fa-github', url: 'https://github.com/TaHoang715', iconColor: '#ffffff' },
        { name: 'Email Direct', action: 'Send Message', icon: 'fa-solid fa-envelope', url: 'mailto:taminhhoang.nk@gmail.com', iconColor: '#00f2fe' },
        { name: 'LinkedIn', action: 'Connect', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/tahoang715/', iconColor: '#0077b5' },
        { name: 'Discord / Community', action: 'Chat & Collab', icon: 'fa-brands fa-discord', url: 'https://discord.com', iconColor: '#5865f2' },
      ],
    },
    contact: {
      heading: 'Get In Touch',
      highlight: "Let's Talk!",
      note: "Looking to collaborate on a project, discuss an opportunity, or just chat about tech? My inbox is always open!",
      nameLabel: 'Your Name',
      namePlaceholder: 'e.g. Alex Nguyen',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. name@example.com',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Hi Hoang, I would like to talk about...',
      btnSending: 'Sending...',
      btnSent: 'Message Sent Successfully!',
      btnSubmit: 'Send Message',
      directEmail: 'Or send directly to:',
      btnCopy: 'Copy Email',
      btnCopied: 'Copied to Clipboard!',
      sendSuccess: 'Thank you! Your message has been sent directly to taminhhoang.nk@gmail.com.',
      sendError: 'Could not send message automatically. Please try again or email directly to taminhhoang.nk@gmail.com!',
      btnMailto: 'Direct Email',
    },
    footer: {
      tagline: 'Building reliable software with curiosity, precision & code.',
      rights: 'All rights reserved.',
    },
    switcher: {
      bgTitle: 'Background Theme',
      aurora: 'Cosmic Aurora',
      constellation: 'Neural Constellation',
      matrix: 'Cyber Matrix Wave',
      minimal: 'Obsidian Minimal',
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      certifications: 'Chứng chỉ',
      profiles: 'Liên kết',
      contact: 'Liên hệ',
    },
    hero: {
      subtitle: 'Chào bạn! Chào mừng đến với trang cá nhân của',
      titleSuffix: 'Tạ Minh Hoàng (TaHoang715) | Kỹ Sư Phần Mềm (FPT University)',
      typingWords: ['LẬP TRÌNH VIÊN', 'KỸ SƯ PHẦN MỀM', 'INDIE CREATOR', 'FULL-STACK DEV', 'PROBLEM SOLVER'],
      btnConnect: 'Kết nối ngay',
      btnProjects: 'Xem dự án',
    },
    about: {
      heading: 'Giới thiệu bản thân',
      highlight: 'Behind The Code!',
      content1:
        'Mình là **Tạ Minh Hoàng** (nickname **TaHoang715**), vừa tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học FPT. Với mình, lập trình là hành trình biến các ý tưởng trong đầu thành những sản phẩm thực tế chạy được và giải quyết được vấn đề cụ thể.',
      content2:
        'Thế mạnh của mình tập trung vào phát triển web full-stack, kiến trúc backend, cùng niềm say mê khám phá phát triển game indie và các giải pháp tự động hóa mới. Mình luôn ưu tiên viết code gọn gàng, chủ động học hỏi và tìm tòi giải pháp phù hợp nhất.',
    },
    experience: {
      heading: 'Kinh nghiệm làm việc',
      highlight: 'Hành trình sự nghiệp!',
      items: [
        {
          number: '01',
          role: 'Operations & Digital Solutions',
          company: 'TDV Co., Ltd.',
          period: '2024 – HIỆN TẠI (2 NĂM)',
          bullets: [
            'Quản trị và vận hành các quy trình số hóa, theo dõi luồng dữ liệu kỹ thuật và bảo đảm hệ thống vận hành liên tục, ổn định.',
            'Đề xuất và triển khai cải tiến quy trình công việc nội bộ, ứng dụng công cụ tự động hóa để tiết kiệm thời gian xử lý thủ công.',
          ],
        },
        {
          number: '02',
          role: 'Software Engineer Intern',
          company: 'KNS Software',
          period: '2023 (6 THÁNG)',
          bullets: [
            'Trực tiếp tham gia phát triển và bảo trì các module tính năng web và backend theo chuẩn quy trình phần mềm chuyên nghiệp.',
            'Cộng tác chặt chẽ cùng các senior engineer trong việc review code, xử lý bug, viết tài liệu kỹ thuật và tối ưu trải nghiệm người dùng.',
          ],
        },
        {
          number: '03',
          role: 'Independent & Indie Game Creator',
          company: 'Indie & Side Projects',
          period: '2022 – HIỆN TẠI',
          bullets: [
            'Tự tay thiết kế và lập trình các dự án game độc lập (tiêu biểu như DBP Air Defense với hệ thống quỹ đạo vật lý đạn pháo).',
            'Xây dựng các web app tương tác, tối ưu hiệu năng và chia sẻ mã nguồn mở trên GitHub cá nhân.',
          ],
        },
      ],
    },
    projects: {
      heading: 'Dự án nổi bật',
      highlight: 'Những gì mình đã build!',
      viewGithub: 'GitHub',
      viewSource: 'Source Repo',
      items: [
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
          date: 'ĐANG PHÁT TRIỂN',
          category: 'Indie & AI Experiment',
          title: 'Indie Mechanics & Game Toolkit',
          description:
            'Bộ công cụ thực nghiệm các thuật toán tìm đường trong game (Pathfinding), xử lý trạng thái nhân vật và tích hợp API mô hình tự động hóa sinh dữ liệu hội thoại linh hoạt.',
          githubUrl: 'https://github.com/TaHoang715',
        },
      ],
    },
    skills: {
      heading: 'Hệ thống công nghệ & Công cụ',
      highlight: 'System Stack & Tools!',
      subtitle: '[//] SYSTEM STACK & CÔNG CỤ LẬP TRÌNH AI',
      categories: {
        all: 'Tất cả',
        languages: 'Ngôn ngữ & Backend',
        frontend: 'Web & Di động',
        databases: 'Cloud & Database',
        ai: 'Công cụ AI lập trình',
      },
    },
    certifications: {
      heading: 'Chứng chỉ & Học vấn',
      highlight: 'Dấu mốc phát triển!',
      items: [
        {
          badge: 'BẰNG KỸ SƯ • GPA 7.0/10',
          title: 'Kỹ Sư Phần Mềm (Software Engineering)',
          institution: 'Đại Học FPT (FPT University)',
          description:
            'Chương trình đào tạo kỹ sư phần mềm thực chiến, rèn luyện tư duy thuật toán, cấu trúc dữ liệu, kiến trúc hệ thống và kỹ năng làm việc nhóm theo tiêu chuẩn công nghiệp.',
          icon: 'fa-solid fa-graduation-cap',
        },
        {
          badge: 'CHUẨN QUỐC TẾ',
          title: 'Chứng Chỉ Tiếng Anh IELTS (CEFR B2)',
          institution: 'Khảo Thí Chuẩn Quốc Tế IELTS • CEFR B2',
          description:
            'Chứng chỉ tiếng Anh IELTS đạt trình độ chuẩn quốc tế CEFR B2. Đọc hiểu tài liệu kỹ thuật chuyên sâu, viết tài liệu dự án và giao tiếp tự tin trong môi trường làm việc toàn cầu.',
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
      ],
    },
    profiles: {
      heading: 'Mạng lưới kết nối',
      highlight: 'Dev Network!',
      items: [
        { name: 'GitHub', action: 'Follow & Star', icon: 'fa-brands fa-github', url: 'https://github.com/TaHoang715', iconColor: '#ffffff' },
        { name: 'Email Trực Tiếp', action: 'Gửi tin nhắn', icon: 'fa-solid fa-envelope', url: 'mailto:taminhhoang.nk@gmail.com', iconColor: '#00f2fe' },
        { name: 'LinkedIn', action: 'Kết nối', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/tahoang715/', iconColor: '#0077b5' },
        { name: 'Discord / Cộng Đồng', action: 'Trò chuyện', icon: 'fa-brands fa-discord', url: 'https://discord.com', iconColor: '#5865f2' },
      ],
    },
    contact: {
      heading: 'Liên hệ',
      highlight: 'Kết nối cùng mình!',
      note: 'Bạn đang có dự án cần hợp tác, cơ hội việc làm hay đơn giản chỉ muốn trao đổi về công nghệ? Hộp thư của mình luôn rộng mở chào đón!',
      nameLabel: 'Họ và tên của bạn',
      namePlaceholder: 'VD: Nguyễn Văn A',
      emailLabel: 'Địa chỉ Email',
      emailPlaceholder: 'VD: your-email@gmail.com',
      messageLabel: 'Nội dung tin nhắn',
      messagePlaceholder: 'Xin chào Hoàng, mình muốn trao đổi về...',
      btnSending: 'Đang gửi...',
      btnSent: 'Đã gửi thành công!',
      btnSubmit: 'Gửi tin nhắn',
      directEmail: 'Hoặc gửi thư trực tiếp đến:',
      btnCopy: 'Sao chép Email',
      btnCopied: 'Đã sao chép email!',
      sendSuccess: 'Cảm ơn bạn! Tin nhắn đã được gửi thẳng tới taminhhoang.nk@gmail.com.',
      sendError: 'Không thể gửi tin nhắn tự động. Vui lòng thử lại hoặc gửi trực tiếp qua email taminhhoang.nk@gmail.com!',
      btnMailto: 'Gửi Email trực tiếp',
    },
    footer: {
      tagline: 'Phát triển phần mềm chất lượng với tinh thần tò mò, chỉn chu và đam mê.',
      rights: 'Bản quyền đã đăng ký.',
    },
    switcher: {
      bgTitle: 'Hình nền',
      aurora: 'Cực quang vũ trụ (Aurora)',
      constellation: 'Mạng chòm sao (Constellation)',
      matrix: 'Lưới sóng ma trận (Cyber Wave)',
      minimal: 'Tối giản không gian (Minimalist)',
    },
  },
};
