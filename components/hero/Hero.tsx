import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[var(--brand-dark)] text-[var(--brand-white)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="max-w-xl text-center md:text-left">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Front-End Developer | React • Next.js • TypeScript
            </h1>

            <p className="text-[var(--brand-border)] text-base md:text-lg mb-4">
              Building fast, scalable, and modern web interfaces with React and Next.js.
            </p>

            <p className="text-[var(--brand-border)] text-base md:text-lg mb-8">
              Front-End Developer specializing in building modern, scalable web interfaces using React, Next.js, and TypeScript. Experienced in developing API-driven applications, responsive UI systems, and reusable component architectures.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              {/* Primary Button */}
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-medium rounded-md bg-[var(--brand-primary)] text-[var(--brand-white)] transition-all duration-300 hover:bg-[#2F7FE0] hover:shadow-[0_4px_4px_rgba(0,0,0,0.1)]"
              >
                View Projects
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-medium rounded-[8px] border border-[var(--brand-border)] text-[var(--brand-white)] transition-all duration-300 hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:shadow-[0_4px_4px_rgba(0,0,0,0.1)]"
              >
                Contact Me
              </a>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[45%] flex justify-center">
            <Image
              src="/hero.png"
              alt="Hero"
              width={500}
              height={400}
              className="w-full max-w-[420px] h-auto object-contain rounded-[12px]"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
