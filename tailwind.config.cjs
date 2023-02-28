/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      gridTemplateColumns: {
        "timeline": "minmax(250px, auto) 2fr 1fr;"
      }
    },
    fontFamily: {
      'my-font-style': ["Nunito"]
    },
    container: {
      padding: "1rem",
      center: true
    
    },
  },
  plugins: [],
}
