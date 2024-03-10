/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors : {
        'black-dark' : '#00000050',
        'white-light' : '#FFFFFF30',
        'white-medium' : '#FFFFFF40',
        'neon-blue' : '#2FB8FF',
      }
    },
  },
  plugins: [],
}

