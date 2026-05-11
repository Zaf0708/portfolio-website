"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = ["home", "projects", "services", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navRef = useRef<HTMLDivElement>(null);

  // refs inside component
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        threshold: 0.6,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Move underline (NO querySelector)
  useEffect(() => {
    const activeEl = linkRefs.current[active];
    const parentRect = navRef.current?.getBoundingClientRect();

    if (activeEl && parentRect) {
      const rect = activeEl.getBoundingClientRect();

      setUnderlineStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  }, [active]);

  // Hover override
  const handleMouseEnter = (item: string) => {
    const el = linkRefs.current[item];
    const parentRect = navRef.current?.getBoundingClientRect();

    if (!el || !parentRect) return;

    const rect = el.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    const activeEl = linkRefs.current[active];
    const parentRect = navRef.current?.getBoundingClientRect();

    if (!activeEl || !parentRect) return;

    const rect = activeEl.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  return (
    <header className="w-full bg-[var(--brand-dark)] text-[var(--brand-white)] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px] px-6 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Homepage"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div
          ref={navRef}
          onMouseLeave={handleMouseLeave}
          className="relative hidden md:flex items-center gap-8 text-[14px] text-[var(--brand-border)]"
        >
          {links.map((item) => {
            const isActive = active === item;

            return (
              <Link
                key={item}
                ref={(el) => {
                  linkRefs.current[item] = el;
                }}
                href={item === "home" ? "/" : `#${item}`}
                onMouseEnter={() => handleMouseEnter(item)}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--brand-white)]"
                    : "hover:text-[var(--brand-white)]"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            );
          })}

          {/* Floating Underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-[var(--brand-white)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              opacity: underlineStyle.opacity,
            }}
          />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-[var(--brand-border)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 flex flex-col gap-5 text-[var(--brand-border)] bg-[var(--brand-dark)]">
          {links.map((item) => (
            <Link
              key={item}
              href={item === "home" ? "/" : `#${item}`}
              onClick={() => setOpen(false)}
              className={`text-base ${
                active === item
                  ? "text-[var(--brand-white)]"
                  : "hover:text-[var(--brand-white)]"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
