/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: { sans: ['TeXGyreAdventor'] },
    colors: {
      blue: '#196AA6',
      orange: '#F79420',
      black: '#000000'
    }
  },
  plugins: []
}
