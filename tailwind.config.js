/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        typing: 'typing 3s steps(18), blink 2s forwards infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '5%': { width: '1ch' },
          '10%': { width: '2ch' },
          '15%': { width: '3ch' },
          '20%': { width: '4ch' },
          '25%': { width: '5ch' },
          '30%': { width: '6ch' },
          '35%': { width: '7ch' },
          '40%': { width: '8ch' },
          '45%': { width: '9ch' },
          '50%': { width: '10ch' },
          '55%': { width: '11ch' },
          '60%': { width: '12ch' },
          '65%': { width: '13ch' },
          '70%': { width: '14ch' },
          '75%, 100%': { width: '14.1ch' },
        },
        blink: {
          from: {
            'border-right-color': 'transparent',
          },
          to: {
            'border-right-color': 'black',
          },
        },
      },
      fontFamily: {
        burtons: ['burtons'],
      },
    },
  },
  plugins: [],
};
