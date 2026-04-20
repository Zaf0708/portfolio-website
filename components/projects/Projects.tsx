import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[var(--brand-white)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-24">

        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-[var(--brand-border)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-[var(--brand-white)]">

            {/* Image Wrapper */}
            <div className="p-4">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/projects/team-desktop.png"
                  alt="Team Directory"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <CardHeader className="pt-0 px-5">
              <CardTitle className="text-lg font-semibold text-[var(--brand-dark)]">
                Team Directory API
              </CardTitle>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <p className="text-sm text-[var(--brand-text)] mb-4 leading-relaxed">
                API-driven team directory with dynamic routing and real-time data rendering.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "TypeScript"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
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

          <Card className="border border-[var(--brand-border)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-[var(--brand-white)]">

            {/* Image Wrapper */}
            <div className="p-4">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/projects/auth-desktop.png"
                  alt="Authentication Interface"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <CardHeader className="pt-0 px-5">
              <CardTitle className="text-lg font-semibold text-[var(--brand-dark)]">
                Authentication Interface
              </CardTitle>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <p className="text-sm text-[var(--brand-text)] mb-4 leading-relaxed">
                Secure login interface with API validation, error handling, and clean user experience flow.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Next.js", "API", "Auth"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
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

          <Card className="border border-[var(--brand-border)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-[var(--brand-white)]">

            {/* Image Wrapper */}
            <div className="p-4">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/projects/virtual-desktop.png"
                  alt="Virtual Tour"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <CardHeader className="pt-0 px-5">
              <CardTitle className="text-lg font-semibold text-[var(--brand-dark)]">
                Interactive Virtual Tour
              </CardTitle>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <p className="text-sm text-[var(--brand-text)] mb-4 leading-relaxed">
                Interactive UI experience with smooth navigation and user-focused visual flow.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "UI/UX", "Interaction"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
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

          <Card className="border border-[var(--brand-border)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-[var(--brand-white)]">

            {/* Image Wrapper */}
            <div className="p-4">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/projects/sponsors-desktop.png"
                  alt="Sponsors Showcase"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <CardHeader className="pt-0 px-5">
              <CardTitle className="text-lg font-semibold text-[var(--brand-dark)]">
                Sponsors Showcase
              </CardTitle>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <p className="text-sm text-[var(--brand-text)] mb-4 leading-relaxed">
                Responsive sponsor layout with structured grid system and consistent alignment across devices.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["Responsive", "Grid", "Layout"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
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

          <Card className="border border-[var(--brand-border)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-[var(--brand-white)]">

            {/* Image Wrapper */}
            <div className="p-4">
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/projects/courses-desktop.png"
                  alt="Courses Interface"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <CardHeader className="pt-0 px-5">
              <CardTitle className="text-lg font-semibold text-[var(--brand-dark)]">
                Courses Interface
              </CardTitle>
            </CardHeader>

            <CardContent className="px-5 pb-5">
              <p className="text-sm text-[var(--brand-text)] mb-4 leading-relaxed">
                Dynamic course listing with adaptive tag positioning and clean card-based layout system.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "UI Logic", "Tags"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
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

        </div>

      </div>
    </section>
  );
}
