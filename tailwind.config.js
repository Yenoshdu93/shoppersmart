/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      font1: ["Inria Serif", "serif"],
      font2: ["Lora", "serif"],
      font3: ["Montserrat", "sans - serif"],
      font4: ["Satisfy", "cursive"],
    },
    screens: {
      sm: "560px",
      md: "620px",
      lg: "920px",
      xl: "1240px",
      "2xl": "1520px",
    },
    extend: {},
  },
  plugins: [],
};
