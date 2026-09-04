import React from 'react';

interface ProfileCardItem {
  name: string;
  action: string;
  icon: string;
  url: string;
  iconColor?: string;
}

const PROFILES: ProfileCardItem[] = [
  {
    name: 'GitHub',
    action: 'Follow & Star',
    icon: 'fa-brands fa-github',
    url: 'https://github.com/TaHoang715',
    iconColor: '#ffffff',
  },
  {
    name: 'Email Direct',
    action: 'Send Message',
    icon: 'fa-solid fa-envelope',
    url: 'mailto:taminhhoang715@gmail.com',
    iconColor: '#00f2fe',
  },
  {
    name: 'LinkedIn',
    action: 'Connect',
    icon: 'fa-brands fa-linkedin',
    url: 'https://linkedin.com',
    iconColor: '#0077b5',
  },
  {
    name: 'Discord / Community',
    action: 'Chat & Collab',
    icon: 'fa-brands fa-discord',
    url: 'https://discord.com',
    iconColor: '#5865f2',
  },
];

export const Profiles: React.FC = () => {
  return (
    <section className="profiles-section" id="profiles">
      <h2 className="section-title">
        Web Presence - <span className="accent-text">Dev Network!</span>
      </h2>

      <div className="profile-header">
        <div className="profile-img-main">
          <img
            src="https://github.com/TaHoang715.png"
            alt="Tạ Minh Hoàng (TaHoang715)"
            onError={(e) => {
              // fallback if GitHub avatar fails to load
              (e.target as HTMLImageElement).src =
                'https://api.dicebear.com/7.x/bottts/svg?seed=TaHoang715';
            }}
          />
        </div>
        <div className="profile-text">
          <h2>Tạ Minh Hoàng</h2>
          <p>@TaHoang715</p>
        </div>
      </div>

      <div className="profiles-grid">
        {PROFILES.map((p, idx) => (
          <a
            key={idx}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <div className="profile-icon">
              <i className={p.icon} style={p.iconColor ? { color: p.iconColor } : undefined}></i>
            </div>
            <div className="profile-info">
              <h3>{p.name}</h3>
              <p>{p.action}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
