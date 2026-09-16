import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="border-b border-white/[0.08] py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Location Header */}
        <div className="mb-3 sm:mb-4 font-mono text-xs text-slate-400">
          <span>{personal.location}</span>
        </div>

        {/* Identity & Main Title */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading break-words">
            {personal.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-sky-400 font-mono leading-snug break-words">
            {personal.role} <span className="text-slate-500">|</span> <span className="text-slate-200">{personal.specialization}</span>
          </p>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed pt-1 sm:pt-2">
            {personal.bio}
          </p>
        </div>

        {/* Direct Action Buttons — Responsive Grid on Mobile, Flex on Desktop */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-center gap-2.5 sm:gap-3">
          <a
            href="/cv.pdf"
            download="Akin-David_Ireyemi_CV.pdf"
            className="btn-precision btn-precision-primary w-full sm:w-auto min-h-[44px]"
          >
            <svg
              className="h-4 w-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume</span>
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="btn-precision btn-precision-outline w-full sm:w-auto min-h-[44px]"
          >
            <svg
              className="h-4 w-4 text-sky-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact Directly</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-precision btn-precision-outline w-full sm:w-auto min-h-[44px]"
          >
            <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-precision btn-precision-outline w-full sm:w-auto min-h-[44px]"
          >
            <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
