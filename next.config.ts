import type { NextConfig } from "next";

const PROPOSAL_URL = "https://cursor-proposal-project-uxts49rzf.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: `${PROPOSAL_URL}/admin`,
        permanent: false,
      },
      {
        source: "/admin/:path*",
        destination: `${PROPOSAL_URL}/admin/:path*`,
        permanent: false,
      },
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
