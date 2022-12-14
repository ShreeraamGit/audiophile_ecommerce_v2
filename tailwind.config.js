/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      // => @media (min-width: 576px) { ... }

      md: "652px",
      // => @media (min-width: 960px) { ... }

      lg: "930px",
      // => @media (min-width: 1440px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
