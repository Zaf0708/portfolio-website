import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/app/data/projects";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  return (
    <main className="w-full bg-[var(--brand-white)]">

      {/* Hero */}
      <section className="w-full border-b border-[var(--brand-border)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">

          <div className="max-w-3xl mb-8 md:mb-10">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--brand-dark)] mb-5 leading-tight">
              {project.title}
            </h1>

            <p className="text-sm md:text-base text-[var(--brand-text)] leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs sm:text-sm px-3 py-1 rounded-md bg-[rgba(69,153,254,0.1)] text-[var(--brand-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] rounded-xl overflow-hidden border border-[var(--brand-border)]">

            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
            />

          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-6">
            Overview
          </h2>

          <p className="text-sm md:text-base leading-7 text-[var(--brand-text)]">
            {project.overview}
          </p>

        </div>
      </section>

      {/* Problem */}
      <section className="w-full bg-[rgba(69,153,254,0.03)]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-6">
            Problem
          </h2>

          <p className="text-sm md:text-base leading-7 text-[var(--brand-text)]">
            {project.problem}
          </p>

        </div>
      </section>

      {/* Solution */}
      <section className="w-full">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-6">
            Solution
          </h2>

          <p className="text-sm md:text-base leading-7 text-[var(--brand-text)]">
            {project.solution}
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="w-full bg-[rgba(69,153,254,0.03)]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-8">
            Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">

            {project.features.map((feature) => (
              <div
                key={feature}
                className="border border-[var(--brand-border)] rounded-xl p-5 bg-white transition-all duration-300 hover:border-[var(--brand-primary)] hover:shadow-sm"
              >
                <p className="text-sm md:text-base text-[var(--brand-text)] leading-6">
                  {feature}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
            Interface Preview
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="border border-[var(--brand-border)] rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-md"
              >

                {/* Image */}
                <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">

                  <h3 className="text-base md:text-lg font-semibold text-[var(--brand-dark)] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base text-[var(--brand-text)] leading-relaxed">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Technologies */}
      <section className="w-full bg-[rgba(69,153,254,0.03)]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-8">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-3">

            {project.tech.map((item) => (
              <span
                key={item}
                className="text-sm px-4 py-2 rounded-md bg-white border border-[var(--brand-border)] text-[var(--brand-text)]"
              >
                {item}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* Results */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-16">

          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
            Results
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            <div className="border border-[var(--brand-border)] rounded-xl p-5 md:p-6 bg-white">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                Outcome
              </h3>

              <p className="text-sm md:text-base text-[var(--brand-text)] leading-7">
                {project.outcome}
              </p>
            </div>

            <div className="border border-[var(--brand-border)] rounded-xl p-5 md:p-6 bg-white">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                Performance
              </h3>

              <p className="text-sm md:text-base text-[var(--brand-text)] leading-7">
                {project.performance}
              </p>
            </div>

            <div className="border border-[var(--brand-border)] rounded-xl p-5 md:p-6 bg-white sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-3">
                Usability
              </h3>

              <p className="text-sm md:text-base text-[var(--brand-text)] leading-7">
                {project.usability}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Navigation */}
      <section className="w-full border-t border-[var(--brand-border)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="w-full sm:w-auto">
              {previousProject && (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="text-sm font-medium text-[var(--brand-primary)] hover:underline"
                >
                  ← Previous Project
                </Link>
              )}
            </div>

            <Link
              href="/#projects"
              className="text-sm font-medium text-[var(--brand-dark)] hover:text-[var(--brand-primary)] transition"
            >
              Back to Projects
            </Link>

            <div className="w-full sm:w-auto text-right">
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="text-sm font-medium text-[var(--brand-primary)] hover:underline"
                >
                  Next Project →
                </Link>
              )}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
