/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      JWT_KEY: process.env.JWT_KEY,
    },
  };
  
  export default nextConfig;
  