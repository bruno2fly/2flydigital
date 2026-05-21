export const brand = {
  50: "#F4F7FF",
  100: "#E6EEFF",
  300: "#6B91FF",
  400: "#2E6BFF",
  500: "#0052FF",
  600: "#0040CC",
} as const;

export const glow = "rgba(59, 123, 255, 0.35)" as const;

export const darkPalette = {
  bg: "#0A0B0D",
  surface: "#0F1115",
  surface2: "#151821",
  border: "#1F2430",
  text: "#FFFFFF",
  textMuted: "#8A93A6",
  accent: brand[500],
  accentHover: brand[400],
  accentPressed: brand[600],
  accentSoft: brand[100],
  glow,
} as const;

export const brightPalette = {
  bg: "#FAFAFB",
  surface: "#FFFFFF",
  surface2: "#F4F6FA",
  border: "#E4E8F0",
  text: "#0A0B0D",
  textMuted: "#5A6478",
  accent: brand[500],
  accentHover: brand[400],
  accentPressed: brand[600],
  accentSoft: brand[50],
  glow: "rgba(59, 123, 255, 0.22)",
} as const;

export const palettes = {
  dark: darkPalette,
  bright: brightPalette,
} as const;

export type ThemeName = keyof typeof palettes;
