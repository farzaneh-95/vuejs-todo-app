/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        show: {
          '100%': { opacity: 1, transform: 'none' },
        },
      },
      animation: {
        show: 'show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards',
      },
    },
  },
  plugins: [],
};
