/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...process.env.NODE_ENV ==="production" && {
    images: {
      loader: "imgix",
      path: "https://liberaliberi.github.io/", // 수정 필요
    },
  },
  
}

module.exports = nextConfig
