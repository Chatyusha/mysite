/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === "production" ? "/mysite" : ""
  // another configuration
};

