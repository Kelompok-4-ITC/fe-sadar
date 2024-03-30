/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        sadar: {
          "second-white": "#F3FFFA",
          "third-white": "#D9FFEE",
          "fourth-white": "#C0FFE3",
          "fifth-white": "#A6FFD7",
          "sixth-white": "#8CFFCC",
          "secondary-color": "#6EDDAC",
          "primary-color": "#54BB8D",
          "fourth-black": "#3D9970",
          "thrid-black": "#297754",
          "second-black": "#19553A",
        },
        t: {
          black: "#202020",
          grey: "#8899A6",
          white: "#F9F7F7",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [
    // ]]require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
};
