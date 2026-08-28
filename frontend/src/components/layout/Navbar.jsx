import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X, Shield, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-2xl pointer-events-auto transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border border-slate-900/5 shadow-2xl shadow-slate-200/50 py-3 px-5 sm:px-6'
            : 'bg-white/40 backdrop-blur-md border border-slate-900/5 py-4 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-violet-600 group-hover:text-cyan-500 transition-colors"
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
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1 font-display">
                Nexa<span className="text-violet-600 font-black">Tech</span>
              </span>
            </div>
          </Link>

          {/* Center Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('estimator')}
              className="hover:text-violet-600 text-violet-700 font-semibold transition-colors cursor-pointer py-1 flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span>Estimator</span>
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="hover:text-slate-900 transition-colors cursor-pointer py-1"
            >
              Why Us
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('contact')}
              icon={ArrowRight}
              iconPosition="right"
              className="group"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-900/5 border border-slate-900/5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-900/5 flex flex-col gap-2.5 pb-2 animate-fadeIn">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-900/5 font-medium text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-900/5 font-medium text-sm"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('tech-stack')}
              className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-900/5 font-medium text-sm"
            >
              Tech Stack
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-900/5 font-medium text-sm"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('estimator')}
              className="text-left px-3 py-2 rounded-lg text-violet-700 font-bold hover:bg-violet-50 text-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              <span>Project Estimator</span>
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-900/5 font-medium text-sm"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-left px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-900/5 font-medium text-sm"
            >
              Why Us
            </button>
            <div className="pt-2 border-t border-slate-900/5 flex flex-col gap-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection('contact')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full justify-center"
              >
                Let's Talk →
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
