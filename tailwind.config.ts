import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainGreen: "#1b5127",
        highDark: "#000000",
        lowLight: "#F5F5F5",
        greish: "#111111",
        lowDark: "#1c1c1c",
        highLight: "#FFFFFF",
        trans: "#0e0e0e",
      },
      screens: {
        bs: "300px",
        sm: "400px",
        md: "600px",
        lg: "800px",
        xl: "1024px",
        xxl: "1350px",
      },
      animation: {
        slide: "slide 2s ease-in-out infinite",
        "shadow-pulse": "shadow-pulse 2s infinite",
        // "shadow-pulse-black": "shadow-pulse-black 2s infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(0%)" },
          "25%": { transform: "translateX(5%)" },
          "75%": { transform: "translateX(-5%)" },
        },
        "shadow-pulse": {
          "0%, 100%": {
            boxShadow: "0 20px 50px rgba(255, 255, 255, 0.9)",
          },
          "25%": {
            boxShadow: "20px 20px 50px rgba(255, 255, 255, 0.9)",
          },
          "50%": {
            boxShadow: "0 0 50px rgba(255, 255, 255, 0.9)",
          },
          "75%": {
            boxShadow: "-20px 20px 50px rgba(255, 2555, 255, 0.9)",
          },
        },
        //   "shadow-pulse-black": {
        //     "0%, 100%": {
        //       boxShadow: "0px 30px 90px rgba(0, 0, 0, 0.4)",
        //     },
        //     "25%": {
        //       boxShadow: "20px 30px 90px rgba(0, 0, 0, 0.4)",
        //     },
        //     "50%": {
        //       boxShadow: "0px 30px 90px rgba(0, 0, 0, 0)",
        //     },
        //     "75%": {
        //       boxShadow: "-20px 30px 90px rgba(0, 0, 0, 0.4)",
        //     },
        //   },
      },
    },
  },
  plugins: [],
};
export default config;
