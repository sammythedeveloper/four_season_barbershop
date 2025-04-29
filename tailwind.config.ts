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
      animation: {
        mesh: "mesh 5s infinite alternate ease-in-out",
      },
      keyframes: {
        mesh: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: "0.2" },
          "25%": { transform: "translateX(10px) translateY(10px)", opacity: "0.4" },
          "50%": { transform: "translateX(20px) translateY(20px)", opacity: "0.6" },
          "75%": { transform: "translateX(10px) translateY(-10px)", opacity: "0.8" },
          "100%": { transform: "translateX(0) translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
