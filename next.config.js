/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid long static generation hangs
  staticPageGenerationTimeout: 300,
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // output: 'standalone', // Disabled to reduce build size
  // Disable SWC minification during dev for faster startup
  swcMinify: process.env.NODE_ENV === 'production',
  // Reduce webpack analysis for faster builds
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Skip type checking in webpack during development
      config.infrastructureLogging = {
        level: 'error',
      };
    }
    return config;
  },
}

module.exports = nextConfig
