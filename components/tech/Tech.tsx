"use client";
import Image from "next/image";

export default function Tech() {
  const techStack = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "REST API", icon: "/icons/api.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ];

  return (
    <section id="tech" className="w-full bg-[var(--brand-white)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-24">

        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
          Tech Stack
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">

          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 px-4 py-3 border border-[var(--brand-border)] rounded-lg bg-[var(--brand-white)] transition-all duration-300 hover:border-[var(--brand-primary)] hover:bg-[rgba(69,153,254,0.05)]"
            >
              {/* Icon */}
              <Image
                src={tech.icon}
                alt={tech.name}
                width={20}
                height={20}
                className="object-contain"
                loading="lazy"
              />

              {/* Label */}
              <span className="text-sm md:text-base font-medium text-[var(--brand-text)]">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
