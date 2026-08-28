import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ExternalLink, 
  X, 
  CheckCircle2, 
  Sparkles,
  BarChart3
} from 'lucide-react';
import { Button } from '../common/Button';

export const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModal, setActiveModal] = useState(null);

  const categories = [
    { id: 'all', name: 'All Case Studies' },
    { id: 'fintech', name: 'FinTech & Trading' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'saas', name: 'Enterprise SaaS' },
  ];

  const caseStudies = [
    {
      id: 'finscale',
      category: 'fintech',
      title: 'FinPulse X — Algorithmic Liquidity & Trading Platform',
      client: 'FinPulse Global',
      tagline: 'Processing $1.4B+ in monthly volume with 2.1ms P99 execution latency.',
      badge: 'FINTECH ARCHITECTURE',
      impact: [
        { label: 'P99 Execution Latency', value: '2.1ms', delta: '-74% decrease' },
        { label: 'Monthly Trading Vol', value: '$1.4B+', delta: '+340% growth' },
        { label: 'System Uptime', value: '99.999%', delta: 'Zero-fault SLA' },
      ],
      techStack: ['React 19', 'Spring Boot 3', 'Apache Kafka', 'Redis Cluster', 'AWS Fargate'],
      challenge:
        'The client experienced severe order execution lag and connection dropouts during high-volatility market windows with their legacy monolithic setup.',
      solution:
        'We re-architected their core matching pipeline using Java Virtual Threads, distributed Redis in-memory locks, and a WebSocket binary streaming gateway with client-side optimistic UI.',
      color: 'from-violet-600 to-indigo-600',
    },
    {
      id: 'aura_ai',
      category: 'ai',
      title: 'Synthetix AI — Multimodal Autonomous Workspaces',
      client: 'Synthetix Corp',
      tagline: 'Enterprise generative AI engine powering 650,000+ active enterprise professionals.',
      badge: 'GENERATIVE AI & RAG',
      impact: [
        { label: 'Active Daily Users', value: '650k+', delta: '+420% user surge' },
        { label: 'Doc Analysis Time', value: '1.2s', delta: '10x faster workflow' },
        { label: 'RAG Retrieval Accuracy', value: '99.2%', delta: 'Vector fine-tuned' },
      ],
      techStack: ['Next.js 15', 'Python FastAPI', 'pgvector', 'OpenAI GPT-4o', 'Cloudflare Workers'],
      challenge:
        'Synthetix needed a low-latency RAG system capable of parsing millions of multi-format enterprise PDF/contracts with zero data leaks between tenants.',
      solution:
        'We engineered an isolated multi-tenant vector pipeline using pgvector and automated chunking with deterministic guardrails and instantaneous streaming responses.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'omniflow',
      category: 'saas',
      title: 'OmniFlow Cloud — Multi-Region Supply Chain Orchestrator',
      client: 'OmniLogistics',
      tagline: 'Real-time telemetry tracking 12,000+ autonomous fleet vehicles worldwide.',
      badge: 'ENTERPRISE SAAS',
      impact: [
        { label: 'Fleet Latency', value: '< 50ms', delta: 'Real-time telemetry' },
        { label: 'Logistics Efficiency', value: '+38%', delta: 'Route optimization' },
        { label: 'Operational Savings', value: '$3.8M', delta: 'Annualized cost cut' },
      ],
      techStack: ['React 19', 'Spring Boot', 'PostgreSQL 16', 'Docker', 'Kubernetes'],
      challenge:
        'Managing distributed driver telemetry across unpredictable cellular connections caused frequent state desynchronization and inaccurate customer ETAs.',
      solution:
        'We developed an offline-first Progressive Web App with local SQLite caching and automated backpressure synchronization to a central Spring Boot microservice cluster.',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const filtered = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter((c) => c.category === selectedCategory);

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PROVEN OUTCOMES"
          title="Engineered for impact."
          highlightText="Proven at scale."
          subtitle="Explore how our technical design and engineering transformed mission-critical products into market leaders."
          align="center"
          className="mb-14"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/20'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Client */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-extrabold uppercase px-2.5 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-100">
                    {study.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">{study.client}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display mb-3 group-hover:text-violet-600 transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {study.tagline}
                </p>

                {/* Metrics Highlight Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 space-y-3">
                  {study.impact.slice(0, 2).map((imp, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">
                          {imp.label}
                        </span>
                        <span className="text-lg font-black text-slate-900 font-display">
                          {imp.value}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                        {imp.delta}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Deep Dive Action */}
              <button
                onClick={() => setActiveModal(study)}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-violet-50 text-slate-700 hover:text-violet-700 font-bold text-xs transition-all border border-slate-200 hover:border-violet-200 cursor-pointer"
              >
                <span>Read Full Technical Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Case Study Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-violet-100 text-violet-800">
                  {activeModal.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">• {activeModal.client}</span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-3">
              {activeModal.title}
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {activeModal.tagline}
            </p>

            {/* Impact Metric Strip */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 text-white mb-6">
              {activeModal.impact.map((imp, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl font-black text-cyan-400 font-display">{imp.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{imp.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 text-left mb-6">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                <h4 className="text-xs font-bold uppercase text-rose-800 tracking-wider mb-1 font-mono">
                  The Core Architectural Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{activeModal.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <h4 className="text-xs font-bold uppercase text-emerald-800 tracking-wider mb-1 font-mono">
                  NexaTech Engineering Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{activeModal.solution}</p>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="mb-6">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-2">
                Technologies Deployed
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModal.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveModal(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setActiveModal(null);
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Build Similar Architecture →
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
