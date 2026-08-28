import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900/5 bg-white relative overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900/5">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-violet-600 group-hover:text-cyan-500 transition-colors"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 font-display">
                Nexa<span className="text-violet-600">Tech</span>
              </span>
            </div>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              We Build What Comes Next. Transforming visionary ideas into production-ready digital
              masterpieces with scalable engineering and intentional product design.
            </p>

            {/* Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold w-fit mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational • 99.99% Uptime SLA</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                Navigation
              </h4>
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('solutions')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('tech-stack')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Tech Stack
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('estimator')} 
                className="text-left text-sm text-violet-600 font-semibold hover:text-violet-900 transition-colors cursor-pointer"
              >
                Project Estimator
              </button>
              <button 
                onClick={() => scrollToSection('process')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('why-us')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Why Us
              </button>
            </div>

            <div className="flex flex-col gap-3 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                Capabilities
              </h4>
              <span className="text-sm text-slate-600">Digital Platforms</span>
              <span className="text-sm text-slate-600">Distributed APIs</span>
              <span className="text-sm text-slate-600">Enterprise UI/UX</span>
              <span className="text-sm text-slate-600">AI &amp; RAG Systems</span>
              <span className="text-sm text-slate-600">DevOps &amp; Cloud</span>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                Connect
              </h4>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Start a Project
              </button>

              {/* Social Icon Strip */}
              <div className="mt-2 flex items-center gap-3 text-slate-600">
                {/* GitHub */}
                <a
                  href="https://github.com/Aravind-1202/Aravind_.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/5 hover:bg-slate-900/10 hover:text-slate-900 transition-colors"
                  aria-label="GitHub Repository"
                  title="GitHub Repository"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/5 hover:bg-slate-900/10 hover:text-slate-900 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/5 hover:bg-slate-900/10 hover:text-slate-900 transition-colors"
                  aria-label="X Twitter"
                  title="Follow on X"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NexaTech Inc. All rights reserved. Technical Interview Edition.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-800 cursor-pointer">Security Center</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
