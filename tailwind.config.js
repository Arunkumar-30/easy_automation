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
          blue:      '#3B4BC8',   // primary logo blue
          blueDark:  '#2C3A9E',   // darker shade for hover
          blueLight: '#6B7BDF',   // lighter tint
          gray:      '#E8E8E8',   // logo background gray
          border:    '#9CA3AF',   // circular border gray
          dark:      '#1A1A2E',   // deep navy for headings
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.7s ease forwards',
        'pulse-slow': 'pulse 3s infinite',
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
      },
    },
  },
  plugins: [],
}
