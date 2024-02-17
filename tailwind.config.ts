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
        'custom-blue': '#162785', // Adding custom color
        'custom-yellow': '#f7b637', // Adding custom color
        'custom-dark-yellow': '#e5a935',
        'custom-dark-blue': '#030534', // Hero footer background
        'custom-green' : '#10893C'
      },
    },
  },
  plugins: [],
};
export default config;
