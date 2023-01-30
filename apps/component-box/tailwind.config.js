const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'gradient-move': {
          '0%': {},
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-animation': 'gradient-move 10s ease infinite',
      },
      backgroundSize: {
        400: '400%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        info: {
          50: '#F3EFFB',
          100: '#CFBCF2',
          200: '#A081D9',
          300: '#8662C7',
          400: '#724BB7',
          500: '#653CAD',
          600: '#51279B',
          700: '#421987',
          800: '#34126F',
          900: '#240754',
        },
        error: {
          50: '#FFEEEE',
          100: '#FACDCD',
          200: '#F29B9B',
          300: '#E66A6A',
          400: '#D64545',
          500: '#BA2525',
          600: '#A61B1B',
          700: '#911111',
          800: '#780A0A',
          900: '#610404',
        },
        primary: {
          50: '#F9F9F6',
          100: '#F9FBE9',
          200: '#F2F5D0',
          300: '#CAD37E',
          400: '#A3AC4D',
          500: '#808646',
          600: '#696E3F',
          700: '#555D09',
          800: '#3B4200',
          900: '#212404',
        },
        secondary: {
          50: '#FFFAEB',
          100: '#FCEFC7',
          200: '#F8E3A3',
          300: '#F9DA8B',
          400: '#F7D070',
          500: '#E9B949',
          600: '#C99A2E',
          700: '#A27C1A',
          800: '#7C5E10',
          900: '#513C06',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
