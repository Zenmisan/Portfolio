import { portfolioData } from '../data/portfolioData';

export const DenseColophon = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 text-xs font-mono text-slate-500 border-t border-white/[0.04]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-400">
            <span className="text-slate-200">&copy; {currentYear} {personal.name}</span>
            <span className="text-slate-600">·</span>
            <span>{personal.location}</span>
            <span className="text-slate-600">·</span>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              {personal.email}
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              github/{personal.handle}
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              linkedin/{personal.handle}
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-sky-400 transition-colors"
            >
              x/{personal.handle}
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded px-1 -mx-1"
          >
            <span>&uarr; top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
