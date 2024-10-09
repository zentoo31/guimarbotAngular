/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      screens: {
        's': '320px',
        'm': '375px',
        'l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptopL': '1440px',
        '4k': '2560px'
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(15px, 18px)' },
        },
      },
      animation: {
        levitate: 'levitate 2s ease-out infinite',
      },
    },
  },
  plugins: [animations],
}

