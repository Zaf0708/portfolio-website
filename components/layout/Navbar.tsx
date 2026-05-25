"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
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
  {
    label: "Team Directory API",
    href: "/projects/team-directory-api",
  },
  {
    label: "Authentication Login Interface",
    href: "/projects/authentication-interface",
  },
  {
    label: "Interactive Virtual Tour",
    href: "/projects/interactive-virtual-tour",
  },
  {
    label: "Sponsors Showcase",
    href: "/projects/sponsors-showcase",
  },
  {
    label: "Courses Interface",
    href: "/projects/courses-interface",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const linkRefs = useRef<
    Record<
      string,
      HTMLAnchorElement | HTMLButtonElement | null
    >
  >({});

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const defaultItem = "Projects";

    const activeEl = linkRefs.current[defaultItem];
    const parentRect =
      navRef.current?.getBoundingClientRect();

    if (!activeEl || !parentRect) return;

    const rect = activeEl.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, []);

  const handleMouseEnter = (item: string) => {
    const el = linkRefs.current[item];
    const parentRect =
      navRef.current?.getBoundingClientRect();

    if (!el || !parentRect) return;

    const rect = el.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--brand-dark)]/95 backdrop-blur-xl">

      <div className="max-w-[1200px] mx-auto h-[72px] px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Homepage"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop + Tablet Navigation */}
        <div
          ref={navRef}
          className="relative hidden md:flex items-center gap-6 lg:gap-8"
        >
          <Link
            href="/"
            ref={(el) => {
              linkRefs.current["Home"] = el;
            }}
            onMouseEnter={() =>
              handleMouseEnter("Home")
            }
            className="text-sm text-[var(--brand-border)] hover:text-white transition"
          >
            Home
          </Link>

          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.label] = el;
              }}
              onMouseEnter={() =>
                handleMouseEnter(item.label)
              }
              className="text-sm text-[var(--brand-border)] hover:text-white transition whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}

          {/* Case Studies Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() =>
              handleMouseEnter("Case Studies")
            }
          >
            <button
              ref={(el) => {
                linkRefs.current["Case Studies"] = el;
              }}
              className="flex items-center gap-1 text-sm text-[var(--brand-border)] hover:text-white transition"
            >
              Case Studies
              <ChevronDown size={16} />
            </button>

            {/* Dropdown */}
            <div className="absolute left-0 top-full pt-5 opacity-0 invisible translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">

              <div className="w-[320px] rounded-2xl border border-white/10 bg-[rgba(15,23,42,0.96)] shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-3 backdrop-blur-xl">

                <div className="mb-2 px-3 pt-1">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-primary)]">
                    Featured Case Studies
                  </p>
                </div>

                {caseStudies.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-[var(--brand-border)] hover:bg-white/5 hover:text-white transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                ))}

              </div>

            </div>
          </div>

          {/* Animated Underline */}
          <span
            className="absolute bottom-[-8px] h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              opacity: underlineStyle.opacity,
            }}
          />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-[var(--brand-border)] hover:text-white transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#0B1120] border-t border-white/10 px-6 py-6">

          <div className="flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-base text-[var(--brand-border)] hover:text-white transition"
            >
              Home
            </Link>

            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-[var(--brand-border)] hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-6" />

          {/* Case Studies */}
          <div className="flex flex-col gap-3">

            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--brand-primary)]">
              Case Studies
            </p>

            {caseStudies.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--brand-border)] hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

          </div>
        </nav>
      </div>
    </header>
  );
}
