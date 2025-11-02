import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fef9f0",
          100: "#fef3e0",
          200: "#fce8c1",
          300: "#f4d9a1",
          400: "#e8c563",
          500: "#d4af37",
          600: "#c9a227",
          700: "#b8860b",
          800: "#996b1a",
          900: "#7a5216",
        },
        cream: {
          50: "#fafbf8",
          100: "#f5f7f0",
          200: "#efefea",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        display: ["'Cormorant Garamond'", "serif"],
      },
      backgroundColor: {
        DEFAULT: "#fafbf8",
      },
      textColor: {
        DEFAULT: "#2c2c2c",
      },
    },
  },
  plugins: [],
};

export default config;