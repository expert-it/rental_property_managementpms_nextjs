/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.resolve.alias["core"] = path.join(__dirname, "core");

    return config;
  },
};

module.exports = nextConfig;
