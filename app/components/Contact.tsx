"use client";

import React, { useState } from "react";
import { useLanguage } from "../context/languageContext";

export default function Contact() {
  const { t } = useLanguage();

  // États pour les champs et le statut
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      // CORRECTION : On retire '(err)' car on ne l'utilise pas.
      // Le bloc catch {} seul fonctionne parfaitement en TS moderne.
      setStatus("error");
    }
  };

  return (
    <section
      id="contact-section"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-20 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl items-start">
        <div className="space-y-8 lg:sticky lg:top-32">
          <h2 className="text-[12vw] lg:text-[6.5rem] font-display font-light text-soft-clay opacity-90 leading-none">
            {t.contact.title}
            <br />
            <span className="italic opacity-50 ml-4">{t.contact.subtitle}</span>
          </h2>
          <div className="glass-card-premium p-8 max-w-md">
            <p className="text-lg font-light opacity-80 font-body">
              {t.contact.description}
            </p>
          </div>
        </div>

        <div className="lg:pt-20 w-full">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.form.name}
                className="contact-input"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.form.email}
                className="contact-input"
                required
              />
            </div>

            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.form.message}
                rows={4}
                className="contact-input resize-none"
                maxLength={5000}
                required
              ></textarea>
              <div className="text-right text-xs text-soft-clay/40 mt-2 font-mono">
                {message.length}/5000 {t.contact.form.chars}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="group flex items-center gap-4 text-2xl font-display font-light italic text-white hover:opacity-80 transition-opacity disabled:opacity-30"
            >
              {status === "loading" ? "..." : t.contact.form.btn}
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </button>

            {/* Messages de feedback */}
            {status === "success" && (
              <p className="text-emerald-400 font-body">
                Message envoyé avec succès ! ✨
              </p>
            )}
            {status === "error" && (
              <p className="text-rose-500 font-body">
                Une erreur est survenue. Réessayez plus tard.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
