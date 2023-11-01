import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-contact-us":
          "linear-gradient(225deg, #6675F7 0%, #57007B 100%)",
        "gradient-purple-text-1":
          "linear-gradient(180deg, #DE4396 0%, rgba(13, 28, 159, 0.0) 100%)",
        "gradient-purple-text-2":
          "linear-gradient(225deg, #F7666F 0%, #406AFF 100%)",
      },
      backgroundColor: {
        header: "#FFFF",
        "light-gray-blue": "#F9F9FF",
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
    },
  },
  plugins: [],
};
export default config;
