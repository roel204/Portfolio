/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/index.css'
  ],
  theme: {
    extend: {
      colors: {
        'cgreen': '#20C20C'
      },
    },
  },
  plugins: [],
}

