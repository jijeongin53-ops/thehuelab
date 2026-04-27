"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { defaultDictionaries, Language, Dictionary } from "./i18nData";

type LanguageContextProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children, initialDictionaries }: { children: ReactNode, initialDictionaries?: Record<Language, Dictionary> }) {
  // Default is 'en' as requested.
  const [language, setLanguage] = useState<Language>("en");
  
  const dicts = initialDictionaries || defaultDictionaries;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: dicts[language] }}>
        {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
