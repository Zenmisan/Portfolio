import { portfolioData } from '../data/portfolioData';

export const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="border-b border-white/[0.08] py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white font-heading">
            Education
          </h2>
          <div className="h-px flex-1 bg-white/[0.08]" aria-hidden="true" />
        </div>

        <article className="rounded-lg border border-white/[0.08] bg-[#0e1219] p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-4 mb-4">
            <div>
              <h3 className="text-xl font-bold font-heading text-white">
                {education.degree}
              </h3>
              <p className="text-sm font-medium text-sky-400 mt-1">
                {education.institution} <span className="text-slate-500">|</span> <span className="text-slate-300">{education.location}</span>
              </p>
            </div>

            <div className="font-mono text-xs text-slate-400 whitespace-nowrap">
              {education.period}
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-1">
                Focus:
              </span>
              <p className="leading-relaxed text-slate-300">
                {education.focus}
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-2">
                Relevant Coursework:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="badge-spec text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
