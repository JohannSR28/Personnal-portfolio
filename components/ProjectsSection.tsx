import Section from "@/components/ui/Section";
import ProjectsContainer from "./ProjectsContainer";

export default function ProjectsSection() {
  return (
    <>
      <Section id="projects" className="max-md:px-4 max-md:mx-4">
        <h2 className="text-4xl mb-4 font-migra-extrabold">My Projects</h2>
        <p className="leading-relaxed mb-4 font-roboto">
          Here are some of my recent works:
        </p>
      </Section>
      <ProjectsContainer />
    </>
  );
}
