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
        orange: {
          DEFAULT: "#F97316",
          dark: "#EA6C0A",
          light: "#FFF7ED",
          mid: "#FED7AA",
        },
        text: {
          primary: "#111827",
          muted: "#6B7280",
          light: "#9CA3AF",
        },
        border: {
          DEFAULT: "#F3F4F6",
          strong: "#E5E7EB",
        },
      },
      fontFamily: {
      sans: ["var(--font-sans)"],
    },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.06)",
        md: "0 4px 16px rgba(0,0,0,0.08)",
        lg: "0 8px 32px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
