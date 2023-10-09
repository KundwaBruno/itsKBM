module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A96637",
        background: "#111010",
        background_light: "#FAFAFA",
        custom_gray: "#929292",
        custom_black: "black",
        custom_white: "white"

      },
      fontFamily: {
        cinzel: ["Cinzel", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
