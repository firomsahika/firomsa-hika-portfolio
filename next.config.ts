import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This prevents the build from crashing when ESLint is missing
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;