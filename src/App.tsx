import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { CompetenciesMatrix } from './sections/CompetenciesMatrix';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { DenseColophon } from './components/DenseColophon';

export function App() {
  return (
    <div className="min-h-screen bg-[#090b0e] text-[#f1f5f9] selection:bg-sky-500/25 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CompetenciesMatrix />
        <ProjectsSection />
        <EducationSection />
      </main>
      <DenseColophon />
    </div>
  );
}

export default App;
