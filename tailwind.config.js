/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#00C2FF14",
        blue: "#F76A07",
        gray: "#D8CEDC",
        border: "#122155",
        blackBackground: "#010517"
      },
      backgroundColor: {
        background: "#eeebc4",
      },
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      keyframes: {
        slide: {
          'from': {
            transform: "translateX(0)",
          },
          'to': {
            transform: "translateX(calc(-100% - 0.5rem))",
          },
        },
      },
      animation: {
        slide: 'slide 10s infinite linear',
      },
    },
  },
  plugins: [],
};
