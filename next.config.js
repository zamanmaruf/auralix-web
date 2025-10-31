/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid long static generation hangs
  staticPageGenerationTimeout: 300,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
}

module.exports = nextConfig
