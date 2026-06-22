/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":       { transform: "translateY(-18px) rotate(4deg)" },
          "66%":       { transform: "translateY(10px) rotate(-3deg)" },
        },
      },
      animation: {
        float: "float linear infinite",
        // duration + delay are set inline via style prop per icon
      },
    },
  },
  plugins: [],
};