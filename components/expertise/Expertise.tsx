"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Expertise() {
  return (
    <section id="expertise" className="w-full bg-[var(--brand-white)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
          Expertise
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Card className="border border-[var(--brand-border)] transition hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                Front-End Development
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Building modern web interfaces using React and Next.js with scalable architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[var(--brand-border)] transition hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                API Integration
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Developing data-driven interfaces by integrating REST APIs with efficient data handling and state management.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[var(--brand-border)] transition hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                Responsive UI Implementation
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Creating fully responsive layouts that adapt seamlessly across desktop, tablet, and mobile devices.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[var(--brand-border)] transition hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                Component Architecture
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Designing reusable and scalable UI components to ensure consistency and efficient development.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
