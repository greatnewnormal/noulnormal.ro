const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    'public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
            },
          },
        },
      },
    },
  },
  variants: {
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}