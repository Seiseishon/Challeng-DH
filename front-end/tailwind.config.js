/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'dark': {
        100: '#E5B8F4',
        200: '#C147E9',
        300: '#C147E9',
        400: '#2D033B'
      },
      'light': {
        100: '#F1EAFF',
        200: '#E5D4FF',
        300: '#DCBFFF',
        400: '#D0A2F7'
      }
    },
    extend: {},
  },
  plugins: [],
}

