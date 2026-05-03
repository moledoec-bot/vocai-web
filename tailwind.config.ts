import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', lg: '3rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        // Paleta cálida nueva
        'bg-base': 'var(--bg-base)',
        'bg-elev': 'var(--bg-elev)',
        coral: 'var(--coral)',
        amber: 'var(--amber)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'border-subtle': 'var(--border-subtle)',

        // Legacy brand (mantener compat)
        'brand-blue': '#2979FF',
        'brand-coral': '#FF6B6B',
        'brand-navy': '#0a0e1a',
        'brand-amber': '#FFB020',
        'brand-green': '#00D68F',
        'card-dark': '#111827',
      },
      fontFamily: {
        display: ['var(--font-display)', 'General Sans', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Escala fluid con clamp(): se adapta de mobile a desktop sin breakpoints
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
        'fluid-xl': 'clamp(1.375rem, 1.2rem + 0.8vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)',
        'fluid-3xl': 'clamp(2.25rem, 1.7rem + 2.4vw, 3.75rem)',
        'fluid-4xl': 'clamp(2.75rem, 1.8rem + 4vw, 5.25rem)',
        'fluid-5xl': 'clamp(3.5rem, 2rem + 6.5vw, 7.5rem)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
