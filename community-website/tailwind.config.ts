import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-opacity-80': 'rgba(0, 0, 0, 0.8)',
        'red-lightest': '#F9E8E8',
        'red-lighter': '#EE4540',
        'red': '#e3324a',
        'red-dark': '#801336',
        'red-darker': '#510A32',
        'red-darkest': '#2D142C',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '128': '32rem',
        '144': '36rem', 
        '160': '40rem', 
        '192': '48rem', 
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
