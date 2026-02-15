import React from "react";
import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* --- BACKGROUND WAVES (Optimisé Mobile) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 w-full h-[60vh]">
          {/* Vague Lente */}
          {/* MOBILE : w-[400%] et left-[-150%] pour cacher les bords */}
          {/* DESKTOP (md) : w-[150%] et left-[-20%] comme avant */}
          <svg
            className="absolute bottom-0 h-full animate-wave-slow opacity-20 text-[#6b2c35] fill-current
            w-[400%] left-[-150%] 
            md:w-[150%] md:left-[-20%]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>

          {/* Vague Moyenne */}
          <svg
            className="absolute bottom-[-20px] h-[90%] animate-wave-medium opacity-30 text-[#4a1a21] fill-current
            w-[400%] left-[-150%]
            md:w-[150%] md:left-[-10%]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,138.7C672,107,768,85,864,106.7C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* --- ELEMENTS GLOBAUX --- */}
      <Header />
      <ScrollProgress />

      {/* FOOTER FIXE (Caché sur mobile par défaut dans ton CSS global, ou via hidden md:block ici) */}
      <div className="fixed bottom-12 left-12 z-40 font-body text-sm opacity-50 hidden md:block">
        © 2026 Johann Sourou.
      </div>
      <a
        href="#contact-section"
        className="fixed bottom-12 right-12 z-40 font-body text-sm opacity-50 hover:text-white hover:opacity-100 transition-all uppercase tracking-widest hidden md:block"
      >
        Contact me
      </a>

      {/* --- SECTIONS --- */}
      <Hero />
      <About />
      <Work />
      <Stack />
      <Contact />
    </main>
  );
}
