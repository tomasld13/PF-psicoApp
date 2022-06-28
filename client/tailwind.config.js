/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
      '40': '0.40',
    },
    colors: {
      primary: '#575989',
      secundary: '#f0efff',
      darkgray: "#212329",
    },
  },
  },
  plugins: [],
}
