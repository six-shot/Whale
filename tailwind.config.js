/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
 

  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#13141A",
        secondary: "#00f6ff",
        dimWhite: "#F6F6F6 ",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Exa", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [

  ],
}
