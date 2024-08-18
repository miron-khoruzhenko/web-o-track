/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: '#46D2B0',
        dark: '#071627',
      },
      fontFamily: {
        'ascii' : 'Ascii, monospace'
      }
    },
  },
  plugins: [],
}