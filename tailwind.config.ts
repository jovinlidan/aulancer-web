import SIZE_CONSTANT from "@/constants/size.constant";
import type { Config } from "tailwindcss";

export const screenSize = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  ["2xl"]: 1536,
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: `${screenSize.sm}px`,
      md: `${screenSize.md}px`,
      lg: `${screenSize.lg}px`,
      xl: `${screenSize.xl}px`,
      "2xl": `${screenSize["2xl"]}px`,
    },
    extend: {
      backgroundImage: {
        "gradient-contact-us":
          "linear-gradient(225deg, #6675F7 0%, #57007B 100%)",
        "gradient-purple-text-1":
          "linear-gradient(180deg, #DE4396 0%, rgba(13, 28, 159, 0.0) 100%)",
        "gradient-purple-text-2":
          "linear-gradient(225deg, #F7666F 0%, #406AFF 100%)",
        "gradient-service-text":
          "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
      },
      backgroundColor: {
        header: "#FFFF",
        "light-gray-blue": "#F9F9FF",
        "bullet-pagination": "#57007B !important",
      },
      borderColor: {
        "service-active": "#F76680",
      },
      height: {
        header: "79px",
      },
      boxShadow: {
        header: "0px 4px 40px 0px rgba(0, 0, 0, 0.10)",
        service: "0px 4px 30px 0px rgba(0, 0, 0, 0.05)",
      },
      textColor: {
        default: "#4A5568",
        "gray-50": "#FAFAFA",
        "gray-900": "#1A202C",
        "service-label": "##2D3748",
      },
      zIndex: {
        "service-bg": "2",
        "service-ball-decoration": "1",
        header: "1000",
      },
    },
  },
  plugins: [],
};
export default config;
