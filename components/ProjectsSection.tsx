import Section from "@/components/ui/Section";
import ProjectsContainer from "./ProjectsContainer";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation("home");
  return (
    <>
      <Section id="projects" className="max-md:px-4 max-md:mx-4">
        <h2 className="text-4xl mb-4 font-migra-extrabold">{t("projects.title")}</h2>
        <p className="leading-relaxed mb-4 font-roboto">
          {t("projects.description")}
        </p>
      </Section>
      <ProjectsContainer />
    </>
  );
}
