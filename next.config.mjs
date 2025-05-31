const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  basePath: isProd ? "/four_season_barbershop" : "",
  assetPrefix: isProd ? "/four_season_barbershop/" : "",
  images: {
    unoptimized: true, // Required for static export
  },
  // Support importing .svg files as React components
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;

