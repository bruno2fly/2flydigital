import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/site/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2FLY Digital | Built Different. Powered by AI.",
  description:
    "A two-person team — one human, one AI — building tools and running campaigns that outperform entire agencies. 2FLY Flow, BossCLAWD, and full-service digital marketing.",
  keywords: [
    "AI marketing agency",
    "digital marketing",
    "2FLY Flow",
    "BossCLAWD",
    "AI business intelligence",
    "content production",
    "brand strategy",
  ],
  openGraph: {
    title: "2FLY Digital | Built Different. Powered by AI.",
    description:
      "Your agency runs on vibes. Ours runs on AI. Products, campaigns, and results from a new kind of agency.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0B0D" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFB" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-bg text-muted">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
