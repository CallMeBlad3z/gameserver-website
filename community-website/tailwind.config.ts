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
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'black-opacity-80': 'rgba(0, 0, 0, 0.8)',
        'red-custom': '#FF304B',
        'blue-custom': '#7176FF',
        'dark': '#2C2F33',
        'darker': '#23272A',
        'darkest': '#121212',
        'red-dc': '#CA0606',
        'green-dc': '#2ecc71',
        'blue-dc': '#3498db',
        'light-blue-dc': '#5bc0de',
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
        '176': '44rem', 
        '192': '48rem', 
      },
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
    },
  },
  plugins: [],
};
export default config;
