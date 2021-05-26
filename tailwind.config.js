module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('./theme.presets.js')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transitionDelay: ['hover', 'focus'],
      animation: ['motion-reduce'],
    },
  },
  plugins: [],
}
