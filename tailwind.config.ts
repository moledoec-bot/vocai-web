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
        'brand-blue': '#2979FF',
        'brand-coral': '#FF6B6B',
        'brand-navy': '#0a0e1a',
        'brand-amber': '#FFB020',
        'brand-green': '#00D68F',
        'card-dark': '#111827',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}

export default config
