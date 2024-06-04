/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  distDir: "build",

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
