"use client";
import Section from "./ui/Section";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactSection() {
  return (
    <Section id="contact" className="max-md:px-4 max-md:mx-4">
      <h2 className="text-4xl mb-4 font-migra-extrabold">Contact Me</h2>
      <p className="leading-relaxed mb-4 font-roboto">
        I&apos;m always eager to explore new opportunities and exciting
        projects. Feel free to send me a message.
      </p>
      <ContactForm />
    </Section>
  );
}
