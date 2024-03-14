/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'madimi-one': ['Madimi One', 'sans-serif'],
        'roboto-regular': ['Roboto Regular', 'monospace']
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ],
}

