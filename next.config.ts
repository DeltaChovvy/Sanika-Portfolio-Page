import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Disable image optimization for SVGs to prevent blurring
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    // Set quality to 100 for any optimized images
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
