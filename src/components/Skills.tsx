import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

type SkillCategory = 'all' | 'languages' | 'frontend' | 'databases' | 'ai';

interface Skill {
  name: string;
  category: SkillCategory;
  iconClass?: string;
  iconColor?: string;
  svgIcon?: React.ReactNode;
}

const SKILLS: Skill[] = [
  // 1. Core Languages & Backend (Direct from GitHub @TaHoang715 README)
  { name: 'C#', category: 'languages', iconClass: 'devicon-csharp-plain colored' },
  { name: '.NET Core', category: 'languages', iconClass: 'devicon-dotnetcore-plain colored' },
  { name: 'ASP.NET Core', category: 'languages', iconClass: 'devicon-dot-net-plain colored' },
  { name: 'Java', category: 'languages', iconClass: 'devicon-java-plain colored' },
  { name: 'Spring Boot', category: 'languages', iconClass: 'devicon-spring-original colored' },
  { name: 'TypeScript', category: 'languages', iconClass: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', category: 'languages', iconClass: 'devicon-javascript-plain colored' },
  { name: 'Node.js', category: 'languages', iconClass: 'devicon-nodejs-plain colored' },

  // 2. Web Frameworks & Mobile UI (Direct from GitHub @TaHoang715 README)
  { name: 'React', category: 'frontend', iconClass: 'devicon-react-original colored' },
  { name: 'Next.js', category: 'frontend', iconClass: 'devicon-nextjs-plain' },
  { name: 'Tailwind CSS', category: 'frontend', iconClass: 'devicon-tailwindcss-original colored' },
  { name: 'Flutter', category: 'frontend', iconClass: 'devicon-flutter-plain colored' },
  { name: 'Dart', category: 'frontend', iconClass: 'devicon-dart-plain colored' },
  { name: 'Kotlin', category: 'frontend', iconClass: 'devicon-kotlin-plain colored' },
  { name: 'Swift', category: 'frontend', iconClass: 'devicon-swift-plain colored' },
  { name: 'HTML5', category: 'frontend', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS3', category: 'frontend', iconClass: 'devicon-css3-plain colored' },

  // 3. Databases, Cloud & Infrastructure (Direct from GitHub @TaHoang715 README)
  { name: 'PostgreSQL', category: 'databases', iconClass: 'devicon-postgresql-plain colored' },
  { name: 'MySQL', category: 'databases', iconClass: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', category: 'databases', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'MS SQL Server', category: 'databases', iconClass: 'devicon-microsoftsqlserver-plain colored' },
  { name: 'Azure', category: 'databases', iconClass: 'devicon-azure-plain colored' },
  { name: 'Docker', category: 'databases', iconClass: 'devicon-docker-plain colored' },
  { name: 'GitHub Actions', category: 'databases', iconClass: 'devicon-githubactions-plain colored' },
  { name: 'Vercel', category: 'databases', iconClass: 'devicon-vercel-original' },
  { name: 'Git', category: 'databases', iconClass: 'devicon-git-plain colored' },
  { name: 'Postman', category: 'databases', iconClass: 'devicon-postman-plain colored' },
  { name: 'Swagger', category: 'databases', iconClass: 'devicon-swagger-plain colored' },
  { name: 'Firebase', category: 'databases', iconClass: 'devicon-firebase-plain colored' },
  { name: 'Supabase', category: 'databases', iconClass: 'devicon-supabase-plain colored' },

  // 4. AI Coding Tools (Exclusively Claude, GPT, Gemini, DeepSeek, Qwen)
  {
    name: 'Claude',
    category: 'ai',
    svgIcon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="#D97757">
        <path d="M4.53 18.23l4.28-7.38-1.5-2.61L1.25 18.23h3.28zm8.6-14.88L6.45 14.88l1.64 2.85 8.32-14.38h-3.28zm1.09 3.82l-5.74 9.93 1.64 2.85 7.38-12.78h-3.28zm3.28 5.67l-4.1 7.11 1.64 2.85 5.74-9.96h-3.28z"/>
      </svg>
    ),
  },
  {
    name: 'ChatGPT (GPT)',
    category: 'ai',
    svgIcon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.28 9.93a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.06 6.06 0 0 0 10.6.4a6.05 6.05 0 0 0-5.77 4.2 6 6 0 0 0-4.04 2.93 6.06 6.06 0 0 0 .75 7.1 5.95 5.95 0 0 0 .52 4.9 6.05 6.05 0 0 0 6.51 2.91A6.05 6.05 0 0 0 13.4 23.6a6.05 6.05 0 0 0 5.77-4.2 6.01 6.01 0 0 0 4.04-2.93 6.06 6.06 0 0 0-.93-6.54zm-8.88 12.17a4.54 4.54 0 0 1-2.92-1.05l.15-.08 4.84-2.79a.8.8 0 0 0 .4-.68v-6.84l2.17 1.25a.08.08 0 0 1 .04.06v5.82a4.57 4.57 0 0 1-4.68 4.31zm-9.37-4.47a4.53 4.53 0 0 1-.54-3.06l.16.1 4.84 2.8a.78.78 0 0 0 .79 0l5.92-3.42v2.5a.07.07 0 0 1-.03.07l-5.04 2.91a4.57 4.57 0 0 1-6.14-1.9zM2.4 9.17a4.55 4.55 0 0 1 2.38-2.02v5.77a.8.8 0 0 0 .4.69l5.92 3.42-2.17 1.25a.07.07 0 0 1-.07 0l-5.04-2.9A4.57 4.57 0 0 1 2.4 9.17zm15.65 3.03-5.92-3.42 2.17-1.25a.07.07 0 0 1 .07 0l5.04 2.9a4.57 4.57 0 0 1-.95 8.23v-5.77a.8.8 0 0 0-.41-.69zm2.52-3.8-4.84-2.8a.78.78 0 0 0-.79 0l-5.92 3.42v-2.5a.07.07 0 0 1 .03-.07l5.04-2.91a4.57 4.57 0 0 1 6.48 4.86zm-8.57-2.31-2.17-1.25a.08.08 0 0 1-.04-.06V1.96a4.57 4.57 0 0 1 7.6-1.39l-.15.08-4.84 2.79a.8.8 0 0 0-.4.68zm-1.07 4.86 2.67-1.54 2.67 1.54v3.09l-2.67 1.54-2.67-1.54z"/>
      </svg>
    ),
  },
  {
    name: 'Google Gemini',
    category: 'ai',
    svgIcon: (
      <svg width="34" height="34" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E82EE" />
            <stop offset="50%" stopColor="#9B72CB" />
            <stop offset="100%" stopColor="#D96570" />
          </linearGradient>
        </defs>
        <path fill="url(#geminiGrad)" d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'DeepSeek',
    category: 'ai',
    svgIcon: (
      <svg width="34" height="34" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="none" stroke="#4E6BFF" strokeWidth="1.8"/>
        <path fill="#4E6BFF" d="M12 5.5a6.5 6.5 0 0 0-6.5 6.5c0 2.2 1.1 4.14 2.78 5.31.2.14.47.07.57-.15l.6-.1.35.35c.14.14.37.14.51 0l.96-.96c.14-.14.14-.37 0-.51l-.35-.35.1-.6c-.22-.1-.29-.37-.15-.57A4.98 4.98 0 0 1 12 7c2.76 0 5 2.24 5 5 0 1.25-.46 2.39-1.22 3.28l1.08 1.08A6.47 6.47 0 0 0 18.5 12 6.5 6.5 0 0 0 12 5.5z"/>
        <circle cx="12" cy="12" r="2.2" fill="#00f2fe"/>
      </svg>
    ),
  },
  {
    name: 'Qwen',
    category: 'ai',
    svgIcon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="#FF6A00">
        <path d="M12 1.5l8.66 5v10L12 21.5l-8.66-5v-10L12 1.5zm0 2.31L5.34 7.65 12 11.5l6.66-3.85L12 3.81zm-7 5.04v7.3l6.5 3.75V12.6L5 8.85zm14 0l-6.5 3.75v7.3l6.5-3.75v-7.3z"/>
      </svg>
    ),
  },
];

export const Skills: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].skills;
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: t.categories.all },
    { id: 'languages', label: t.categories.languages },
    { id: 'frontend', label: t.categories.frontend },
    { id: 'databases', label: t.categories.databases },
    { id: 'ai', label: t.categories.ai },
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => activeFilter === 'all' || skill.category === activeFilter
  );

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">
        {t.heading} - <span className="accent-text">{t.highlight}</span>
      </h2>

      {t.subtitle && (
        <p className="skills-subtitle" style={{ color: 'var(--accent-color)', fontSize: '0.92rem', fontFamily: 'monospace', letterSpacing: '1px', marginTop: '-22px', marginBottom: '35px' }}>
          {t.subtitle}
        </p>
      )}

      {/* Filter Buttons */}
      <div className="skill-filters" id="skillFilters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skill-grid" id="skillGrid">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            {skill.svgIcon ? (
              <div className="skill-svg-icon" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                {skill.svgIcon}
              </div>
            ) : (
              <i
                className={skill.iconClass}
                style={skill.iconColor ? { color: skill.iconColor } : undefined}
              ></i>
            )}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
