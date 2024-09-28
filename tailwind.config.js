/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
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

