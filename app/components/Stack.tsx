"use client";

import React from "react";
// On n'a plus besoin d'importer Image de next/image pour ces icônes
// import Image from "next/image";

export default function Stack() {
  return (
    <section
      id="services-section"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl items-start">
        {/* COLONNE GAUCHE - STICKY */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0">
          <h2 className="text-[12vw] lg:text-[6.5rem] font-display font-light text-soft-clay opacity-90 leading-tight">
            My
            <br />
            <span className="italic opacity-50 ml-4">Stack.</span>
          </h2>
          <p className="mt-8 text-lg font-body font-light opacity-60">
            Mon arsenal technique récent pour bâtir des expériences digitales
            robustes.
          </p>
        </div>

        {/* COLONNE DROITE - GRILLES */}
        <div className="lg:col-span-8 lg:col-start-5 space-y-12">
          {/* Main Stack */}
          <div>
            <h4 className="text-sm font-body uppercase tracking-[0.3em] opacity-40 mb-6">
              Main Stack
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: "TypeScript", icon: "typescript" },
                { name: "React", icon: "react" },
                { name: "Next.js", icon: "nextdotjs" },
                { name: "Node.js", icon: "nodedotjs" },
                { name: "SQL", icon: "postgresql" },
                { name: "Tailwind", icon: "tailwindcss" },
              ].map((tech) => (
                <div key={tech.name} className="tech-card group">
                  {/* CORRECTION ICI : Utilisation de <img> standard */}
                  <img
                    src={`https://cdn.simpleicons.org/${tech.icon}/eecbcb`}
                    className="tech-icon-img"
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                  <span className="font-body text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-sm font-body uppercase tracking-[0.3em] opacity-40 mb-6">
              Experience
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Cas Spécial JAVA (Reste inchangé car il marche bien) */}
              <div className="tech-card group py-6">
                <div
                  className="w-10 h-10 bg-[#eecbcb] transition-all duration-300 group-hover:bg-white"
                  style={{
                    WebkitMask:
                      'url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg") no-repeat center',
                    mask: 'url("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg") no-repeat center',
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                ></div>
                <span className="font-body text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                  Java
                </span>
              </div>

              {/* Autres technos */}
              {[
                { name: "Python", icon: "python" },
                { name: "C++", icon: "cplusplus" },
                { name: "MongoDB", icon: "mongodb" },
              ].map((tech) => (
                <div key={tech.name} className="tech-card group py-6">
                  {/* CORRECTION ICI : Utilisation de <img> standard */}
                  <img
                    src={`https://cdn.simpleicons.org/${tech.icon}/eecbcb`}
                    className="tech-icon-img"
                    alt={tech.name}
                    width={40}
                    height={40}
                  />
                  <span className="font-body text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
