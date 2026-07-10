import React from "react";
import Image from "next/image";
import Link from "next/link";
import { archiveProjects, archiveStack, archiveVersions } from "../data";

// ARCHIVE — Édition III « Galerie » : panneaux plein écran aux fonds
// profonds, Syne massive, accents ambre.
const panelColors = ["#2b1030", "#40200e", "#0e2f38"];

export default function GalerieArchive() {
  return (
    <main className="min-h-screen bg-[#0e1a45] text-[#f4efe6] [font-family:var(--font-archivo)]">
      {/* Bandeau archive */}
      <div className="px-5 md:px-10 py-3 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] border-b border-[#f4efe6]/15">
        <Link href="/" className="hover:text-[#ffab4a]">
          ← Portfolio
        </Link>
        <span className="opacity-50">Archive — direction non retenue</span>
        <span className="flex gap-4">
          {archiveVersions.map((v) => (
            <Link key={v.href} href={v.href} className="hover:text-[#ffab4a]">
              {v.label.split(" — ")[0]}
            </Link>
          ))}
        </span>
      </div>

      {/* Hero */}
      <section className="relative min-h-[80svh] flex flex-col justify-center px-5 md:px-10 overflow-hidden">
        <div
          className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full pointer-events-none opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #ffab4a 0%, transparent 65%)",
          }}
        ></div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#ffab4a] mb-6">
          Développeur Web Full Stack — Montréal, QC
        </p>
        <h1 className="[font-family:var(--font-syne)] font-extrabold uppercase leading-[0.92] text-[11vw] tracking-tight">
          Johann
          <br />
          Sourou<span className="text-[#ffab4a]">.</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 mt-10">
          <h2 className="lg:col-span-6 [font-family:var(--font-syne)] font-bold text-2xl md:text-3xl leading-tight">
            La logique,{" "}
            <span className="bg-[#ffab4a] text-[#0c0b0d] px-1.5 [box-decoration-break:clone]">
              mise en émotion.
            </span>
          </h2>
          <p className="lg:col-span-4 lg:col-start-9 mt-6 lg:mt-0 text-base leading-relaxed text-[#f4efe6]/75">
            Diplômé en mathématiques et informatique, je conçois des interfaces
            où la rigueur technique s'efface derrière l'expérience.
          </p>
        </div>
      </section>

      {/* Projets — panneaux colorés */}
      {archiveProjects.map((p, i) => (
        <section
          key={p.number}
          className="px-5 md:px-10 py-20"
          style={{ backgroundColor: panelColors[i] }}
        >
          <span className="inline-block border-2 border-[#ffab4a] text-[#ffab4a] px-3 py-1 [font-family:var(--font-syne)] font-bold uppercase tracking-[0.12em] text-xs rotate-[-2deg]">
            {p.number} — {p.subtitle}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-5 mt-7 mb-2">
            <span className="[font-family:var(--font-syne)] font-extrabold text-4xl md:text-6xl text-[#ffab4a]">
              {p.number}
            </span>
            <h3 className="[font-family:var(--font-syne)] font-extrabold uppercase text-4xl md:text-6xl tracking-tight">
              {p.title}
            </h3>
          </div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#f4efe6]/60 mb-10">
            {p.category}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-8 items-start">
            <figure
              className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
            >
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-black/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              </div>
              <figcaption className="px-1 pt-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4efe6]/60">
                Fig. {p.number}
              </figcaption>
            </figure>
            <div
              className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}
            >
              <p className="text-base leading-relaxed text-[#f4efe6]/85">
                {p.description}
              </p>
              <div className="mt-6 pt-3 border-t border-[#f4efe6]/20">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ffab4a] mb-2.5">
                  Démonstration
                </p>
                <ol className="space-y-3">
                  {p.proof.map((step, j) => (
                    <li
                      key={j}
                      className="flex gap-2.5 text-sm leading-relaxed text-[#f4efe6]/80"
                    >
                      <span className="font-mono text-[10px] font-bold pt-1 text-[#ffab4a] flex-shrink-0">
                        ({j + 1})
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="mt-6 pt-3 border-t border-[#f4efe6]/20 [font-family:var(--font-syne)] font-bold text-lg leading-snug">
                {p.corollary} <span className="text-[#ffab4a]">∎</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#f4efe6]/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.1em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Outils */}
      <section className="bg-[#1a1412] px-5 md:px-10 py-16">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-[#ffab4a] mb-6">
          Outils
        </p>
        <ul className="border-t border-[#f4efe6]/15">
          {archiveStack.map((tech, i) => (
            <li
              key={tech}
              className="flex items-baseline gap-4 py-3.5 border-b border-[#f4efe6]/15"
            >
              <span className="font-mono text-[10px] font-bold text-[#ffab4a] w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="[font-family:var(--font-syne)] font-bold uppercase text-2xl md:text-3xl">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pied */}
      <footer className="bg-[#0c0b0d] px-5 md:px-10 py-6 flex flex-wrap justify-between gap-4 text-[10px] font-mono font-bold uppercase tracking-[0.15em]">
        <span className="opacity-70">© 2026 Johann Sourou</span>
        <Link href="/" className="hover:text-[#ffab4a]">
          Retour au portfolio →
        </Link>
      </footer>
    </main>
  );
}
