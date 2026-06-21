import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamad Sechan Syadat — Software Engineer",
  description:
    "Software Engineer with 5+ years building scalable backend and full-stack systems with Laravel, Golang, Node.js, React, and Next.js. Available for on-site, hybrid, and remote roles.",
  keywords: [
    "Muhamad Sechan Syadat",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    "Laravel",
    "Next.js",
    "Golang",
    "Indonesia",
  ],
  authors: [{ name: "Muhamad Sechan Syadat" }],
  creator: "Muhamad Sechan Syadat",
  openGraph: {
    title: "Muhamad Sechan Syadat — Software Engineer",
    description:
      "Backend & full-stack engineer. 5+ years shipping scalable systems across IT, education, logistics, HR, e-commerce, and finance.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
