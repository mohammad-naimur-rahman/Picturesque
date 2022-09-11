/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    )
    return config
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://picturesque-strapi.herokuapp.com/admin',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
