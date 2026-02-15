"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const percentage = Math.round((scrollPosition / totalHeight) * 100);
      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 mix-blend-difference pointer-events-none">
      {/* Barre du haut */}
      <div
        className="hidden md:block w-[1px] bg-gradient-to-b from-transparent to-[#eecbcb]"
        style={{ height: "50px" }} // Hauteur fixe
      ></div>

      {/* Texte Pourcentage */}
      <div className="font-body text-xs tracking-widest text-soft-clay font-medium w-[40px] text-center">
        {progress}%
      </div>

      {/* Barre du bas */}
      <div
        className="hidden md:block w-[1px] bg-gradient-to-b from-[#eecbcb] to-transparent"
        style={{ height: "50px" }}
      ></div>
    </div>
  );
}
