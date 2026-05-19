import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: isProd ? "/" : "",
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
