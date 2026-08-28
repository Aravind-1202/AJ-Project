/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F8FAFC',
        'surface-light': '#F1F5F9',
        'surface-elevated': 'rgba(255, 255, 255, 0.9)',
        accent: {
          violet: '#8B5CF6',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          blue: '#38BDF8',
          emerald: '#10B981',
          rose: '#F43F5E'
        },
        border: {
          subtle: 'rgba(15, 23, 42, 0.08)',
          glow: 'rgba(139, 92, 246, 0.2)',
          highlight: 'rgba(15, 23, 42, 0.15)'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 50px -10px rgba(139, 92, 246, 0.35)',
        'glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.35)',
        'glow-soft': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'inner-light': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
