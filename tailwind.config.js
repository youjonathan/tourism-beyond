/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
        playfair: ["var(--font-playfair)", ...fontFamily.serif],
        dancing: ["var(--font-dancing)"],
      },
      colors: {
        dark: "#000000",
        light: "#f5f5f5",
        mygray: "#C6C6C6",
        primary: "#2678F3",
      },
    },
  },
  plugins: [],
};
