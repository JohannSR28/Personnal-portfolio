import Section from "@/components/ui/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation("home");
  const aboutMeParagraphs = t("aboutMe.paragraphs", {
    returnObjects: true,
  }) as string[];
  return (
    <Section id="about-me" className="max-md:px-4 max-md:mx-4">
      <h2 className="text-4xl mb-4 font-migra-extrabold">{t("aboutMe.title")}</h2>
      {aboutMeParagraphs.map((paragraph, index) => (
        <p
          key={index}
          className="leading-relaxed mb-4 font-roboto text-justify"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}

      <div className="mt-6">
        <h3 className="text-2xl mb-2 font-migra-extrabold-italic">
          {t("aboutMe.profiles.title")}
        </h3>
        <div className="flex gap-4">
          <a
            href="https://github.com/JohannSR28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" aria-hidden="true" />
            <span>{t("aboutMe.profiles.github")}</span>
          </a>

          <a
            href="/Johann Sourou cv fr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center gap-2"
          >
            <HiOutlineDocument className="w-5 h-5" aria-hidden="true" />
            <span>{t("aboutMe.profiles.cv")}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/johann-sourou-8b351129a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center gap-2"
          >
            <FaLinkedin className="w-5 h-5" aria-hidden="true" />
            <span>{t("aboutMe.profiles.linkedin")}</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
