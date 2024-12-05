/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fbb03b',
        'secondary': '#0593fe',
        'tertiary': '#93278f',
        'white': '#fff',
        'black': '#000',
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
        'secondary': ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}

