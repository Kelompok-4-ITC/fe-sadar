/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
        fontFamily: {
            'montserrat': ['Montserrat','sans-serif']
        }
    }
},
  plugins: [
    // ]]require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
};
