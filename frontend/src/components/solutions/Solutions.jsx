import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import {
  Layers,
  Globe,
  Cpu,
  Palette,
  Network,
  ArrowRight,
  Sparkles,
  Terminal,
  Play,
  Check,
  Code2,
  CheckCircle2,
  Eye,
  Workflow
} from 'lucide-react';

export const Solutions = () => {
  // State for interactive API terminal card
  const [apiTesting, setApiTesting] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  // State for UI/UX wireframe toggle card
  const [designMode, setDesignMode] = useState('polished'); // 'wireframe' | 'polished'

  // State for Digital Products interactive tab
  const [activeTab, setActiveTab] = useState('analytics');

  const runApiTest = () => {
    setApiTesting(true);
    setApiResult(null);
    setTimeout(() => {
      setApiTesting(false);
      setApiResult({
        status: 200,
        latency: '14ms',
        throughput: '12,400 req/sec',
        payload: { success: true, cluster: 'us-east-edge-1', cache_hit: true },
      });
    }, 600);
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR EXPERTISE"
          title="Everything you need to move from"
          highlightText="idea to impact."
          subtitle="From initial concept architecture to high-performance production systems, we engineer bespoke digital solutions."
          align="center"
          className="mb-16"
        />

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Large Featured Card - Digital Products (Span 8) */}
          <div className="md:col-span-12 lg:col-span-8 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-violet-500/40 transition-all duration-300 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-violet-50 border border-violet-100 text-violet-600">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                    Digital Products
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Scalable full-stack SaaS &amp; enterprise platforms
                  </p>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-200 text-xs">
                {['analytics', 'pipeline', 'deployment'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg font-semibold uppercase tracking-wider text-[11px] transition-all ${
                      activeTab === tab
                        ? 'bg-violet-600 text-white shadow-md'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Design and build scalable web applications and digital platforms engineered for
              massive concurrency, intuitive workflows, and seamless user experiences.
            </p>

            {/* Interactive Embedded Preview Visual */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Active Node Cluster: AWS + Edge Cloud
                </span>
                <span className="text-cyan-600">P99 Latency: 4.8ms</span>
              </div>

              {activeTab === 'analytics' && (
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Global Users</span>
                    <div className="text-xl font-extrabold text-slate-900 font-mono mt-1">1,240,890</div>
                    <span className="text-[10px] text-emerald-600 font-bold">+18.2% this month</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Transaction Volume</span>
                    <div className="text-xl font-extrabold text-slate-900 font-mono mt-1">$48.2M</div>
                    <span className="text-[10px] text-cyan-600 font-bold">100% processed</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Error Rate</span>
                    <div className="text-xl font-extrabold text-emerald-600 font-mono mt-1">0.001%</div>
                    <span className="text-[10px] text-slate-500">Zero critical faults</span>
                  </div>
                </div>
              )}

              {activeTab === 'pipeline' && (
                <div className="pt-4 flex flex-col gap-2 font-mono text-xs text-slate-600 animate-fadeIn">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                    <span>1. Ingestion Stream: Kafka Event Bus</span>
                    <span className="text-emerald-600 font-bold">HEALTHY</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                    <span>2. Business Logic Engine: Distributed Workers</span>
                    <span className="text-emerald-600 font-bold">HEALTHY</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                    <span>3. Multi-Region Replication: PostgreSQL + Redis</span>
                    <span className="text-emerald-600 font-bold">SYNCED</span>
                  </div>
                </div>
              )}

              {activeTab === 'deployment' && (
                <div className="pt-4 flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Auto-Scaling Cluster: 24/24 Pods Ready</span>
                  </div>
                  <span className="font-bold">Zero-Downtime Live</span>
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Web Experiences (Span 4) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600 w-fit mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
                Web Experiences
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                High-performance websites that combine breathtaking visual aesthetics with blazing
                sub-second load speeds.
              </p>
            </div>

            {/* Performance Metric Visualizer */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-500">Core Web Vitals</span>
                <span className="text-xs font-mono font-bold text-emerald-600">100 / 100</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded-lg bg-white border border-emerald-200 text-emerald-600 shadow-sm">
                  <div className="font-bold text-xs">0.3s</div>
                  <div className="text-slate-500 mt-0.5">FCP</div>
                </div>
                <div className="p-2 rounded-lg bg-white border border-emerald-200 text-emerald-600 shadow-sm">
                  <div className="font-bold text-xs">0.00</div>
                  <div className="text-slate-500 mt-0.5">CLS</div>
                </div>
                <div className="p-2 rounded-lg bg-white border border-emerald-200 text-emerald-600 shadow-sm">
                  <div className="font-bold text-xs">0.5s</div>
                  <div className="text-slate-500 mt-0.5">LCP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Software (Span 4) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 w-fit mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
                Custom Software
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Purpose-built software designed specifically around your proprietary operational
                workflows and mission-critical logic.
              </p>
            </div>

            {/* Architecture Node Visualizer */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm font-mono text-xs">
              <div className="flex items-center justify-between text-slate-500 mb-2">
                <span>Architecture</span>
                <span className="text-indigo-600">Microservices</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="px-2 py-1 rounded bg-white border border-slate-200 text-[11px]">Core API</div>
                <span>→</span>
                <div className="px-2 py-1 rounded bg-violet-50 border border-violet-200 text-violet-700 text-[11px]">Worker</div>
                <span>→</span>
                <div className="px-2 py-1 rounded bg-cyan-50 border border-cyan-200 text-cyan-700 text-[11px]">Store</div>
              </div>
            </div>
          </div>

          {/* Card 4: UI / UX Design with Interactive Toggle (Span 4) */}
          <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-pink-50 border border-pink-100 text-pink-600">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="flex items-center bg-slate-50 p-1 rounded-xl border border-slate-200 text-[11px] font-mono">
                  <button
                    onClick={() => setDesignMode('wireframe')}
                    className={`px-2 py-1 rounded-md transition-all ${
                      designMode === 'wireframe' ? 'bg-slate-200 text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    Wireframe
                  </button>
                  <button
                    onClick={() => setDesignMode('polished')}
                    className={`px-2 py-1 rounded-md transition-all ${
                      designMode === 'polished' ? 'bg-pink-100 text-pink-700 font-bold' : 'text-slate-500'
                    }`}
                  >
                    Hi-Fi
                  </button>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
                UI / UX Design
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Simple, intuitive experiences engineered to reduce cognitive friction and maximize
                user engagement.
              </p>
            </div>

            {/* Interactive Preview based on toggle */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-300 shadow-sm">
              {designMode === 'wireframe' ? (
                <div className="space-y-2 font-mono text-[11px] text-slate-500 border border-dashed border-slate-300 p-3 rounded-xl">
                  <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-6 border border-slate-300 rounded flex items-center justify-center text-slate-500">
                    [Button Container]
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-gradient-to-r from-violet-50 to-pink-50 border border-pink-200 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-900 font-bold">
                    <span>Design Token Spec</span>
                    <span className="text-pink-600 text-[10px]">v2.4 Active</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-pink-500 w-4/5"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-600">
                    Interactions: 60fps Micro-transitions
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 5: APIs & Integrations with Live Interactive Test (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-cyan-50 border border-cyan-100 text-cyan-600">
                  <Network className="w-6 h-6" />
                </div>
                <button
                  onClick={runApiTest}
                  disabled={apiTesting}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-200 text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  <Play className={`w-3 h-3 ${apiTesting ? 'animate-spin' : ''}`} />
                  <span>{apiTesting ? 'Pinging...' : 'Test API Ping'}</span>
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
                APIs &amp; Integrations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Connect enterprise systems, payment rails, AI models, and automate complex workflows.
              </p>
            </div>

            {/* Code / API Output Terminal */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs shadow-inner">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                <Terminal className="w-3 h-3 text-cyan-400" />
                <span>REST / GraphQL Gateway</span>
              </div>
              {apiResult ? (
                <div className="text-[11px] space-y-1 animate-fadeIn">
                  <div className="text-emerald-400">HTTP 200 OK — {apiResult.latency}</div>
                  <div className="text-slate-400 text-[10px]">
                    Throughput: {apiResult.throughput}
                  </div>
                  <div className="text-cyan-300 text-[10px]">
                    Cluster: {apiResult.payload.cluster}
                  </div>
                </div>
              ) : (
                <div className="text-slate-400 text-[11px]">
                  <span className="text-violet-400">GET</span> /api/v1/telemetry/nodes
                  <br />
                  <span className="text-slate-500 text-[10px] mt-1 block">
                    Click "Test API Ping" above to simulate live roundtrip.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
