import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { typedRoutes: true },
  i18n: {
    locales: ['en-IN', 'hi-IN', 'ta-IN'],
    defaultLocale: 'en-IN',
  },
};

export default nextConfig;
