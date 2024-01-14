/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '5/4': '5 / 4',
      },
    },
  },  
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"],
  }
}

