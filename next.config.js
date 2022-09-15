/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['statics.basalam.com', '192.168.1.101', "images.unsplash.com", "khatooneziba.ir"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })
    return config
  },
}

module.exports = nextConfig
