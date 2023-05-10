/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      lg: "768px",
      lgmin: { 'max': "768px" },

      // => @media (min-width: 640px) { ... }
      md: "1140px",
      mdmin: { 'max': "1140px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      xlmin: { 'max': "1400px" },
      // => @media (min-width: 1280px) { ... }

      xxl: "1920px",
      xxlmin: { 'max': "1920px" },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
