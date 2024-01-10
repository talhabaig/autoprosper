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
        primary: "#FF3363",
        "primary-light": "#FFEDF1",
        green: "#00FFA2",
        "green-light": "#E2FFF5",
        yellow: "#FFE664",
        "yellow-light": "#F5F3E8",
        dark: "#001B44",
        "dark-2": "#4B5768",
        "dark-3": "#5D6878",
        "dark-4": "#8E97A6",
        "dark-5": "#B7BCC3",
        "dark-6": "#E5E8ED",
        "dark-7": "#ECEEF1",
        "status-info": "#219FFF",
        "status-info-light": "#E2F3FF",
        "status-success": "#17BD8D",
        "status-success-light": "#D7FFF3",
        "status-warning": "#FFA114",
        "status-warning-light": "#FFF0DA",
        "status-danger": "#FF4E3E",
        "status-danger-light": "#FFEBE9",

        white: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xsm: "380px",

      sm: "576px",
      // => @media (min-width: 576pc)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "992px",
      // => @media (min-width: 992)

      xl: "1200px",
      // => @media (min-width: 1200)

      "2xl": "1400px",
      // => @media (min-width: 1400)
      "3xl": "1600px",
      // => @media (min-width: 1600)
      "4xl": "1800px",
    },
  },
  plugins: [],
};
export default config;
