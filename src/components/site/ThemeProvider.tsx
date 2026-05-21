"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import type { ThemeName } from "@/lib/tokens/colors";

const envTheme = process.env.NEXT_PUBLIC_THEME;
const theme: ThemeName = envTheme === "dark" ? "dark" : "bright";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme === "bright" ? "light" : "dark";
  }, []);

  return <>{children}</>;
}
