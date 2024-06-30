import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize: {
      "auto": "auto",
      "cover": "cover",
      "contain": "contain",
      "80%": "80%",
      "60%": "60%"
    },
    screens: {
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "search": "url(../../public/images/paw.png)",
        "dog": "url(../../public/images/dog_512.png)",
        "cat": "url(../../public/images/cat_512.png)",
        "etc": "url(../../public/images/tracks.png)",
        "logo": "url(../../public/images/logo.png)",
        "logotext": "url(../../public/images/logo_350.png)",
        "noresult": "url(../../public/images/question_mark.png)"

      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "white": "#ffffff",
        "purple": "#3f3cbb",
        "midnight": "#121063",
        "metal": "#565584",
        "tahiti": "#3ab7bf",
        "silver": "#ecebff",
        "bubble-gum": "#ff77e9",
        "bermuda": "#78dcca",
        "lightyellow": "#fefded",
        "lightgray": "#eeeeee",
        "matchagreen": "#76885b",
        "pastelrose": "#ffddd2",
        "pastelcream": "#fff2cc",
        "softblack": "#333",
        "logopurple": "#eeedf7" 
        // "#e8e7f8"
      }
    },
  },
  plugins: [],
};
export default config;
