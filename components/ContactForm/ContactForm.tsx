"use client";
import { useState } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import StatusMessage from "./StatusMessage";
import { sendContactMessage } from "@/lib/contact";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validateEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim())
      return setStatus("error"), setErrorMessage("Le nom est requis");
    if (!email.trim() || !validateEmail(email))
      return setStatus("error"), setErrorMessage("Email invalide");
    if (!message.trim())
      return setStatus("error"), setErrorMessage("Le message est requis");

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      await sendContactMessage(name.trim(), email.trim(), message.trim());
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message || "Une erreur est survenue. Réessayez.");
      } else {
        setErrorMessage("Une erreur est survenue. Réessayez.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <StatusMessage status={status} error={errorMessage} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <InputField
            placeholder="Your Name"
            value={name}
            setValue={setName}
            disabled={isSubmitting}
          />
          <InputField
            placeholder="Your Email"
            value={email}
            setValue={setEmail}
            disabled={isSubmitting}
          />
        </div>
        <TextAreaField
          value={message}
          setValue={setMessage}
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-migra-extrabold bg-white text-[#230d11] p-2 rounded hover:bg-transparent hover:text-white disabled:opacity-50"
        >
          {isSubmitting ? "Envoi..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
