/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGitHubPagesBuild ? "/studiogrowth360" : "";

const nextConfig = {
  reactStrictMode: false,
  ...(isGitHubPagesBuild && {
    output: "export",
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
    distDir: ".next-github-pages",
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
