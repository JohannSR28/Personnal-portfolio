"use client";

import MediaCarousel from "@/components/mediaCarousel/MediaCarousel";
import type { MediaItem } from "@/components/mediaCarousel/MediaCarousel";

interface ProjectPresentationProps {
  title: string;
  role: string;
  description: string;
  features: string[];
  techStack: string;
  media: MediaItem[];
  layout?: "left" | "right"; // "left" = info à gauche, "right" = info à droite
  onLiveDemoClick?: () => void;
  onGitHubClick?: () => void;
  liveDemoUrl?: string;
  gitHubUrl?: string;
}

export default function ProjectPresentation({
  title,
  role,
  description,
  features,
  techStack,
  media,
  layout = "left",
  onLiveDemoClick,
  onGitHubClick,
  liveDemoUrl,
  gitHubUrl,
}: ProjectPresentationProps) {
  const handleLiveDemoClick = () => {
    if (onLiveDemoClick) {
      onLiveDemoClick();
    } else if (liveDemoUrl) {
      window.open(liveDemoUrl, "_blank");
    }
  };

  const handleGitHubClick = () => {
    if (onGitHubClick) {
      onGitHubClick();
    } else if (gitHubUrl) {
      window.open(gitHubUrl, "_blank");
    }
  };

  const InfoSection = () => (
    <div className="flex flex-col items-start justify-start p-4 font-roboto">
      <h3 className="text-3xl font-migra-extrabold mb-2">{title}</h3>
      <p className="mb-4">Role : {role}</p>
      <p className="mb-4">{description}</p>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="flex space-x-4 mb-4">
        {(onLiveDemoClick || liveDemoUrl) && (
          <a
            onClick={handleLiveDemoClick}
            className="font-migra-extrabold bg-white text-[#230d11] p-2 rounded transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white active:scale-95"
          >
            Live Demo
          </a>
        )}
        {(onGitHubClick || gitHubUrl) && (
          <a
            onClick={handleGitHubClick}
            className="font-migra-extrabold bg-white text-[#230d11] p-2 rounded transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white active:scale-95"
          >
            GitHub Repo
          </a>
        )}
      </div>
      <div>
        Tech Stack:
        <span className="ml-2">{techStack}</span>
      </div>
    </div>
  );

  const MediaSection = () => (
    <div>
      <MediaCarousel media={media} />
    </div>
  );

  const gridCols =
    layout === "left" ? "md:grid-cols-[30%_70%]" : "md:grid-cols-[70%_30%]";

  return (
    <div className="px-6 mb-36">
      <div className={`grid gap-4 grid-cols-1 ${gridCols}`}>
        {layout === "left" ? (
          <>
            <InfoSection />
            <MediaSection />
          </>
        ) : (
          <>
            <MediaSection />
            <InfoSection />
          </>
        )}
      </div>
    </div>
  );
}
