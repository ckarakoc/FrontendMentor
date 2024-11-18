/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree'],
        inter: ['Inter'],
      },
      keyframes: {
        wave: {
          '0%': {transform: 'rotate(0.0deg)'},
          '10%': {transform: 'rotate(14deg)'},
          '20%': {transform: 'rotate(-8deg)'},
          '30%': {transform: 'rotate(14deg)'},
          '40%': {transform: 'rotate(-4deg)'},
          '50%': {transform: 'rotate(10.0deg)'},
          '60%': {transform: 'rotate(0.0deg)'},
          '100%': {transform: 'rotate(0.0deg)'},
        },
        onload: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.3)'
          },
          '70%': {
            opacity: 0.7,
            transform: 'scale(1.1)'
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        waving: 'wave 2s linear infinite',
        onloading: 'onload 0.3s ease-in-out forwards',
      }
    }
  },
  plugins: [],
}



