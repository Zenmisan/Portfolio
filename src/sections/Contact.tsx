import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SocialLinks } from '@/components/SocialLinks';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-darker to-darker" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-dark/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-sea/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary-sea uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-off-white mb-6">
              Let's Build Something{' '}
              <span className="text-primary-light">Amazing</span> Together
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Have a project in mind or want to collaborate? I'm always open to discussing 
              new opportunities, innovative ideas, and ways to bring your vision to life.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-dark/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-sea" />
                </div>
                <div>
                  <p className="text-sm text-slate">Email</p>
                  <a 
                    href="mailto:coolzire@example.com" 
                    className="text-off-white hover:text-primary-light transition-colors"
                  >
                    Zenmisan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-dark/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-sea" />
                </div>
                <div>
                  <p className="text-sm text-slate">Location</p>
                  <p className="text-off-white">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-slate mb-4">Connect with me</p>
              <SocialLinks iconSize={24} />
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 md:p-8 rounded-2xl bg-dark/50 border border-primary-dark/30 backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-sea/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-primary-sea" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-off-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-off-white mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        className="bg-darker/50 border-primary-dark/50 text-off-white placeholder:text-slate/50 focus:border-primary-sea focus:ring-primary-sea/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-off-white mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-darker/50 border-primary-dark/50 text-off-white placeholder:text-slate/50 focus:border-primary-sea focus:ring-primary-sea/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-off-white mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      required
                      className="bg-darker/50 border-primary-dark/50 text-off-white placeholder:text-slate/50 focus:border-primary-sea focus:ring-primary-sea/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-off-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="bg-darker/50 border-primary-dark/50 text-off-white placeholder:text-slate/50 focus:border-primary-sea focus:ring-primary-sea/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-sea hover:bg-primary-dark text-off-white font-medium py-3 rounded-lg transition-all duration-200 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-off-white/30 border-t-off-white rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
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
