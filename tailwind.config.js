/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sl-grey-900': '#141414',
        'sl-grey-800': '#1F1F1F',
        'sl-grey-700': '#333333',
        'sl-green': '#C4F82A',
        'sl-white': '#FFFFFF',
        'rc-white': 'hsl(0, 0%, 100%)',
        'rc-stone-100': 'hsl(30, 54%, 90%)',
        'rc-stone-150': 'hsl(30, 18%, 87%)',
        'rc-stone-600': 'hsl(30, 10%, 34%)',
        'rc-stone-900': 'hsl(24, 5%, 18%)',
        'rc-brown-800': 'hsl(14, 45%, 36%)',
        'rc-rose-800': 'hsl(332, 51%, 32%)',
        'rc-rose-50': 'hsl(330, 100%, 98%)',
      },
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



