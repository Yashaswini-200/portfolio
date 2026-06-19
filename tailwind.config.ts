import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#111118',
        bg2: '#111118',
        bg3: '#1A1A24',
        border: '#2A2A38',
        accent: '#00FF9C',
        text: {
          DEFAULT: '#F0F0F0',
          primary: '#F0F0F0',
          secondary: '#A0A8B8',
          muted: '#6B7080'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace']
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'blink-block': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        'pulse-dot': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 255, 156, 0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(0, 255, 156, 0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.4s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.3s ease-out forwards',
        'blink-block': 'blink-block 1s steps(2, start) infinite',
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
