import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[var(--brand-white)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-24">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-8 md:mb-10">
          Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

          {/* Card */}
          {[
            {
              title: "Team Directory API",
              img: "/projects/team-desktop.png",
              desc: "API-driven team directory with dynamic routing and real-time data rendering.",
              tags: ["React", "Next.js", "TypeScript"],
            },
            {
              title: "Authentication Interface",
              img: "/projects/auth-desktop.png",
              desc: "Secure login interface with API validation, error handling, and clean user experience flow.",
              tags: ["React", "Next.js", "API", "Auth"],
            },
            {
              title: "Interactive Virtual Tour",
              img: "/projects/virtual-desktop.png",
              desc: "Interactive UI experience with smooth navigation and user-focused visual flow.",
              tags: ["React", "UI/UX", "Interaction"],
            },
            {
              title: "Sponsors Showcase",
              img: "/projects/sponsors-desktop.png",
              desc: "Responsive sponsor layout with structured grid system and consistent alignment across devices.",
              tags: ["Responsive", "Grid", "Layout"],
            },
            {
              title: "Courses Interface",
              img: "/projects/courses-desktop.png",
              desc: "Dynamic course listing with adaptive tag positioning and clean card-based layout system.",
              tags: ["React", "UI Logic", "Tags"],
            },
          ].map((project) => (
            <Card
              key={project.title}
              className="border border-[var(--brand-border)] rounded-xl overflow-hidden bg-[var(--brand-white)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Image */}
              <div className="p-3 md:p-4">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pt-0 px-4 md:px-5">
                <CardTitle className="text-base md:text-lg font-semibold text-[var(--brand-dark)]">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="px-4 md:px-5 pb-4 md:pb-5">
                <p className="text-sm text-[var(--brand-text)] mb-3 md:mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] md:text-xs px-2 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-block text-sm font-medium text-[var(--brand-primary)] transition-all duration-300 hover:underline hover:translate-x-1"
                >
                  View Case Study →
                </a>
              </CardContent>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}
