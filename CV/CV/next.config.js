/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Resume',
  assetPrefix: '/Resume',
  images: {
    unoptimized: true,
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig