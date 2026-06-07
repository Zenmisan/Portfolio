import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Code2, Coffee, Zap, Heart, Layout, Gauge, Code, Link as LinkIcon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { SectionTitle } from '@/components/SectionTitle';

export function About() {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';

  const principles = [
    { icon: Code2, title: "Deterministic Logic", description: "Clean, maintainable code rooted in mathematical precision." },
    { icon: Coffee, title: "Obsessive Detail", description: "Pixel-perfect implementation where every interaction is intentional." },
    { icon: Zap, title: "Fault Tolerance", description: "Systems designed to handle the unexpected without breaking." },
    { icon: Heart, title: "User-Centric Design", description: "Building tools that solve real human problems efficiently." }
  ];

  const services = [
    { icon: Layout, title: "UI/UX Engineering", description: "Intuitive interfaces that balance aesthetic beauty with deep functionality." },
    { icon: Gauge, title: "System Optimization", description: "Fine-tuning performance to ensure lightning-fast load times and execution." },
    { icon: Code, title: "Architecture Design", description: "Scalable component structures that evolve alongside your project." },
    { icon: LinkIcon, title: "Integration Services", description: "Seamlessly connecting complex APIs and decentralized protocols." }
  ];

  return (
    <div id="about" className="flex flex-col lg:flex-row w-full overflow-hidden border-t border-primary-light/10">
      {/* WHO AM I Section */}
      <section className={`w-full lg:w-1/2 py-24 px-6 sm:px-12 flex flex-col justify-center transition-colors duration-700 ${
        isFuturistic ? 'bg-dark' : 'bg-white'
      }`}>
        <div className="max-w-xl mx-auto lg:mr-0 lg:ml-auto w-full">
          <SectionTitle text="WHO AM I?" />

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate leading-relaxed mb-12 font-body text-center">
              I am a Fullstack Engineer who bridges the gap between 
              <span className="text-primary-sea font-bold mx-1">Industrial Mathematics</span> 
              and robust software systems. I don't just write code; I design systems that resolve 
              complexity into simple, elegant outcomes.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {principles.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.3 + index * 0.1}>
                <div className="group flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-lg transition-all duration-300 ${
                    isFuturistic ? 'bg-primary-dark/50 text-primary-sea group-hover:bg-primary-sea group-hover:text-white' : 'bg-off-white text-primary-sea group-hover:bg-primary-sea group-hover:text-white'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold mb-1 ${isFuturistic ? 'text-off-white' : 'text-darker'}`}>{item.title}</h3>
                    <p className="text-sm text-slate">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO Section */}
      <section className={`w-full lg:w-1/2 py-24 px-6 sm:px-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-primary-light/10 transition-colors duration-700 ${
        isFuturistic ? 'bg-darker' : 'bg-off-white/20'
      }`}>
        <div className="max-w-xl mx-auto lg:ml-0 lg:mr-auto w-full">
          <SectionTitle text="WHAT I DO" />

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-slate leading-relaxed mb-12 font-body text-center">
              Specializing in <span className="text-primary-sea font-bold mx-1">Scalable Web Architectures</span> 
              and <span className="text-primary-sea font-bold mx-1">FinTech solutions</span>. 
              My focus is on creating value through technical excellence and intentional design.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.3 + index * 0.1}>
                <div className={`p-6 rounded-2xl border transition-all duration-300 group ${
                  isFuturistic ? 'bg-primary-dark/10 border-primary-light/5 hover:border-primary-sea/30' : 'bg-white border-primary-dark/5 hover:shadow-xl hover:shadow-primary-dark/5'
                }`}>
                  <item.icon className="w-8 h-8 text-primary-sea mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className={`text-base font-bold mb-2 ${isFuturistic ? 'text-off-white' : 'text-darker'}`}>{item.title}</h3>
                  <p className="text-xs text-slate leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
