import type { Config } from "tailwindcss";
import { brand } from "./src/lib/tokens/colors";

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand,
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          pressed: "var(--accent-pressed)",
          soft: "var(--accent-soft)",
        },
      },
      boxShadow: {
        glow: "0 0 24px var(--glow)",
      },
      ringColor: {
        accent: "var(--accent)",
      },
    },
  },
};

export default config;
