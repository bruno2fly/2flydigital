import type { Metadata } from "next";
import InstantPreviewPage from "@/components/InstantPreviewPage";

export const metadata: Metadata = {
  title: "Instant Preview | See Your Landing Page Before You Pay | 2FLY",
  description:
    "Get a custom landing page built for your business. Review the finished, password-protected preview before you pay anything.",
};

export default function Page() {
  return <InstantPreviewPage />;
}
