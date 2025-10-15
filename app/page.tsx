"use client";

import BackgroundNoise from "../components/ui/BackgroundNoise";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <>
      <BackgroundNoise />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
