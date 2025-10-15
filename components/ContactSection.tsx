"use client";
import Section from "./ui/Section";
import ContactForm from "./ContactForm/ContactForm";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation("home");
  return (
    <Section id="contact" className="max-md:px-4 max-md:mx-4">
      <h2 className="text-4xl mb-4 font-migra-extrabold">{t("contact.title")}</h2>
      <p className="leading-relaxed mb-4 font-roboto">
        {t("contact.description")}
      </p>
      <ContactForm />
    </Section>
  );
}
