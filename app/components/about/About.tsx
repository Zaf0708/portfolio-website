"use client";

import Image from "next/image";
import { Button } from "@/app/components/ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[rgba(69,153,254,0.03)]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-24">

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
          About Me
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Left - Image */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="w-[220px] md:w-[260px] aspect-square rounded-xl overflow-hidden bg-gray-100">
              <Image
                src="/hero.png"
                alt="Profile Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-[60%]">

            {/* Intro */}
            <p className="text-sm md:text-base text-[var(--brand-text)] mb-4 leading-relaxed">
              Front-End Developer specializing in building modern, scalable web interfaces using React, Next.js, and TypeScript.
            </p>

            {/* Description */}
            <p className="text-sm md:text-base text-[var(--brand-text)] mb-6 leading-relaxed">
              I focus on developing API-driven applications, responsive UI systems, and reusable component architectures.
              My work emphasizes clean design implementation, performance optimization, and maintainability to ensure
              a seamless user experience across all devices.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-6">

              <div>
                <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                  5+
                </h3>
                <p className="text-sm text-[var(--brand-text)]">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                  Front-End
                </h3>
                <p className="text-sm text-[var(--brand-text)]">
                  Specialization
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                  API
                </h3>
                <p className="text-sm text-[var(--brand-text)]">
                  Integration Focus
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--brand-dark)]">
                  Responsive
                </h3>
                <p className="text-sm text-[var(--brand-text)]">
                  UI Development
                </p>
              </div>

            </div>

            {/* CTA */}
            <Button
              asChild
              className="
                bg-[var(--brand-primary)]
                text-white
                px-6 py-3
                text-sm font-medium
                rounded-md

                transition-all duration-300

                hover:bg-[#2F7FE0]
                hover:shadow-[0_4px_4px_rgba(0,0,0,0.1)]
              "
            >
              <a href="#contact">Get In Touch</a>
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}
