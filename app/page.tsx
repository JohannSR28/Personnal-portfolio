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

/*rend to code modulaire,, découpe le en plusieur fichier afin de rendre le code facilement manipulable et lisible, essaiye de ne pas faire des fichier de plus de 50 ligne de code*/
