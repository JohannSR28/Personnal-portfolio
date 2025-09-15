import ProjectPresentation from "./ProjectPresentation";
import type { MediaItem } from "@/components/mediaCarousel/MediaCarousel";

export default function ProjectsContainer() {
  return (
    <div>
      <ProjectPresentation
        title="How to Cook"
        role="Web Developer, main creator"
        description="This project is a online sharing platform for cooking recipes. Users can browse, search, and share their favorite recipes with others."
        features={[
          "Secure Authentication with JWT and bcrypt",
          "Real-time Search and Filtering",
          "Responsive Design with Tailwind CSS",
          "Restful API with Next.js",
        ]}
        techStack="React, Next.js, Tailwind CSS"
        media={projectMedia_1}
        layout="left"
        liveDemoUrl="https://how-to-cook-cyan.vercel.app/"
        gitHubUrl="https://github.com/JohannSR28/HowToCook"
      />

      <ProjectPresentation
        title="Café Sans Fil (Mobile App)"
        role="Mobile Applications Developer"
        description="A full-featured management application for a student-run café, designed to organize volunteer schedules and manage inventory. Developed as a team project in Montreal (May–August 2024)."
        features={[
          "40% workload reduction with dynamic volunteer scheduling",
          "Secure JWT authentication with role-based access",
          "CI/CD automation using GitHub Actions",
          "Dashboards for financial and inventory data",
        ]}
        techStack="Flutter/Dart, Node.js (TypeScript), Express.js, MongoDB"
        media={projectMedia_2}
        layout="right"
        liveDemoUrl="https://drive.google.com/file/d/1GNoI4bMbtajqU7q1QDSAhnXwuJLLPN5n/view"
        gitHubUrl="https://github.com/ceduni/cafe-sans-fil/tree/mobile"
      />
    </div>
  );
}

const projectMedia_1: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "/media/howToCook/image_1.png",
    alt: "Projet image",
  },
  {
    id: 2,
    type: "image",
    src: "/media/howToCook/image_2.png",
    alt: "Deuxième image",
  },
];

const projectMedia_2: MediaItem[] = [
  {
    id: 3,
    type: "video",
    src: "/media/cafeSansFil/cafeSansFil.mp4",
    poster: "/media/cafeSansFil/cafeSansFil.png",
    alt: "Image 2",
  },
];
