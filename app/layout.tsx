import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johann Sourou Portfolio",
  description: "Johann Sourou - Web Developer Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-migra text-white min-h-screen relative m-0 pb-30">
        {children}
      </body>
    </html>
  );
}
