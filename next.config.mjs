const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/four_season_barbershop" : "",
  assetPrefix: isProd ? "/four_season_barbershop/" : "",
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
