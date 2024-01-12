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
        "primary-text": "#0A1835",
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
        gray: "#848B9A",
        "border-color": "#CED1D7",
        white: "#FFFFFF",
        "light-gray": "#F6F9FC",
        "light-gray-2": "#F0F3FA",
        "light-gray-3": "#545D72",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient--1":
          "linear-gradient(0deg, rgba(122, 160, 255, 0.22) 0%, rgba(128, 232, 255, 0.22) 100%)",
        "btn-primary-gradient":
          "linear-gradient(90deg, rgb(0, 255, 162) 0%, rgb(255, 230, 100) 100%)",
        "btn-primary-gradient-hover":
          "linear-gradient(90deg, rgb(0, 255, 162) 40%, rgb(255, 230, 100) 80%)",
        "bg-none": "none",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
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
