import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://zafroollah.is-a.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",

  description:
    "Front-End Developer specialising in React, Next.js, TypeScript and modern web applications. Explore professional case studies, responsive interfaces and production-ready solutions.",

  keywords: [
    "Front-End Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Responsive Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Mohammade Zafroollah Carrimbaccus",
    },
  ],

  creator: "Mohammade Zafroollah Carrimbaccus",

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",
    description:
      "Front-End Developer specialising in React, Next.js, TypeScript and modern web applications. Explore professional case studies, responsive interfaces and production-ready solutions.",
    siteName: "Zafroollah Carrimbaccus — Front-End Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammade Zafroollah Carrimbaccus — Front-End Developer",
      },
    ],
    locale: "en_AU",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",
    description:
      "Front-End Developer specialising in React, Next.js, TypeScript and modern web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
