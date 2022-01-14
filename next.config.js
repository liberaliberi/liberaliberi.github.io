/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  ...process.env.NODE_ENV ==="production" && {
    images: {
      loader: "imgix",
      path: "https://liberaliberi.github.io/", // 수정 필요
    },
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
