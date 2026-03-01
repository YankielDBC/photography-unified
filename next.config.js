/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/booking/:path*',
        destination: 'https://photo-booking-flax.vercel.app/:path*'
      },
      {
        source: '/admin/:path*',
        destination: 'https://angel-photographer.vercel.app/admin/:path*'
      },
      {
        source: '/:path*',
        destination: '/index.html'
      }
    ];
  }
};

module.exports = nextConfig;
