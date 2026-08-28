import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Compass, PenTool, Terminal, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';

export const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Understand the business, users and goals.',
      icon: Compass,
      description:
        'We deep dive into your product thesis, audience ergonomics, technical constraints, and competitive benchmarks to architect a concrete execution roadmap.',
      deliverables: ['Architecture Blueprint', 'User Journey Maps', 'Technical Feasibility Spec'],
    },
    {
      num: '02',
      title: 'Design',
      tagline: 'Turn ideas into intuitive experiences.',
      icon: PenTool,
      description:
        'We forge high-fidelity visual design systems, interactive prototypes, and fluid micro-interactions that balance aesthetic wonder with ergonomic clarity.',
      deliverables: ['Figma Design System', 'Interactive Prototypes', 'Motion & UX Guidelines'],
    },
    {
      num: '03',
      title: 'Build',
      tagline: 'Engineer the product with scalable technology.',
      icon: Terminal,
      description:
        'Our engineers craft clean, typed, modular code with automated CI/CD pipelines, comprehensive testing, and battle-tested cloud backends.',
      deliverables: ['Production Codebase', 'REST / GraphQL APIs', 'Continuous Deployment Pipeline'],
    },
    {
      num: '04',
      title: 'Launch',
      tagline: 'Test, optimize and deliver.',
      icon: Rocket,
      description:
        'Rigorous security audits, load stress tests, and telemetry monitoring ensure your platform launches smoothly with zero-downtime resiliency.',
      deliverables: ['Load Testing Cert', 'SOC-2 Compliance Prep', 'Live Telemetry Dashboard'],
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HOW WE WORK"
          title="A better process creates"
          highlightText="better products."
          subtitle="Our battle-tested product development framework accelerates your time-to-market while keeping standards uncompromisingly high."
          align="center"
          className="mb-16"
        />

        {/* Horizontal Stepper (Desktop) / Vertical Stepper (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-violet-600 via-cyan-500 to-emerald-500 opacity-20 -translate-y-12 pointer-events-none"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected
                    ? 'bg-white border-2 border-violet-500/40 shadow-xl scale-[1.02]'
                    : 'bg-white/60 border border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* Step Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-2xl font-black font-display tracking-tight transition-colors ${
                        isSelected ? 'text-gradient-purple' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`p-3 rounded-2xl transition-all duration-300 ${
                        isSelected
                          ? 'bg-gradient-to-tr from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30'
                          : 'bg-slate-50 text-slate-500 group-hover:text-slate-900 border border-slate-200'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display mb-2 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-violet-600/90 mb-4">{step.tagline}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-200 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2 font-mono">
                    Key Outputs:
                  </span>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-600' : 'text-slate-400'}`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
