/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/views/**/*.{js,jsx,ts,tsx}","./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}

