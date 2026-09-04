import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

type SkillCategory = 'all' | 'languages' | 'frontend' | 'backend' | 'databases' | 'tools';

interface Skill {
  name: string;
  category: SkillCategory;
  iconClass: string;
  iconColor?: string;
  repoHint?: string;
}

const SKILLS: Skill[] = [
  // Languages (Derived directly from GitHub @TaHoang715 codebases)
  { name: 'TypeScript', category: 'languages', iconClass: 'devicon-typescript-plain colored', repoHint: 'portfolio, games' },
  { name: 'C#', category: 'languages', iconClass: 'devicon-csharp-plain colored', repoHint: 'PE_PRN232, backend' },
  { name: 'JavaScript', category: 'languages', iconClass: 'devicon-javascript-plain colored', repoHint: 'streak-booster' },
  { name: 'Python', category: 'languages', iconClass: 'devicon-python-plain colored', repoHint: 'Agent-skills' },
  { name: 'Java', category: 'languages', iconClass: 'devicon-java-plain colored', repoHint: 'mathutil, OOP' },
  { name: 'Dart', category: 'languages', iconClass: 'devicon-dart-plain colored', repoHint: 'PRM393 Mobile' },
  { name: 'C++', category: 'languages', iconClass: 'devicon-cplusplus-plain colored' },

  // Frontend & Mobile (Derived from GitHub @TaHoang715 codebases)
  { name: 'React.js', category: 'frontend', iconClass: 'devicon-react-original colored', repoHint: 'SPA Architecture' },
  { name: 'Flutter', category: 'frontend', iconClass: 'devicon-flutter-plain colored', repoHint: 'Cross-platform Mobile' },
  { name: 'HTML5 & Canvas', category: 'frontend', iconClass: 'devicon-html5-plain colored', repoHint: '2D Game Physics' },
  { name: 'CSS3 / Glassmorphism', category: 'frontend', iconClass: 'devicon-css3-plain colored', repoHint: 'Modern UI/UX' },
  { name: 'Three.js / WebGL', category: 'frontend', iconClass: 'devicon-threejs-original', repoHint: '3D Cyber Matrix' },
  { name: 'Vite', category: 'frontend', iconClass: 'devicon-vitejs-plain colored', repoHint: 'Build Tooling' },
  { name: 'Tailwind CSS', category: 'frontend', iconClass: 'devicon-tailwindcss-original colored' },

  // Backend & Architecture (Derived from GitHub @TaHoang715 codebases)
  { name: 'ASP.NET Core', category: 'backend', iconClass: 'devicon-dotnetcore-plain colored', repoHint: '.NET 8 Web API' },
  { name: 'Entity Framework', category: 'backend', iconClass: 'devicon-csharp-plain colored', repoHint: 'EF Core ORM' },
  { name: 'Node.js', category: 'backend', iconClass: 'devicon-nodejs-plain colored', repoHint: 'Scripts & CLI' },
  { name: 'RESTful APIs', category: 'backend', iconClass: 'devicon-fastapi-plain colored', repoHint: 'JSON Web Services' },
  { name: 'Express.js', category: 'backend', iconClass: 'devicon-express-original' },

  // Databases (Derived from GitHub @TaHoang715 codebases)
  { name: 'MS SQL Server', category: 'databases', iconClass: 'devicon-microsoftsqlserver-plain colored', repoHint: 'Relational DB' },
  { name: 'MySQL', category: 'databases', iconClass: 'devicon-mysql-plain colored' },
  { name: 'PostgreSQL', category: 'databases', iconClass: 'devicon-postgresql-plain colored' },
  { name: 'MongoDB', category: 'databases', iconClass: 'devicon-mongodb-plain colored' },

  // Tools & DevOps (Derived from GitHub @TaHoang715 codebases)
  { name: 'Git', category: 'tools', iconClass: 'devicon-git-plain colored', repoHint: 'Version Control' },
  { name: 'GitHub', category: 'tools', iconClass: 'devicon-github-original', repoHint: 'Actions & Repos' },
  { name: 'Visual Studio', category: 'tools', iconClass: 'devicon-visualstudio-plain colored', repoHint: '.NET IDE' },
  { name: 'VS Code', category: 'tools', iconClass: 'devicon-vscode-plain colored', repoHint: 'Code Editor' },
  { name: 'Postman', category: 'tools', iconClass: 'devicon-postman-plain colored', repoHint: 'API Testing' },
  { name: 'Vercel', category: 'tools', iconClass: 'devicon-vercel-original', repoHint: 'Deployments' },
];

export const Skills: React.FC = () => {
  const { lang } = usePortfolio();
  const t = TRANSLATIONS[lang].skills;
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: t.categories.all },
    { id: 'languages', label: t.categories.languages },
    { id: 'frontend', label: t.categories.frontend },
    { id: 'backend', label: t.categories.backend },
    { id: 'databases', label: t.categories.databases },
    { id: 'tools', label: t.categories.tools },
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
        <p className="skills-subtitle" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '-22px', marginBottom: '35px' }}>
          <i className="fa-brands fa-github" style={{ marginRight: '8px', color: 'var(--accent-color)' }}></i>
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
            <i
              className={skill.iconClass}
              style={skill.iconColor ? { color: skill.iconColor } : undefined}
            ></i>
            <span className="skill-name">{skill.name}</span>
            {skill.repoHint && (
              <span className="skill-hint" style={{ fontSize: '0.68rem', color: 'rgba(255, 255, 255, 0.65)', marginTop: '3px', zIndex: 2, fontFamily: 'monospace' }}>
                {skill.repoHint}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
