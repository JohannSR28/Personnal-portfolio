"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import i18n from "../i18n";

// --- Définition du type du contexte ---
interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

// --- Création du contexte ---
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// --- Provider global ---
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // ⚠️ localStorage inaccessible côté serveur
  const [language, setLanguage] = useState<string>("fr");

  // Charger la langue seulement côté client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language");
      if (savedLang) {
        setLanguage(savedLang);
        i18n.changeLanguage(savedLang);
      }
    }
  }, []);

  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
    setLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --- Hook utilitaire ---
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
