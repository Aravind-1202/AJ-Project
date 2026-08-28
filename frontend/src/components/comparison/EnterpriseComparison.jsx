import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Check, X, Sparkles, Shield, Clock, Zap, DollarSign, Award } from 'lucide-react';
import { Button } from '../common/Button';

export const EnterpriseComparison = () => {
  const comparisonRows = [
    {
      feature: 'Time to Market',
      nexa: '3 – 6 Weeks (Hyper-Sprint)',
      agency: '4 – 9 Months (Slow feedback loops)',
      inHouse: '6 – 12 Months (Hiring + Onboarding)',
      nexaHighlight: true,
    },
    {
      feature: 'Engineering Talent',
      nexa: 'Senior Principal Engineers Only',
      agency: 'Outsourced Juniors & Interns',
      inHouse: 'Recruiting lottery & ramp-up lag',
      nexaHighlight: true,
    },
    {
      feature: 'Architecture Quality',
      nexa: 'Production-Grade, Typed & Tested',
      agency: 'Fragile prototypes / technical debt',
      inHouse: 'Depends heavily on individual hire',
      nexaHighlight: true,
    },
    {
      feature: 'Cost Predictability',
      nexa: 'Transparent, milestone-based budget',
      agency: 'Uncapped hourly scope creep',
      inHouse: '$200k+/yr salary + equity + benefits',
      nexaHighlight: true,
    },
    {
      feature: 'Code & IP Ownership',
      nexa: '100% Full Ownership from Day 1',
      agency: 'Vendor lock-in & proprietary forks',
      inHouse: '100% ownership',
      nexaHighlight: true,
    },
    {
      feature: 'Post-Launch Hypercare',
      nexa: '30-Day SLA Support Included',
      agency: 'Expensive retainer add-on',
      inHouse: 'Dependent on team staying',
      nexaHighlight: true,
    },
  ];

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE NEXATECH ADVANTAGE"
          title="Why ambitious teams choose"
          highlightText="NexaTech over alternatives."
          subtitle="See how our dedicated engineering model delivers higher craft, faster velocity, and total cost transparency."
          align="center"
          className="mb-16"
        />

        {/* Comparison Table Card */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-8 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-4 text-xs font-mono font-bold uppercase text-slate-400 w-1/4">
                  Criterion
                </th>
                <th className="py-4 px-6 text-sm font-extrabold text-slate-900 bg-violet-600/10 rounded-t-2xl border-t border-x border-violet-200 w-1/3">
                  <div className="flex items-center gap-2 text-violet-700">
                    <Sparkles className="w-4 h-4" />
                    <span>NexaTech Engineering</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-xs font-mono font-bold uppercase text-slate-500 w-1/5">
                  Traditional Agency
                </th>
                <th className="py-4 px-4 text-xs font-mono font-bold uppercase text-slate-500 w-1/5">
                  Hiring In-House
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-100/50 transition-colors">
                  {/* Criterion */}
                  <td className="py-4 px-4 font-bold text-slate-900 font-display">
                    {row.feature}
                  </td>

                  {/* NexaTech Column (Highlighted) */}
                  <td className="py-4 px-6 font-bold text-slate-900 bg-violet-600/5 border-x border-violet-200">
                    <div className="flex items-center gap-2 text-violet-950 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.nexa}</span>
                    </div>
                  </td>

                  {/* Traditional Agency */}
                  <td className="py-4 px-4 text-slate-500">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{row.agency}</span>
                    </div>
                  </td>

                  {/* Hiring In-House */}
                  <td className="py-4 px-4 text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                      <span>{row.inHouse}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
              Ready to accelerate your product timeline?
            </h3>
            <p className="text-sm text-slate-400">
              Speak directly with our senior engineering leads today. No sales pitches.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const contact = document.getElementById('contact');
              if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 shadow-lg shadow-violet-600/30"
          >
            Start Your Project →
          </Button>
        </div>
      </div>
    </section>
  );
};
