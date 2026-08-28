import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WhyUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const principles = [
    {
      num: '01',
      title: 'Clarity',
      tagline: 'Complex problems deserve simple solutions.',
      description:
        'We eliminate unnecessary friction and convoluted architectures. By distilling product complexity into intuitive mental models, we build software that users immediately comprehend and love.',
    },
    {
      num: '02',
      title: 'Craft',
      tagline: 'Every interaction should feel intentional.',
      description:
        'From buttery smooth 60fps micro-animations to pixel-perfect typographic hierarchy, no detail is too small. Craft is how respect is communicated to the end user.',
    },
    {
      num: '03',
      title: 'Speed',
      tagline: 'Move quickly without sacrificing quality.',
      description:
        'We operate with extreme velocity using automated CI/CD pipelines, reusable design tokens, and composable architectures that deliver enterprise solutions in weeks, not quarters.',
    },
    {
      num: '04',
      title: 'Scale',
      tagline: 'Build today with tomorrow in mind.',
      description:
        'Every line of code and database schema is architected to handle 100x traffic spikes without requiring an architectural rewrite as your company expands globally.',
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR PRINCIPLES"
          title="Built with purpose."
          highlightText="Designed for people."
          subtitle="The foundational philosophies that govern every digital product and architecture we engineer."
          align="left"
          className="mb-16"
        />

        {/* Editorial Layout with Large Typography & Dividers */}
        <div className="flex flex-col border-t border-slate-200">
          {principles.map((p, idx) => (
            <div
              key={p.num}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`py-8 sm:py-12 border-b border-slate-200 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline ${
                hoveredIndex === idx ? 'bg-slate-50 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl' : ''
              }`}
            >
              {/* Number & Title */}
              <div className="lg:col-span-4 flex items-baseline gap-4 sm:gap-6">
                <span
                  className={`text-2xl sm:text-3xl font-black font-display tracking-tight transition-colors ${
                    hoveredIndex === idx ? 'text-violet-600' : 'text-slate-300'
                  }`}
                >
                  {p.num}
                </span>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                    {p.title}
                  </h3>
                  <p className="text-sm font-semibold text-violet-600 mt-1">{p.tagline}</p>
                </div>
              </div>

              {/* Editorial Description */}
              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
