/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        lime: "#D8DB2F",
        slate: {
          900: "#133041",
          700: "#4E6E7E",
          500: "#6B94A8",
          300: "#9ABED5",
          100: "#E4F4FD",
        },
        red: "#D73328",
      },
    },
    fontSize: {
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],
      xl: [
        "1.125rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: "700",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: "700",
        },
      ],
      "3xl": [
        "3.5rem",
        {
          lineHeight: "1.25",
          letterSpacing: "-1px",
          fontWeight: "700",
        },
      ],
    },
    spacing: {
      500: "2.5rem",
      400: "2rem",
      300: "1.5rem",
      200: "1rem",
      150: "0.75rem",
      100: "0.5rem",
    },
  },
  plugins: [],
};
