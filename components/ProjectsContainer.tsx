import ProjectPresentation from "./ProjectPresentation";
import type { MediaItem } from "@/components/mediaCarousel/MediaCarousel";
import { useTranslation } from "react-i18next";

export interface Project {
  title: string;
  role: string;
  description: string;
  features: string[];
  techStack: string;
  media: MediaItem[];
  layout: "left" | "right";
  liveDemoUrl: string;
  gitHubUrl: string;
}

export default function ProjectsContainer() {
  const { t } = useTranslation("home");
  const projects: Project[] = t("projects.projectList", {
    returnObjects: true,
  }) as Project[];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectPresentation
          key={index}
          {...project}
          media={project.media.map((item, i) => ({
            ...item,
            id: i + 1, // Ensure unique id for media items
          }))}
        />
      ))}
    </div>
  );
}
