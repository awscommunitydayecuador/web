import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#0b0b10',
          990: '#07070a',
        },
        // Official AWS Community Day Ecuador 2026 palette
        brand: {
          night: '#020824',    // primary dark background
          navy: '#07103D',     // secondary background
          electric: '#0A1F7A', // AWS electric blue
          blue: '#2D63FF',     // neon blue glow
          cyan: '#4FA7FF',     // cyan blue glow
          sky: '#89C8FF',      // light neon blue
          deepPurple: '#35184F',
          neonPurple: '#6C3CF2',
          purple: '#8B5CFF',   // soft purple highlight
          magenta: '#A248FF',  // AWS purple glow
        },
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        aurora: {
          violet: '#8B5CFF',
          indigo: '#6C3CF2',
          cyan: '#4FA7FF',
          sky: '#89C8FF',
          lime: '#bef264',
          gold: '#fbbf24',
          rose: '#fb7185',
        },
        accent: {
          aws: '#ff9900',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'mega': ['clamp(3rem, 11vw, 10rem)', { lineHeight: '0.86', letterSpacing: '-0.045em' }],
        'huge': ['clamp(2.25rem, 7vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display': ['clamp(1.75rem, 4.5vw, 4rem)', { lineHeight: '0.96', letterSpacing: '-0.03em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(45, 99, 255, 0.55)',
        'glow-violet': '0 0 80px -10px rgba(162, 72, 255, 0.55)',
        'glow-cyan': '0 0 80px -10px rgba(79, 167, 255, 0.55)',
        'glow-aws': '0 0 60px -10px rgba(255, 153, 0, 0.55)',
        'soft': '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -30px rgba(0,0,0,0.7)',
        'ring-brand': '0 0 0 1px rgba(45, 99, 255, 0.4), 0 0 30px -5px rgba(45, 99, 255, 0.5)',
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(137,200,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(137,200,255,0.06) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
        'dots': 'radial-gradient(rgba(137,200,255,0.12) 1px, transparent 1px)',
        'aurora-mesh':
          'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(45,99,255,0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 0%, rgba(79,167,255,0.30), transparent 60%), radial-gradient(ellipse 70% 60% at 100% 80%, rgba(162,72,255,0.30), transparent 60%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(108,60,242,0.22), transparent 60%)',
        'hero-bg': "url('/hero-bg.svg')",
      },
      backgroundSize: {
        grid: '36px 36px',
        dots: '20px 20px',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee-rev 50s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        blink: 'blink 1s steps(2) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        spin: 'spin 25s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'aurora-shift': 'auroraShift 18s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        auroraShift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(2%, -2%, 0) scale(1.05)' },
          '66%': { transform: 'translate3d(-2%, 2%, 0) scale(0.98)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}

export default config
