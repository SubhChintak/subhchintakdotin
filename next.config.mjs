/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    domains: ['example.com', 'images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
