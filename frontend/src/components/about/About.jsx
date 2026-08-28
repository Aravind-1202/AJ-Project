import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowUpRight, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export const About = () => {
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, uptime: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          const duration = 1800;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              projects: Math.round(50 * ease),
              satisfaction: Math.round(98 * ease),
              uptime: 24,
            });

            if (frame === totalFrames) {
              clearInterval(timer);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/5 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="WHAT WE DO"
          title="From complex ideas to"
          highlightText="simple digital experiences."
          align="left"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
              We bridge the gap between bold product vision and resilient, scalable engineering.
              Modern businesses shouldn't have to compromise between breathtaking design and
              institutional stability.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              At NexaTech, our multidisciplinary team of product architects, interface designers,
              and distributed systems engineers works in tight synthesis. We build high-throughput
              platforms, intuitive web interfaces, and secure enterprise APIs designed to endure
              exponential scale.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Zero-Legacy Architectures</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>High Velocity Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Production-Ready at Launch</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Large Interactive Metric Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm group">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-display mb-2 group-hover:text-gradient-purple transition-all">
                {counts.projects}+
              </div>
              <div className="text-sm font-bold text-slate-700 font-display">Projects Delivered</div>
              <div className="text-xs text-slate-500 mt-2 leading-relaxed">
                Shipped across fintech, AI, health &amp; SaaS sectors.
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm group">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-display mb-2 group-hover:text-gradient-cyan transition-all">
                {counts.satisfaction}%
              </div>
              <div className="text-sm font-bold text-slate-700 font-display">Client Satisfaction</div>
              <div className="text-xs text-slate-500 mt-2 leading-relaxed">
                NPS score and repeat multi-year technical partnerships.
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm group">
              <div className="text-4xl sm:text-5xl font-black font-display mb-2 text-emerald-600">
                24/7
              </div>
              <div className="text-sm font-bold text-slate-700 font-display">Digital Reliability</div>
              <div className="text-xs text-slate-500 mt-2 leading-relaxed">
                Zero-downtime deployments with automated rollback.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
