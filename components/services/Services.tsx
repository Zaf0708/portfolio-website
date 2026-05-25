import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <section id="services" className="w-full bg-[rgba(69,153,254,0.05)] scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-24">

        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--brand-dark)] mb-10">
          Services
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">

          {/* Card */}
          <Card className="border border-[var(--brand-border)] bg-[rgba(69,153,254,0.05)] transition hover:bg-[rgba(69,153,254,0.12)] hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                React & Next.js Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Build modern, scalable web applications using React and Next.js with a focus on performance, maintainability, and clean architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[var(--brand-border)] bg-[rgba(69,153,254,0.05)] transition hover:bg-[rgba(69,153,254,0.12)] hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                API Integration & Data Handling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Integrate REST APIs with structured data flow, efficient state management, and dynamic UI rendering.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[var(--brand-border)] bg-[rgba(69,153,254,0.05)] transition hover:bg-[rgba(69,153,254,0.12)] hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                Responsive UI Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Develop fully responsive interfaces optimized for desktop, tablet, and mobile with consistent layout behavior.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-[var(--brand-border)] bg-[rgba(69,153,254,0.05)] transition hover:bg-[rgba(69,153,254,0.12)] hover:border-[var(--brand-primary)] hover:-translate-y-1 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-[var(--brand-dark)]">
                UI Implementation from Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--brand-text)]">
                Convert Figma designs into pixel-perfect, production-ready interfaces with reusable component structure.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
