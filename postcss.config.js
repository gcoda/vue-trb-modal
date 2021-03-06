class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\\/]+/g) || [];
  }
}
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')({}),
    require('autoprefixer'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.vue'],
      extractors: [
        {
            extractor: TailwindExtractor,
            extensions: ['vue']
        }
      ]
    }),
  ],
}
