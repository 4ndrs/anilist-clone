/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 200ms ease-in-out",
        fadeOut: "fadeOut 200ms ease-in-out forwards",
        slideDown: "slideDown 200ms ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1.0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-0.3rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      colors: {
        nav: {
          1: "#2b2d42",
          2: "#bcbedc",
        },
      },
      boxShadow: {
        blueGlow: "0 2px 10px rgb(8 150 230 / 60%)",
        blueGlow2: "0 2px 43px rgb(8 150 230 / 60%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
