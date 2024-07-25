/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "hsl(228, 8%, 98%)",
        green: "hsl(93, 58%, 66%)",
      },
      screens: {
        xs: "440px",
      }
    },
  },
  plugins: [],
};
