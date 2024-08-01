/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          50: '#522258',
          100: '#8C3061',
          200: '#C63C51',
          300: '#D95F59',
        },
      }
    },
  },
  plugins: [],
}

