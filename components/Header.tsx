"use client";

import React from "react";

const iconeStyle =
  "text-white no-underline text-2xl max-sm:text-xl p-2 max-sm:p-1 rounded-lg transition-colors duration-300 hover:bg-white/10 hover:text-white";

const iconInfo = {
  home: {
    href: "#about-me",
    iconClass: "bi bi-house-door",
  },
  stack: { href: "#tech-stack", iconClass: "bi bi-layers" },
  projects: {
    href: "#projects",
    iconClass: "bi bi-folder",
  },
  contact: {
    href: "#contact",
    iconClass: "bi bi-envelope",
  },
};

export default function Header() {
  // custom function to handle smooth scrolling with offset
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 64; // header height in px (adjust if needed)
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] h-header max-sm:h-header-mobile flex items-center justify-between px-2.5 py-2 text-xl max-sm:text-lg border-b border-white/20 bg-transparent backdrop-blur-md header-blur">
      <div className="h-full flex items-center px-2">Johann Sourou</div>

      <nav className="h-full flex items-center">
        <ul className="flex gap-2 px-2 py-1">
          {Object.entries(iconInfo).map(([key, { href, iconClass }]) => (
            <li key={key}>
              <a
                href={href}
                className={iconeStyle}
                onClick={(e) => handleScroll(e, href)}
              >
                <i className={iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
