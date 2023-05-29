/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: "",
    domains: ['statics.basalam.com', 'localhost', "images.unsplash.com", "khatooneziba.ir"],
  },
  experimental: {
    images: {
        unoptimized: true,
        loader: 'akamai'
    }
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
