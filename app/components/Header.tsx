"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/languageContext";

export default function Header() {
  const [time, setTime] = useState("");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const locale = language === "fr" ? "fr-FR" : "en-US";
      const day = now
        .toLocaleDateString(locale, { weekday: "short" })
        .toUpperCase()
        .replace(".", "");
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      setTime(`${day} — ${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  const toggleLang = () => {
    const newLang = language === "fr" ? "en" : "fr";
    setLanguage(newLang);
  };

  const navItems = [
    { href: "#hero-section", label: t.nav.home },
    { href: "#about-section", label: t.nav.about },
    { href: "#work-section", label: t.nav.work },
    { href: "#services-section", label: t.nav.stack },
    { href: "#contact-section", label: t.nav.contact },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center font-body text-sm tracking-wide text-soft-clay/80 md:fixed md:px-12 md:backdrop-blur-none transition-all duration-300">
      {/* GAUCHE : Disponibilité */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.6)] flex-shrink-0"></div>
        {/* whitespace-nowrap empêche le texte de passer à la ligne bêtement sur petit écran */}
        <span className="opacity-80 whitespace-nowrap text-xs md:text-sm">
          {t.nav.availability}
        </span>
      </div>

      {/* CENTRE : Navigation Desktop */}
      <nav className="hidden md:flex gap-10 text-sm font-light">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* DROITE : Langue + Heure (Groupés proprement) */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Switch Langue */}
        <button
          onClick={toggleLang}
          className="font-mono text-xs cursor-pointer hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span
            className={
              language === "fr"
                ? "text-white font-bold"
                : "opacity-50 group-hover:opacity-100"
            }
          >
            FR
          </span>
          <span className="opacity-30">/</span>
          <span
            className={
              language === "en"
                ? "text-white font-bold"
                : "opacity-50 group-hover:opacity-100"
            }
          >
            EN
          </span>
        </button>

        {/* Heure (Visible sur Mobile et Desktop maintenant, sans superposition) */}
        {/* min-w-[70px] assure que l'heure ne bouge pas trop quand les minutes changent */}
        <div className="font-mono text-xs opacity-50 text-right min-w-[70px] md:min-w-[80px]">
          {time || "..."}
        </div>
      </div>
    </header>
  );
}
