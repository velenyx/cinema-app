/** @type {import("next").NextConfig} */
const nextConfig = {
  env: {
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    APP_URL: process.env.REACT_APP_URL
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: 'http://localhost:4200/api/:path*',
        source: '/api/:path*'
      },
      {
        destination: 'http://localhost:4200/uploads/:path*',
        source: '/uploads/:path*'
      }
    ];
  }
};

module.exports = nextConfig;
