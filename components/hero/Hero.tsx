import Image from "next/image";


export default function Hero() {
  return (
    <section className="w-full bg-[#031E49] text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

  {/* Left Content */}
  <div className="max-w-xl">
    <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
      Front-End Developer | React • Next.js • TypeScript
    </h1>

    <p className="text-[#B8CAD1] text-base md:text-lg mb-6">
      Building fast, scalable, and modern web interfaces with React and Next.js.</p>
    <p className="text-[#B8CAD1] text-base md:text-lg mb-6">
      Front-End Developer specializing in building modern, scalable web interfaces using React, Next.js, and TypeScript. Experienced in developing API-driven applications, responsive UI systems, and reusable component architectures that deliver fast, maintainable, and user-focused web experiences.</p>
  <div className="flex gap-4 flex-wrap">


  {/* Primary */}
  <a
    href="#projects"
    className="bg-[#4599FE] text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
  >
    View Projects
  </a>

  {/* Secondary */}
  <a
    href="#contact"
    className="border border-[#B8CAD1] text-[#B8CAD1] px-6 py-3 rounded-md text-sm font-medium hover:text-white hover:border-white transition"
  >
    Contact Me
  </a>

</div>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-[45%]">
    <Image
    src="/hero.png"
    alt="Hero"
    width={500}
    height={400}
    className="w-full h-auto object-contain"
/>
  </div>

</div>
      </div>
    </section>
  );
}
