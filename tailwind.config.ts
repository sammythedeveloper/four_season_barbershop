import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      colors: {
        gold: "#FFD700", // ✅ correctly placed
      },
      animation: {
        pulsegrid: "pulsegrid 8s ease-in-out infinite",
        "move-left": "move-left 90s linear infinite",
        "spin-reverse-slow": "spin-reverse-slow 4s linear infinite",
        "border-spin": "border-spin 4s linear infinite", // ✅ Added
      },
      keyframes: {
        pulsegrid: {
          "0%, 100%": { opacity: "0.1", transform: "translate(0, 0)" },
          "50%": { opacity: "0.3", transform: "translate(5px, 5px)" },
        },
        "ping-large": {
          "75%,100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
        "move-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
