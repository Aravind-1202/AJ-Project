import React from 'react';

export const Badge = ({ children, variant = 'default', size = 'md', className = '' }) => {
  const variantStyles = {
    default: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    muted: 'bg-slate-800/60 text-slate-400 border-slate-700/50',
    glass: 'bg-white/5 text-slate-200 border-white/10 backdrop-blur-md',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-medium',
    md: 'px-3.5 py-1 text-xs font-semibold tracking-wide',
    lg: 'px-4 py-1.5 text-sm font-semibold tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all duration-300 ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {children}
    </span>
  );
};

export const StatusBadge = ({ status }) => {
  const normalized = (status || 'NEW').toUpperCase();

  if (normalized === 'NEW') {
    return (
      <Badge variant="amber" size="sm">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        NEW
      </Badge>
    );
  }

  if (normalized === 'CONTACTED') {
    return (
      <Badge variant="default" size="sm">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
        CONTACTED
      </Badge>
    );
  }

  if (normalized === 'CLOSED') {
    return (
      <Badge variant="emerald" size="sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        CLOSED
      </Badge>
    );
  }

  return <Badge variant="muted" size="sm">{normalized}</Badge>;
};
