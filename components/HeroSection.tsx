"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const textLines = [
    "Hi, I'm a Web Developer specialized in",
    "crafting clean, responsive, and engaging interfaces.",
    "With full-stack skills that let me design, build,",
    "and deploy complete applications, I deliver",
    "complete websites combining aesthetics,",
    "performance and reliability.",
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.lineIndex);

          if (entry.isIntersecting && !visibleLines.includes(index)) {
            setVisibleLines((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -20% 0px" }
    );

    const lines = sectionRef.current.querySelectorAll("[data-line-index]");
    lines.forEach((line) => observer.observe(line));

    return () => observer.disconnect();
  }, [visibleLines]);

  return (
    <section
      ref={sectionRef}
      id="presentation"
      className="max-w-[600px] mx-auto mt-[125px] mb-[50px] max-sm:mt-[120px] max-sm:mb-[30px] px-5 max-sm:px-4 text-3xl max-sm:text-2xl md:max-lg:text-[26px] leading-relaxed text-center"
    >
      {textLines.map((line, index) => (
        <p
          key={index}
          data-line-index={index}
          className={`block transition-all duration-700 ease-out
            ${
              visibleLines.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {line}
        </p>
      ))}
    </section>
  );
}
