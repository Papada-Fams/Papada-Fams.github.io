/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KEY: process.env.KEY,
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
