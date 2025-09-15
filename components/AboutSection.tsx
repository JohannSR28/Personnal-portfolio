import Section from "@/components/ui/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocument } from "react-icons/hi";

export default function AboutSection() {
  return (
    <Section id="about-me" className="max-md:px-4 max-md:mx-4">
      <h2 className="text-4xl mb-4 font-migra-extrabold">About Me</h2>
      <p className="leading-relaxed mb-4 font-roboto text-justify">
        I started coding at university while studying Mathematics and Computer
        Science. I was drawn to programming because it channels the mathematical
        and logical reasoning I enjoy, and that curiosity quickly grew into a
        genuine passion for software development.
      </p>
      <p className="leading-relaxed mb-4 font-roboto text-justify">
        Since then I’ve focused on building end-to-end web and mobile
        applications using React, Next.js, Flutter, Node.js and MongoDB. Through
        coursework and hands-on projects, I’ve implemented secure
        authentication, automated CI/CD workflows, and built user-centered
        interfaces.
      </p>
      <p className="leading-relaxed mb-4 font-roboto text-justify">
        I’m motivated by solving practical problems and creating tools that make
        people’s lives easier. Explore my projects to see examples of my work,
        or{" "}
        <a href="#contact" className="underline">
          get in touch
        </a>{" "}
        if you’d like to collaborate.
      </p>

      <div className="mt-6">
        <h3 className="text-2xl mb-2 font-migra-extrabold-italic">
          See my profiles :
        </h3>
        <div className="flex gap-4">
          <a
            href="https://github.com/JohannSR28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center gap-2"
          >
            <FaGithub className="w-5 h-5" aria-hidden="true" />
            <span>GitHub</span>
          </a>

          <a
            href="/Johann Sourou cv fr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center gap-2"
          >
            <HiOutlineDocument className="w-5 h-5" aria-hidden="true" />
            <span>Download CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/johann-sourou-8b351129a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline flex items-center gap-2"
          >
            <FaLinkedin className="w-5 h-5" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
