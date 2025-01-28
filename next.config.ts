import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin/dashboard',
        permanent: true, // Use true for a 308 redirect or false for a 302 redirect
      },
    ];
  },
};

export default nextConfig;
