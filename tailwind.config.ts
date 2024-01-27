import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lg: "1023px",
        // => @media (max-width: 1023px) { ... }
        sm: { max: "400px" },
        // => @media (max-width: 400px) { ... }
        md: { min: "639px", max: "1000px" },
      },
    },
  },
  plugins: [],
};
export default config;
