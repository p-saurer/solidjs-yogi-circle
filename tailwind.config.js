/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "indigo-dye": "#153B50",
        "green-yellow-crayola": "#F7EF99",
        "morning-blue": "#81A034",
        "deep-taupe": "#775B59",
        "dark-sienna": "#32161F",
        "as-black": "#171717",
        "as-white": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
