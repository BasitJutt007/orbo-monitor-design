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
      screens: {
        "max-md": { max: "1400px" },
        "b-point": { max: "1250px" },
        "f-point": { min: "1470px" },
        "c-point": { max: "1300px" },
      },
    },
  },
  plugins: [],
};
