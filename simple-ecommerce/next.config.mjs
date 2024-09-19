/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utifs.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
