"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = ["Home", "Projects", "Services", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Floating underline state
  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navRef = useRef<HTMLDivElement>(null);

  // Handle hover
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parentRect = navRef.current?.getBoundingClientRect();

    if (!parentRect) return;

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setUnderlineStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <header className="w-full bg-[#031E49] text-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px] px-6 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center rounded">
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
          className="relative hidden md:flex items-center gap-8 text-[14px] text-[#B8CAD1]"
          onMouseLeave={handleMouseLeave}
        >
          {links.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              onMouseEnter={handleMouseEnter}
              className="transition-colors duration-300 hover:text-white"
            >
              {item}
            </Link>
          ))}

          {/* Floating Underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
              opacity: underlineStyle.opacity,
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2  transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pb-6 flex flex-col gap-5 text-[#B8CAD1]">
          {links.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base transition-colors duration-300 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
