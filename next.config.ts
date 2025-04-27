import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    //appDir: true, // Habilita o App Router
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@pages': path.resolve(__dirname, 'src/app'), // Alias para a pasta src/app
      };
    }
    return config;
  },
};

export default nextConfig;
