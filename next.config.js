/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      // {
      //   protocol: "http",
      //   hostname: "127.0.0.1",
      //   port: "1337",
      // },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
