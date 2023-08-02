module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      autoprefixer: { flexbox: true, grid: true },
      stage: 3
    }),
    require('postcss-normalize')
  ]
}
