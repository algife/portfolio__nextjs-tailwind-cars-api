/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "serpapi.com",
        port: "",
        pathname: "/searches/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        port: "",
        pathname: "/getImage/**",
      },
    ],
  },
};

module.exports = nextConfig;
