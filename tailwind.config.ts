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
        primary:"#CC1587",
        secondary:"#26538C",
        tertiary:"#00AFF0",
        lighttext: "#7E7E7E",
      },
      backgroundImage: {
        'chairman':'url("/chairman.jpg")',
        'parallax': 'url("/parallax.jpg")',
        'parallax2': 'url("/parallax2.jpg")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
