import { notFound } from "next/navigation";
import Image from "next/image";

import { projects } from "@/app/data/projects";

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-[var(--brand-white)]">

      {/* Hero Section */}
      <section className="w-full border-b border-[var(--brand-border)]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-24">

          <div className="max-w-3xl mb-10">

            <h1 className="text-3xl md:text-5xl font-semibold text-[var(--brand-dark)] mb-5 leading-tight">
              {project.title}
            </h1>

            <p className="text-sm md:text-base text-[var(--brand-text)] leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">

              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[240px] sm:h-[360px] md:h-[520px] rounded-xl overflow-hidden border border-[var(--brand-border)]">

            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />

          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-20">

          <div className="max-w-3xl">

            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-6">
              Project Overview
            </h2>

            <p className="text-sm md:text-base text-[var(--brand-text)] leading-relaxed">
              {project.overview}
            </p>

          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="w-full bg-[rgba(69,153,254,0.03)]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
            Interface Preview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] rounded-xl overflow-hidden border border-[var(--brand-border)] bg-white"
              >
                <Image
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Results */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 py-16 md:py-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
            Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Outcome */}
            <div className="border border-[var(--brand-border)] rounded-xl p-6 bg-white">

              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                Outcome
              </h3>

              <p className="text-sm text-[var(--brand-text)] leading-relaxed">
                {project.outcome}
              </p>

            </div>

            {/* Performance */}
            <div className="border border-[var(--brand-border)] rounded-xl p-6 bg-white">

              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                Performance
              </h3>

              <p className="text-sm text-[var(--brand-text)] leading-relaxed">
                {project.performance}
              </p>

            </div>

            {/* Usability */}
            <div className="border border-[var(--brand-border)] rounded-xl p-6 bg-white">

              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                Usability
              </h3>

              <p className="text-sm text-[var(--brand-text)] leading-relaxed">
                {project.usability}
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
