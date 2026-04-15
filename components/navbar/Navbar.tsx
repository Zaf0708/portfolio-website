"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#031E49] text-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[72px] px-6 md:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
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
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#B8CAD1]">
          {["Home", "Projects", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              className="relative transition-colors duration-300 hover:text-white focus:text-white focus:outline-none"
            >
              {item}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/50 transition"
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
          {["Home", "Projects", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base transition-colors duration-300 hover:text-white focus:text-white focus:outline-none"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
