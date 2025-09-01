/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lookaside.fbsbx.com',
        pathname: '/elementpath/**',
      },
    ],
  },
};

export default nextConfig;