/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        migra: ["Migra", "serif"],
      },
      fontWeight: {
        extralight: "200",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};

module.exports = config;
