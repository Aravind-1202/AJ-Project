import React from 'react';

export const SocialProof = () => {
  const partners = [
    {
      name: 'NOVA',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 6 15 12 12 18 9 12" />
        </svg>
      ),
    },
    {
      name: 'ARC',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 18 C 4 10, 20 10, 20 18" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      ),
    },
    {
      name: 'FLOW',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 12c3-4 6-4 9 0s6 4 9 0" />
          <path d="M2 17c3-4 6-4 9 0s6 4 9 0" opacity="0.6" />
        </svg>
      ),
    },
    {
      name: 'VERTEX',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 3 22 21 2 21" />
        </svg>
      ),
    },
    {
      name: 'ORBIT',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 border-y border-slate-200 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 mb-8 font-mono">
          Trusted by teams building the future
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2.5 text-slate-500 hover:text-slate-900 transition-all duration-300 group cursor-default hover:scale-105"
            >
              <div className="text-slate-400 group-hover:text-violet-600 transition-colors">
                {partner.icon}
              </div>
              <span className="font-extrabold tracking-widest text-sm sm:text-base font-display">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
