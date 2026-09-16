import { portfolioData } from '../data/portfolioData';

export const CompetenciesMatrix = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="border-b border-white/[0.08] py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white font-heading">
            Technical Skills
          </h2>
          <div className="h-px flex-1 bg-white/[0.08]" aria-hidden="true" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-white/[0.08] bg-[#0e1219] p-4 sm:p-5"
            >
              <h3 className="font-mono text-sm font-semibold text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge-spec text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
