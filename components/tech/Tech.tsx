"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 ">

          {techStack.map((tech) => (
            <Card
              key={tech.name}
              className="
                border border-[var(--brand-border)]
                bg-[var(--brand-white)]
                rounded-lg
                transition-all duration-300 ease-out
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                hover:shadow-md
                hover:border-[var(--brand-primary)]
                hover:bg-[rgba(69,153,254,0.05)]
              "
            >
              <CardContent className="flex items-center gap-3 px-4 py-3">

                {/* Icon Badge */}
                <div
                  className="
                    flex items-center justify-center
                    w-9 h-9 rounded-md
                    bg-[rgba(69,153,254,0.1)]
                    transition-all duration-300
                    group-hover:bg-[var(--brand-primary)]
                    group-hover:shadow-[0_4px_10px_rgba(69,153,254,0.3)]
                  "
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={18}
                    height={18}
                    className="
                      object-contain
                      transition-all duration-300
                      group-hover:brightness-0 group-hover:invert
                    "
                    loading="lazy"
                  />
                </div>

                {/* Label */}
                <span
                  className="
                    text-sm md:text-base font-medium text-[var(--brand-text)]
                    transition-colors duration-300
                    group-hover:text-[var(--brand-primary)]
                  "
                >
                  {tech.name}
                </span>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}
