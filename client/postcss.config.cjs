// Use the Tailwind PostCSS plugin (separate package for Tailwind v4+)
const tailwindPostcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwindPostcss(),
    require('autoprefixer')(),
  ],
}
