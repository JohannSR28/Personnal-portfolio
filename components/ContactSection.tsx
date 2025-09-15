"use client";
import { useState } from "react";
import Section from "./ui/Section";

export default function ContactSection() {
  const [message, setMessage] = useState("");

  return (
    <Section id="contact" className="max-md:px-4 max-md:mx-4 ">
      <h2 className="text-4xl mb-4 font-migra-extrabold">Contact Me</h2>
      <p className="leading-relaxed mb-4 font-roboto">
        I&apos;m always eager to explore new opportunities and take on exciting
        projects. If you have a project in mind, or just want to say hi, feel
        free to send me a message.
      </p>
      <div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 mb-2 w-full border border-solid border-white rounded focus:border-white focus:outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-2 mb-2 w-full border border-solid border-white rounded focus:border-white focus:outline-none"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="p-2 mb-2 w-full resize-none border border-solid border-white rounded focus:border-white focus:outline-none"
            rows={6}
            maxLength={5000}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="text-right text-sm text-gray-500">
            {message.length} / 5000 characters
          </div>
        </div>
        <button className="font-migra-extrabold bg-white text-[#230d11] p-2 rounded transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white active:scale-95">
          Send Message
        </button>
      </div>
    </Section>
  );
}
