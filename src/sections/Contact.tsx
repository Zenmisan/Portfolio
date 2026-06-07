import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SocialLinks } from '@/components/SocialLinks';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/hooks/useTheme';

export function Contact() {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={`relative section-padding overflow-hidden transition-colors duration-700 ${
      isFuturistic ? 'bg-darker' : 'bg-white'
    }`}>
      {/* Background Decor */}
      {isFuturistic ? (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-sea/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-dark/10 rounded-full blur-3xl" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-[0.02]">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#14213D_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Info */}
          <ScrollReveal>
            <span className={`inline-block text-xs font-mono uppercase tracking-[0.2em] mb-4 ${
              isFuturistic ? 'text-primary-sea' : 'text-slate'
            }`}>
              Contact
            </span>
            <h2 className={`text-4xl sm:text-5xl font-bold font-heading mb-8 leading-tight ${
              isFuturistic ? 'text-off-white' : 'text-darker'
            }`}>
              Let's solve some{' '}
              <span className="text-primary-sea italic">real</span> problems.
            </h2>
            <p className="text-slate text-lg leading-relaxed mb-10 max-w-xl">
              I'm always looking for ambitious projects that require careful engineering and 
              mathematical precision. If you want something built right, let's talk.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                  isFuturistic ? 'bg-primary-dark/40 border-primary-light/10 text-primary-sea' : 'bg-off-white border-primary-dark/5 text-primary-dark shadow-sm'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-slate mb-1">Email</p>
                  <a 
                    href="mailto:Zenmisan@gmail.com" 
                    className={`text-lg font-medium transition-colors ${
                      isFuturistic ? 'text-off-white hover:text-primary-light' : 'text-darker hover:text-primary-sea'
                    }`}
                  >
                    Zenmisan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                  isFuturistic ? 'bg-primary-dark/40 border-primary-light/10 text-primary-sea' : 'bg-off-white border-primary-dark/5 text-primary-dark shadow-sm'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-slate mb-1">Base</p>
                  <p className={`text-lg font-medium ${isFuturistic ? 'text-off-white' : 'text-darker'}`}>
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-slate mb-6">Socials</p>
              <SocialLinks iconSize={20} />
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal delay={0.2}>
            <div className={`p-8 md:p-10 rounded-[2rem] border transition-all duration-500 ${
              isFuturistic 
                ? 'bg-primary-dark/20 border-primary-light/10 backdrop-blur-md' 
                : 'bg-white border-primary-dark/5 shadow-2xl shadow-primary-dark/10'
            }`}>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                    isFuturistic ? 'bg-primary-sea/20 text-primary-sea' : 'bg-primary-sea text-white'
                  }`}>
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className={`text-2xl font-bold font-heading mb-3 ${isFuturistic ? 'text-off-white' : 'text-darker'}`}>
                    Transmission Received
                  </h3>
                  <p className="text-slate">
                    I'll review your inquiry and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className={`text-xs font-mono uppercase tracking-widest ${isFuturistic ? 'text-slate' : 'text-darker'}`}>
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="E.g. Elon Musk"
                        required
                        className={`h-12 transition-all duration-300 ${
                          isFuturistic 
                            ? 'bg-darker/50 border-primary-light/10 text-off-white placeholder:text-slate/30' 
                            : 'bg-off-white/50 border-primary-dark/5 text-darker placeholder:text-charcoal/30'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={`text-xs font-mono uppercase tracking-widest ${isFuturistic ? 'text-slate' : 'text-darker'}`}>
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@domain.com"
                        required
                        className={`h-12 transition-all duration-300 ${
                          isFuturistic 
                            ? 'bg-darker/50 border-primary-light/10 text-off-white placeholder:text-slate/30' 
                            : 'bg-off-white/50 border-primary-dark/5 text-darker placeholder:text-charcoal/30'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className={`text-xs font-mono uppercase tracking-widest ${isFuturistic ? 'text-slate' : 'text-darker'}`}>
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about the problem we need to solve..."
                      required
                      rows={4}
                      className={`transition-all duration-300 ${
                        isFuturistic 
                          ? 'bg-darker/50 border-primary-light/10 text-off-white placeholder:text-slate/30' 
                          : 'bg-off-white/50 border-primary-dark/5 text-darker placeholder:text-charcoal/30'
                      }`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-14 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                      isFuturistic 
                        ? 'bg-primary-sea hover:bg-primary-sea/80 text-white shadow-glow' 
                        : 'bg-darker hover:bg-primary-dark text-white shadow-lg shadow-darker/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Send className="w-4 h-4" />
                        Initiate Contact
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

