import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'vi';
export type BgMode = 'aurora' | 'constellation' | 'matrix' | 'minimal';

interface PortfolioContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  bgMode: BgMode;
  setBgMode: (mode: BgMode) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('portfolio_lang') as Language) || 'en';
  });

  const [bgMode, setBgMode] = useState<BgMode>(() => {
    return (localStorage.getItem('portfolio_bg') as BgMode) || 'aurora';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('portfolio_bg', bgMode);
  }, [bgMode]);

  return (
    <PortfolioContext.Provider value={{ lang, setLang, bgMode, setBgMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
