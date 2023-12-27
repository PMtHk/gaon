import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      backgroundImage: {
        "home-intro": "url('/4772f52a-b7b0-4191-a6a9-bbcda3b1579a.png')",
        "call-info": "url('/cda7811e-098c-4791-af64-770c353f7736.png')",
        vc: "url('/f9496384-f741-408e-a9f7-0819fce106bc.png')",
        vb: "url('/6120120b-54bb-4ac5-8ccb-6d1d8ef64acb.png')",
        ranking: "url('/c161a433-8ded-4789-be91-e59121399f99.png')",
        "care-tool": "url('/823ece4d-6728-4cfb-9561-1fe98db42022.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
