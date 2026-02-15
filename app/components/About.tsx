"use client";

import React from "react";
import { useLanguage } from "../context/languageContext";

export default function About() {
  const { t, language } = useLanguage();

  return (
    <section
      id="about-section"
      className="w-full flex items-center justify-center px-6 md:px-20 py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl items-start">
        {/* COLONNE GAUCHE - STICKY */}
        <div className="lg:col-span-6 lg:sticky lg:top-[25vh]">
          <h2 className="text-[15vw] lg:text-[6.5rem] leading-[0.85] font-display font-light text-soft-clay tracking-tight opacity-90">
            {t.about.title}
            <br />
            <span className="italic font-normal opacity-50 ml-4">
              {t.about.subtitle}
            </span>
          </h2>
        </div>

        {/* COLONNE DROITE - CONTENU SCROLLABLE */}
        <div className="lg:col-span-6 lg:col-start-7 lg:mt-12">
          <div className="glass-card-premium p-8 md:p-12">
            <div className="mb-8 flex items-center gap-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-body uppercase tracking-[0.2em] text-soft-clay">
                {t.about.introLabel}
              </span>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>

            <div className="space-y-6 text-base md:text-lg font-body font-light leading-relaxed text-soft-clay/90 text-justify">
              <p>
                {/* Reconstruction du texte avec le tableau de traduction pour garder le style */}
                {t.about.bio[0]}{" "}
                <span className="font-display italic text-2xl text-white px-2">
                  Johann Sourou
                </span>
                {t.about.bio[1]} <strong>{t.about.bio[2]}</strong>{" "}
                {t.about.bio[3]}
              </p>
              <p>
                {t.about.bio[4]} <strong>{t.about.bio[5]}</strong>
                {t.about.bio[6]} <strong>{t.about.bio[7]}</strong>{" "}
                {t.about.bio[8]}
              </p>
            </div>

            <div className="pt-10 flex flex-wrap items-center gap-10">
              <a
                href="https://www.linkedin.com/in/johann-sourou-8b351129a/"
                target="_blank"
                rel="noreferrer"
                className="link-about-style group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                {t.about.links.linkedin}
              </a>
              <a
                href="https://github.com/JohannSR28"
                target="_blank"
                rel="noreferrer"
                className="link-about-style group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t.about.links.github}
              </a>
              <a
                href={
                  language == "fr"
                    ? "/Johann_Sourou_f.pdf"
                    : "/Johann_Sourou_e.pdf"
                }
                target="_blank"
                className="link-about-style group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                {t.about.links.cv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
