/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.site.com"],
    remotePatterns: [
      {
        hostname: "images.site.com",
      },
    ],
  },
};

export default nextConfig;
