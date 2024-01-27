/** @type {import('next').NextConfig} */
const myConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
};
export default myConfig;
