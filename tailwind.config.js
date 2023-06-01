/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Public': ['Public Sans', 'sans-serif', defaultTheme.fontFamily.Public]
      },
      colors:{
        'gold':'#c7922b',
        'dark-blue':'#084975'
      }
    },

  },
  plugins: [],
}
