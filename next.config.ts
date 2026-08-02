import type { NextConfig } from "next";

/**
 * Static export configuration for Cloudflare Pages.
 * `next build` emits a fully static site into `out/`.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Cloudflare Pages serves static assets directly; the Next.js image
    // optimizer is not available in a static export.
    unoptimized: true,
  },
};

export default nextConfig;
