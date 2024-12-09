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
        'rc-white': '#FFFFFF',
        'rc-stone-100': '#F3E5D7',
        'rc-stone-150': '#E3DDD7',
        'rc-stone-600': '#5F564D',
        'rc-stone-900': '#312E2C',
        'rc-brown-800': '#854632',
        'rc-rose-800': '#7A284E',
        'rc-rose-50': '#FFF7FB',
        'ppc-dark-cyan': '#3C8067',
        'ppc-cream': '#F2EBE3',
        'ppc-dark-blue': '#1C232B',
        'ppc-grayish-blue': '#6C7289',
        'ppc-white': '#FFFFFF',
        'fc-red': '#EA5353',
        'fc-cyan': '#45D3D3',
        'fc-orange': '#FCAF4A',
        'fc-blue': '#549EF2',
        'fc-dark-blue': '#4C4E61',
        'fc-grayish-blue': '#A3A5AE',
        'fc-light-gray': '#FAFAFA',
      },
      fontFamily: {
        figtree: ['Figtree'],
        inter: ['Inter'],
        outfit: ['Outfit'],
        young: ['Young Serif'],
        montserrat: ['Montserrat'],
        fraunces: ['Fraunces'],
        poppins: ['Poppins', 'sans-serif'],
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



