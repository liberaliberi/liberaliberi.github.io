/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  images: {
    formats: ['image/avif', 'image/webp']
  },
  ...process.env.NODE_ENV ==="production" && {
    images: {
      loader: "imgix",
      path: process.env.NEXT_PUBLIC_DOMAIN,
    },
    assetPrefix: process.env.NEXT_PUBLIC_DOMAIN
  },
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
    }
  },
}

module.exports = nextConfig
