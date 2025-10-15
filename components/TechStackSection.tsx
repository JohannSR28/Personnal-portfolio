import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import Section from "./ui/Section";
import { useTranslation } from "react-i18next";

const techStack = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 w-12 h-12" />,
  },
  { name: "React", icon: <SiReact className="text-cyan-400 w-12 h-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white w-12 h-12" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500 w-12 h-12" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-12 h-12" /> },
];

export default function TechStackSection() {
  const { t } = useTranslation("home");
  return (
    <Section id="tech-stack" className="max-md:px-4 max-md:mx-4 mb-8">
      <h2 className="text-4xl mb-10 font-migra-extrabold">
        {t("techStack.title")}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            {tech.icon}
            <span className="mt-2 text-sm font-medium">{tech.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
