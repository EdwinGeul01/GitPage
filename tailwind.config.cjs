/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
/*

npx tailwindcss -i ./src/styles/input.css -o ./src/styles/output.css --watch


*/