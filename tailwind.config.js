/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D0AFF",
        secondary: "#9F01FF",
        dark: "#080016",
      },
    },
  },
  plugins: [],
};
