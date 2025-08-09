import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  output: 'standalone',
  
  // Images configuration for production
  images: {
    domains: ['localhost'],
    unoptimized: true, // For static export if needed
  },
  
  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  
  // TypeScript configuration
  typescript: {
    // Ignore build errors for deployment (not recommended for production)
    // Remove this line after fixing all TypeScript errors
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    // Ignore during builds for deployment (will fix later)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
