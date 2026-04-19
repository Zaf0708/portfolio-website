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
        <Card className="border border-[var(--brand-border)] overflow-hidden transition hover:-translate-y-1 hover:shadow-md">

          {/* Image */}
          <div className="w-[80%] justify-center h-[220px] relative">
            <Image
              src="/projects/team-desktop.png"
              alt="Team Directory"
              fill
              className="object-cover"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
              Team Directory API
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-[var(--brand-text)] mb-4">
              API-driven team directory with dynamic routing and real-time data rendering.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs px-2 py-1 rounded bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]">
                React
              </span>
              <span className="text-xs px-2 py-1 rounded bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 rounded bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]">
                TypeScript
              </span>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="text-sm font-medium text-[var(--brand-primary)] hover:underline"
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
