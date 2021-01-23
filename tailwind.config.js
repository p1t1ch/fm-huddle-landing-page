const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        light: 'hsl(301, 70%, 71%)',
        DEFAULT: 'hsl(257, 40%, 49%)',
        bright: 'hsl(322, 100%, 66%)',
      },
      neutral: {
        DEFAULT: 'hsl(0, 0%, 100%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        headings: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ['2.5rem', 1.5],
      },
      gap: {
        15: '3.75rem',
      },
      boxShadow: {
        DEFAULT: '2px 4px 9px 3px rgba(0, 0, 0, 0.258633)',
      },
      width: {
        50: '12.5rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        desktop: 'url(../icons/bg-desktop.svg)',
        mobile: 'url(../icons/bg-mobile.svg)',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['focus-visible'],
      backgroundColor: ['focus-visible'],
    },
  },
}
