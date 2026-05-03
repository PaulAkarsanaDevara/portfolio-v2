import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ['"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#060608',
          2: '#0d0d10',
          3: '#141418',
          4: '#1c1c22',
        },
        accent: {
          DEFAULT: '#a78bfa',
          2: '#38bdf8',
          3: '#fb923c',
        },
        border: '#1e1e28',
        muted: '#6b6b80',
      },
      animation: {
        'fade-up': 'fadeUp 0.35s ease both',
        blink: 'blink 2s ease infinite',
        pulse2: 'pulse2 2s ease infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        pulse2: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.3', transform: 'scale(0.7)' } },
      },
    },
  },
  plugins: [],
} satisfies Config
