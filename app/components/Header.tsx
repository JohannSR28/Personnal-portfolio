"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now
        .toLocaleDateString("fr-FR", { weekday: "short" })
        .toUpperCase()
        .replace(".", "");
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");

      setTime(`${day} — ${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      // CORRECTION : Tout sur une seule ligne pour éviter l'erreur d'hydratation
      className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center font-body text-sm tracking-wide text-soft-clay/80 md:fixed md:px-12 md:backdrop-blur-none transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.6)]"></div>
        <span className="opacity-80">Available for hire</span>
      </div>

      <nav className="hidden md:flex gap-10 text-sm font-light">
        {["Home", "About", "Work", "Stack", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}${item === "Home" ? "-section" : item === "Stack" ? "" : "-section"}`}
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Date dynamique */}
      <div className="font-mono text-xs opacity-50 w-[80px] text-right hidden md:block">
        {time || "..."}
      </div>

      {/* Version Mobile de l'heure */}
      <div className="font-mono text-xs opacity-50 md:hidden">
        {time || "..."}
      </div>
    </header>
  );
}
