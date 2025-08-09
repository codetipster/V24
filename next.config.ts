import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Allow deployment even if ESLint finds issues. We'll fix them iteratively.
    ignoreDuringBuilds: true,
  },
  /* other config options */
};

export default nextConfig;
