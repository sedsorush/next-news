import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.guim.co.uk",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.guim.co.uk",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
