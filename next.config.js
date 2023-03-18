/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["fazzpayy.vercel.app", "fazzpay.up.railway.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fazzpay.up.railway.app",
        port: "",
        pathname: "/images/",
      },
      {
        protocol: "https",
        hostname: "fazzpayy.vercel.app",
        port: "",
        pathname: "/images/",
      },
    ],
  },
};

module.exports = nextConfig;
