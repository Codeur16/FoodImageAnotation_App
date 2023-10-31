/** @type {import('tailwindcss').Config} */
// import { FontFamily } from './GlobalStyles'
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/views/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
   
    extend: {
     
      colors: {
        'default': '#29C752',
      },
    },
  },
  plugins: [nativewind()],
}

