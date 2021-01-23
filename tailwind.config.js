const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        light: 'hsl(301, 70%, 71%)',
        DEFAULT: 'hsl(257, 40%, 49%)',
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
    },
  },
}
