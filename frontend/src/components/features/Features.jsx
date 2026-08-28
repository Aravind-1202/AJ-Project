import React from 'react';
import { Zap, ShieldCheck, Cpu, Database, Activity, Lock, Server, Sparkles } from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-slate-50">
      {/* Ambient background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            ENGINEERING PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
            Technology should disappear. <br />
            <span className="text-gradient-purple">The experience should remain.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Complex distributed infrastructure made effortless, seamless, and lightning fast.
          </p>
        </div>

        {/* Central Animated Focus Stage with 4 Floating Spatial Nodes */}
        <div className="relative max-w-4xl mx-auto min-h-[440px] flex items-center justify-center p-4">
          {/* Orbital glowing rings */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-violet-500/10 animate-pulse-slow"></div>
          <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full border border-dashed border-slate-900/5"></div>

          {/* Central Mockup Core Engine */}
          <div className="relative z-10 w-64 sm:w-80 p-6 rounded-3xl bg-white/95 border border-slate-900/5 backdrop-blur-2xl shadow-2xl shadow-slate-200 text-left">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-900/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-ping"></div>
                <span className="text-xs font-mono text-slate-900 font-bold">NexaEngine v4</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-600">ACTIVE</span>
            </div>

            <div className="space-y-2 font-mono text-xs text-slate-600">
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-500">Core State:</span>
                <span className="text-cyan-600">Optimal Sync</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-500">Edge Clusters:</span>
                <span className="text-slate-900">42 Online</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-slate-500">Throughput:</span>
                <span className="text-emerald-600">Zero Loss</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-900/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Security: TLS 1.3 + E2EE</span>
              <Activity className="w-3.5 h-3.5 text-violet-400" />
            </div>
          </div>

          {/* Floating Spatial Label 1: FAST (Top Left) */}
          <div className="absolute top-2 left-2 sm:left-12 p-3.5 rounded-2xl bg-white/90 border border-amber-500/20 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float-slow text-left">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block font-display">Fast</span>
              <span className="text-[11px] text-slate-600 font-mono">0.4s p95 response</span>
            </div>
          </div>

          {/* Floating Spatial Label 2: SECURE (Top Right) */}
          <div className="absolute top-2 right-2 sm:right-12 p-3.5 rounded-2xl bg-white/90 border border-emerald-500/20 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float-delayed text-left">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block font-display">Secure</span>
              <span className="text-[11px] text-slate-600 font-mono">SOC-2 Type II</span>
            </div>
          </div>

          {/* Floating Spatial Label 3: SCALABLE (Bottom Left) */}
          <div className="absolute bottom-2 left-2 sm:left-12 p-3.5 rounded-2xl bg-white/90 border border-cyan-500/20 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float-fast text-left">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block font-display">Scalable</span>
              <span className="text-[11px] text-slate-600 font-mono">10M+ daily events</span>
            </div>
          </div>

          {/* Floating Spatial Label 4: RELIABLE (Bottom Right) */}
          <div className="absolute bottom-2 right-2 sm:right-12 p-3.5 rounded-2xl bg-white/90 border border-violet-500/20 backdrop-blur-xl shadow-xl flex items-center gap-3 animate-float-slow text-left">
            <div className="p-2 rounded-xl bg-violet-500/10 text-violet-600">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block font-display">Reliable</span>
              <span className="text-[11px] text-slate-600 font-mono">99.99% uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
