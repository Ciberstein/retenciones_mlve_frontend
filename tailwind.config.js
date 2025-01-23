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
        'meli-brand': {
          500: '#FFE600'
        },
        'meli-blue': {
          100: '#ECF5FA',
          150: '#E3EEFB',
          200: '#D9E7FA',
          300: '#C6DBF7',
          400: '#B3D0F5',
          500: '#3483FA',
          600: '#2868C7',
          700: '#1F4E96',
          800: '#173C73'
        },
        'brand-red': {
          100: '#FEECEE',
          150: '#FDE2E5',
          200: '#FCD7DC',
          300: '#FBC5CB',
          400: '#FAB1B9',
          500: '#F23D4F',
          600: '#D12440',
          700: '#A51C33',
          800: '#7F1727',
        },
        'brand-green': {
          100: '#E6F6EE',
          150: '#D9F2E5',
          200: '#CBEDDC',
          300: '#B2E5CB',
          400: '#98DBB9',
          500: '#04A54F',
          600: '#028744',
          700: '#006533',
          800: '#004D27',
        },
        'brand-orange': {
          100: '#FFF1EB',
          150: '#FFEBE0',
          200: '#FFE4D6',
          300: '#FFD6C2',
          400: '#FFC9AD',
          500: '#FF7733',
          600: '#E6540C',
          700: '#CB3E0B',
          800: '#A62A08',
        },
        'solid-gray': {
          100: '#F5F5F5',
          150: '#E5E5E5',
          250: '#BFBFBF',
          550: '#737373',
          900: '#1A1A1A',
        },
      }
    },
  },
  plugins: [],
}

