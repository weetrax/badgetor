// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: {
        100: "#fbd0d8",
        200: "#f8a1b1",
        300: "#f4728b",
        400: "#f14364",
        500: "#ed143d",
        600: "#be1031",
        700: "#8e0c25",
        800: "#5f0818",
        900: "#2f040c",
      },

      green: colors.green,
      //CUSTOM COLORS
      //https://www.tailwindshades.com/
      //or crtl g + ctrl k on hexa value (#007ce6)

      dark: {
        100: "#d1d2d4",
        200: "#a4a5a9",
        300: "#76777f",
        400: "#494a54",
        500: "#1b1d29",
        600: "#161721",
        700: "#101119",
        800: "#0b0c10",
        900: "#050608",
      },
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
