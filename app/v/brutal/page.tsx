import React from "react";
import Image from "next/image";
import Link from "next/link";
import { archiveProjects, archiveStack, archiveVersions } from "../data";

// ARCHIVE — Édition II « Brut » : Anton surdimensionné, bordures épaisses,
// bandeaux inversés, ombres dures, vermillon.
export default function BrutalArchive() {
  return (
    <main className="min-h-screen bg-[#ebe7dd] text-[#141311] [font-family:var(--font-archivo)] overflow-x-clip">
      {/* Bandeau archive */}
      <div className="px-5 md:px-10 py-3 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border-b-[3px] border-[#141311]">
        <Link href="/" className="hover:text-[#c9310f]">
          ← Portfolio
        </Link>
        <span className="opacity-50">Archive — direction non retenue</span>
        <span className="flex gap-4">
          {archiveVersions.map((v) => (
            <Link key={v.href} href={v.href} className="hover:text-[#c9310f]">
              {v.label.split(" — ")[0]}
            </Link>
          ))}
        </span>
      </div>

      {/* Masthead débordant */}
      <h1 className="[font-family:var(--font-anton)] uppercase leading-[0.82] text-[26vw] whitespace-nowrap select-none">
        <span className="block ml-[-2vw]">Johann</span>
        <span className="block text-right mr-[-2.5vw]">Sourou</span>
      </h1>

      {/* Manchette */}
      <div className="border-t-[3px] border-b-[3px] border-[#141311] px-5 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-x-10">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#c9310f] mb-4">
            Développeur Web Full Stack
          </p>
          <h2 className="[font-family:var(--font-anton)] uppercase text-4xl md:text-7xl leading-[1.15]">
            La logique,
            <br />
            <span className="bg-[#c9310f] text-[#ebe7dd] px-2 [box-decoration-break:clone]">
              mise en émotion.
            </span>
          </h2>
        </div>
        <p className="lg:col-span-4 lg:col-start-9 mt-8 lg:mt-0 self-end text-base font-medium leading-relaxed">
          Diplômé en mathématiques et informatique, je conçois des interfaces
          où la rigueur technique s'efface derrière l'expérience.
        </p>
      </div>

      {/* Projets */}
      <div className="bg-[#141311] text-[#ebe7dd] px-5 md:px-10 py-4">
        <h2 className="[font-family:var(--font-anton)] uppercase text-3xl md:text-5xl">
          Travaux
        </h2>
      </div>
      <div className="px-5 md:px-10">
        {archiveProjects.map((p, i) => (
          <article
            key={p.number}
            className="py-14 border-b-2 border-[#141311] last:border-b-0"
          >
            <span className="inline-block border-[3px] border-[#c9310f] text-[#c9310f] px-3 py-1 [font-family:var(--font-anton)] uppercase tracking-[0.12em] text-sm rotate-[-2deg]">
              {p.number} — {p.subtitle}
            </span>
            <div className="flex flex-wrap items-baseline gap-x-5 mt-6 mb-2">
              <span className="[font-family:var(--font-anton)] text-5xl md:text-7xl text-[#c9310f]">
                {p.number}
              </span>
              <h3 className="[font-family:var(--font-anton)] uppercase text-5xl md:text-7xl">
                {p.title}
              </h3>
            </div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] opacity-70 mb-10">
              {p.category}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 items-start">
              <figure
                className={`lg:col-span-7 shadow-[10px_10px_0_#c9310f] ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
              >
                <div className="relative aspect-[3/2] border-[3px] border-[#141311] bg-[#ebe7dd]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                </div>
                <figcaption className="border-x-[3px] border-b-[3px] border-[#141311] bg-[#141311] text-[#ebe7dd] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                  Fig. {p.number}
                </figcaption>
              </figure>
              <div
                className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}
              >
                <p className="text-base font-medium leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-6 pt-3 border-t-2 border-[#141311]">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#c9310f] mb-2.5">
                    Démonstration
                  </p>
                  <ol className="space-y-3">
                    {p.proof.map((step, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm leading-relaxed border-l-[3px] border-[#141311] pl-3"
                      >
                        <span className="font-mono text-[10px] font-bold pt-1 text-[#c9310f] flex-shrink-0">
                          ({j + 1})
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="mt-6 text-lg font-bold italic leading-snug">
                  <span className="bg-[#c9310f] text-[#ebe7dd] px-1.5 [box-decoration-break:clone]">
                    {p.corollary} ∎
                  </span>
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-[#141311] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.1em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Outils */}
      <div className="bg-[#141311] text-[#ebe7dd] px-5 md:px-10 py-4">
        <h2 className="[font-family:var(--font-anton)] uppercase text-3xl md:text-5xl">
          Outils
        </h2>
      </div>
      <ul className="px-5 md:px-10 py-8">
        {archiveStack.map((tech, i) => (
          <li
            key={tech}
            className="flex items-baseline gap-4 py-3 border-b-2 border-[#141311]"
          >
            <span className="font-mono text-[10px] font-bold text-[#c9310f] w-6">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="[font-family:var(--font-anton)] uppercase text-2xl md:text-3xl">
              {tech}
            </span>
          </li>
        ))}
      </ul>

      {/* Pied */}
      <footer className="bg-[#141311] text-[#ebe7dd] px-5 md:px-10 py-6 flex flex-wrap justify-between gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.15em]">
        <span>© 2026 Johann Sourou</span>
        <Link href="/" className="hover:text-[#c9310f]">
          Retour au portfolio →
        </Link>
      </footer>
    </main>
  );
}
