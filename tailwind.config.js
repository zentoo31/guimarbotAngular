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
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        }
      },
      animation: {
        levitate: 'levitate 2s ease-out infinite',
      },
      colors:{
        normalBackground: '#0c0c0c',
        normalSidebar: '#121212',
        youngBackground: '#fff',
        youngSidebar: '#eff6ff',
        cardBackground: '#1f2937',
      },
    },
  },
  plugins: [animations],
}

