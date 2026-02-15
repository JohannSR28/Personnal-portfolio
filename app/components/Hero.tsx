import React from "react";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="min-h-[100svh] flex flex-col items-center justify-center px-6 relative z-10"
    >
      <div className="text-center space-y-4 md:space-y-6">
        <p
          className="font-body text-lg md:text-xl uppercase tracking-[0.3em] opacity-60 animate-reveal"
          style={{ animationDelay: "0.1s" }}
        >
          Hello, I&apos;m a
        </p>

        <div className="flex flex-col items-center leading-[0.85]">
          <div className="hero-word-mask">
            <h1
              className="text-[17vw] md:text-[8rem] font-display font-light text-soft-clay mix-blend-overlay animate-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              Web Full Stack
            </h1>
          </div>
          <div className="hero-word-mask">
            <h1
              className="text-[17vw] md:text-[8rem] font-display font-light italic text-white opacity-90 animate-reveal"
              style={{ animationDelay: "0.4s" }}
            >
              Developer.
            </h1>
          </div>
        </div>

        <p
          className="font-body text-sm md:text-base tracking-[0.4em] uppercase opacity-40 animate-reveal mt-8"
          style={{ animationDelay: "0.8s" }}
        >
          Turning Logic into Emotion
        </p>
      </div>
    </section>
  );
}
