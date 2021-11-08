/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "",
  assetPrefix: ".",
};

const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

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
  ],
  nextConfig
);
