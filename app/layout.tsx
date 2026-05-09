import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohammade Zafroollah Carrimbaccus | Front-End Developer",
  description: "Front-End Developer specializing in React, Next.js, TypeScript, and responsive UI development.",
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
      </body>
    </html>
  );
}
