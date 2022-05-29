/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['statics.basalam.com', 'localhost', "images.unsplash.com"],
  }
}

module.exports = nextConfig
