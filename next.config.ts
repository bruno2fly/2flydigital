import type { NextConfig } from "next";

const PROPOSAL_URL = "https://cursor-proposal-project-uxts49rzf.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // /admin and /reports are served locally — no redirects for those paths
      // /proposal/crm is served locally — no redirect for that path
      // Other /proposal/* paths redirect externally (none currently needed)
      {
        source: "/agreement/:path*",
        destination: `${PROPOSAL_URL}/agreement/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
