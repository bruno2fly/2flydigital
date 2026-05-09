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
      // /proposal/crm is served locally — file-system route takes priority over this redirect
      {
        source: "/proposal/:path((?!crm).*)",
        destination: `${PROPOSAL_URL}/proposal/:path*`,
        permanent: false,
      },
      {
        source: "/agreement/:path*",
        destination: `${PROPOSAL_URL}/agreement/:path*`,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
