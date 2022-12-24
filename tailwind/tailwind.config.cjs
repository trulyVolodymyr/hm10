/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      gray: '#6b7280',
      'gray-light': '#f3f4f6',
      'gray-ultra-light': '#e5e7eb',
      'gray-medium': '#9ca3af',
      'gray-dark': '#374151'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
