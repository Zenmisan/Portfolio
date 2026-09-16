import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { education } = portfolioData;

  return (
    <section id="about" className="border-b border-white/[0.08] py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white font-heading">
            About Me
          </h2>
          <div className="h-px flex-1 bg-white/[0.08]" aria-hidden="true" />
        </div>

        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            I am a self-taught Full-Stack Software Engineer with a deep focus on backend development, databases, and APIs. I enjoy digging into the internals of systems, optimizing data flows, and building reliable applications.
          </p>
          <p>
            Alongside programming, I am currently studying <strong className="text-white font-medium">{education.degree}</strong> at the <strong className="text-white font-medium">{education.institution}</strong>. This provides me with a strong analytical foundation in linear algebra, statistics, discrete mathematics, and algorithmic problem-solving.
          </p>
          <p className="text-slate-400 text-sm">
            I work primarily across Python, TypeScript, SQL, and modern frameworks like FastAPI, Express, React, and Next.js, and I continuously expand my skillset into systems programming with Rust and smart contracts.
          </p>
        </div>
      </div>
    </section>
  );
};
