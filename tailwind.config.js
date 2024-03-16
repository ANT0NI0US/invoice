/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#fff",
        primary: "#02BEC4",
        lightRed: "#f5f5f5",

        darkB: "#2D404E",
        lightB: "#576E7E",
        lightGray: "#BCD2E0",
        black: "#000000",
        gray: "#707D84",
        dark: "#27282C",
      },
    },
  },
  plugins: [],
};
