/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{{html,js,jsx,ts,tsx,vue,astro}"],
  theme: {
    extend: {
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("prettier-plugin-tailwindcss"),
    require("@material-tailwind/html/utils/withMT"),
    require("@tailwindcss/deprecation-warnings"),
  ],
};
