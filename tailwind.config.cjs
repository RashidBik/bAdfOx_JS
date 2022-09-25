/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        spice:  ["'Bungee Spice'", 'cursive'],
        pacifico: ["'Pacifico'", 'cursive'],

       },
    },
  },
  plugins: [],
}