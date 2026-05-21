import type { Metadata } from "next";
import ContractorGrowthPage from "@/components/ContractorGrowthPage";

export const metadata: Metadata = {
  title: "2FLY | AI Growth System for Contractors",
  description:
    "2FLY helps contractors get more leads and close more of them with Google Ads, SEO, AI Search visibility, premium website conversion, AI agents, follow-up automation, and lead intelligence.",
};

export default function Home() {
  return <ContractorGrowthPage />;
}
