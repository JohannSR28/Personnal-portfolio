import React from "react";
import Image from "next/image";
import Link from "next/link";
import { archiveProjects, archiveStack, archiveVersions } from "../data";

// ARCHIVE — Édition I « Journal » : papier ivoire, serif Fraunces,
// grille éditoriale, filets fins, sections numérotées.
export default function EditorialArchive() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#1d1912] font-body">
      {/* Bandeau archive */}
      <div className="px-5 md:px-10 py-3 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] border-b border-[#1d1912]/20">
        <Link href="/" className="hover:text-[#b5341f]">
          ← Portfolio
        </Link>
        <span className="opacity-50">Archive — direction non retenue</span>
        <span className="flex gap-4">
          {archiveVersions.map((v) => (
            <Link key={v.href} href={v.href} className="hover:text-[#b5341f]">
              {v.label.split(" — ")[0]}
            </Link>
          ))}
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Masthead */}
        <div className="py-2 flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] opacity-70">
          <span>Portfolio — Édition I</span>
          <span>Montréal, QC</span>
        </div>
        <div className="border-t-[3px] border-[#1d1912]"></div>
        <h1 className="py-4 text-center font-display font-semibold uppercase leading-[0.85] tracking-tight text-[14vw] xl:text-[12rem]">
          Johann Sourou
        </h1>
        <div className="border-t-[3px] border-[#1d1912]"></div>

        {/* Manchette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 py-10">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-[#b5341f] mb-4">
              Développeur Web Full Stack
            </p>
            <h2 className="font-display font-light text-4xl md:text-6xl leading-[1.02] tracking-tight">
              La logique,
              <br />
              <em className="font-normal">mise en émotion.</em>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 mt-8 lg:mt-0 self-end text-base leading-relaxed opacity-80">
            Diplômé en mathématiques et informatique, je conçois des interfaces
            où la rigueur technique s'efface derrière l'expérience. Deux ans de
            React, Next.js et Node.js.
          </p>
        </div>

        {/* Projets */}
        <div className="border-t-2 border-[#1d1912] pt-4">
          <p className="font-mono text-xs text-[#b5341f] mb-2">N° 02 — Travaux</p>
          {archiveProjects.map((p, i) => (
            <article
              key={p.number}
              className="py-12 border-b border-[#1d1912]/20 last:border-b-0"
            >
              <div className="flex flex-wrap items-baseline gap-x-5 mb-2">
                <span className="font-display font-semibold text-4xl md:text-6xl text-[#b5341f]">
                  {p.number}
                </span>
                <h3 className="font-display text-4xl md:text-6xl tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60 mb-8">
                {p.category} — {p.subtitle}
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 items-start">
                <figure
                  className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
                >
                  <div className="relative aspect-[3/2] border border-[#1d1912]/25 bg-[#ece5d6]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                  </div>
                  <figcaption className="border-x border-b border-[#1d1912]/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                    Fig. {p.number}
                  </figcaption>
                </figure>
                <div
                  className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}
                >
                  <p className="text-base leading-relaxed opacity-85">
                    {p.description}
                  </p>
                  <div className="mt-6 pt-3 border-t border-[#1d1912]/20">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-50 mb-2">
                      Démonstration
                    </p>
                    <ol className="space-y-3">
                      {p.proof.map((step, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm leading-relaxed opacity-75"
                        >
                          <span className="font-mono text-[10px] pt-1 text-[#b5341f] flex-shrink-0">
                            ({j + 1})
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <p className="mt-6 pt-3 border-t border-[#1d1912]/20 font-display italic text-lg leading-snug">
                    {p.corollary}{" "}
                    <span className="text-[#b5341f] not-italic">∎</span>
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-display italic opacity-80">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Outils */}
        <div className="border-t-2 border-[#1d1912] pt-4 pb-12">
          <p className="font-mono text-xs text-[#b5341f] mb-4">N° 03 — Outils</p>
          <ul className="border-t border-[#1d1912]/20">
            {archiveStack.map((tech, i) => (
              <li
                key={tech}
                className="flex items-baseline justify-between py-3 border-b border-[#1d1912]/20"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] opacity-40 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl md:text-2xl">
                    {tech}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pied */}
        <footer className="border-t-2 border-[#1d1912] py-6 flex flex-wrap justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.15em] opacity-70">
          <span>© 2026 Johann Sourou</span>
          <Link href="/" className="hover:text-[#b5341f]">
            Retour au portfolio →
          </Link>
        </footer>
      </div>
    </main>
  );
}
