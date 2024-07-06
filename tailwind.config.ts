import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      colors: {
        'base-color': '#1C1C1C',
        'gray-extralight': '#B5B5B6',
        'gray-light': '#848587',
        'price-highlight': '#DA4B4F',
        'buy-button': '#40B25C',
        'buy-button-hovered': '#1C6C3E',
        'buy-button-active': '#A3F9B9',
      }
    },
  },
  plugins: [],
};
export default config;
