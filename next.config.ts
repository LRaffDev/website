import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/**'
        },
        {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '',
            pathname: '/**'
        }
    ]
  }
};

export default nextConfig;
