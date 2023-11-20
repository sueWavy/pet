/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        s: { max: "628px" },
        sm: { max: "820px" },
        md: { max: "1070px" },
      },
      colors: {
        brand: "#3D89D0",
      },
    },
  },
  plugins: [],
};
