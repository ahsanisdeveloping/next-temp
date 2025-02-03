import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ✅ Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true,  // ✅ Ignore TypeScript errors during build
  },
  reactStrictMode: true, // Optional: Enables React strict mode
  swcMinify: true, // Optional: Enables SWC compiler for faster builds
};

export default nextConfig;
