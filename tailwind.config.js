const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontFamily: {
        header: ["Bitter", "serif"],
        miniHeader: ["Comic Neue", "cursive"],
      },
      colors: {
        header: "#2E3646",
        subHeader: "#5F6D7E",
        HLHeader: "#79CA04",
        paragraph: "#5F6D7E",
        navbarTextActive: "#494B46",
        lightGreen: {
          10: "#fafdf5", // 10% opacity shade
          20: "#f6fbee", // 20% opacity shade
          30: "#f2fae6", // 30% opacity shade
          40: "#edf8de", // 40% opacity shade
          50: "#e9f6d5", // 50% opacity shade
          60: "#e4f4cd", // 60% opacity shade
          70: "#becbab", // Base shade
          80: "#98a389", // 80% opacity shade
          90: "#727a67", // 90% opacity shade
          100: "#4c5144", // 100% opacity shade
        },
        greenShades: {
          10: "#e4f4cd", // 10% opacity shade
          20: "#d2edab", // 20% opacity shade
          30: "#bce582", // 30% opacity shade
          40: "#a6dc58", // 40% opacity shade
          50: "#8fd32e", // 50% opacity shade
          60: "#79ca04", // 60% opacity shade
          base: "#65a803", // Base color
          70: "#518703", // 70% opacity shade
          80: "#3d6502", // 80% opacity shade
          90: "#284301", // 90% opacity shade
          100: "#182801", // 100% opacity shade (darkest)
        },
        grayShades: {
          10: "#d5d7da", // 10% opacity shade
          20: "#b9bcc1", // 20% opacity shade
          30: "#979ba3", // 30% opacity shade
          40: "#747984", // 40% opacity shade
          50: "#515865", // 50% opacity shade
          base: "#2e3646", // Base color
          60: "#262d3a", // 60% opacity shade
          70: "#1f242f", // 70% opacity shade
          80: "#171b23", // 80% opacity shade
          90: "#0f1217", // 90% opacity shade
          100: "#090b0e", // 100% opacity shade (darkest)
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
