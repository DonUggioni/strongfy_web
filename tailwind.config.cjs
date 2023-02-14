/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary400: '#51d33d',
        primary500: '#3C992D',
        primary600: '#22581a',
        background: '#1E1E1E',
        textColor: '#EFEFEF',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        standard: '18rem',
      },
    },
  },
  plugins: [],
};
