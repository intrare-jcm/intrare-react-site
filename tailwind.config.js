/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-purple': '#4F32C6',
        alabaster: '#F9F7ED',
        'blue-main': '#BCFDFE',
        'pink-main': '#FCCFCA',
        'orange-main': '#FF6700',
      },
    },
    fontFamily: {
      sans: ['Circular Std Medium', 'sans-serif'],
    },
  },
  plugins: [],
};
