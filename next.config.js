/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "",
  assetPrefix: ".",
};

const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const { createSecureHeaders } = require("next-secure-headers");

const withSecurityHeaders = {
  async headers() {
    return [{ source: "/:path*", headers: createSecureHeaders() }];
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["webp"],
        optimizeImages: true,
        optimizeImagesInDev: true,
      },
    ],
    withSecurityHeaders,
  ],
  nextConfig
);
