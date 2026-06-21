import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zafroollah.is-a.dev"),

  title: {
    default: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",
    template: "%s | Mohammade Zafroollah Carrimbaccus",
  },

  description:
    "Front-End Developer specialising in React, Next.js, TypeScript and modern web applications. Explore professional case studies, responsive interfaces and production-ready solutions.",

  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Australia",
    "Portfolio",
    "UI Developer",
    "Responsive Web Design",
    "Case Studies",
  ],

  authors: [
    {
      name: "Mohammade Zafroollah Carrimbaccus",
    },
  ],

  creator: "Mohammade Zafroollah Carrimbaccus",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",

    description:
      "Professional portfolio showcasing React, Next.js and TypeScript projects, case studies and modern front-end development solutions.",

    url: "https://zafroollah.is-a.dev",

    siteName: "Zafroollah Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammade Zafroollah Carrimbaccus Portfolio",
      },
    ],

    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",

    description:
      "Professional portfolio showcasing React, Next.js and TypeScript projects, case studies and modern front-end development solutions.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="bg-[var(--brand-white)] text-[var(--brand-text)] antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
