/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:      '#3B4BC8',
          blueDark:  '#2C3A9E',
          blueLight: '#6B7BDF',
          gray:      '#E8E8E8',
          border:    '#9CA3AF',
          dark:      '#1A1A2E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in-up':   'fadeInUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.7s ease forwards',
        'pulse-slow':   'pulse 3s infinite',
        'marquee':      'marquee 30s linear infinite',
        'marquee2':     'marquee2 30s linear infinite',
        'float':        'float 4s ease-in-out infinite',
        'float-delay':  'float 4s ease-in-out 1s infinite',
        'float-delay2': 'float 4s ease-in-out 2s infinite',
        'spin-slow':    'spin 12s linear infinite',
        'bounce-slow':  'bounce 3s infinite',
        'slide-in-left':  'slideInLeft 0.5s ease forwards',
        'slide-in-right': 'slideInRight 0.5s ease forwards',
        'counter':      'counterUp 1.5s ease forwards',
        'glow-pulse':   'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,75,200,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(59,75,200,0.7)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':
          'linear-gradient(rgba(59,75,200,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,75,200,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
