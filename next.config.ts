import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Allow SVGs and configure for large images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    // Disable optimization for SVGs since they contain embedded images
    unoptimized: false,
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
