"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--brand-border)] bg-[var(--brand-white)]">

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-6 sm:py-8">

        {/* Main Footer Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6">

          {/* Left Side — Branding */}
          <div className="text-center md:text-left">

            <p className="text-sm md:text-base font-medium text-[var(--brand-dark)] mb-1">
              Mohammade Zafroollah Carrimbaccus
            </p>

            <p className="text-xs sm:text-sm text-[var(--brand-text)]">
              Front-End Developer • React • Next.js • TypeScript
            </p>

          </div>

          {/* Right Side — Navigation + Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

            {/* Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-sm">

              <a
                href="#about"
                className="text-[var(--brand-text)] transition-all duration-300 hover:text-[var(--brand-primary)]"
              >
                About
              </a>

              <a
                href="#projects"
                className="text-[var(--brand-text)] transition-all duration-300 hover:text-[var(--brand-primary)]"
              >
                Projects
              </a>

              <a
                href="#services"
                className="text-[var(--brand-text)] transition-all duration-300 hover:text-[var(--brand-primary)]"
              >
                Services
              </a>

              <a
                href="#contact"
                className="text-[var(--brand-text)] transition-all duration-300 hover:text-[var(--brand-primary)]"
              >
                Contact
              </a>

            </div>

            {/* Divider Desktop */}
            <div className="hidden sm:block w-px h-4 bg-[var(--brand-border)]" />

            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm">

              <a
                href="https://github.com/Zaf0708"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] transition-all duration-300 hover:text-[var(--brand-primary)]"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-text)] transition-all duration-300 hover:text-[var(--brand-primary)]"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-6 pt-6 border-t border-[rgba(184,202,209,0.5)] text-center">

          <p className="text-xs sm:text-sm text-[var(--brand-text)]">
            © 2026 Zafroollah. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
