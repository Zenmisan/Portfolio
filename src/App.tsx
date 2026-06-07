import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { InteractiveProjects } from '@/components/InteractiveProjects';
import { Experience } from '@/sections/Experience';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { Loader } from '@/components/Loader';
import { ThemeProvider } from '@/hooks/useTheme';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-darker text-off-white selection:bg-primary-sea selection:text-white">
        {!isLoaded && <Loader onComplete={() => setIsLoaded(true)} />}
        
        {isLoaded && (
          <>
            <Navigation />
            <main>
              <Hero />
              <About />
              <InteractiveProjects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
