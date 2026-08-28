export const instantPreviewConfig = {
  launchPrice: 100,
  currency: "USD",
  turnaroundHours: 48,
  defaultExpiryHours: 72,
  paymentLink: process.env.NEXT_PUBLIC_INSTANT_PREVIEW_PAYMENT_LINK ?? "#",
} as const;

export function formatLaunchPrice() {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: instantPreviewConfig.currency,
    maximumFractionDigits: 0,
  }).format(instantPreviewConfig.launchPrice);
}
