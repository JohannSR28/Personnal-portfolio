"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { translations } from "../data/translation";

type Language = "fr" | "en";
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.fr;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  //  useMemo recalcule 't' à chaque fois que 'language' change
  const t = useMemo(() => translations[language], [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
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
