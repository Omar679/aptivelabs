import type { NextConfig } from "next";

// Static export: the site is plain HTML/CSS/JS and can be hosted anywhere
// (Vercel, Netlify, cPanel, any static host).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
