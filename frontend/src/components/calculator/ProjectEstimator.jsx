import React, { useState, useMemo } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Calculator, 
  Clock, 
  DollarSign, 
  Users, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Globe, 
  Flame,
  CheckCircle2
} from 'lucide-react';
import { Button } from '../common/Button';

export const ProjectEstimator = () => {
  // Config state
  const [projectType, setProjectType] = useState('saas');
  const [stage, setStage] = useState('mvp');
  const [speed, setSpeed] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState([
    'auth',
    'payments',
    'analytics',
  ]);

  const projectTypes = [
    {
      id: 'saas',
      title: 'Full-Stack SaaS Platform',
      icon: Layers,
      baseWeeks: 4,
      baseCost: 8500,
      desc: 'Scalable subscription software with dashboards & multi-tenancy',
    },
    {
      id: 'web',
      title: 'High-Performance Web App',
      icon: Globe,
      baseWeeks: 3,
      baseCost: 6500,
      desc: 'Ultra-fast interactive web experience with custom UI/UX',
    },
    {
      id: 'ai',
      title: 'AI & LLM Integration Engine',
      icon: Cpu,
      baseWeeks: 4,
      baseCost: 9500,
      desc: 'Vector embeddings, AI agents, automated workflow pipelines',
    },
    {
      id: 'enterprise',
      title: 'Custom Enterprise System',
      icon: ShieldCheck,
      baseWeeks: 6,
      baseCost: 14000,
      desc: 'High-concurrency microservices, legacy migration & ERP sync',
    },
  ];

  const stages = [
    { id: 'mvp', title: 'MVP / Version 1.0', multWeeks: 1.0, multCost: 1.0, desc: 'Fastest route to validation' },
    { id: 'growth', title: 'Scale-Up / V2 Expansion', multWeeks: 1.4, multCost: 1.35, desc: 'Heavy scale & advanced features' },
    { id: 'enterprise', title: 'Enterprise Overhaul', multWeeks: 1.8, multCost: 1.7, desc: 'Mission-critical architecture' },
  ];

  const featuresList = [
    { id: 'auth', name: 'Auth, RBAC & SSO', cost: 1200, days: 3 },
    { id: 'payments', name: 'Stripe & Billing Engine', cost: 1800, days: 4 },
    { id: 'analytics', name: 'Real-Time Telemetry & BI', cost: 1400, days: 3 },
    { id: 'ai_copilot', name: 'Custom AI Assistant / LLM', cost: 2400, days: 5 },
    { id: 'websockets', name: 'Live WebSockets / Collaborative', cost: 1600, days: 4 },
    { id: 'pwa', name: 'Offline PWA & Mobile Sync', cost: 1500, days: 3 },
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dynamic calculations
  const calculation = useMemo(() => {
    const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
    const selectedStageObj = stages.find((s) => s.id === stage) || stages[0];

    const featuresCost = selectedFeatures.reduce((acc, featId) => {
      const f = featuresList.find((item) => item.id === featId);
      return acc + (f ? f.cost : 0);
    }, 0);

    const featuresDays = selectedFeatures.reduce((acc, featId) => {
      const f = featuresList.find((item) => item.id === featId);
      return acc + (f ? f.days : 0);
    }, 0);

    let rawCost = (selectedTypeObj.baseCost + featuresCost) * selectedStageObj.multCost;
    let rawWeeks = selectedTypeObj.baseWeeks * selectedStageObj.multWeeks + featuresDays / 5;

    // Accelerated speed modifier
    if (speed === 'accelerated') {
      rawWeeks = Math.max(2.5, rawWeeks * 0.65);
      rawCost = rawCost * 1.2;
    }

    const minCost = Math.round(rawCost * 0.95 / 500) * 500;
    const maxCost = Math.round(rawCost * 1.15 / 500) * 500;
    const minWeeks = Math.max(2, Math.round(rawWeeks));
    const maxWeeks = minWeeks + (rawWeeks > 5 ? 2 : 1);

    // Squad composition
    const squad = [
      '1 Principal Solutions Architect',
      minWeeks > 4 ? '2 Senior Full-Stack Engineers' : '1 Senior Full-Stack Engineer',
      '1 Product UI/UX Designer',
      '1 QA & DevOps Specialist',
    ];

    return {
      minCost: minCost.toLocaleString(),
      maxCost: maxCost.toLocaleString(),
      minWeeks,
      maxWeeks,
      squad,
      selectedTypeObj,
    };
  }, [projectType, stage, speed, selectedFeatures]);

  const handleApplyToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });

      // Pre-fill message
      setTimeout(() => {
        const messageEl = document.querySelector('textarea[name="message"]');
        const serviceEl = document.querySelector('select[name="service"]');
        
        if (serviceEl) {
          if (projectType === 'saas') serviceEl.value = 'Web Development';
          else if (projectType === 'enterprise') serviceEl.value = 'Custom Software';
          else if (projectType === 'ai') serviceEl.value = 'API Development';
          else serviceEl.value = 'Web Development';
        }

        if (messageEl) {
          const featureNames = selectedFeatures
            .map((id) => featuresList.find((f) => f.id === id)?.name)
            .filter(Boolean)
            .join(', ');

          const summary = `Hi NexaTech team,\n\nI calculated an estimate using your Project Estimator:\n• Product Type: ${calculation.selectedTypeObj.title}\n• Project Stage: ${stages.find((s) => s.id === stage)?.title}\n• Delivery Mode: ${speed === 'accelerated' ? 'Accelerated Hyper-Sprint' : 'Standard Agile'}\n• Selected Features: ${featureNames || 'Core Only'}\n• Estimated Target Timeline: ${calculation.minWeeks}-${calculation.maxWeeks} weeks ($${calculation.minCost} - $${calculation.maxCost})\n\nLooking forward to scheduling a technical discovery call!`;
          
          messageEl.value = summary;
          messageEl.focus();
        }
      }, 400);
    }
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-600/15 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-violet-400" />
            <span>TRANSPARENT ENGINEERING CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-display">
            Plan your scope &amp; get a <br />
            <span className="text-gradient-purple">real-time ballpark estimate.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No vague pricing games. Configure your requirements to see realistic timelines, dedicated squad composition, and cost ranges instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Selectors (Span 7) */}
          <div className="lg:col-span-7 space-y-8 bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {/* 1. Product Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-violet-300 mb-3 font-mono">
                1. Select Product Archetype
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-violet-600/20 border-violet-500 text-white shadow-lg shadow-violet-600/20'
                          : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`p-2 rounded-xl ${
                            isSelected ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sm text-white font-display">
                          {type.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{type.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Project Stage */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-violet-300 mb-3 font-mono">
                2. Project Stage &amp; Scope Depth
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {stages.map((st) => {
                  const isSelected = stage === st.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setStage(st.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                          : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-600 hover:bg-slate-900'
                      }`}
                    >
                      <span className="font-bold text-sm text-white block mb-1">{st.title}</span>
                      <span className="text-[11px] text-slate-400 block">{st.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Core Modules & Integrations */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-violet-300 mb-3 font-mono">
                3. Essential Capabilities &amp; Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-left flex items-center justify-between transition-all cursor-pointer border ${
                        isChecked
                          ? 'bg-violet-950/80 border-violet-400 text-white'
                          : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-xs font-semibold">{feat.name}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked
                            ? 'bg-violet-500 border-violet-400 text-white'
                            : 'border-slate-700 bg-slate-800'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Velocity Mode */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-violet-300 mb-3 font-mono">
                4. Delivery Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpeed('standard')}
                  className={`p-3 rounded-2xl text-left flex items-center justify-between border cursor-pointer ${
                    speed === 'standard'
                      ? 'bg-slate-700 border-slate-500 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <div>
                    <span className="font-bold text-xs text-white block">Standard Agile Sprints</span>
                    <span className="text-[10px] text-slate-400">Regular cadence &amp; milestone reviews</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${speed === 'standard' ? 'text-emerald-400' : 'text-slate-600'}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setSpeed('accelerated')}
                  className={`p-3 rounded-2xl text-left flex items-center justify-between border cursor-pointer ${
                    speed === 'accelerated'
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/20'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-xs text-amber-300">Hyper-Sprint Delivery</span>
                      <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    </div>
                    <span className="text-[10px] text-slate-400">Double capacity, ~35% faster launch</span>
                  </div>
                  <CheckCircle2 className={`w-4 h-4 ${speed === 'accelerated' ? 'text-amber-400' : 'text-slate-600'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculated Breakdown Card (Span 5) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-3xl bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border border-violet-500/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              {/* Top Accent badge */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                    Live Engineering Estimate
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  SLA GUARANTEED
                </span>
              </div>

              {/* Price Range Display */}
              <div className="mb-6">
                <span className="text-xs text-slate-400 font-mono uppercase block mb-1">
                  Estimated Investment
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display flex items-baseline gap-2">
                  <span>${calculation.minCost}</span>
                  <span className="text-lg text-slate-400 font-normal">–</span>
                  <span>${calculation.maxCost}</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Fixed-scope milestone milestones with zero unexpected surprises.
                </p>
              </div>

              {/* Timeline Display */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Time to Market</span>
                  </div>
                  <div className="text-xl font-bold text-white font-display">
                    {calculation.minWeeks}–{calculation.maxWeeks} Weeks
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1 font-mono">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Deployment Model</span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5">
                    Continuous CI/CD
                  </div>
                </div>
              </div>

              {/* Dedicated Squad */}
              <div className="mb-6 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-violet-400" />
                  <span className="text-xs font-mono font-bold uppercase text-slate-300">
                    Dedicated Principal Squad
                  </span>
                </div>
                <div className="space-y-2">
                  {calculation.squad.map((member, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Extras */}
              <div className="p-3.5 rounded-2xl bg-violet-950/40 border border-violet-500/20 mb-6 text-xs text-violet-200 space-y-1.5 font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>30-Day Post-Launch Hypercare Included</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Code Ownership &amp; IP Transfer</span>
                </div>
              </div>

              {/* CTA Action */}
              <Button
                variant="primary"
                size="lg"
                onClick={handleApplyToContact}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full shadow-xl shadow-violet-600/40 py-4 font-bold text-sm justify-center cursor-pointer"
              >
                Apply Estimate &amp; Start Discovery →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
