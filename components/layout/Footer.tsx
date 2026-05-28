"use client";

import Link from "next/link";
import {
  GitMerge as GithubIcon,
  ExternalLink as LinkedinIcon,
  Mail,
} from "lucide-react";

const navLinks = [
  { label: "Expertise", href: "/#expertise" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Tech Stack", href: "/#tech" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const caseStudies = [
  { label: "Team Directory API", href: "/projects/team-directory-api" },
  { label: "Authentication Login Interface", href: "/projects/authentication-interface" },
  { label: "Interactive Virtual Tour", href: "/projects/interactive-virtual-tour" },
  { label: "Sponsors Showcase", href: "/projects/sponsors-showcase" },
  { label: "Courses Interface", href: "/projects/courses-interface" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[var(--brand-dark)] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-14 lg:py-16">

        {/* Top Layout — stacks on mobile, 2-col on tablet, 4-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand — full width on mobile & tablet, 1 col on desktop */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 leading-snug">
              Mohammade Zafroollah Carrimbaccus
            </h3>
            <p className="text-sm leading-7 text-[var(--brand-border)] max-w-xs">
              Front-End Developer focused on building modern, responsive, and
              user-focused digital experiences using React, Next.js, and
              TypeScript.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-4 sm:mb-5 text-[var(--brand-primary)]">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-[var(--brand-border)] transition-colors duration-200 hover:text-white w-fit"
              >
                Home
              </Link>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--brand-border)] transition-colors duration-200 hover:text-white w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Case Studies */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-4 sm:mb-5 text-[var(--brand-primary)]">
              Case Studies
            </h4>
            <nav className="flex flex-col gap-3">
              {caseStudies.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--brand-border)] transition-colors duration-200 hover:text-white w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-4 sm:mb-5 text-[var(--brand-primary)]">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 text-sm text-[var(--brand-border)] transition-colors duration-200 hover:text-white w-fit"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
              <a
                href="https://github.com/Zaf0708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--brand-border)] transition-colors duration-200 hover:text-white w-fit"
              >
                <GithubIcon size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--brand-border)] transition-colors duration-200 hover:text-white w-fit"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Divider + Bottom Bar */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-sm text-[var(--brand-border)] text-center sm:text-left">
            © 2026 Mohammade Zafroollah Carrimbaccus. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.16em] uppercase text-[var(--brand-border)]">
            Designed &amp; Developed with Next.js
          </p>
        </div>

      </div>
    </footer>
  );
}
