/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary400: '#51d33d',
        primary500: '#3C992D',
        primary600: '#22581a',
        primary700: '#11300c',
        background: '#1E1E1E',
        almostBlack: '#222222',
        grey200: '#f8f8f8',
        grey300: '#c0c0c0',
        grey400: '#818080',
        grey500: '#5e5e5e',
        textColor: '#EFEFEF',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        standard: '18rem',
        lg: '16rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      scale: {
        103: '1.03',
      },
    },
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '846px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
