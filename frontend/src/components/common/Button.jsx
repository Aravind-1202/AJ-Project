import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:from-violet-500 hover:to-indigo-500 border border-violet-400/30',
    secondary: 'bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md',
    cyan: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border border-cyan-400/30',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
    danger: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 hover:border-rose-500/40',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};
