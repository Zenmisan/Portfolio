import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { StatCard } from '@/components/StatCard';
import { skillCategories, softSkills } from '@/data/skills';
import { stats } from '@/data/experience';
import { Code2, Lightbulb, Users, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative section-padding bg-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #9EC5AB 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary-sea uppercase tracking-wider mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-off-white leading-tight">
              Ardent About Building the{' '}
              <span className="text-primary-light">Future of Tech</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4 text-slate leading-relaxed">
              <p>
                I'm <strong className="text-off-white">Akin-David Ireyemi</strong>, a Fullstack Developer and Industrial 
                Mathematics student at the University of Lagos. My unique blend of mathematical rigor and 
                software engineering allows me to approach problems with analytical precision while delivering 
                elegant solutions.
              </p>
              <p>
                With a specific focus on <span className="text-primary-light">FinTech</span>,{' '}
                <span className="text-primary-light">Investment Banking</span>, and{' '}
                <span className="text-primary-light">Web3</span>, I've developed complex tools ranging from 
                academic management systems to blockchain-based scholarship platforms.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Technical Skills */}
          <ScrollReveal delay={0.2}>
            <h3 className="text-xl font-bold font-heading text-off-white mb-6 flex items-center gap-3">
              <Code2 className="w-5 h-5 text-primary-sea" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h4 className="text-sm font-mono text-slate uppercase tracking-wider mb-3">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-primary-dark/30 text-primary-light border border-primary-dark/30 hover:border-primary-sea/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Soft Skills & Traits */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-8">
              {/* Soft Skills */}
              <div>
                <h3 className="text-xl font-bold font-heading text-off-white mb-6 flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-sea" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="px-4 py-2 text-sm rounded-full bg-dark/50 text-off-white border border-primary-dark/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Core Strengths */}
              <div>
                <h3 className="text-xl font-bold font-heading text-off-white mb-6 flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-primary-sea" />
                  Core Strengths
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, label: 'Problem Solving', desc: 'Analytical approach' },
                    { icon: Code2, label: 'Clean Code', desc: 'Maintainable solutions' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="p-4 rounded-xl bg-dark/50 border border-primary-dark/30"
                    >
                      <item.icon className="w-5 h-5 text-primary-sea mb-2" />
                      <h4 className="text-sm font-medium text-off-white">{item.label}</h4>
                      <p className="text-xs text-slate">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
