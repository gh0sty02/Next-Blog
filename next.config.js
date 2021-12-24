/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: false,
};
