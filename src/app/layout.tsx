import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2FLY Digital Marketing | AI-Powered Marketing Agency",
  description:
    "Your brand, elevated. 2FLY is an AI-powered digital marketing agency delivering measurable results through data-driven strategy, creative content, and cutting-edge technology.",
  keywords: [
    "digital marketing",
    "AI marketing",
    "social media management",
    "Meta ads",
    "Google Business Profile",
    "content production",
    "brand strategy",
  ],
  openGraph: {
    title: "2FLY Digital Marketing | AI-Powered Marketing Agency",
    description: "Your brand, elevated. AI-powered marketing that delivers real results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#08080c]">{children}</body>
    </html>
  );
}
