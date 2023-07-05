/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      lg: "768px",
      lgmax: { max: "768px" },

      // => @media (min-width: 640px) { ... }
      md: "1140px",
      mdmax: { max: "1140px" },
      // => @media (min-width: 1024px) { ... }

      xl: "1400px",
      xlmax: { max: "1400px" },
      // => @media (min-width: 1280px) { ... }

      xxl: "1920px",
      xxlmax: { max: "1920px" },
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
