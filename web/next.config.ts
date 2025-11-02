import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/weddings",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
