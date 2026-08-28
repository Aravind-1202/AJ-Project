import React from 'react';

export const SectionHeading = ({
  badge,
  badgeVariant = 'default',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignStyles = {
    center: 'text-center items-center mx-auto',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignStyles[align] || alignStyles.center} ${className}`}>
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="text-gradient-purple relative inline-block">
            {highlightText}
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 opacity-50 blur-[1px]"></span>
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
