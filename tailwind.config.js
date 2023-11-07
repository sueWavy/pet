/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "820px" },
      },
      colors: {
        brand: "#3D89D0",
      },
    },
  },
  plugins: [],
};
