/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://picturesque-strapi.herokuapp.com/admin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
