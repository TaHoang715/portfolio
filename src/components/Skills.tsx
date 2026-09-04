import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TRANSLATIONS } from '../data/translations';

type SkillCategory = 'all' | 'languages' | 'frontend' | 'backend' | 'databases' | 'tools';

interface Skill {
  name: string;
  category: SkillCategory;
  iconClass: string;
  iconColor?: string;
}

const SKILLS: Skill[] = [
  // Languages
  { name: 'C++', category: 'languages', iconClass: 'devicon-cplusplus-plain colored' },
  { name: 'Python', category: 'languages', iconClass: 'devicon-python-plain colored' },
  { name: 'Java', category: 'languages', iconClass: 'devicon-java-plain colored' },
  { name: 'C#', category: 'languages', iconClass: 'devicon-csharp-plain colored' },
  { name: 'JavaScript', category: 'languages', iconClass: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', category: 'languages', iconClass: 'devicon-typescript-plain colored' },

  // Frontend
  { name: 'HTML5', category: 'frontend', iconClass: 'devicon-html5-plain colored' },
  { name: 'CSS3', category: 'frontend', iconClass: 'devicon-css3-plain colored' },
  { name: 'React.js', category: 'frontend', iconClass: 'devicon-react-original colored' },
  { name: 'Next.js', category: 'frontend', iconClass: 'devicon-nextjs-plain' },
  { name: 'Tailwind CSS', category: 'frontend', iconClass: 'devicon-tailwindcss-original colored' },

  // Backend
  { name: 'Node.js', category: 'backend', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', category: 'backend', iconClass: 'devicon-express-original' },
  { name: 'FastAPI', category: 'backend', iconClass: 'devicon-fastapi-plain colored' },

  // Databases
  { name: 'MongoDB', category: 'databases', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'MySQL', category: 'databases', iconClass: 'devicon-mysql-plain colored' },
  { name: 'PostgreSQL', category: 'databases', iconClass: 'devicon-postgresql-plain colored' },
  { name: 'Supabase', category: 'databases', iconClass: 'devicon-supabase-plain colored' },

  // Tools
  { name: 'Git', category: 'tools', iconClass: 'devicon-git-plain colored' },
  { name: 'GitHub', category: 'tools', iconClass: 'devicon-github-original' },
  { name: 'Docker', category: 'tools', iconClass: 'devicon-docker-plain colored' },
  { name: 'Postman', category: 'tools', iconClass: 'devicon-postman-plain colored' },
  { name: 'Vercel', category: 'tools', iconClass: 'devicon-vercel-original' },
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
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
