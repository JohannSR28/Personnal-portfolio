"use client";

import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/languageContext";

gsap.registerPlugin(ScrollTrigger);

// --- TYPES ---
type MediaType = { type: "img" | "video"; url: string };

// Type pour les données statiques (avant traduction)
interface StaticProject {
  id: string;
  number: string;
  title: string;
  media: MediaType[];
  liveLink: string;
  codeLink: string;
}

// Type final complet (après fusion avec la traduction)
interface Project extends StaticProject {
  description: string;
  textLive: string;
  textCode: string;
}

// --- DONNÉES STATIQUES ---
const staticProjectsData: StaticProject[] = [
  {
    id: "jobtrack",
    number: "01",
    title: "JobTrack AI",
    media: [
      { type: "img", url: "/media/jobtrackai/a.png" },
      { type: "img", url: "/media/jobtrackai/b.png" },
      { type: "img", url: "/media/jobtrackai/c.png" },
    ],
    liveLink: "https://jobtrackai-three.vercel.app/login-page",
    codeLink: "https://github.com/JohannSR28/jobtrackai",
  },
  {
    id: "tactorelia",
    number: "02",
    title: "Tactorelia",
    media: [
      { type: "img", url: "/media/tactorelia/a.png" },
      { type: "img", url: "/media/tactorelia/b.png" },
    ],
    liveLink: "javascript:void(0)",
    codeLink: "javascript:void(0)",
  },
  {
    id: "cafesansfil",
    number: "03",
    title: "Café Sans Fil",
    media: [
      { type: "video", url: "/media/cafeSansFil/cafeSansFil.mp4" },
      { type: "img", url: "/media/cafeSansFil/cafeSansFil.png" },
    ],
    liveLink: "javascript:void(0)",
    codeLink: "javascript:void(0)",
  },
];

// --- SOUS-COMPOSANT PROJET ---
const ProjectItem = ({ project }: { project: Project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mediaCount = project.media.length;
  const videoRef = useRef<HTMLVideoElement>(null);

  const changeSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      if (project.media[prev].type === "video" && videoRef.current) {
        videoRef.current.pause();
      }
      return (prev + direction + mediaCount) % mediaCount;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (project.media[currentSlide].type === "video") return;
      changeSlide(1);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, project.media]);

  const isLiveDisabled = project.liveLink === "javascript:void(0)";
  const isCodeDisabled = project.codeLink === "javascript:void(0)";

  return (
    <div className="project-section w-[100vw] h-screen flex items-center justify-center px-[4vw] flex-shrink-0 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-[90vw] items-center">
        {/* MEDIA */}
        <div className="flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="viewer-wrapper w-full flex flex-col items-center">
            <div className="viewer-container relative w-full max-w-[600px] aspect-[3/2] rounded-[4px] overflow-hidden bg-black border border-white/5 shadow-2xl">
              {project.media.map((item, index) => {
                const isActive = index === currentSlide;
                const mediaStyles = `absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${isActive ? "opacity-100 z-10" : "opacity-0"}`;

                if (item.type === "video") {
                  return (
                    <video
                      key={index}
                      ref={isActive ? videoRef : null}
                      src={item.url}
                      controls
                      playsInline
                      className={`${mediaStyles} pointer-events-auto bg-black`}
                    />
                  );
                }
                return (
                  <div key={index} className={mediaStyles}>
                    <Image
                      src={item.url}
                      alt={`${project.title} slide ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 600px"
                      priority={index === 0}
                    />
                  </div>
                );
              })}
            </div>

            {/* CONTROLS */}
            <div className="control-deck flex items-center gap-3 mt-3 anim-element px-4 py-1.5 bg-black/20 border border-white/5 rounded-full backdrop-blur-md">
              <button
                onClick={() => changeSlide(-1)}
                className="w-6 h-6 flex items-center justify-center text-soft-clay/50 hover:text-white transition-all transform hover:scale-110"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="font-mono text-[10px] tracking-widest text-soft-clay opacity-60 min-w-[30px] text-center">
                {currentSlide + 1} / {mediaCount}
              </div>
              <button
                onClick={() => changeSlide(1)}
                className="w-6 h-6 flex items-center justify-center text-soft-clay/50 hover:text-white transition-all transform hover:scale-110"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* TEXTE */}
        <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2 lg:pl-4">
          <div className="anim-element">
            <span className="font-body text-sm tracking-[0.3em] uppercase opacity-40">
              {project.number} / Project
            </span>
            <h3 className="text-6xl md:text-8xl font-display font-light text-soft-clay tracking-tight mt-3 opacity-90">
              {project.title}
            </h3>
          </div>
          <p className="anim-element text-lg md:text-xl font-light leading-relaxed opacity-70 max-w-md font-body text-justify">
            {project.description}
          </p>
          <div className="anim-element pt-6 flex flex-wrap items-center gap-10">
            <a
              href={project.liveLink}
              target={isLiveDisabled ? undefined : "_blank"}
              className={`link-about-style group ${isLiveDisabled ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              {project.textLive}{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href={project.codeLink}
              target={isCodeDisabled ? undefined : "_blank"}
              className={`link-about-style group ${isCodeDisabled ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="opacity-80"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {project.textCode}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---
export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Fusion TYPÉE (plus de 'any')
  const projects: Project[] = staticProjectsData.map((proj, i) => ({
    ...proj,
    description: t.work.items[i].description,
    textLive: t.work.items[i].live,
    textCode: t.work.items[i].code,
  }));

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;
      const totalWidth = track.scrollWidth;
      const windowWidth = window.innerWidth;

      const scrollTween = gsap.to(track, {
        x: () => -(totalWidth - windowWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.1,
          end: () => "+=" + (totalWidth - windowWidth),
          invalidateOnRefresh: true,
        },
      });

      const sections = gsap.utils.toArray(".project-section") as HTMLElement[];
      sections.forEach((section) => {
        const animElements = section.querySelectorAll(".anim-element");
        const viewer = section.querySelector(".viewer-container");
        ScrollTrigger.create({
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          end: "right center",
          onEnter: () => {
            gsap.to(animElements, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              overwrite: true,
            });
            if (viewer)
              gsap.fromTo(
                viewer,
                { clipPath: "inset(0 100% 0 0)" },
                {
                  clipPath: "inset(0 0% 0 0)",
                  duration: 0.8,
                  ease: "power2.out",
                  overwrite: true,
                },
              );
          },
          onEnterBack: () => {
            gsap.to(animElements, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              overwrite: true,
            });
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [t]); // Ajout de 't' comme dépendance pour rejouer l'animation si la langue change

  return (
    <section
      id="work-section"
      ref={sectionRef}
      className="h-screen w-full relative overflow-hidden flex flex-col justify-center bg-deep-wine"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display italic text-white opacity-[0.03] whitespace-nowrap z-0 pointer-events-none">
        {t.work.bgText}
      </div>

      <div
        ref={trackRef}
        id="projects-track"
        className="flex items-center h-full z-10 relative pl-[10vw] lg:pl-[5vw] pr-[10vw] lg:pr-[5vw] w-max"
      >
        {projects.map((proj) => (
          <ProjectItem key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}
