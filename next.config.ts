import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.dribbble.com',
            port: '',
            pathname: '/**',
            search: '',
          },
        ],
      },
    
};

export default nextConfig;
