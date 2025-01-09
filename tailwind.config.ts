import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222226",
        secondary: "#fcf3ed",
        accent: "#ed8a26",
      },
      boxShadow: {
        navbar: "0px 0px 48px 24px rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
