/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['statics.basalam.com', '192.168.1.100', "images.unsplash.com"],
  },
}

module.exports = nextConfig
