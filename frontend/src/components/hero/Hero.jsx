import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Activity, TrendingUp, Users, Zap, Shield, CheckCircle2, Play } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero = () => {
  const [timeframe, setTimeframe] = useState('7d');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle interactive 3D tilt effect on mouse movement
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * -15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Sparkline data points for different timeframes
  const chartPaths = {
    '24h': 'M0,80 Q25,75 50,60 T100,50 T150,30 T200,45 T250,20 T300,10',
    '7d': 'M0,90 Q30,70 60,65 T120,40 T180,50 T240,25 T300,15',
    '30d': 'M0,95 Q40,85 80,60 T160,45 T220,30 T270,18 T300,8',
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-violet-600/10 via-indigo-600/10 to-cyan-500/5 blur-[130px] rounded-full pointer-events-none -z-10 animate-glow-pulse"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-violet-600/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Availability Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm mb-6 animate-fadeIn">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for new projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6 font-display">
              Digital Products <br />
              Built for{' '}
              <span className="relative inline-block text-gradient-purple font-black">
                What's Next.
                {/* Under-glow line */}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 rounded-full blur-[1px]"></span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              We design and engineer digital experiences that help ambitious businesses move faster,
              work smarter and grow confidently with scalable architectures and intentional design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto shadow-xl shadow-violet-600/30 hover:scale-[1.02]"
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('solutions')}
                className="w-full sm:w-auto"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-900/5 w-full flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">
              <span className="text-slate-700">Design</span>
              <span className="text-violet-600">•</span>
              <span className="text-slate-700">Development</span>
              <span className="text-violet-600">•</span>
              <span className="text-slate-700">Strategy</span>
              <span className="text-violet-600">•</span>
              <span className="text-slate-700">Technology</span>
            </div>
          </div>

          {/* Right Column: Custom 3D Abstract Technology Visual */}
          <div
            className="lg:col-span-6 relative perspective-1000 flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative w-full max-w-[540px] transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Main Core Dashboard Card */}
              <div className="relative rounded-2xl bg-white/90 border border-slate-900/5 backdrop-blur-2xl p-6 shadow-2xl shadow-slate-200 overflow-hidden">
                {/* Decorative Window Controls */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-900/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400">nexatech.cloud/telemetry</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-900/5 text-[10px] font-mono text-cyan-600">
                    <Activity className="w-3 h-3 animate-pulse text-cyan-400" />
                    LIVE
                  </div>
                </div>

                {/* Graph Header & Timeframe Switcher */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      System Throughput &amp; Growth
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black text-slate-900 font-display">94.8k req/s</span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-0.5" /> +28.4%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center bg-slate-50 p-0.5 rounded-lg border border-slate-900/5 text-xs font-mono">
                    {['24h', '7d', '30d'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTimeframe(t)}
                        className={`px-2 py-1 rounded-md text-[11px] font-semibold transition-all ${
                          timeframe === t
                            ? 'bg-violet-600 text-white shadow-sm'
                            : 'text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interactive Dynamic SVG Area Chart */}
                <div className="relative h-36 w-full bg-gradient-to-b from-violet-500/10 to-transparent rounded-xl border border-slate-900/5 p-2 flex items-end">
                  <svg className="w-full h-28 overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d={`${chartPaths[timeframe]} L300,100 L0,100 Z`}
                      fill="url(#chartGlow)"
                      className="transition-all duration-700 ease-in-out"
                    />
                    {/* Glowing Stroke */}
                    <path
                      d={chartPaths[timeframe]}
                      fill="none"
                      stroke="url(#chartGlow)"
                      strokeWidth="3.5"
                      className="transition-all duration-700 ease-in-out"
                      strokeLinecap="round"
                    />
                    <path
                      d={chartPaths[timeframe]}
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      className="transition-all duration-700 ease-in-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[10px] font-mono text-slate-400">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>NOW</span>
                  </div>
                </div>

                {/* Bottom Metric Strip */}
                <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-900/5 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-900/5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                      Global Latency
                    </span>
                    <span className="text-sm font-extrabold text-slate-900 font-mono flex items-center gap-1 mt-0.5">
                      <Zap className="w-3 h-3 text-amber-500" /> 1.2ms
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-900/5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                      Reliability
                    </span>
                    <span className="text-sm font-extrabold text-emerald-600 font-mono flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" /> 99.999%
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-900/5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                      Active Edge Nodes
                    </span>
                    <span className="text-sm font-extrabold text-cyan-600 font-mono flex items-center gap-1 mt-0.5">
                      <Shield className="w-3 h-3 text-cyan-500" /> 42 Regions
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Layer 1: Revenue Metric Card (Top Right) */}
              <div
                className="absolute -top-6 -right-6 sm:-right-8 p-4 rounded-2xl bg-white/90 border border-violet-500/20 backdrop-blur-xl shadow-xl shadow-slate-200 flex items-center gap-3 animate-float-slow"
                style={{ transform: 'translateZ(40px)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-600/30">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Annual ARR
                  </span>
                  <div className="text-base font-extrabold text-slate-900 font-display flex items-baseline gap-1.5">
                    $2.4M
                    <span className="text-[10px] font-bold text-emerald-500">+24.8%</span>
                  </div>
                </div>
              </div>

              {/* Floating Layer 2: Active User Growth (Bottom Left) */}
              <div
                className="absolute -bottom-6 -left-6 sm:-left-8 p-4 rounded-2xl bg-white/90 border border-cyan-500/20 backdrop-blur-xl shadow-xl shadow-slate-200 flex items-center gap-3 animate-float-delayed"
                style={{ transform: 'translateZ(50px)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Active Users
                  </span>
                  <div className="text-base font-extrabold text-slate-900 font-display">142,850+</div>
                </div>
              </div>

              {/* Floating Layer 3: Small Floating Deployment Alert (Bottom Right) */}
              <div
                className="hidden sm:flex absolute -bottom-10 right-8 px-3.5 py-2 rounded-xl bg-white/95 border border-slate-900/5 backdrop-blur-xl shadow-lg items-center gap-2 text-xs text-slate-600 font-mono animate-float-fast"
                style={{ transform: 'translateZ(30px)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>⚡ Production v3.4.0 live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
