/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#D34B64",
      secondary: "#D3764B",
      ternary: "#D34BA8",
      },
    },
  },
  plugins: [],
}
