"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[var(--dark)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">


        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Frontend Developer Logo"
            width={120}
            height={40}
            className="h-14 w-auto object-contain brightness-0 invert opacity-90"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--border)] transition-colors duration-300 hover:text-[var(--white)]" // ✅ UPDATED
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="inline-flex items-center justify-center p-2 text-[var(--border)] hover:opacity-70 transition"> {/* ✅ CHANGED */}
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[80%] sm:w-[350px] bg-[var(--dark)] text-[var(--border)]" // ✅ CHANGED
            >
              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-[var(--border)] hover:text-[var(--white)] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
