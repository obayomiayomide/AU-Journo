/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#2e7b3f",
      white: "#ffffff",
      default: "1a1a1a",
      ash: "#B0B7B1",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/L-Page-Bg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
