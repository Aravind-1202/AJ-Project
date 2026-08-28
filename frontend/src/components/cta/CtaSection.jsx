import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const CtaSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#02040A] flex items-center justify-center">
      {/* Large Glowing Abstract Nebula Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-500/25 blur-[160px] rounded-full pointer-events-none -z-10 animate-glow-pulse"></div>

      {/* Subtle Concentric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full border border-violet-500/10 pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full border border-dashed border-white/5 pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>START WHAT'S NEXT</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight font-display mb-6">
          Have an idea <br />
          <span className="text-gradient-purple">worth building?</span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl mx-auto mb-10">
          Let's turn it into something people remember. Partner with an engineering &amp; design team
          obsessed with digital excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToContact}
            icon={ArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto shadow-2xl shadow-violet-600/40 hover:scale-105"
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};
