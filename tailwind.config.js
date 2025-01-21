/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'meli-yellow': {
          500: '#FFE600'
        },
        'meli-blue-primary': {
          500: '#3483fa'
        },
        'meli-blue-secondary': {
          500: '#d3e3f9'
        },
        'meli-gray': {
          500: '#F5F5F5'
        }
      }
    },
  },
  plugins: [],
}

