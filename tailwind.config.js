/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      satisfy: ["Satisfy", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-dark": "#252525",
        "brand-blue-dark": "#00153B",
        "brand-blue-100": "#00113F",
        "brand-blue": "#072FF7",
        "brand-teal": "#CCFFE5",
        "brand-red": "#FC1A02",
        "brand-gray": "#707070",
        "brand-gray-light": "#C6C6C6",
        "brand-gray-25": "#E4E4E4",
        "brand-gray-50": "#F0F3F5",
        "brand-gray-500": "#515151",
        "brand-gray-600": "#ECECEC",
        "brand-gray-700": "#636363",
        "brand-gray-800": "#C7C7C7",
        "brand-red-25": "#FFF2F1",
        "brand-red-50": "#FFABA2",
        "brand-red-100": "#B92313",
        "brand-blue-25": "#DBE2F6",
        "brand-gray-10": "#FAFBFF",
        "brand-gray-5": "#F2F2F2",
      },
      screens: {
        "3xl": "1776px",
      },
      boxShadow: {
        custom: "0 3px 6px 0 rgba(0,0,0,0.16)",
        "4xl": "0 10px 10px 0 rgba(0,0,0,0.10)",
      },
      backgroundImage: {
        g1: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
        g2: "linear-gradient(90deg, rgba(0,21,59,1) 0%, rgba(0,13,37,1) 33%, rgba(0,21,59,0) 100%)",
        g3: "linear-gradient(0deg, rgba(0,21,59,1) 0%, rgba(0,13,37,1) 33%, rgba(0,21,59,0) 100%)",
        g4: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-labeled-groups")(["custom", "2"]),
  ],
};
