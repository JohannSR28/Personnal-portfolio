import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

// Configuration de Fraunces
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"], // On active les axes variables pour le style
  display: "swap",
});

// Configuration de Outfit
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johann Sourou | Portfolio",
  description: "Web Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="antialiased bg-deep-wine text-soft-clay">
        {children}
      </body>
    </html>
  );
}
