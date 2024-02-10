/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: '',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
