/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.vue",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      height: {
        '85': '85vh',
      },
      borderRadius: {
        'circle': '50%',
      }
    },
  },
  plugins: [],
}
