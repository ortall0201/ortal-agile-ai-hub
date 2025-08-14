import { useState, useEffect } from 'react';

type Language = 'en' | 'he';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('site-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('site-language', language);
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'he' : 'en');
  };

  return { language, toggleLanguage, isHebrew: language === 'he' };
};