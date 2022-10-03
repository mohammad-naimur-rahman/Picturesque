/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://picturesque-strapi.herokuapp.com/admin',
        permanent: false
      },
      {
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  experimental: { images: { allowFutureImage: true }, esmExternals: true }
}

module.exports = nextConfig
