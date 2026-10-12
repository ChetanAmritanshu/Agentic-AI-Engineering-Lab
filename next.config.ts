import type { NextConfig } from "next";

const isPages = process.env.GITHUB_PAGES === "true";
const repo = "Agentic-AI-Engineering-Lab";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: { root: process.cwd() },
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : undefined,
};

export default nextConfig;
