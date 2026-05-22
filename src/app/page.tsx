import type { Metadata } from "next";
import ContractorGrowthPage from "@/components/ContractorGrowthPage";

export const metadata: Metadata = {
  title: "2FLY | Complete Digital Advertising for Contractors",
  description:
    "2FLY helps contractors dominate local markets with Google Ads + Meta Ads management, AI Search visibility, premium website conversion, AI agents, follow-up automation, and lead intelligence.",
};

export default function Home() {
  return <ContractorGrowthPage />;
}
