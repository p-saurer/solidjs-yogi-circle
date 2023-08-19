/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cascade: {
          50: "rgb(var(--color-cascade-50) / <alpha-value>)",
          100: "rgb(var(--color-cascade-100) / <alpha-value>)",
          200: "rgb(var(--color-cascade-200) / <alpha-value>)",
          300: "rgb(var(--color-cascade-300) / <alpha-value>)",
          400: "rgb(var(--color-cascade-400) / <alpha-value>)",
          500: "rgb(var(--color-cascade-500) / <alpha-value>)",
          600: "rgb(var(--color-cascade-600) / <alpha-value>)",
          700: "rgb(var(--color-cascade-700) / <alpha-value>)",
          800: "rgb(var(--color-cascade-800) / <alpha-value>)",
          900: "rgb(var(--color-cascade-900) / <alpha-value>)",
        },
        "green-yellow-crayola": "rgb(var(--color-green-yellow-crayola) / <alpha-value>)",
        sushi: "rgb(var(--color-sushi) / <alpha-value>)",
        "deep-taupe": "rgb(var(--color-deep-taupe) / <alpha-value>)",
        "dark-sienna": "rgb(var(--color-dark-sienna) / <alpha-value>)",
        "as-black": "rgb(var(--color-as-black) / <alpha-value>)",
        "as-white": "rgb(var(--color-as-white) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  darkMode: ["class", "[data-mode='dark']"],
};
