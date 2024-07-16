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
        "grey-100": "#dcdcdc",
        "grey-200": "#c6c6c6",
        "grey-300": "#b0b0b0",
        "grey-400": "#9a9a9a",
        "grey-500": "#848484",
        "grey-600": "#6e6e6e",
        "grey-700": "#585858",
        "grey-800": "#424242",
        "grey-900": "#2c2c2c",
        "greyLight-100": "#e0e0e0",
        "greyLight-200": "#e3e3e3",
        "greyLight-300": "#e7e7e7",
        "greyLight-400": "#eaeaea",
        "greyLight-500": "#eeeeee",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        helveticaBold: ["HelveticaBold", "sans-serif"],
        futuraExtraBold: ["FuturaCondensedExtraBold", "sans-serif"],
        tradeGothic: ["TradeGothic", "sans-serif"],
        tradeGothicBold: ["TradeGothicBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
