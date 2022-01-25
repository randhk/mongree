module.exports = {
  plugins: [
    require('tailwindcss'),
    require('tailwindcss-interaction-variants'),
    require('autoprefixer')({ browsers: 'last 2 versions, not ie <= 11, not ie_mob <= 11', grid : false })
  ]
}