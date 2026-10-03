import React, { createContext, useContext, useEffect, useState } from 'react';
import { ui } from '../i18n/translations';

const AppContext = createContext(null);

const readStore = (key) => {
  try { return localStorage.getItem(key); } catch { return null; }
};

const initialLang = () => {
  const saved = readStore('lang');
  if (saved === 'fr' || saved === 'en') return saved;
  return (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';
};

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch { /* ignore */ }
  }, [lang]);

  // tr() : choisit la bonne langue dans un objet { fr, en } ; renvoie tel quel une chaîne simple.
  const tr = (v) => (v && typeof v === 'object' && 'fr' in v ? v[lang] : v);

  const value = {
    lang, t: ui[lang], tr,
    toggleLang: () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);