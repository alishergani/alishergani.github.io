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
        portfolio: {
          bg: "#0f172a",
          card: "#111827",
          accent: "#38bdf8",
          text: "#e2e8f0",
          muted: "#94a3b8",
          border: "rgba(148, 163, 184, 0.18)",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.22), 0 10px 60px rgba(14, 165, 233, 0.24)",
      },
      backgroundImage: {
        "accent-radial":
          "radial-gradient(circle at center, rgba(56, 189, 248, 0.26) 0%, rgba(15, 23, 42, 0) 65%)",
      },
      maxWidth: {
        "screen-content": "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
