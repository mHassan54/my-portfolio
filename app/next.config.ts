import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/',
        permanent: true, // or false
      },
    ];
  },
};

export default nextConfig;
