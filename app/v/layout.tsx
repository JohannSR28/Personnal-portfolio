import type { Metadata } from "next";
import { Anton, Archivo, Syne } from "next/font/google";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// Archives de design : pages cachées, non indexées.
export const metadata: Metadata = {
  title: "Johann Sourou | Archives",
  robots: { index: false, follow: false },
};

export default function VersionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${anton.variable} ${archivo.variable} ${syne.variable}`}>
      {children}
    </div>
  );
}
